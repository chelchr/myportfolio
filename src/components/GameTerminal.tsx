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
    let maxAttempts = level === 2 ? 7 : level === 3 ? 5 : 10;

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
      if (val === "start") initLevel(1, 0);
      else addLog("Unknown command. Type 'start'.");
    } else if (gameState.waitingFor === "guess") {
      const guess = parseInt(val);
      if (isNaN(guess)) {
        addLog("Please enter a valid number!");
        return;
      }

      if (guess === gameState.secretNumber) {
        const max = gameState.level === 1 ? 10 : gameState.level === 2 ? 7 : 5;
        const used = max - gameState.attempts + 1;
        let points = used <= 3 ? 100 : used <= 5 ? 75 : used <= 7 ? 50 : 25;

        addLog(`✧ CORRECT! You guessed it in ${used} attempts.`);
        addLog(`+${points} Points!`);

        if (gameState.level < 3) {
          initLevel(gameState.level + 1, gameState.totalPoints + points);
        } else {
          setGameState((prev) => ({
            ...prev,
            secretNumber: Math.floor(Math.random() * 20) + 1,
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
      addLog(
        guess === gameState.secretNumber
          ? `✧･ﾟYOU NAILED IT! +999 BONUS POINTS! \nFINAL TOTAL SCORE: ${gameState.totalPoints + 999}`
          : `Oof! The bonus number was ${gameState.secretNumber}. \nFINAL TOTAL SCORE: ${gameState.totalPoints}`,
      );
      setGameState((prev) => ({
        ...prev,
        active: false,
        waitingFor: "command",
      }));
      addLog("\nType 'start' to play again.");
    }
  };

  return (
    <div
      ref={scrollRef}
      className="h-72 overflow-y-auto text-black scrollbar-hide font-mono text-sm"
    >
      {logs.map((log, i) => (
        <div key={i} className="whitespace-pre-wrap mb-1">
          {log}
        </div>
      ))}
      <form onSubmit={handleInput} className="flex mt-2">
        <span className="mr-2 text-fuchsia-500">➜</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent outline-none flex-1 text-fuchsia-500 border-none focus:ring-0 p-0"
          autoFocus
        />
      </form>
    </div>
  );
}
