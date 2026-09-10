import { APP_STORE_URL } from "@/config/app-store";

type AppStoreButtonVariant = "badge" | "pill" | "text";

interface AppStoreButtonProps {
  variant?: AppStoreButtonVariant;
  className?: string;
}

function AppleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16.365 1.43c0 1.14-.616 2.201-1.502 2.87-.888.669-2.148 1.093-3.25 1.006-.144-1.078.457-2.223 1.29-2.898C13.79.71 15.144.038 16.243 0c.09.478.122.955.122 1.43zM20.94 17.19c-.51 1.163-.753 1.683-1.407 2.72-.913 1.446-2.2 3.246-3.79 3.263-1.412.015-1.776-.92-3.693-.913-1.917.007-2.317.928-3.729.913-1.59-.017-2.812-1.634-3.725-3.08-2.55-4.01-2.82-8.72-1.245-11.223.998-1.585 2.575-2.512 4.057-2.512 1.507 0 2.457.926 3.703.926 1.212 0 1.955-.926 3.702-.926 1.322 0 2.723.72 3.72 1.963-3.27 1.79-2.74 6.442.407 7.87z" />
    </svg>
  );
}

/**
 * Links to the public App Store listing (config in @/config/app-store).
 * Plain <a target="_blank"> on purpose — this is the one link shape that
 * survives iOS Safari, the Facebook in-app browser, and every other mobile
 * webview without needing a JS click handler.
 */
export default function AppStoreButton({ variant = "badge", className = "" }: AppStoreButtonProps) {
  const commonProps = {
    href: APP_STORE_URL,
    target: "_blank",
    rel: "noopener noreferrer",
  };

  if (variant === "pill") {
    return (
      <a
        {...commonProps}
        className={`inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-bold text-rose-500 shadow-sm ring-1 ring-rose-200 transition active:scale-[0.97] ${className}`}
      >
        <span aria-hidden="true">📱</span>
        <span>Ứng dụng VietVia</span>
      </a>
    );
  }

  if (variant === "text") {
    return (
      <a
        {...commonProps}
        className={`inline-flex items-center gap-1.5 text-sm font-bold text-rose-600 transition active:opacity-70 ${className}`}
      >
        <AppleMark className="h-4 w-4" />
        <span>Tải trên App Store</span>
      </a>
    );
  }

  return (
    <a
      {...commonProps}
      aria-label="Tải VietVia trên App Store"
      className={`inline-flex items-center justify-center gap-3 rounded-2xl bg-black px-6 py-3.5 text-white shadow-lg shadow-black/20 transition active:scale-[0.97] active:bg-black/90 ${className}`}
    >
      <AppleMark className="h-8 w-8 shrink-0" />
      <span className="flex flex-col items-start leading-tight">
        <span className="text-xs font-medium text-white/80">Tải VietVia trên</span>
        <span className="text-xl font-bold">App Store</span>
      </span>
    </a>
  );
}
