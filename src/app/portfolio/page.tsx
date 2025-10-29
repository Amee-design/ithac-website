import { Metadata } from "next";
import PortfolioHero from "../../components/portfolio/PortfolioHero";
import ProjectGallery from "../../components/portfolio/ProjectGallery";
import CaseStudyModal from "../../components/portfolio/CaseStudyModal";
import TechStack from "../../components/portfolio/TechStack";
import ClientTestimonials from "../../components/portfolio/ClientTestimonials";

export const metadata: Metadata = {
  title: "Portfolio | ITHAC - Our Digital Innovation Showcase",
  description:
    "Explore ITHAC's portfolio of cutting-edge digital solutions, innovative projects, and transformative technology implementations across Africa.",
  keywords:
    "ITHAC portfolio, digital projects, African innovation, technology solutions, web development, mobile apps",
};

export default function PortfolioPage() {
  return (
    <main className="bg-white">
      <PortfolioHero />
      <ProjectGallery />
      <TechStack />
      <ClientTestimonials />
      <CaseStudyModal />
    </main>
  );
}
