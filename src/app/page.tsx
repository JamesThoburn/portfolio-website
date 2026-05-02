import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Navbar";
import SkillsSection from "../components/Home/SkillsSection";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <Hero />
      <SkillsSection />
    </div>
  );
}
