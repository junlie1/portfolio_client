export default function SkillsSection() {
  return (
    <section id="skills" className="mt-16">
      <h2 className="section-title text-slate-900 text-3xl font-bold mb-2">
        Skills
      </h2>
      <p className="text-slate-600 text-sm">
        Technologies I use to build modern and interactive applications.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {[
          {
            title: "Frontend",
            items: [
              "Flutter",
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "HTML/CSS",
            ],
          },
          {
            title: "Backend",
            items: ["Node.js", "TypeScript", "Python"],
          },
          {
            title: "Tools",
            items: ["Git & GitHub", "VS Code", "Postman", "Linux / WSL"],
          },
        ].map((group) => (
          <div
            key={group.title}
            className="
          group relative overflow-hidden rounded-2xl p-5 
          bg-white border border-slate-200 
          shadow-[0_4px_40px_-10px_rgba(0,0,0,0.15)]
          transition-all duration-500
          hover:-translate-y-2 hover:shadow-2xl hover:border-transparent 
          hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50
        "
          >
            {/* Glow Border */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-br from-indigo-200 to-purple-200 blur-xl"></div>

            <h3 className="relative text-lg font-semibold text-slate-900 mb-3">
              {group.title}
            </h3>

            <ul className="relative mt-2 space-y-2 text-sm text-slate-700">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 transition-all duration-300 group-hover:text-slate-900"
                >
                  <span className="h-2 w-2 rounded-full bg-indigo-400 group-hover:bg-indigo-500 shadow-md"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
