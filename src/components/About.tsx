"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MoveLeft, Download } from "lucide-react";
import { orgsList } from "@/data/orgsList";
import { worksList } from "@/data/worksList";
import { skillsList } from "@/data/skillsList";

const About = () => {
  const [activeTab, setActiveTab] = useState("default");
  const extraContent = {
    default:
      "I’m Chelsea Christofera, a Computer Science student at Universitas Gadjah Mada specializing in frontend development. I build modern, responsive web interfaces using React, Next.js, and Tailwind CSS, with a focus on performance, usability, and scalability. I enjoy turning ideas into functional products and continuously boosting my skills through impactful projects.",
  };

  const navItems = [
    {
      char: "c",
      label: "Organizations",
      type: "btn",
      tab: "orgs",
      img: "/c.svg",
    },
    { char: "u", label: "Work", type: "btn", tab: "work", img: "/u.svg" },
    {
      char: "l",
      label: "Achievements",
      type: "link",
      href: "/achievements",
      img: "/l.svg",
    },
    { char: "s", label: "Skills", type: "btn", tab: "skills", img: "/s.svg" },
    {
      char: "i",
      label: "Download CV",
      type: "download",
      href: "/CV_Chelsea.pdf",
      img: "/i.svg",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-20 relative overflow-hidden"
    >
      <div className="absolute top-[50%] left-[18%] -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-lime-300/40 blur-[100px] rounded-full -z-0" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-5 w-full z-10 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="w-full flex justify-center md:justify-end md:pr-10 mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-300 tracking-tighter">
            About Me
          </h2>
        </motion.div>

        <div className="flex flex-col md:grid md:grid-cols-5 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 flex justify-center md:justify-start"
          >
            <div
              className="relative w-[280px] h-[380px] md:w-[350px] md:h-[450px]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 82%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, black 82%, transparent 100%)",
              }}
            >
              <img
                src="/fotoculsi.png"
                alt="Chelsea"
                className="w-full h-full object-contain hover:scale-105 transition-all duration-500"
              />
            </div>
          </motion.div>

          <div className="md:col-span-3 flex flex-col gap-7 w-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="border-2 border-lime-300/30 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] backdrop-blur-md relative group shadow-xl"
            >
              <div className="min-h-[110px] flex flex-col justify-center gap-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activeTab === "default" && (
                      <p className="text-base md:text-xl leading-relaxed text-white/90 font-light italic">
                        "{extraContent.default}"
                      </p>
                    )}

                    {(activeTab === "orgs" || activeTab === "work") && (
                      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
                        {(activeTab === "orgs" ? orgsList : worksList).map(
                          (item: any, idx: number) => (
                            <div
                              key={idx}
                              className="min-w-[200px] md:min-w-[220px] bg-white/5 border border-lime-300/30 p-5 rounded-[1.5rem] snap-start"
                            >
                              <h4 className="text-lime-300 font-bold uppercase text-[11px] mb-1 leading-tight">
                                {item.name}
                              </h4>
                              <p className="text-white/80 text-[10px] uppercase tracking-wider font-medium">
                                {item.role}
                              </p>
                              <p className="text-white/60 text-[10px] mt-2 italic leading-relaxed">
                                {item.period}
                              </p>
                            </div>
                          ),
                        )}
                      </div>
                    )}

                    {activeTab === "skills" && (
                      <div className="flex flex-wrap gap-2">
                        {skillsList.map((skill: string) => (
                          <span
                            key={skill}
                            className="px-3 py-1 md:px-4 md:py-1.5 border border-lime-300/30 bg-lime-300/10 text-lime-300 text-[9px] md:text-[10px] font-bold rounded-full uppercase tracking-widest"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {activeTab !== "default" && (
                  <button
                    onClick={() => setActiveTab("default")}
                    className="w-fit p-2.5 bg-lime-300 text-black rounded-full hover:scale-110 transition-all flex items-center justify-center mt-2"
                  >
                    <MoveLeft size={18} />
                  </button>
                )}
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-3 md:gap-4 items-center justify-center">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.char}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item.type === "link" ? (
                    <Link
                      href={item.href!}
                      className="w-12 h-12 md:w-20 md:h-20 transition-all hover:-translate-y-2 hover:scale-110 active:scale-95 cursor-pointer relative group flex items-center justify-center"
                    >
                      <img
                        src={item.img}
                        alt={item.char}
                        className="w-full h-full object-contain"
                      />
                      <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-lime-300 text-black text-[10px] font-bold rounded-full opacity-0 md:group-hover:opacity-100 transition-all pointer-events-none uppercase z-50 whitespace-nowrap">
                        {item.label}
                      </span>
                    </Link>
                  ) : item.type === "download" ? (
                    <a
                      href={item.href}
                      download
                      className="w-12 h-12 md:w-20 md:h-20 transition-all hover:-translate-y-2 hover:scale-110 active:scale-95 cursor-pointer relative group flex items-center justify-center"
                    >
                      <img
                        src={item.img}
                        alt={item.char}
                        className="w-full h-full object-contain"
                      />
                      <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-lime-300 text-black text-[10px] font-bold rounded-full opacity-0 md:group-hover:opacity-100 transition-all pointer-events-none uppercase z-50 flex items-center gap-1 whitespace-nowrap">
                        <Download size={10} /> {item.label}
                      </span>
                    </a>
                  ) : (
                    <button
                      onClick={() => setActiveTab(item.tab!)}
                      className="w-12 h-12 md:w-20 md:h-20 transition-all hover:-translate-y-2 hover:scale-110 active:scale-95 cursor-pointer relative group flex items-center justify-center"
                    >
                      <img
                        src={item.img}
                        alt={item.char}
                        className="w-full h-full object-contain"
                      />
                      <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-lime-300 text-black text-[10px] font-bold rounded-full opacity-0 md:group-hover:opacity-100 transition-all pointer-events-none uppercase z-50 whitespace-nowrap">
                        {item.label}
                      </span>
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
