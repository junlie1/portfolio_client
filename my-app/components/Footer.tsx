export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-16 border-t border-slate-800 bg-gradient-to-t from-slate-950 via-slate-950 to-slate-900/80 py-10 text-slate-50"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Let's connect
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Contact
          </h2>
          <p className="mt-3 max-w-md text-sm text-slate-300">
            Feel free to reach out if you want to collaborate, have an idea in
            mind, or simply want to say hi
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
          {[
            { label: "Email", href: "mailto:nguyenletrung0902@gmail.com" },
            { label: "GitHub", href: "https://github.com/junlie1" },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/nguyenletrung92/",
            },
          ].map((btn) => (
            <a
              target="_blank"
              key={btn.label}
              href={btn.href}
              className="group inline-flex items-center gap-2 rounded-full border border-slate-600/80 px-5 py-2 font-medium text-slate-100/90
                         transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-white"
            >
              <span>{btn.label}</span>
              <span className="text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* bottom line */}
      <div className="mt-8 border-t border-slate-800/70">
        <p className="mx-auto max-w-6xl px-4 pt-4 text-xs text-slate-500">
          © {new Date().getFullYear()} Nguyen Le Trung .
        </p>
      </div>
    </footer>
  );
}
