"use client";

export default function ProjectCard({ data }: { data: any }) {
  return (
    <div className="group relative border-2 border-lime-300/30 rounded-[2.5rem] overflow-hidden p-6 transition-all hover:border-lime-300 flex flex-col text-left h-full">
      <div className="relative rounded-2xl overflow-hidden mb-4 border border-zinc-800 aspect-video shrink-0">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover transition-all group-hover:scale-110"
        />
      </div>

      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lime-300 text-xl font-bold tracking-tight">
          {data.title}
        </h3>
        <span className="text-white/90 text-s">{data.year}</span>
      </div>

      <p className="text-white/90 text-xs mb-4 line-clamp-2 leading-relaxed">
        {data.desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {data.tech.map((t: string) => (
          <span
            key={t}
            className="text-[10px] uppercase font-bold bg-fuchsia-300/50 text-white/90 px-2 py-1 rounded border border-fuchsia-200/50"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
        <a
          href={data.github}
          target="_blank"
          className="flex items-center gap-2 text-[11px] font-bold text-white/90 hover:text-fuchsia-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          SOURCE CODE
        </a>
        <a
          href={data.live}
          target="_blank"
          className="flex items-center gap-2 text-[11px] font-bold text-white/90 hover:text-fuchsia-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          LIVE WEBSITE
        </a>
      </div>
    </div>
  );
}
