import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectDetail from "./ProjectDetail";

export const metadata: Metadata = {
  title: "4 BHK Ultra-Luxurious Floors, Panchkula | Varindit Upkram Pvt Ltd",
  description:
    "Explore our sold-out 4 BHK ultra-luxurious floors at MDC Sector-6, Panchkula. 2680 sqft, Italian Marble, Grohe fittings, Kone lift, VRV AC systems.",
};

export default function ProjectPage() {
  return (
    <>
      <Navbar />
      <ProjectDetail />
      <Footer />
    </>
  );
}
