"use client";

import { useState } from "react";
import Image from "next/image";
import { IllustratedSalonScene } from "@/components/SalonScene";

const HERO_IMAGE_URL = "/images/home-hero.webp";
const HERO_ALT =
  "Thợ nails người Việt và khách hàng người Mỹ trò chuyện thân thiện trong tiệm nails hiện đại";

/**
 * The homepage cover visual — the first thing a visitor sees. Slot-based
 * like the lesson illustrations: renders /images/home-hero.webp once it
 * exists, and falls back to the hand-drawn scene until then so the
 * homepage never shows a broken image.
 */
export default function HomeHero() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <div className="relative mx-auto mt-6 w-full max-w-md">
      {/* soft pink/peach glow behind the card, so it reads as part of the
          page's own background gradient rather than a boxed-in photo */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-rose-200 via-orange-100 to-rose-100 opacity-70 blur-2xl"
      />

      <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-rose-300/40">
        {photoFailed ? (
          <IllustratedSalonScene />
        ) : (
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={HERO_IMAGE_URL}
              alt={HERO_ALT}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 480px) 100vw, 448px"
              onError={() => setPhotoFailed(true)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
