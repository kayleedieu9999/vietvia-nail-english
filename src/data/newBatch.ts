/**
 * Freshness metadata for the October 2026 content batch (Airport / Pharmacy /
 * Nails expansion). Content tagged with `newUntil` shows a "NEW" badge until
 * that date, then the badge disappears on its own — nothing here is
 * hardcoded into the UI. Future batches: add a new constant, tag the content.
 */
export const BATCH_2026_10 = {
  publishedAt: "2026-10-13",
  newUntil: "2026-11-12",
} as const;
