import TriviaGame from "@/components/TriviaGame";

export const metadata = {
  title: "Aaron Judge Trivia — Test Your Knowledge",
  description:
    "Think you know everything about Aaron Judge? Take our trivia quiz and test your knowledge of the Yankees captain, his career stats, records, and more.",
  keywords: [
    "aaron judge trivia",
    "aaron judge quiz",
    "yankees trivia",
    "aaron judge games",
    "baseball trivia",
  ],
};

export default function GamesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-gray-950" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-wide text-white mb-4">
            Aaron Judge Trivia
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-body">
            Think you know the Captain? Put your knowledge to the test.
          </p>
        </div>
      </section>

      {/* Trivia Component */}
      <section className="max-w-3xl mx-auto px-4 pb-20 -mt-4">
        <TriviaGame />
      </section>
    </div>
  );
}
