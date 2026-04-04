"use client";

import { useState, useCallback } from "react";
import { trackGamePlay } from "@/lib/analytics";

const QUESTIONS = [
  {
    question: "How many home runs did Judge hit in his record-breaking 2022 season?",
    options: ["60", "61", "62", "64"],
    answer: 2,
  },
  {
    question: "What number does Aaron Judge wear?",
    options: ["44", "99", "27", "2"],
    answer: 1,
  },
  {
    question: "What college did Aaron Judge attend?",
    options: ["Stanford", "UCLA", "Fresno State", "Arizona State"],
    answer: 2,
  },
  {
    question: "In what year was Judge named Yankees captain?",
    options: ["2021", "2022", "2023", "2024"],
    answer: 2,
  },
  {
    question: "What position does Judge primarily play?",
    options: ["Center Field", "First Base", "Designated Hitter", "Right Field"],
    answer: 3,
  },
  {
    question: "How tall is Aaron Judge?",
    options: ["6'5\"", "6'6\"", "6'7\"", "6'8\""],
    answer: 2,
  },
  {
    question: "What year was Judge drafted by the Yankees?",
    options: ["2011", "2012", "2013", "2014"],
    answer: 2,
  },
  {
    question: "Judge won AL Rookie of the Year in which season?",
    options: ["2016", "2017", "2018", "2019"],
    answer: 1,
  },
  {
    question: "Whose AL single-season home run record did Judge break in 2022?",
    options: ["Babe Ruth", "Mickey Mantle", "Roger Maris", "Mark McGwire"],
    answer: 2,
  },
  {
    question: "Where was Aaron Judge born?",
    options: ["Sacramento, CA", "Linden, CA", "Fresno, CA", "San Jose, CA"],
    answer: 1,
  },
  {
    question: "What was Judge's draft position in 2013?",
    options: ["1st overall", "15th overall", "32nd overall", "50th overall"],
    answer: 2,
  },
  {
    question: "When did Judge make his MLB debut?",
    options: ["August 13, 2016", "April 4, 2017", "June 1, 2016", "September 1, 2015"],
    answer: 0,
  },
];

export default function TriviaGame() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [finished, setFinished] = useState(false);

  const question = QUESTIONS[currentQ];

  const handleSelect = useCallback(
    (index) => {
      if (selected !== null) return; // already answered
      setSelected(index);
      const correct = index === question.answer;
      trackGamePlay('trivia', correct ? 'correct_answer' : 'wrong_answer', currentQ + 1);
      if (correct) {
        setScore((s) => s + 1);
      }
    },
    [selected, question]
  );

  const handleNext = useCallback(() => {
    if (currentQ + 1 >= QUESTIONS.length) {
      setFinished(true);
    } else {
      setCurrentQ((q) => q + 1);
      setSelected(null);
    }
  }, [currentQ]);

  const handleRestart = useCallback(() => {
    trackGamePlay('trivia', 'restart');
    setCurrentQ(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
    setFinished(false);
  }, []);

  /* ---------- Finished screen ---------- */
  if (finished) {
    const pct = Math.round((score / QUESTIONS.length) * 100);
    trackGamePlay('trivia', 'complete', score);
    let message = "Better luck next time!";
    if (pct >= 90) message = "All Rise! You're a true Judge expert!";
    else if (pct >= 70) message = "Solid performance, just like #99!";
    else if (pct >= 50) message = "Not bad — keep studying the Captain!";

    return (
      <div className="glass rounded-2xl p-8 md:p-12 text-center space-y-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-white">
          Results
        </h2>

        <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-4 border-blue-400">
          <span className="font-display text-4xl font-bold text-white">
            {score}/{QUESTIONS.length}
          </span>
        </div>

        <p className="text-xl text-gray-300 font-body">{message}</p>
        <p className="text-gray-400 font-body">You scored {pct}%</p>

        <button onClick={handleRestart} className="btn-primary text-lg">
          Play Again
        </button>
      </div>
    );
  }

  /* ---------- Question screen ---------- */
  return (
    <div className="glass rounded-2xl p-6 md:p-10 space-y-8">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-gray-400 font-body">
        <span>
          Question {currentQ + 1} of {QUESTIONS.length}
        </span>
        <span>Score: {score}</span>
      </div>

      <div className="w-full bg-navy-800/50 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${((currentQ + 1) / QUESTIONS.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-snug">
        {question.question}
      </h3>

      {/* Options */}
      <div className="grid gap-3">
        {question.options.map((opt, i) => {
          let classes =
            "w-full text-left px-5 py-4 rounded-xl border font-body transition-all duration-200 ";

          if (selected === null) {
            // Not yet answered
            classes +=
              "border-white/10 bg-navy-800/40 hover:bg-navy-700/60 hover:border-white/20 text-gray-200 cursor-pointer";
          } else if (i === question.answer) {
            // Correct answer — always highlight green
            classes +=
              "border-green-400/60 bg-green-500/20 text-green-300";
          } else if (i === selected) {
            // User picked wrong
            classes +=
              "border-red-400/60 bg-red-500/20 text-red-300";
          } else {
            // Other unselected options
            classes +=
              "border-white/5 bg-navy-800/20 text-gray-500";
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
              className={classes}
            >
              <span className="mr-3 inline-block w-7 h-7 leading-7 text-center rounded-full bg-white/10 text-xs font-semibold">
                {String.fromCharCode(65 + i)}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Next button — shown after selection */}
      {selected !== null && (
        <div className="flex justify-end pt-2">
          <button onClick={handleNext} className="btn-primary">
            {currentQ + 1 >= QUESTIONS.length ? "See Results" : "Next Question"}{" "}
            &rarr;
          </button>
        </div>
      )}
    </div>
  );
}
