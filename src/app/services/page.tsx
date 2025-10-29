import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServicesHero from "../../components/services/ServicesHero";
import ServiceCards from "../../components/services/ServiceCards";
import WhyChooseITHAC from "../../components/services/WhyChooseITHAC";

export const metadata: Metadata = {
  title: "Services | ITHAC - Comprehensive Technology Solutions",
  description:
    "Discover ITHAC's comprehensive technology services including custom software development, cloud solutions, training programs, and digital transformation consultancy.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ServicesHero />
      <ServiceCards />
      <WhyChooseITHAC />
      <Footer />
    </main>
  );
}
