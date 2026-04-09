import { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import InstructorApplyHero from "../../../components/instructor/InstructorApplyHero";
import InstructorApplyForm from "../../../components/instructor/InstructorApplyForm";

export const metadata: Metadata = {
  title: "Become an Instructor | ITHAC",
  description:
    "Apply to become an instructor at ITHAC. Share your tech knowledge and inspire the next generation.",
};

export default function InstructorApplyPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <InstructorApplyHero />
      <InstructorApplyForm />
      <Footer />
    </main>
  );
}
