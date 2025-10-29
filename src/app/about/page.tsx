import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import VisionMission from "../../components/about/VisionMission";
import TeamGrid from "../../components/about/TeamGrid";
import Timeline from "../../components/about/Timeline";
import PartnershipHighlights from "../../components/about/PartnershipHighlights";
import AboutHero from "../../components/about/AboutHero";

export const metadata: Metadata = {
  title: "About ITHAC | Empowering Africa's Digital Future",
  description:
    "Learn about ITHAC's vision, mission, team, and journey in transforming Africa's technology landscape through innovation and education.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AboutHero />
      <VisionMission />
      <TeamGrid />
      <Timeline />
      <PartnershipHighlights />
      <Footer />
    </main>
  );
}
