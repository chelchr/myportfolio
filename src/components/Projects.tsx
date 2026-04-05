"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projectsList } from "@/data/projectsList";

export default function Projects() {
  const INITIAL_COUNT = 3;
  const [visibleProjects, setVisibleProjects] = useState(INITIAL_COUNT);

  const handleToggleProjects = () => {
    if (visibleProjects >= projectsList.length) {
      setVisibleProjects(INITIAL_COUNT);
      window.scrollTo({
        top: document.getElementById("projects")?.offsetTop,
        behavior: "smooth",
      });
    } else {
      setVisibleProjects((prev) => prev + 3);
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-black/80 flex items-center justify-center relative py-20"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-300 tracking-tighter">
            My Projects
          </h2>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          id="projects-grid"
        >
          <AnimatePresence>
            {projectsList.slice(0, visibleProjects).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              >
                <ProjectCard data={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <button
            onClick={handleToggleProjects}
            className="px-10 py-3 border-2 border-lime-300 text-lime-300 rounded-full hover:bg-lime-300 hover:text-black transition-all font-bold tracking-wide uppercase text-sm"
          >
            {visibleProjects >= projectsList.length ? "VIEW LESS" : "VIEW MORE"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
