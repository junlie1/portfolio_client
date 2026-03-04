import { ArrowRight } from "lucide-react";

export interface HeroContentProps {
  onOpen: () => void;
}

export const HeroContent = ({ onOpen }: HeroContentProps) => {
  return (
    <section
      id="hero"
      className="
        relative
        mt-8 sm:mt-10 md:mt-4
        flex flex-1 flex-col justify-center
      "
    >
      <div
        className="
          relative z-10
          max-w-2xl sm:max-w-3xl
          px-2 sm:px-0
          md:-mt-20 md:ml-10
        "
      >
        {/* Top text */}
        <div className="space-y-6 sm:space-y-10">
          <p
            className="
              text-xs sm:text-sm
              uppercase tracking-[0.25em]
              text-[#d4af37]
              drop-shadow-[0_0_4px_rgba(212,175,55,0.6)]
              text-center sm:text-left
            "
          >
            Full-stack Developer
          </p>

          <h1
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              font-extrabold tracking-tight text-white
              leading-tight
              text-center sm:text-left
            "
          >
            Nguyễn Lê Trung
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mt-4 text-center sm:text-left">
          <p
            className="
              max-w-md sm:max-w-xl
              mx-auto sm:mx-0
              text-sm sm:text-base md:text-lg
              text-slate-100 italic
            "
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Fullstack Developer with strong hands-on experience in React.js,
            Redux Toolkit, and TypeScript, building scalable and responsive web
            applications. Skilled in managing complex state with Redux,
            integrating RESTful APIs in Agile environments, with a strong focus
            on clean, maintainable code and high-quality user interfaces.
          </p>
        </div>

        {/* Button */}
        <div className="pt-6 flex justify-center sm:justify-start">
          <button
            type="button"
            onClick={onOpen}
            className="
              group relative inline-flex items-center
              transition-all duration-300
            "
          >
            {/* PILL */}
            <span
              className="
                relative inline-block overflow-hidden
                rounded-md
                px-5 sm:px-6 py-2.5 sm:py-3
                text-xs sm:text-sm font-semibold tracking-[0.15em]
                text-white uppercase
                bg-gradient-to-r from-[#E94635] to-[#FF876A]
                shadow-lg shadow-[#E94635]/40
              "
            >
              <span className="relative z-10">About Me</span>

              {/* Light swipe */}
              <span
                className="
                  pointer-events-none absolute inset-0
                  -translate-x-[120%]
                  bg-gradient-to-r from-transparent via-sky-400/70 to-transparent
                  transition-transform duration-800 ease-in-out
                  group-hover:translate-x-[120%]
                "
              />
            </span>

            {/* Arrow */}
            <span
              className="
                relative -ml-6 sm:-ml-7
                flex items-center
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              <svg
                className="h-4 sm:h-5 w-20 sm:w-24"
                viewBox="0 0 40 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="5"
                  y1="6"
                  x2="20"
                  y2="6"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
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
