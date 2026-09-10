import { NextResponse } from "next/server";
import { buildDailyRound } from "@/lib/daily-round";

/** Returns a fresh random 5-question daily round. Used by the client for "Thử lại" so it never has to import the full lesson dataset itself. */
export async function GET() {
  const round = buildDailyRound();
  return NextResponse.json(round);
}
