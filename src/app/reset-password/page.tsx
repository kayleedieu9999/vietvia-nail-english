import type { Metadata } from "next";
import ResetPasswordForm from "@/components/ResetPasswordForm";

export const metadata: Metadata = {
  title: "Đặt lại mật khẩu — VietVia",
  description: "Đặt lại mật khẩu cho tài khoản VietVia của bạn.",
  robots: { index: false, follow: false },
};

/**
 * Landing page for the password-reset email.
 *
 * The VietVia app sends this URL as `redirectTo` on `resetPasswordForEmail`.
 * Supabase appends the recovery credentials to it, so unlike /email-confirmed
 * this page has real work to do — see `ResetPasswordForm`, which is a client
 * component because the credentials only exist in the browser URL.
 */
export default function ResetPasswordPage() {
  return (
    <div className="min-h-dvh px-5 pb-16 pt-12">
      <div className="mx-auto w-full max-w-sm">
        <h1 className="text-2xl font-extrabold text-slate-900">Đặt lại mật khẩu</h1>
        <p className="mt-2 text-base text-slate-600">
          Nhập mật khẩu mới cho tài khoản VietVia của bạn.
        </p>
        <ResetPasswordForm />
      </div>
    </div>
  );
}
