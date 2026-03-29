const MLB_API = "https://statsapi.mlb.com/api/v1";
const JUDGE_ID = 592450;
const YANKEES_ID = 147;

export async function getJudgeStats(season) {
  const year = season || new Date().getFullYear();
  const res = await fetch(
    `${MLB_API}/people/${JUDGE_ID}/stats?stats=statsSingleSeason&season=${year}&group=hitting`,
    { next: { revalidate: 300 } }
  );
  const data = await res.json();
  const splits = data?.stats?.[0]?.splits;
  if (splits && splits.length > 0) {
    return { stats: splits[0].stat, season: year };
  }
  // Fallback to prior season
  if (!season) {
    return getJudgeStats(year - 1);
  }
  return null;
}

export async function getJudgeCareerStats() {
  const res = await fetch(
    `${MLB_API}/people/${JUDGE_ID}/stats?stats=career&group=hitting`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  const splits = data?.stats?.[0]?.splits;
  if (splits && splits.length > 0) {
    return splits[0].stat;
  }
  return null;
}

export async function getYankeesSchedule(season) {
  const year = season || new Date().getFullYear();
  const res = await fetch(
    `${MLB_API}/schedule?sportId=1&teamId=${YANKEES_ID}&season=${year}&hydrate=probablePitcher,team`,
    { next: { revalidate: 300 } }
  );
  const data = await res.json();
  return data?.dates || [];
}

export async function getNextGame() {
  const today = new Date().toISOString().split("T")[0];
  const endDate = new Date(Date.now() + 14 * 86400000)
    .toISOString()
    .split("T")[0];
  const res = await fetch(
    `${MLB_API}/schedule?sportId=1&teamId=${YANKEES_ID}&startDate=${today}&endDate=${endDate}&hydrate=probablePitcher,team`,
    { next: { revalidate: 300 } }
  );
  const data = await res.json();
  const dates = data?.dates || [];
  for (const date of dates) {
    for (const game of date.games) {
      if (
        game.status.abstractGameState === "Preview" ||
        game.status.abstractGameState === "Live"
      ) {
        return game;
      }
    }
  }
  return null;
}

export { JUDGE_ID, YANKEES_ID, MLB_API };
