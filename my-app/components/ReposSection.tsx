"use client";

interface RepoItem {
  label: string;
  url: string;
  color?: string;
}

interface Props {
  repos: RepoItem[];
}

export default function ReposSection({ repos }: Props) {
  return (
    <section
      id="repos-section"
      className="mt-12 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 shadow-xl shadow-black/40"
    >
      {/* Title */}
      <h2 className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-300">
        Repositories
      </h2>

      {/* Repo bubbles */}
      <div className="mt-6 flex flex-wrap justify-center gap-4 md:gap-6">
        {repos.length > 0 ? (
          repos.map((repo, idx) => {
            const accent = repo.color ?? "bg-emerald-400";

            return (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group relative flex h-24 w-24 md:h-28 md:w-28 
                  items-center justify-center text-center
                  rounded-full border border-slate-700 
                  bg-slate-900/80 text-[11px] md:text-xs text-slate-100 
                  shadow-md shadow-black/40 
                  hover:shadow-lg hover:shadow-amber-400/20
                  hover:-translate-y-1 hover:scale-105 
                  transition-transform transition-colors duration-200
                `}
              >
                {/* Vòng sáng accent */}
                <span
                  className={`
                    absolute inset-0 opacity-10 blur-xl rounded-full 
                    ${accent}
                  `}
                />

                {/* Viền nhỏ màu sắc bên trong */}
                <span
                  className={`
                    absolute inset-[3px] rounded-full border 
                    ${
                      repo.color
                        ? repo.color.replace("bg-", "border-")
                        : "border-emerald-400/60"
                    }
                    opacity-60
                  `}
                />

                {/* Nội dung label */}
                <span className="relative px-3 leading-snug">{repo.label}</span>

                {/* Mũi tên góc dưới */}
                <span className="pointer-events-none absolute bottom-2 right-2 text-[10px] opacity-60 group-hover:opacity-100">
                  ↗
                </span>
              </a>
            );
          })
        ) : (
          <p className="text-xs text-slate-400 mt-2">
            No repositories linked for this project yet.
          </p>
        )}
      </div>
    </section>
  );
}
