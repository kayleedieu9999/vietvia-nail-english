"use client";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useRef, useState } from "react";

/**
 * Password recovery form for /reset-password.
 *
 * HOW SUPABASE DELIVERS THE RECOVERY STATE. Two formats exist depending on the
 * project's configured flow, and both are handled rather than guessed at:
 *
 *   - PKCE     → `?code=...` in the query string, exchanged for a session.
 *   - implicit → `#access_token=...&refresh_token=...&type=recovery` in the
 *                hash fragment, which supabase-js consumes on load when
 *                `detectSessionInUrl` is on.
 *
 * Once either yields a session, the new password is set with
 * `supabase.auth.updateUser({ password })` — the correct call for supabase-js
 * v2, which is what this project installs.
 *
 * PRIVACY. No password, access token, refresh token, recovery token or session
 * value is ever logged, rendered, or sent anywhere except Supabase itself. The
 * credentials are stripped from the address bar as soon as they are consumed,
 * and `persistSession: false` keeps them out of browser storage.
 */

/** Matches the app's own rule (`password.length < 6`). */
const MIN_PASSWORD_LENGTH = 6;

type Status = "checking" | "ready" | "invalid" | "done";

export default function ResetPasswordForm() {
  const [status, setStatus] = useState<Status>("checking");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  /** Synchronous double-submit guard — state alone leaves a race open. */
  const inFlight = useRef(false);
  const clientRef = useRef<SupabaseClient | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function establishRecoverySession() {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      // Fail CLOSED when unconfigured: showing the form would let someone type
      // a new password that could never be saved.
      if (!url || !anonKey) {
        if (!cancelled) setStatus("invalid");
        return;
      }

      const supabase = createClient(url, anonKey, {
        auth: {
          detectSessionInUrl: true,
          persistSession: false,
          autoRefreshToken: false,
        },
      });
      clientRef.current = supabase;

      try {
        // PKCE form.
        const code = new URLSearchParams(window.location.search).get("code");
        if (code) await supabase.auth.exchangeCodeForSession(code);

        // Implicit form is consumed by `detectSessionInUrl` during creation;
        // either way the question is the same: is there a session now?
        const { data } = await supabase.auth.getSession();

        // Strip the credentials from the address bar and history.
        window.history.replaceState({}, "", window.location.pathname);

        if (!cancelled) setStatus(data.session ? "ready" : "invalid");
      } catch {
        // Never surface the raw reason — an expired link and a tampered one
        // must read identically.
        if (!cancelled) setStatus("invalid");
      }
    }

    void establishRecoverySession();
    return () => {
      cancelled = true;
    };
  }, []);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (inFlight.current) return;
    setError(null);

    if (!password || !confirm) {
      setError("Vui lòng nhập mật khẩu mới và nhập lại mật khẩu.");
      return;
    }
    if (password.length < MIN_PASSWORD_LENGTH) {
      setError("Mật khẩu cần ít nhất 6 ký tự.");
      return;
    }
    if (password !== confirm) {
      setError("Hai mật khẩu chưa giống nhau.");
      return;
    }

    const supabase = clientRef.current;
    if (!supabase) {
      setError("Không đổi được mật khẩu lúc này. Vui lòng thử lại sau.");
      return;
    }

    inFlight.current = true;
    setSubmitting(true);
    try {
      const { error: updateError } = await supabase.auth.updateUser({ password });
      if (updateError) {
        // Deliberately generic — Supabase messages can carry internal detail.
        setError("Không đổi được mật khẩu lúc này. Vui lòng thử lại sau.");
        return;
      }
      setStatus("done");
      // Drop the recovery session as soon as it is spent.
      await supabase.auth.signOut();
    } catch {
      setError("Không đổi được mật khẩu lúc này. Vui lòng thử lại sau.");
    } finally {
      inFlight.current = false;
      setSubmitting(false);
    }
  }

  if (status === "checking") {
    return (
      <p className="mt-4 text-sm text-slate-600">
        Đang xác nhận link đặt lại mật khẩu...
      </p>
    );
  }

  if (status === "invalid") {
    return (
      <div className="mt-4">
        <p className="text-base text-slate-700">
          Link đặt lại mật khẩu không hợp lệ hoặc đã hết hạn.
        </p>
        <p className="mt-2 text-base text-slate-700">
          Vui lòng quay lại app VietVia và yêu cầu link mới.
        </p>
        <a
          href="vietvia://"
          className="mt-6 block w-full rounded-xl bg-rose-500 px-5 py-4 text-center text-base font-bold text-white transition hover:bg-rose-600"
        >
          Quay lại VietVia
        </a>
      </div>
    );
  }

  if (status === "done") {
    return (
      <div className="mt-4">
        <p className="text-lg font-bold text-emerald-600">
          Mật khẩu đã được đổi thành công.
        </p>
        <p className="mt-2 text-base text-slate-700">
          Bạn có thể quay lại app VietVia và đăng nhập bằng mật khẩu mới.
        </p>
        <a
          href="vietvia://"
          className="mt-6 block w-full rounded-xl bg-rose-500 px-5 py-4 text-center text-base font-bold text-white transition hover:bg-rose-600"
        >
          Quay lại VietVia
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-5">
      <PasswordField
        id="password"
        label="Mật khẩu mới"
        value={password}
        onChange={setPassword}
        visible={showPassword}
        onToggle={() => setShowPassword((v) => !v)}
        disabled={submitting}
      />
      <PasswordField
        id="confirm"
        label="Nhập lại mật khẩu"
        value={confirm}
        onChange={setConfirm}
        visible={showConfirm}
        onToggle={() => setShowConfirm((v) => !v)}
        disabled={submitting}
      />

      {error ? (
        <p role="alert" className="mt-4 text-sm font-semibold text-rose-600">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full rounded-xl bg-rose-500 px-5 py-4 text-base font-bold text-white transition hover:bg-rose-600 disabled:opacity-60"
      >
        {submitting ? "Đang đổi mật khẩu..." : "Đổi mật khẩu"}
      </button>
    </form>
  );
}

function PasswordField({
  id,
  label,
  value,
  onChange,
  visible,
  onToggle,
  disabled,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (next: string) => void;
  visible: boolean;
  onToggle: () => void;
  disabled: boolean;
}) {
  return (
    <div className="mt-4">
      <label htmlFor={id} className="block text-sm font-semibold text-slate-900">
        {label}
      </label>
      <div className="relative mt-2">
        <input
          id={id}
          // Driven by the eye toggle; autocomplete stays put so the browser
          // keychain still offers and saves the new password.
          type={visible ? "text" : "password"}
          autoComplete="new-password"
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          // 16px text stops iOS Safari zooming the page on focus.
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-12 text-base text-slate-900 outline-none focus:border-rose-400"
        />
        <button
          // type="button": toggling visibility must never submit the form.
          type="button"
          onClick={onToggle}
          aria-label={visible ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
          className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-slate-400"
        >
          {visible ? "🙈" : "👁"}
        </button>
      </div>
    </div>
  );
}
