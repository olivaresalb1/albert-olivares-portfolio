import { Header } from "@/components/sections/Header";
import { ImpactMetrics } from "@/components/sections/ImpactMetrics";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { SkillsCloud } from "@/components/sections/SkillsCloud";

export default function Home() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-12 sm:py-16 space-y-16">
      <Header />
      <ImpactMetrics />
      <ProjectShowcase />
      <SkillsCloud />
    </main>
  );
}
