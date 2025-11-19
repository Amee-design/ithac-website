import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogHero from "../../components/blog/BlogHero";
import BlogGrid from "../../components/blog/BlogGrid";
import BlogCategories from "../../components/blog/BlogCategories";
import BlogNewsletter from "../../components/blog/BlogNewsletter";

export const metadata: Metadata = {
  title: "Blog | ITHAC - Tech Insights & Industry Updates",
  description:
    "Stay updated with the latest technology trends, industry insights, and educational content from ITHAC's expert team. Learn about African tech innovation and career development.",
  keywords: [
    "technology blog",
    "African tech trends",
    "programming tutorials",
    "career development",
    "tech industry insights",
    "ITHAC blog",
    "software development",
    "tech education",
    "innovation Africa",
  ],
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
      <BlogNewsletter />
      <Footer />
    </main>
  );
}
