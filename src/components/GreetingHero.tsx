import Image from "next/image";

/**
 * Top-of-dashboard greeting + tagline, with a desktop-only decorative banner
 * (`/images/hero-manicure.png`). Purely static copy (no personalization):
 * the site has no login/profile system, so there's no real name to greet
 * the visitor by.
 */
export default function GreetingHero() {
  return (
    <section className="lg:flex lg:items-center lg:justify-between lg:gap-8">
      <div className="min-w-0">
        <h1 className="text-[28px] font-extrabold leading-tight text-slate-900 lg:text-[44px]">
          Chào bạn 👋
        </h1>
        <p className="mt-1 text-base font-semibold text-slate-700 lg:text-xl">
          Hôm nay mình luyện 10 phút nhé?
        </p>
        <p className="mt-2 hidden text-sm text-slate-500 lg:block">
          Tiếng Anh tốt hơn — Công việc nhẹ nhàng hơn — Cuộc sống tự tin hơn
        </p>
      </div>

      <div className="relative mt-5 hidden h-40 w-full max-w-md shrink-0 overflow-hidden rounded-3xl lg:mt-0 lg:block">
        <Image
          src="/images/hero-manicure.png"
          alt="Bàn tay được làm nail gel màu hồng phấn tinh tế, phong cách nail lounge cao cấp"
          fill
          className="object-cover"
          sizes="420px"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-rose-900/10 via-transparent to-transparent" />
        <p
          className="absolute right-4 top-3 text-right text-lg leading-tight text-rose-600 drop-shadow-sm"
          style={{ fontFamily: "var(--font-script)" }}
        >
          Better English
          <br />
          Brighter Opportunities
        </p>
      </div>
    </section>
  );
}
