import { getYankeesSchedule } from "@/lib/mlb";
import { formatDate, formatTime, getTicketmasterUrl } from "@/lib/utils";

export const metadata = {
  title: "When Does Judge Play? — Yankees Game Schedule",
  description:
    "Find out when Aaron Judge plays next. Full New York Yankees schedule with game times, opponents, probable pitchers, and ticket links. Is Aaron Judge playing today?",
  keywords: [
    "aaron judge next game",
    "is aaron judge playing today",
    "yankees schedule",
    "yankees game today",
    "aaron judge schedule",
    "when does judge play",
  ],
};

export const revalidate = 300;

const YANKEES_ID = 147;

function getOpponent(game) {
  const isHome = game.teams.home.team.id === YANKEES_ID;
  const opponent = isHome ? game.teams.away.team : game.teams.home.team;
  return { name: opponent.name, isHome };
}

function GameCard({ game, isToday }) {
  const { name: opponentName, isHome } = getOpponent(game);
  const gameDate = game.gameDate;
  const status = game.status?.detailedState || game.status?.abstractGameState;
  const isFuture =
    status === "Scheduled" ||
    status === "Pre-Game" ||
    status === "Warmup" ||
    game.status?.abstractGameState === "Preview";

  const homePitcher = game.teams?.home?.probablePitcher?.fullName;
  const awayPitcher = game.teams?.away?.probablePitcher?.fullName;

  const ticketUrl = isFuture
    ? getTicketmasterUrl(
        game.teams.home.team.name,
        game.teams.away.team.name,
        formatDate(gameDate)
      )
    : null;

  return (
    <div
      className={`card p-5 ${
        isToday ? "ring-2 ring-blue-400 border-blue-400/40" : ""
      }`}
    >
      {isToday && (
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded mb-3">
          Today&apos;s Game
        </span>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        {/* Date and Time */}
        <div className="space-y-1">
          <p className="font-display text-lg font-bold text-white">
            {formatDate(gameDate)}
          </p>
          <p className="text-sm text-gray-400 font-body">
            {formatTime(gameDate)}
          </p>
        </div>

        {/* Opponent and Venue */}
        <div className="flex-1 sm:text-center space-y-1">
          <p className="font-display text-xl font-bold text-white">
            {isHome ? "vs" : "@"} {opponentName}
          </p>
          <p className="text-sm text-gray-400 font-body">
            {isHome ? "Home — Yankee Stadium" : "Away"}
          </p>
        </div>

        {/* Status and Ticket */}
        <div className="text-right space-y-2">
          <p
            className={`text-sm font-semibold ${
              status === "Final"
                ? "text-gray-400"
                : status === "In Progress" || status === "Live"
                ? "text-green-400"
                : "text-blue-400"
            }`}
          >
            {status}
          </p>
          {ticketUrl && (
            <a
              href={ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block text-xs py-1.5 px-4"
            >
              Get Tickets
            </a>
          )}
        </div>
      </div>

      {/* Probable Pitchers */}
      {(homePitcher || awayPitcher) && (
        <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:justify-between gap-2 text-sm text-gray-400 font-body">
          {homePitcher && (
            <span>
              <span className="text-gray-500">Home SP:</span> {homePitcher}
            </span>
          )}
          {awayPitcher && (
            <span>
              <span className="text-gray-500">Away SP:</span> {awayPitcher}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default async function SchedulePage() {
  const currentYear = new Date().getFullYear();
  const dates = await getYankeesSchedule(currentYear);

  const todayStr = new Date().toISOString().split("T")[0];

  // Flatten all games and tag each with its date
  const allGames = dates.flatMap((d) =>
    d.games.map((game) => ({
      ...game,
      _dateStr: d.date,
    }))
  );

  // Split into past and future
  const pastGames = allGames
    .filter((g) => g._dateStr < todayStr)
    .slice(-5);

  const todayGames = allGames.filter((g) => g._dateStr === todayStr);

  const futureGames = allGames.filter((g) => g._dateStr > todayStr);

  // Combine: recent past + today + future
  const displayGames = [...pastGames, ...todayGames, ...futureGames];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-navy-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-gray-950 opacity-80" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="section-heading text-4xl md:text-6xl mb-4">
            When Does Judge Play?
          </h1>
          <p className="text-xl text-gray-300 font-body">
            {currentYear} New York Yankees Schedule
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* SEO Intro */}
        <p className="text-gray-300 font-body text-lg leading-relaxed max-w-3xl mx-auto text-center">
          Find out when Aaron Judge and the New York Yankees play next. Check
          game times, opponents, probable starting pitchers, and grab tickets to
          see the Yankees captain in action. Wondering &ldquo;is Aaron Judge
          playing today?&rdquo; This schedule has you covered with live updates
          throughout the {currentYear} MLB season.
        </p>

        {/* Today's Game Highlight */}
        {todayGames.length > 0 && (
          <section>
            <h2 className="section-heading text-2xl md:text-3xl mb-6 text-center">
              Today&apos;s Game
            </h2>
            <div className="space-y-4">
              {todayGames.map((game) => (
                <GameCard key={game.gamePk} game={game} isToday={true} />
              ))}
            </div>
          </section>
        )}

        {todayGames.length === 0 && (
          <div className="glass rounded-xl p-6 text-center">
            <p className="text-gray-400 font-body">
              No Yankees game scheduled for today. Check the upcoming games
              below.
            </p>
          </div>
        )}

        {/* Upcoming Games */}
        {futureGames.length > 0 && (
          <section>
            <h2 className="section-heading text-2xl md:text-3xl mb-6">
              Upcoming Games
            </h2>
            <div className="space-y-4">
              {futureGames.map((game) => (
                <GameCard key={game.gamePk} game={game} isToday={false} />
              ))}
            </div>
          </section>
        )}

        {/* Recent Results */}
        {pastGames.length > 0 && (
          <section>
            <h2 className="section-heading text-2xl md:text-3xl mb-6">
              Recent Games
            </h2>
            <div className="space-y-4">
              {pastGames.map((game) => (
                <GameCard key={game.gamePk} game={game} isToday={false} />
              ))}
            </div>
          </section>
        )}

        {displayGames.length === 0 && (
          <div className="glass rounded-xl p-8 text-center">
            <p className="text-gray-400 font-body text-lg">
              No schedule data available for the {currentYear} season yet. Check
              back soon.
            </p>
          </div>
        )}

        {/* Footer Note */}
        <p className="text-center text-gray-500 text-sm font-body">
          Schedule sourced from MLB. Updated every 5 minutes during the season.
        </p>
      </div>
    </div>
  );
}
