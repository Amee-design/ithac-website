import { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactHero from "../../components/contact/ContactHero";
import ContactForm from "../../components/contact/ContactForm";
import ContactInfo from "../../components/contact/ContactInfo";
import FAQ from "../../components/contact/FAQ";
import MapSection from "../../components/contact/MapSection";
import SupportCTA from "../../components/contact/SupportCTA";

export const metadata: Metadata = {
  title: "Contact Us | ITHAC - Let's Build Something Amazing Together",
  description:
    "Get in touch with ITHAC for your next digital project. Contact our team of experts for web development, mobile apps, and digital transformation services.",
  keywords:
    "contact ITHAC, digital transformation, web development, mobile apps, technology consultation, Nigeria, Africa",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <FAQ />
      <MapSection />
      <SupportCTA />
      <Footer />
    </main>
  );
}
