"use client";

import React, { ReactNode } from "react";

export const Terminal = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  return (
    <div className="flex flex-col w-full rounded-xl border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl overflow-hidden font-mono text-center">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-zinc-900/40">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-80" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-80" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] opacity-80" />
        </div>
        <div className="text-[10px] uppercase tracking-widest text-zinc-500 select-none font-bold">
          {title || "bash"}
        </div>
        <div className="w-12" />
      </div>
      <div className="p-4 bg-black/20">{children}</div>
    </div>
  );
};
