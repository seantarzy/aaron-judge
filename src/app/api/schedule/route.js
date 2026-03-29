import { NextResponse } from "next/server";
import { getYankeesSchedule } from "@/lib/mlb";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const season = searchParams.get("season");

  try {
    const dates = await getYankeesSchedule(season ? Number(season) : undefined);

    return NextResponse.json(
      { dates },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch (error) {
    console.error("Schedule fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch schedule" },
      { status: 500 }
    );
  }
}
