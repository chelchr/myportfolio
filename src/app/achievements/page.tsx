"use client";
import Link from "next/link";
import { MoveLeft, Calendar } from "lucide-react";
import { achievementsList } from "@/data/achievementsList";

export default function AchievementsPage() {
  return (
    <main className="min-h-screen text-white px-8 py-26 relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] bg-fuchsia-500/40 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] left-[-5%] w-[250px] h-[250px] bg-lime-300/40 blur-[120px] rounded-full" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex flex-col gap-4">
            <Link
              href="/#about"
              className="flex items-center gap-2 text-lime-300 hover:gap-4 transition-all group"
            >
              <MoveLeft size={20} />
              <span className="text-sm uppercase tracking-widest">Back</span>
            </Link>
            <h2 className="text-5xl md:text-6xl font-bold text-fuchsia-300 tracking-tighter mb-8">
              Achievements
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {achievementsList.map((item, index) => (
            <div
              key={index}
              className="group relative border-2 border-lime-300/30 bg-white/5 p-8 rounded-[2rem] backdrop-blur-md hover:border-lime-300 transition-all hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-lime-300 text-black text-[10px] font-bold rounded-full uppercase tracking-tighter">
                      {item.rank}
                    </span>
                    <span className="flex items-center gap-1 text-white/40 text-sm">
                      <Calendar size={12} /> {item.year}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white/90 group-hover:text-lime-300 transition-all">
                    {item.title}
                  </h3>

                  <p className="text-white/60 font-light leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>

                  <div className="mt-2 text-fuchsia-300/80 text-sm italic">
                    Issued by {item.issuer}
                  </div>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
