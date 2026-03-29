import { NextResponse } from "next/server";
import { getJudgeStats } from "@/lib/mlb";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const season = searchParams.get("season");

  try {
    const data = await getJudgeStats(season ? Number(season) : undefined);

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("Stats fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
