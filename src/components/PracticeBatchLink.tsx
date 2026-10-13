import Link from "next/link";

interface PracticeBatchLinkProps {
  href: string;
  label: string;
}

/** Entry to a "Luyện tập" exercise set built from the newest content batch. */
export default function PracticeBatchLink({ href, label }: PracticeBatchLinkProps) {
  return (
    <Link
      href={href}
      className="mt-4 inline-flex items-center gap-2 rounded-full bg-rose-500 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition active:scale-95"
    >
      <span aria-hidden>✍️</span> {label}
    </Link>
  );
}
