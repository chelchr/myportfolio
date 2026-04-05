"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import GameTerminal from "./GameTerminal";
import { Terminal } from "./magicui/Terminal";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 100.0,
          minWidth: 100.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xf0abfc,
          backgroundColor: 0x12111d,
          points: 10.0,
          maxDistance: 20.0,
          spacing: 15.0,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center p-8 overflow-hidden bg-black"
    >
      <div ref={vantaRef} className="absolute inset-0 z-0 opacity-30" />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-lime-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px]" />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl w-full flex flex-col items-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="mt-10 text-6xl md:text-8xl font-black tracking-tighter text-white text-center"
          variants={itemVariants}
        >
          Hi,{" "}
          <span className="text-lime-300 drop-shadow-[0_0_20px_rgba(163,230,53,0.3)]">
            culsi's
          </span>{" "}
          here!
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-zinc-400 max-w-2xl text-center font-medium leading-relaxed"
          variants={itemVariants}
        >
          A Frontend Developer who prioritizes clarity, performance, and user
          experience with React and Next.js.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="w-full max-w-2xl shadow-2xl shadow-lime-500/5"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Terminal title="higherlower.cpp">
              <GameTerminal />
            </Terminal>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
