"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { ComingSoonBadge } from "@/components/coming-soon-badge";
import { ArrowOutIcon } from "@/components/site-icons";
import { upcomingProjects, type UpcomingProject } from "@/lib/site-data";
import { buttonSecondary } from "@/lib/ui";

export function UpcomingProjects() {
  const prefersReducedMotion = useReducedMotion();
  const [compactScreen, setCompactScreen] = useState(false);
  const [activeProject, setActiveProject] = useState<UpcomingProject | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const sync = () => setCompactScreen(media.matches);
    sync();
    media.addEventListener("change", sync);

    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!activeProject) {
      document.body.style.overflow = "";
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeProject]);

  const reduceMotion = Boolean(prefersReducedMotion) || compactScreen;

  const scrollToFooterContact = () => {
    setActiveProject(null);

    requestAnimationFrame(() => {
      document.getElementById("site-footer-contact")?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start"
      });
    });
  };

  return (
    <>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {upcomingProjects.map((project) => (
          <button
            key={project.id}
            className="group section-frame relative h-full w-full rounded-[2rem] p-3 text-left"
            onClick={() => setActiveProject(project)}
            type="button"
          >
            <div className="relative h-full overflow-hidden rounded-[1.6rem] border border-white/10">
              <div className="absolute right-4 top-4 z-10">
                <ComingSoonBadge />
              </div>

              <div className="absolute inset-0">
                <Image
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  src={project.cardImage}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,9,13,0.15),rgba(6,9,13,0.82))]" />
              </div>

              <div className="relative flex min-h-[360px] flex-col justify-end p-6 sm:min-h-[420px] sm:p-8">
                <span className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--electric-blue)]">
                  Project roadmap
                </span>
                <h3 className="font-display mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                  {project.description}
                </p>
                <div className="mt-6 inline-flex items-center text-sm font-medium text-white">
                  Open project brief
                  <ArrowOutIcon />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(2,4,8,0.72)] p-4 backdrop-blur-md"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="section-frame relative w-full max-w-6xl rounded-[2rem] p-3"
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              onClick={(event) => event.stopPropagation()}
              transition={{ duration: reduceMotion ? 0.01 : 0.24, ease: "easeOut" }}
            >
              <div className="glass-panel relative grid overflow-hidden rounded-[1.6rem] lg:grid-cols-[0.95fr_1.05fr]">
                <button
                  aria-label="Close project modal"
                  className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-black/35 text-xl text-white/82 backdrop-blur"
                  onClick={() => setActiveProject(null)}
                  type="button"
                >
                  x
                </button>

                <div className="relative min-h-[280px] overflow-hidden lg:min-h-[620px]">
                  <Image
                    alt={activeProject.title}
                    className="h-full w-full object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 44vw"
                    src={activeProject.imageSrc}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,12,0.12),rgba(4,7,12,0.52))]" />
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--electric-blue)]">
                      Upcoming project
                    </span>
                    <ComingSoonBadge />
                  </div>

                  <h3 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">
                    {activeProject.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                    {activeProject.description}
                  </p>

                  <div className="mt-8 space-y-4">
                    {activeProject.structure.map((item) => (
                      <div
                        key={item.heading}
                        className="rounded-[1.4rem] border border-white/8 bg-white/5 p-4 sm:p-5"
                      >
                        <div className="text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-[var(--electric-blue)]">
                          {item.heading}
                        </div>
                        <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                          {item.body}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <button
                      className={buttonSecondary}
                      onClick={scrollToFooterContact}
                      type="button"
                    >
                      Footer contact details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
