import Link from "next/link";
import Image from "next/image";

/** Wide closing banner. */
export default function PromoBanner() {
  return (
    <section className="card-surface overflow-hidden !p-0 lg:flex lg:items-stretch">
      <div className="relative h-40 w-full lg:h-auto lg:w-64 lg:shrink-0">
        <Image
          src="/images/salon-interior.png"
          alt="Không gian tiệm nails sang trọng, ấm cúng với ghế hồng và điểm nhấn vàng"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 256px"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-4 px-6 py-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <div>
          <p className="text-2xl font-extrabold leading-tight text-slate-900">Learn English</p>
          <p className="text-2xl font-extrabold leading-tight text-rose-500">Build a Brighter Future</p>
          <p className="mt-1 flex items-center justify-center gap-1.5 text-sm font-bold text-slate-500 lg:justify-start">
            <span aria-hidden>💅</span> VietVia
          </p>
        </div>
        <p className="max-w-xs text-sm italic leading-relaxed text-slate-600">
          &quot;Bạn không chỉ học tiếng Anh, bạn đang mở ra nhiều cơ hội hơn cho chính mình.&quot;{" "}
          <span aria-hidden>🤎</span>
        </p>
        <Link href="/daily" className="btn-secondary w-full shrink-0 lg:w-fit">
          Bắt đầu hành trình <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
