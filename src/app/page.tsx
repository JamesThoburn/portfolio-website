import EducationSection from "@/components/Home/EducationSection";
import HeroSection from "@/components/Home/HeroSection";
import SkillsSection from "@/components/Home/SkillsSection";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <HeroSection />
      <SkillsSection />
      <EducationSection />
    </div>
  );
}
