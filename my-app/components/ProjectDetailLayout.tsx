"use client";

import { useState, useEffect, useRef } from "react";
import type { ProjectDetail } from "@/data/projectsData";
import ReposSection from "./ReposSection";

interface Props {
  project: ProjectDetail;
}

export default function ProjectDetailLayout({ project }: Props) {
  const imageList =
    project.images && project.images.length > 0
      ? project.images
      : [project.heroImage];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const el = thumbRefs.current[currentImageIndex];
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentImageIndex]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageList.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? imageList.length - 1 : prev - 1
    );
  };

  const primaryGithub = project.links?.find((l) => l.github)?.github ?? null;

  const handleOpenRepo = () => {
    if (primaryGithub) {
      window.open(primaryGithub, "_blank", "noopener,noreferrer");
    }
  };

  const handleScrollToRepos = () => {
    const element = document.getElementById("repos-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const repoItems =
    project.links?.flatMap((link) => {
      const items: { label: string; url: string; color?: string }[] = [];

      if (link.github) {
        items.push({
          label: link.label ?? "GitHub Repository",
          url: link.github,
          color: "bg-emerald-400",
        });
      }

      if (link.demo) {
        items.push({
          label: link.label ? `${link.label} – Demo` : "Live Demo",
          url: link.demo,
          color: "bg-amber-400",
        });
      }

      return items;
    }) ?? [];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 md:pt-6 lg:pt-8 pb-10 md:pb-14 lg:pb-16">
        {/* Header */}
        <div className="mb-7 md:mb-9">
          <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.35em] text-amber-400 uppercase">
            Work
          </p>
          <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="mt-2 text-sm md:text-base text-slate-300 max-w-2xl">
              {project.subtitle}
            </p>
          )}
        </div>

        <div
          className="
            grid gap-8 lg:gap-x-16 lg:gap-y-10 items-start
            rounded-3xl border border-slate-800 bg-slate-900/40
            p-5 sm:p-6 md:p-8 lg:p-10
            shadow-2xl shadow-black/40 backdrop-blur
            md:grid-cols-2
          "
        >
          {/* LEFT SIDE – Info */}
          <div className="space-y-7 md:space-y-8">
            {/* Meta */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3 text-xs sm:text-[13px] text-slate-300 justify-between">
                <span className="px-3 py-1 rounded-full border border-slate-700/80 bg-slate-900/60">
                  <span className="text-slate-400">Role:</span>{" "}
                  <span className="font-medium text-slate-50">
                    {project.role}
                  </span>
                </span>
                <span className="px-3 py-1 rounded-full border border-slate-700/80 bg-slate-900/60">
                  <span className="text-slate-400">Period:</span>{" "}
                  <span className="font-medium text-slate-50">
                    {project.period}
                  </span>
                </span>
              </div>

              <div>
                <h3 className="uppercase tracking-[0.18em] text-[10px] sm:text-[11px] text-slate-400">
                  Tech Stack
                </h3>
                <div className="mt-3 flex flex-wrap gap-2 sm:gap-2.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-[11px] sm:text-xs rounded-full bg-slate-900/80 border border-slate-700 text-slate-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h3 className="text-xs sm:text-sm font-semibold tracking-wide text-slate-100 uppercase">
                Overview
              </h3>
              <p className="text-sm md:text-[15px] text-slate-300 leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              <h3 className="text-xs sm:text-sm font-semibold tracking-wide text-slate-100 uppercase">
                Key Contributions
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {project.highlights.map((line, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-[7px] h-[6px] w-[6px] flex-shrink-0 rounded-full bg-amber-400" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Repo button */}
            {primaryGithub && (
              <div className="pt-1 sm:pt-2">
                <button
                  onClick={handleOpenRepo}
                  className="
                    inline-flex items-center gap-2 rounded-full
                    border border-amber-400/80 bg-amber-400/10
                    px-4 py-2 text-[11px] sm:text-xs font-semibold uppercase
                    tracking-wide text-amber-300
                    hover:bg-amber-400 hover:text-slate-900 hover:border-transparent
                    transition
                  "
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-amber-300" />
                  View Code on GitHub
                </button>
              </div>
            )}
          </div>

          {/* RIGHT SIDE – Image viewer */}
          <div className="flex flex-col gap-4 md:gap-5">
            {/* Main image + prev/next overlay */}
            <div
              className="
                relative w-full
                h-56 sm:h-64 md:h-80 lg:h-[450px]
                overflow-hidden rounded-2xl md:rounded-3xl
                border border-slate-800 bg-slate-900/80
                shadow-xl shadow-black/50
              "
            >
              <img
                src={imageList[currentImageIndex]}
                alt={project.title}
                className="
                  w-full h-full
                  object-contain
                "
              />

              {/* Prev button */}
              {imageList.length > 1 && (
                <button
                  onClick={prevImage}
                  className="
                    absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10
                    inline-flex items-center justify-center
                    rounded-full bg-slate-950/70 border border-slate-700
                    px-2 py-2 text-xs sm:text-sm text-slate-100
                    hover:bg-slate-800 hover:border-slate-500 transition
                  "
                >
                  ←
                </button>
              )}

              {/* Next button */}
              {imageList.length > 1 && (
                <button
                  onClick={nextImage}
                  className="
                    absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10
                    inline-flex items-center justify-center
                    rounded-full bg-slate-950/70 border border-slate-700
                    px-2 py-2 text-xs sm:text-sm text-slate-100
                    hover:bg-slate-800 hover:border-slate-500 transition
                  "
                >
                  →
                </button>
              )}

              {/* Indicator bottom-right */}
              {imageList.length > 1 && (
                <div
                  className="
                    absolute bottom-2 sm:bottom-3 right-3
                    rounded-full bg-slate-950/70
                    px-3 py-1 text-[10px] sm:text-[11px] text-slate-200
                    border border-slate-700/80 z-10
                  "
                >
                  {currentImageIndex + 1} / {imageList.length}
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {imageList.length > 1 && (
              <div
                className="
                  mt-3
                  grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6
                  gap-2 sm:gap-3
                "
              >
                {imageList.map((src, idx) => (
                  <button
                    key={`${src}-${idx}`}
                    ref={(el) => {
                      thumbRefs.current[idx] = el;
                    }}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`
                      relative w-full aspect-[4/3]
                      overflow-hidden rounded-xl border transition
                      ${
                        idx === currentImageIndex
                          ? "border-amber-400 ring-2 ring-amber-400/60"
                          : "border-slate-700 hover:border-slate-500"
                      }
                    `}
                  >
                    <img
                      src={src}
                      alt={`${project.title} thumbnail ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Bottom – arrow to repos */}
          {repoItems.length > 0 && (
            <div className="col-span-full flex justify-center pt-2 sm:pt-4">
              <button
                onClick={handleScrollToRepos}
                className="group flex flex-col items-center gap-1"
              >
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  View Repositories
                </span>
                <span
                  className="
                    flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center
                    text-base sm:text-lg text-slate-200 transition
                    group-hover:-translate-y-1 group-hover:text-amber-300
                  "
                >
                  ↓
                </span>
              </button>
            </div>
          )}
        </div>

        {/* ReposSection – Đổ data từ project.links */}
        <div className="mt-8 md:mt-10">
          <ReposSection repos={repoItems} />
        </div>
      </div>
    </main>
  );
}
