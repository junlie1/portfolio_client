import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projectsData";
import ProjectDetailLayout from "@/components/ProjectDetailLayout";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) return notFound();

  return <ProjectDetailLayout project={project} />;
}
