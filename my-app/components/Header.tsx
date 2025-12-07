"use client";
import { useState } from "react";
import AboutPopup from "./AboutPopup";
import { HeroContent } from "./HeroContent";
import Navbar from "./Navbar";

const SHAPES = [
  { posClass: "shape-1", typeClass: "shape-circle1", dx: 0.02, dy: 0.02 },
  { posClass: "shape-2", typeClass: "shape-square", dx: -0.03, dy: 0.015 },
  { posClass: "shape-3", typeClass: "shape-triangle", dx: 0.015, dy: -0.02 },
  { posClass: "shape-4", typeClass: "shape-pill", dx: -0.02, dy: -0.015 },
  { posClass: "shape-5", typeClass: "shape-diamond", dx: 0.025, dy: 0.01 },
  { posClass: "shape-6", typeClass: "shape-circle", dx: -0.015, dy: 0.02 },
  { posClass: "shape-7", typeClass: "shape-square1", dx: 0.02, dy: -0.015 },
  { posClass: "shape-8", typeClass: "shape-diamond", dx: -0.02, dy: 0.02 },
];

export default function Header() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const scrollToSkills = () => {
    const element = document.getElementById("skills");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({ x, y });
      }}
    >
      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        {SHAPES.map((shape) => (
          <span
            key={shape.posClass}
            className={`floating-shape ${shape.posClass} ${shape.typeClass}`}
            style={{
              transform: `translate(${mousePos.x * shape.dx}px, ${
                mousePos.y * shape.dy
              }px)`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8 min-h-screen flex flex-col">
        <Navbar />

        <div className="relative mt-6 sm:mt-8 md:mt-4 flex flex-1 flex-col justify-center">
          <div className="pointer-events-none absolute right-0 top-1/2 hidden md:block -translate-y-1/2">
            <div className="w-60 md:w-72 lg:w-80 h-64 md:h-80 lg:h-96 overflow-hidden rounded-3xl">
              <img
                src="/images/vung.png"
                alt="Portrait"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-0 md:flex-row">
            <div className="md:w-[60%]">
              <HeroContent onOpen={() => setIsAboutOpen(true)} />
            </div>

            <div className="mt-6 md:mt-0 md:hidden">
              <div className="mx-auto w-44 sm:w-56 h-52 sm:h-64 overflow-hidden rounded-3xl">
                <img
                  src="/images/vung.png"
                  alt="Portrait"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 bottom-6 sm:bottom-8">
            <button
              onClick={scrollToSkills}
              className="group flex flex-col items-center gap-1 sm:gap-2"
            >
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-slate-100">
                Skills
              </span>

              <div className="relative flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10">
                <span className="transition-opacity duration-200 group-hover:opacity-0">
                  <div className="w-[2px] mt-4 sm:mt-5 h-10 sm:h-12 bg-slate-500 rounded-full" />
                </span>

                <span
                  className="absolute text-slate-500 opacity-0 
                     group-hover:opacity-100 group-hover:text-slate-400
                     transition-all duration-200 
                     group-hover:scale-y-150
                     group-hover:scale-x-125"
                >
                  ↓
                </span>
              </div>
            </button>
          </div>
        </div>

        <AboutPopup
          isOpen={isAboutOpen}
          onClose={() => setIsAboutOpen(false)}
        />
      </div>
    </section>
  );
}
