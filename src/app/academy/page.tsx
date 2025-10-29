import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AcademyHero from "../../components/academy/AcademyHero";
import CourseCategories from "../../components/academy/CourseCategories";
import RegistrationForm from "../../components/academy/RegistrationForm";

export const metadata: Metadata = {
  title: "Academy | ITHAC - Learn. Build. Lead.",
  description:
    "Join ITHAC Academy and transform your career with comprehensive technology training programs. Learn from industry experts and build real-world projects.",
};

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AcademyHero />
      <CourseCategories />
      <RegistrationForm />
      <Footer />
    </main>
  );
}
