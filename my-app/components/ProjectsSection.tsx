// ProjectsSection.tsx
import CardList from "./CardList";
import type { CardProps } from "./Card";
import { projectsData } from "@/data/projectsData";

const projects: CardProps[] = projectsData.map((project, index) => ({
  id: index + 1,
  title: project.title,
  description: project.subtitle ?? project.overview,
  image: project.heroImage,
  link: `/projects/${project.slug}`,
}));

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 overflow-visible">
      <div className="pointer-events-none absolute inset-0 z-0 flex justify-center">
        <div className="w-full max-w-5xl px-4">
          <div className="h-full flex justify-between">
            <div className="w-px bg-slate-300/70" />
            <div className="w-px bg-slate-300/70" />
            <div className="w-px bg-slate-300/70" />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-amber-500 uppercase">
            Projects
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Latest Works
          </h2>
        </div>

        <CardList items={projects} />

        <p className="mt-8 text-center text-xs md:text-sm text-slate-600">
          More projects coming soon.
        </p>
      </div>
    </section>
  );
}
