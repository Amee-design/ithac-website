import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CommunityHero from "../../components/community/CommunityHero";
import CommunityStats from "../../components/community/CommunityStats";
import CommunityEvents from "../../components/community/CommunityEvents";
import CommunityForums from "../../components/community/CommunityForums";
import CommunityMentorship from "../../components/community/CommunityMentorship";
import CommunityJoin from "../../components/community/CommunityJoin";

export const metadata: Metadata = {
  title: "Community | ITHAC - Join Africa's Tech Community",
  description:
    "Join ITHAC's vibrant community of tech enthusiasts, developers, and innovators across Africa. Connect, learn, and grow together in our supportive tech ecosystem.",
  keywords: [
    "tech community",
    "African developers",
    "tech networking",
    "developer community",
    "tech events",
    "mentorship program",
    "ITHAC community",
    "tech forums",
    "peer learning",
  ],
};

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CommunityHero />
      <CommunityStats />
      <CommunityEvents />
      <CommunityForums />
      <CommunityMentorship />
      <CommunityJoin />
      <Footer />
    </main>
  );
}
