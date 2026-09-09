"use client";

import { useState } from "react";
import Image from "next/image";

interface SalonSceneProps {
  badgeEmoji: string;
  badgeLabel?: string;
  /**
   * Optional slot for a reusable cartoon-style scene image (e.g.
   * "/images/food-talk-1.webp"). When set, it replaces the hand-drawn
   * placeholder below. Falls back to the placeholder automatically if the
   * file is missing or fails to load, so this can be filled in later
   * without touching any other code.
   */
  imageUrl?: string;
}

const DEFAULT_ALT = "Chloe làm nails và trò chuyện thân thiện với khách trong tiệm nails hiện đại";

/**
 * Illustrated fallback scene, reused across every lesson with only the
 * badge emoji changing, so the visual style stays consistent across the
 * whole topic. No sentence text is ever drawn into the scene itself.
 * Exported so other slots (e.g. the homepage hero) can reuse the same
 * fallback instead of inventing a second placeholder style.
 */
export function IllustratedSalonScene() {
  return (
    <svg viewBox="0 0 320 220" className="block w-full" role="img" aria-label={DEFAULT_ALT}>
      <defs>
        <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff7ed" />
          <stop offset="100%" stopColor="#ffe4e6" />
        </linearGradient>
        <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fecdd3" />
          <stop offset="100%" stopColor="#fda4af" />
        </linearGradient>
        <linearGradient id="tableGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff1f2" />
          <stop offset="100%" stopColor="#fecdd3" />
        </linearGradient>
        <radialGradient id="skinChloe" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#ffdcb8" />
          <stop offset="100%" stopColor="#f0b988" />
        </radialGradient>
        <radialGradient id="skinCustomer" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#ffe8cf" />
          <stop offset="100%" stopColor="#f6cda3" />
        </radialGradient>
        <linearGradient id="smockChloe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#e11d48" />
        </linearGradient>
        <linearGradient id="topCustomer" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="hairChloe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a3222" />
          <stop offset="100%" stopColor="#2d1b12" />
        </linearGradient>
        <linearGradient id="hairCustomer" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b8834a" />
          <stop offset="100%" stopColor="#8f5f2e" />
        </linearGradient>
      </defs>

      {/* wall + floor */}
      <rect x="0" y="0" width="320" height="220" fill="url(#wallGrad)" />
      <rect x="0" y="184" width="320" height="36" fill="url(#floorGrad)" opacity="0.55" />

      {/* mirror */}
      <ellipse cx="58" cy="56" rx="30" ry="40" fill="#ffffff" opacity="0.45" />
      <ellipse cx="58" cy="56" rx="30" ry="40" fill="none" stroke="#e8c496" strokeWidth="3" />
      <path d="M46 26 L58 70" stroke="#ffffff" strokeWidth="6" opacity="0.35" strokeLinecap="round" />

      {/* pendant lamp */}
      <line x1="220" y1="0" x2="220" y2="24" stroke="#d3a465" strokeWidth="2" />
      <path d="M208 24 L232 24 L224 40 L216 40 Z" fill="#f6cb8c" />
      <circle cx="220" cy="43" r="3.5" fill="#fff3d6" />

      {/* small plants for warmth */}
      <path d="M18 200 L30 200 L27 184 L21 184 Z" fill="#fda4af" opacity="0.7" />
      <ellipse cx="24" cy="176" rx="10" ry="14" fill="#4ade80" opacity="0.85" />
      <ellipse cx="15" cy="182" rx="7" ry="10" fill="#22c55e" opacity="0.8" />
      <ellipse cx="33" cy="182" rx="7" ry="10" fill="#16a34a" opacity="0.8" />

      <path d="M290 202 L302 202 L299 186 L293 186 Z" fill="#fda4af" opacity="0.7" />
      <ellipse cx="296" cy="178" rx="9" ry="13" fill="#4ade80" opacity="0.85" />

      {/* sparkle accents */}
      <circle cx="270" cy="30" r="2.5" fill="#ffffff" opacity="0.8" />
      <circle cx="282" cy="44" r="1.6" fill="#ffffff" opacity="0.7" />
      <circle cx="96" cy="20" r="1.8" fill="#ffffff" opacity="0.7" />

      {/* ===== Chloe (nail technician) ===== */}
      <g>
        {/* bun */}
        <circle cx="99" cy="60" r="11" fill="url(#hairChloe)" />
        <circle cx="99" cy="60" r="3" fill="#f472b6" />
        {/* torso / smock */}
        <path
          d="M62 182 C60 148 78 122 100 122 C122 122 140 148 138 182 Z"
          fill="url(#smockChloe)"
        />
        <path d="M88 128 Q100 138 112 128" stroke="#fecdd3" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* head */}
        <circle cx="100" cy="96" r="30" fill="url(#skinChloe)" />
        {/* hair front */}
        <path
          d="M70 92 C68 68 82 50 100 50 C118 50 132 68 130 92 C126 78 118 70 100 70 C82 70 74 78 70 92 Z"
          fill="url(#hairChloe)"
        />
        <path d="M70 90 Q64 100 70 112" stroke="url(#hairChloe)" strokeWidth="7" fill="none" strokeLinecap="round" />
        <path d="M130 90 Q136 100 130 112" stroke="url(#hairChloe)" strokeWidth="7" fill="none" strokeLinecap="round" />
        {/* face */}
        <ellipse cx="88" cy="98" rx="6" ry="7" fill="#fff" opacity="0.001" />
        <path d="M83 96 q3 -3 6 0" stroke="#3f2a1d" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <path d="M111 96 q3 -3 6 0" stroke="#3f2a1d" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <ellipse cx="83" cy="108" rx="5" ry="3" fill="#fda4af" opacity="0.45" />
        <ellipse cx="117" cy="108" rx="5" ry="3" fill="#fda4af" opacity="0.45" />
        <path d="M89 108 q11 10 22 0" stroke="#9a3412" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      </g>

      {/* ===== Customer ===== */}
      <g>
        {/* torso / top */}
        <path
          d="M182 182 C180 148 198 122 220 122 C242 122 260 148 258 182 Z"
          fill="url(#topCustomer)"
        />
        <path d="M208 128 Q220 136 232 128" stroke="#fef3c7" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* hair back volume */}
        <ellipse cx="196" cy="94" rx="14" ry="26" fill="url(#hairCustomer)" />
        <ellipse cx="244" cy="94" rx="14" ry="26" fill="url(#hairCustomer)" />
        {/* head */}
        <circle cx="220" cy="96" r="30" fill="url(#skinCustomer)" />
        {/* hair front */}
        <path
          d="M190 90 C188 64 202 48 220 48 C238 48 252 64 250 90 C246 74 236 66 220 66 C204 66 194 74 190 90 Z"
          fill="url(#hairCustomer)"
        />
        {/* face */}
        <path d="M203 96 q3 -3 6 0" stroke="#3f2a1d" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <path d="M231 96 q3 -3 6 0" stroke="#3f2a1d" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <ellipse cx="203" cy="108" rx="5" ry="3" fill="#fb923c" opacity="0.4" />
        <ellipse cx="237" cy="108" rx="5" ry="3" fill="#fb923c" opacity="0.4" />
        <path d="M209 108 q11 9 22 0" stroke="#9a3412" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      </g>

      {/* ===== manicure table ===== */}
      <rect x="14" y="170" width="292" height="34" rx="14" fill="url(#tableGrad)" />
      <rect x="14" y="170" width="292" height="6" rx="3" fill="#ffffff" opacity="0.5" />

      {/* items on the table */}
      <rect x="32" y="150" width="12" height="22" rx="4" fill="#fb7185" />
      <rect x="34" y="146" width="8" height="6" rx="2" fill="#9f1239" />
      <rect x="50" y="154" width="12" height="18" rx="4" fill="#fbbf24" />
      <rect x="52" y="150" width="8" height="6" rx="2" fill="#b45309" />
      <rect x="68" y="152" width="12" height="20" rx="4" fill="#34d399" />
      <rect x="70" y="148" width="8" height="6" rx="2" fill="#047857" />

      <rect x="256" y="152" width="30" height="18" rx="6" fill="#ede9fe" />
      <ellipse cx="271" cy="150" rx="20" ry="8" fill="#c4b5fd" opacity="0.5" />
      <rect x="264" y="157" width="14" height="7" rx="2" fill="#a78bfa" opacity="0.8" />

      <rect x="228" y="160" width="20" height="12" rx="4" fill="#ffffff" />
      <path d="M228 166 h20" stroke="#fecdd3" strokeWidth="1.5" />

      {/* hands meeting for the manicure, drawn last so they sit on top of the table */}
      <path d="M140 182 Q158 168 176 180" stroke="url(#skinChloe)" strokeWidth="14" fill="none" strokeLinecap="round" />
      <path d="M176 180 Q184 176 192 180" stroke="url(#skinCustomer)" strokeWidth="13" fill="none" strokeLinecap="round" />
      <rect x="158" y="170" width="20" height="4" rx="2" fill="#f472b6" transform="rotate(-18 168 172)" />
    </svg>
  );
}

export default function SalonScene({ badgeEmoji, badgeLabel, imageUrl }: SalonSceneProps) {
  // If the file isn't there yet (or fails to load for any reason), fall
  // back to the illustration instead of showing a broken image.
  const [photoFailed, setPhotoFailed] = useState(false);
  const showPhoto = Boolean(imageUrl) && !photoFailed;

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-rose-100">
      {showPhoto ? (
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={imageUrl!}
            alt={badgeLabel ?? DEFAULT_ALT}
            fill
            className="object-cover"
            sizes="(max-width: 480px) 100vw, 420px"
            onError={() => setPhotoFailed(true)}
          />
        </div>
      ) : (
        <IllustratedSalonScene />
      )}

      <div className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-xl shadow-sm ring-1 ring-rose-100 backdrop-blur-sm">
        <span aria-hidden>{badgeEmoji}</span>
      </div>
    </div>
  );
}
