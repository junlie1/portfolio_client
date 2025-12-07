export interface CardProps {
  id?: number;
  title: string;
  description?: string;
  image: string;
  link: string;
  index?: number;
}

export default function Card({
  title,
  description,
  image,
  link,
  index,
}: CardProps) {
  const isEven = typeof index === "number" && index % 2 === 0;

  return (
    <a
      href={link}
      className="
        group/card block overflow-hidden bg-slate-950
        shadow-[0_0_24px_rgba(0,0,0,0.55)]
        transition-shadow duration-300
        hover:shadow-[0_0_40px_rgba(0,0,0,0.9)]
      "
    >
      <div className="relative h-[320px] md:h-[380px] lg:h-[500px]">
        {/* Background image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hover gradient slide */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r from-blue-900/70 via-blue-700/50 to-blue-500/20
            translate-x-[-100%]
            transition-transform duration-700 ease-out
            group-hover/card:translate-x-0
            pointer-events-none
          "
        />

        {typeof index === "number" && (
          <div
            className={`
              absolute ${isEven ? "left-3" : "right-45"} top-1
              z-30
              pointer-events-none
              opacity-0 translate-y-2
              transition-transform duration-300 ease-out
              group-hover/card:opacity-100
              group-hover/card:translate-y-0
            `}
          >
            {/* LAYER XÁM – xuất hiện đúng lúc hover bắt đầu */}
            <span
              className="
                absolute inset-0
                text-slate-300
                text-6xl md:text-8xl lg:text-9xl
                font-extrabold leading-none
                opacity-100
                transition-opacity duration-600 ease-out delay-200
                group-hover/card:opacity-0
              "
            >
              {index.toString().padStart(2, "0")}
            </span>

            {/* LAYER TRẮNG – fade vào sau */}
            <span
              className="
                absolute inset-0
                text-white
                text-6xl md:text-8xl lg:text-9xl
                font-extrabold leading-none
                opacity-0
                transition-opacity duration-600 ease-out delay-200
                group-hover/card:opacity-100
              "
            >
              {index.toString().padStart(2, "0")}
            </span>
          </div>
        )}

        {/* CONTENT */}
        <div
          className={`
            relative z-10 flex h-full flex-col justify-end p-10 space-y-6
            ${isEven ? "items-end text-right" : "items-start text-left"}
          `}
        >
          {/* TITLE + DESCRIPTION */}
          <div
            className="
              transition-all duration-300
              group-hover/card:translate-y-[-4px]
              group-hover/card:brightness-110
            "
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">
              {title}
            </h3>

            {description && (
              <p className="mt-2 text-[15px] md:text-base text-white/90 italic font-serif">
                {description}
              </p>
            )}
          </div>

          {/* CASE STUDY BUTTON */}
          <button
            type="button"
            className="
              group/button
              relative inline-flex items-center
              transition-all duration-300
              group-hover/card:translate-y-[-4px]
              group-hover/card:brightness-110
              group-hover/button:translate-y-0
            "
          >
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
              <span className="relative z-10">Case study</span>

              <span
                className="
                  pointer-events-none
                  absolute inset-0
                  -translate-x-[120%]
                  bg-gradient-to-r from-transparent via-sky-400/70 to-transparent
                  transition-transform duration-800 ease-in-out
                  group-hover/button:translate-x-[120%]
                "
              />
            </span>

            <span
              className="
                relative -ml-7 flex items-center
                transition-transform duration-300
                group-hover/button:translate-x-1
              "
            >
              <svg
                className="h-5 w-24"
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
    </a>
  );
}
