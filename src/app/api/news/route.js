import { NextResponse } from "next/server";

const FALLBACK_ARTICLES = [
  {
    title: "Aaron Judge Continues Historic Season",
    source: { name: "ESPN" },
    url: "#",
    urlToImage: null,
    publishedAt: new Date().toISOString(),
    description:
      "The Yankees captain is on pace for another remarkable year.",
  },
  {
    title: "Judge Launches 2 Home Runs in Yankees Victory",
    source: { name: "MLB.com" },
    url: "#",
    urlToImage: null,
    publishedAt: new Date(Date.now() - 86400000).toISOString(),
    description:
      "Aaron Judge powered the Yankees to a win with two home runs.",
  },
  {
    title: "Yankees Captain Aaron Judge Leads by Example",
    source: { name: "NY Post" },
    url: "#",
    urlToImage: null,
    publishedAt: new Date(Date.now() - 172800000).toISOString(),
    description:
      "Since being named captain, Judge has elevated his leadership.",
  },
  {
    title: "Aaron Judge's Impact Beyond the Box Score",
    source: { name: "The Athletic" },
    url: "#",
    urlToImage: null,
    publishedAt: new Date(Date.now() - 259200000).toISOString(),
    description:
      "How Judge's presence transforms the Yankees lineup.",
  },
  {
    title: "Judge Eyeing Another MVP-Caliber Season",
    source: { name: "CBS Sports" },
    url: "#",
    urlToImage: null,
    publishedAt: new Date(Date.now() - 345600000).toISOString(),
    description:
      "Can Aaron Judge repeat his 2022 MVP performance?",
  },
  {
    title: "The Making of a Captain: Aaron Judge's Journey",
    source: { name: "YES Network" },
    url: "#",
    urlToImage: null,
    publishedAt: new Date(Date.now() - 432000000).toISOString(),
    description:
      "A look at how Aaron Judge became the 16th captain in Yankees history.",
  },
];

export async function GET() {
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { articles: FALLBACK_ARTICLES },
      {
        headers: {
          "Cache-Control": "public, s-maxage=900, stale-while-revalidate=1800",
        },
      }
    );
  }

  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q="aaron judge"&sortBy=publishedAt&pageSize=12&language=en`,
      {
        headers: { "X-Api-Key": apiKey },
        next: { revalidate: 900 },
      }
    );

    if (!res.ok) {
      throw new Error(`NewsAPI responded with ${res.status}`);
    }

    const data = await res.json();

    return NextResponse.json(
      { articles: data.articles || [] },
      {
        headers: {
          "Cache-Control": "public, s-maxage=900, stale-while-revalidate=1800",
        },
      }
    );
  } catch (error) {
    console.error("News fetch error:", error);
    return NextResponse.json(
      { articles: FALLBACK_ARTICLES },
      {
        headers: {
          "Cache-Control": "public, s-maxage=900, stale-while-revalidate=1800",
        },
      }
    );
  }
}
