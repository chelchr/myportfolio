"use client";

import React from "react";

export default function ProjectCard({ data }: { data: any }) {
  return (
    <div className="group relative bg-zinc-900/50 border-2 border-lime-300/15 rounded-[2.5rem] overflow-hidden p-6 transition-all hover:border-lime-300 flex flex-col text-left h-full">
      <div className="relative rounded-2xl overflow-hidden mb-4 border border-zinc-800 aspect-video shrink-0">
        <img
          src={data.image || ""}
          alt={data.title}
          className="w-full h-full object-cover transition-all group-hover:scale-110"
        />
      </div>

      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lime-300 text-xl font-bold tracking-tight">
          {data.title}
        </h3>
        <span className="text-white/90 text-sm">{data.year}</span>
      </div>

      <p className="text-white/90 text-xs mb-4 line-clamp-2 leading-relaxed">
        {data.desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {data.tech?.map((t: string) => (
          <span
            key={t}
            className="text-[10px] uppercase font-bold bg-fuchsia-300/50 text-white/90 px-2 py-1 rounded border border-fuchsia-200/50"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
        <a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[11px] font-bold text-white/90 hover:text-fuchsia-300"
        >
          <img
            src="/github.svg"
            alt="GitHub"
            className="w-4 h-4 brightness-0 invert"
          />
          SOURCE CODE
        </a>
        <a
          href={data.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[11px] font-bold text-white/90 hover:text-fuchsia-300"
        >
          <img
            src="/openin.svg"
            alt="Live"
            className="w-4 h-4 brightness-0 invert"
          />
          LIVE WEBSITE
        </a>
      </div>
    </div>
  );
}
