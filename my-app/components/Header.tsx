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
      <div className="pointer-events-none absolute inset-0">
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

      {/* Content vẫn nằm trong max-w-6xl ở giữa */}
      <div className="mx-auto max-w-6xl px-4 pt-6 md:pt-10 min-h-screen flex flex-col">
        <Navbar />

        <div className="relative mt-10 md:mt-4 flex flex-1 flex-col justify-center">
          {/* Ảnh bên phải */}
          <div className="pointer-events-none absolute right-0 top-[45%] hidden -translate-y-1/2 md:block">
            <div className="w-64 md:w-72 lg:w-80 h-72 md:h-80 lg:h-96 overflow-hidden rounded-3xl">
              <img
                src="/images/vung.png"
                alt="ảnh vung"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </div>

          <HeroContent onOpen={() => setIsAboutOpen(true)} />

          {/* Nút scroll xuống skills */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <button
              onClick={scrollToSkills}
              className="group flex flex-col items-center gap-2"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-100">
                Skills
              </span>

              <div className="relative flex items-center justify-center h-10 w-10">
                <span className="transition-opacity duration-200 group-hover:opacity-0">
                  <div className="w-[2px] mt-6 h-14 bg-slate-500 rounded-full"></div>
                </span>

                <span
                  className="absolute text-slate-500 opacity-0 
                     group-hover:opacity-100 group-hover:text-slate-400
                     transition-all duration-200 
                     group-hover:scale-y-300
                     group-hover:scale-x-150"
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
