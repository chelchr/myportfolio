"use client";
import React, { useState, useEffect, useRef } from "react";

export default function GameTerminal() {
  const [logs, setLogs] = useState<string[]>([
    "Welcome to Culsi's Terminal...",
    "Type 'start' to play Higher or Lower!",
  ]);
  const [input, setInput] = useState("");
  const [gameState, setGameState] = useState({
    active: false,
    level: 1,
    secretNumber: 0,
    attempts: 10,
    totalPoints: 0,
    waitingFor: "command",
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [logs]);

  const addLog = (msg: string) => setLogs((prev) => [...prev, msg]);

  const initLevel = (level: number, currentPoints: number) => {
    const secret = Math.floor(Math.random() * 100) + 1;
    let maxAttempts = 10;
    if (level === 2) maxAttempts = 7;
    if (level === 3) maxAttempts = 5;

    setGameState((prev) => ({
      ...prev,
      active: true,
      level,
      secretNumber: secret,
      attempts: maxAttempts,
      totalPoints: currentPoints,
      waitingFor: "guess",
    }));

    addLog(`\n--- LEVEL ${level} ---`);
    addLog(
      `I'm thinking of a number (1-100). You have ${maxAttempts} chances!`,
    );
  };

  const handleInput = (e: React.FormEvent) => {
    e.preventDefault();
    const val = input.toLowerCase().trim();
    if (!val) return;

    addLog(`> ${val}`);
    setInput("");

    if (gameState.waitingFor === "command") {
      if (val === "start") {
        initLevel(1, 0);
      } else {
        addLog("Unknown command. Type 'start'.");
      }
    } else if (gameState.waitingFor === "guess") {
      const guess = parseInt(val);
      if (isNaN(guess)) {
        addLog("Please enter a valid number!");
        return;
      }

      if (guess === gameState.secretNumber) {
        const used =
          (gameState.level === 1 ? 10 : gameState.level === 2 ? 7 : 5) -
          gameState.attempts +
          1;
        let points = 25;
        if (used <= 3) points = 100;
        else if (used <= 5) points = 75;
        else if (used <= 7) points = 50;

        addLog(`✧ CORRECT! You guessed it in ${used} attempts.`);
        addLog(`+${points} Points!`);

        if (gameState.level < 3) {
          initLevel(gameState.level + 1, gameState.totalPoints + points);
        } else {
          const bonusNum = Math.floor(Math.random() * 20) + 1;
          setGameState((prev) => ({
            ...prev,
            secretNumber: bonusNum,
            waitingFor: "bonus",
            totalPoints: prev.totalPoints + points,
          }));
          addLog("\n★ WELCOME TO THE BONUS LEVEL ★");
          addLog("Guess a number between 1-20. Only ONE chance!");
        }
      } else {
        const newAttempts = gameState.attempts - 1;
        if (newAttempts <= 0) {
          addLog(`(╥﹏╥) Game Over! The number was ${gameState.secretNumber}.`);
          addLog(`Final Score: ${gameState.totalPoints}`);
          setGameState((prev) => ({
            ...prev,
            active: false,
            waitingFor: "command",
          }));
          addLog("\nType 'start' to try again.");
        } else {
          addLog(
            guess < gameState.secretNumber ? "HIGHER! (ง'̀-'́)ง" : "LOWER! (ˆ⌣ˆ)",
          );
          addLog(`${newAttempts} chances left.`);
          setGameState((prev) => ({ ...prev, attempts: newAttempts }));
        }
      }
    } else if (gameState.waitingFor === "bonus") {
      const guess = parseInt(val);
      if (guess === gameState.secretNumber) {
        addLog("✧･ﾟYOU NAILED IT! +999 BONUS POINTS! ✧･ﾟ");
        addLog(`FINAL TOTAL SCORE: ${gameState.totalPoints + 999}`);
      } else {
        addLog(`Oof! The bonus number was ${gameState.secretNumber}.`);
        addLog(`FINAL TOTAL SCORE: ${gameState.totalPoints}`);
      }
      setGameState((prev) => ({
        ...prev,
        active: false,
        waitingFor: "command",
      }));
      addLog("\nType 'start' to play again.");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto font-mono text-sm shadow-2xl rounded-xl overflow-hidden border border-white/20">
      <div className="bg-zinc-800 p-3 flex gap-2 items-center border-b border-white/20 text-center">
        <div className="flex gap-2 absolute left-80">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <span className="text-white/60 text-xs w-full text-center font-medium">
          higherlower.cpp
        </span>
      </div>

      <div
        ref={scrollRef}
        className="bg-black/80 h-80 p-5 overflow-y-auto text-white/70 scrollbar-hide"
      >
        {logs.map((log, i) => (
          <div key={i} className="whitespace-pre-wrap mb-1">
            {log}
          </div>
        ))}

        <form onSubmit={handleInput} className="flex mt-2">
          <span className="mr-2 text-lime-300">➜</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent outline-none flex-1 text-lime-300 border-none focus:ring-0 p-0"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}
