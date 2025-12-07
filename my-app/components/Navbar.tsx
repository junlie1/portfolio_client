"use client";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between">
      <div className="font-semibold tracking-tight">
        <span className="hidden md:flex gap-8 text-xl font-semibold tracking-wide text-slate-200">
          PORTFOLIO
        </span>
      </div>

      <nav className="hidden md:flex gap-8 text-base font-semibold tracking-wide text-gray-400">
        {["Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative group hover:text-white transition-all duration-300"
          >
            <span className="font-semibold">{item}</span>

            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>
    </header>
  );
}
