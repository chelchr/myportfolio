"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] transition-all"
      style={{
        background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(87, 65, 214, 0.20), transparent 100%)`,
      }}
    />
  );
}
