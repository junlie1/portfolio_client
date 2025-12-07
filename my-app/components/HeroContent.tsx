import { ArrowRight } from "lucide-react";

export interface HeroContentProps {
  onOpen: () => void;
}

export const HeroContent = ({ onOpen }: HeroContentProps) => {
  return (
    <section
      id="hero"
      className="relative mt-10 md:mt-4 flex flex-1 flex-col justify-center overflow-hidden"
    >
      {/* Hero content */}
      <div className="relative z-10 max-w-3xl md:-mt-20 md:ml-10">
        <div className="space-y-10">
          <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37] drop-shadow-[0_0_4px_rgba(212,175,55,0.6)]">
            Interactive Front-end Developer
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            Nguyễn Lê Trung
          </h1>
        </div>

        <div className="mt-4">
          <p
            className="max-w-xl text-sm md:text-lg text-slate-100 italic"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            I love crafting interactive, modern interfaces and bringing ideas to
            life with clean code.
          </p>
        </div>

        <div className="pt-6">
          <button
            type="button"
            onClick={onOpen}
            className="
              group
              relative inline-flex items-center
              transition-all duration-300
            "
          >
            {/* PILL CAM */}
            <span
              className="
                relative inline-block overflow-hidden
                rounded-md
                px-6 py-3
                text-sm font-semibold tracking-[0.15em]
                text-white uppercase
                bg-gradient-to-r from-[#E94635] to-[#FF876A]
                shadow-lg shadow-[#E94635]/40
              "
            >
              <span className="relative z-10">About Me</span>

              {/* blue swipe chỉ trong pill */}
              <span
                className="
                  pointer-events-none
                  absolute inset-0
                  -translate-x-[120%]
                  bg-gradient-to-r from-transparent via-sky-400/70 to-transparent
                  transition-transform duration-800 ease-in-out
                  group-hover:translate-x-[120%]
                "
              />
            </span>

            {/* SVG MŨI TÊN – dài, đè lên cạnh phải pill */}
            <span
              className="
                relative -ml-7
                flex items-center
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              <svg
                className="h-5 w-24"
                viewBox="0 0 40 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* đường thẳng dài */}
                <line
                  x1="5"
                  y1="6"
                  x2="20"
                  y2="6"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                {/* đầu mũi tên */}
                <path
                  d="M14 2 L20 6 L14 10"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
