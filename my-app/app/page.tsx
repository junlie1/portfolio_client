import Layout from "@/components/Layout";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <Layout>
      <div className="bg-slate-100 text-slate-900 pt-20 pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <SkillsSection />
          <ProjectsSection />
        </div>
      </div>
    </Layout>
  );
}
