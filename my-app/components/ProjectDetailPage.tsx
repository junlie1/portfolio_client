// import type { ProjectDetail } from "@/data/projectsData";

// interface ProjectDetailPageProps {
//   project: ProjectDetail;
// }

// export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
//   console.log(project);

//   return (
//     <main className="min-h-screen bg-slate-950 text-slate-50">
//       <section className="mx-auto max-w-4xl px-4 py-16">
//         {/* Breadcrumb */}
//         <p className="text-xs uppercase tracking-[0.25em] text-amber-400 mb-4">
//           Case Study
//         </p>

//         {/* Title */}
//         <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>

//         {project.subtitle && (
//           <p className="mt-3 text-sm md:text-base text-slate-300">
//             {project.subtitle}
//           </p>
//         )}

//         {/* Meta info */}
//         <div className="mt-4 flex flex-wrap gap-4 text-xs md:text-sm text-slate-400">
//           <span className="px-3 py-1 rounded-full border border-slate-700">
//             Role: <span className="text-slate-100">{project.role}</span>
//           </span>
//           <span className="px-3 py-1 rounded-full border border-slate-700">
//             Period: <span className="text-slate-100">{project.period}</span>
//           </span>
//         </div>

//         {/* Hero image */}
//         <div className="mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
//           <div
//             className="h-64 md:h-80 bg-cover bg-center"
//             style={{ backgroundImage: `url('${project.heroImage}')` }}
//           />
//         </div>

//         {/* Tech stack */}
//         <div className="mt-8">
//           <h2 className="text-sm font-semibold text-slate-200 uppercase tracking-[0.18em]">
//             Tech Stack
//           </h2>
//           <div className="mt-3 flex flex-wrap gap-2">
//             {project.techStack.map((tech) => (
//               <span
//                 key={tech}
//                 className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-200 bg-slate-900/60"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Overview */}
//         <div className="mt-10 space-y-3">
//           <h2 className="text-lg md:text-xl font-semibold text-slate-50">
//             Overview
//           </h2>
//           <p className="text-sm md:text-base text-slate-300 leading-relaxed">
//             {project.overview}
//           </p>
//         </div>

//         {/* Highlights */}
//         {project.highlights?.length > 0 && (
//           <div className="mt-8 space-y-3">
//             <h2 className="text-lg md:text-xl font-semibold text-slate-50">
//               Key Contributions
//             </h2>
//             <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-300">
//               {project.highlights.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Links */}
//         {project.links && (project.links.demo || project.links.github) && (
//           <div className="mt-10 flex flex-wrap gap-3">
//             {project.links.demo && (
//               <a
//                 href={project.links.demo}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/40 hover:bg-amber-400 transition"
//               >
//                 View Live Demo →
//               </a>
//             )}
//             {project.links.github && (
//               <a
//                 href={project.links.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 rounded-md border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900 transition"
//               >
//                 View Code on GitHub
//               </a>
//             )}
//           </div>
//         )}
//       </section>
//     </main>
//   );
// }
