"use client";
import React from "react";
import GameTerminal from "./GameTerminal";
export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center p-32 text-center"
    >
      <div className="max-w-4xl flex flex-col items-center gap-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-lime-300">
          Hi, culsi's here!
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
          A Frontend Developer who prioritizes clarity, performance, and user
          experience with React and Next.js.
        </p>
        <GameTerminal />
      </div>
    </section>
  );
}
