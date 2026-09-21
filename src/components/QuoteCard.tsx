/** Static motivational quote card — no data dependency. */
export default function QuoteCard() {
  return (
    <div className="card-surface flex h-full flex-col justify-between bg-orange-50">
      <span className="text-2xl text-rose-300">&ldquo;</span>
      <p className="text-lg italic leading-snug text-slate-800">
        Những bước nhỏ mỗi ngày tạo nên sự khác biệt lớn.
      </p>
      <p className="mt-4 flex items-center gap-1.5 text-sm font-bold text-rose-500">
        <span aria-hidden>🤎</span> VietVia
      </p>
    </div>
  );
}
