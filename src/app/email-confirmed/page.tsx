import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email đã được xác nhận — VietVia",
  description: "Tài khoản VietVia của bạn đã được xác nhận.",
  robots: { index: false, follow: false },
};

/**
 * Landing page for the signup confirmation email.
 *
 * The VietVia app sends this URL as `emailRedirectTo` on `signUp`. Supabase
 * verifies the address at its own /auth/v1/verify endpoint and THEN redirects
 * here, so by the time the browser arrives the account is already confirmed —
 * this page reads no token, holds no session and calls no API. Previously the
 * redirect went to the site root, where a learner who had just confirmed saw
 * ordinary marketing content and no confirmation at all.
 *
 * Deliberately a server component: nothing here needs to run on the client.
 */
export default function EmailConfirmedPage() {
  return (
    <div className="min-h-dvh px-5 pb-16 pt-12">
      <div className="mx-auto w-full max-w-sm text-center">
        <div
          aria-hidden
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-600"
        >
          ✓
        </div>

        <h1 className="mt-5 text-2xl font-extrabold text-slate-900">
          Email đã được xác nhận thành công
        </h1>

        <p className="mt-3 text-base text-slate-700">
          Bạn có thể quay lại app VietVia để đăng nhập.
        </p>

        {/*
          Opens the installed app via its production scheme. A launch link only:
          it carries no token and needs no callback route in the app.
        */}
        <a
          href="vietvia://"
          className="mt-7 block w-full rounded-xl bg-rose-500 px-5 py-4 text-center text-base font-bold text-white transition hover:bg-rose-600"
        >
          Quay lại VietVia
        </a>

        <p className="mt-4 text-sm text-slate-500">
          Nếu bạn đã mở app, hãy đăng nhập bằng email và mật khẩu vừa tạo.
        </p>
      </div>
    </div>
  );
}
