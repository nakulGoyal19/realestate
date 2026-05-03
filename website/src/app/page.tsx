import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import ProjectsSection from "@/components/ProjectsSection";
import BrandsSection from "@/components/BrandsSection";
import MissionSection from "@/components/MissionSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <ProjectsSection />
      <BrandsSection />
      <MissionSection />
      <CTASection />
      <Footer />
    </>
  );
}
