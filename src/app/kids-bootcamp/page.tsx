import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "../../components/animations/FadeIn";
import BootcampJourney from "../../components/kids-bootcamp/BootcampJourney";

export const metadata: Metadata = {
  title: "ITHAC Kids Summer Bootcamp | AI & Drone Technology for Kids",
  description:
    "A six-day summer bootcamp introducing young minds in Abuja to Artificial Intelligence, prompt engineering, and hands-on drone technology. Watch the day-by-day journey.",
  keywords: [
    "ITHAC Kids Bootcamp",
    "kids summer bootcamp Abuja",
    "AI for kids",
    "drone technology for kids",
    "STEM education Nigeria",
    "tech for kids",
    "prompt engineering",
  ],
  openGraph: {
    title: "ITHAC Kids Summer Bootcamp",
    description:
      "Six days. One learning journey. From curious questions about AI to young hands flying drones with real confidence.",
    images: ["/og.png"],
    type: "website",
  },
};

const highlights = [
  {
    icon: "smart_toy",
    title: "Artificial Intelligence",
    desc: "Understanding how AI works and thinking beyond what they already know.",
  },
  {
    icon: "forum",
    title: "Prompt Engineering",
    desc: "Learning that a useful answer is less about what you ask and more about how you ask it.",
  },
  {
    icon: "flight_takeoff",
    title: "Drone Technology",
    desc: "Drone anatomy, flight principles, safety, and real practical flying in the field.",
  },
  {
    icon: "groups",
    title: "Hands-On Learning",
    desc: "Trying, making mistakes, adjusting, and trying again until the pieces click.",
  },
];

export default function KidsBootcampPage() {
  return (
    <main className="pt-20 bg-surface">
      {/* HERO */}
      <FadeIn delay={0.1}>
        <section className="relative overflow-hidden bg-primary py-24 md:py-32">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 h-full w-1/2 bg-secondary -skew-x-12 translate-x-1/3" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-on-tertiary-container text-tertiary text-xs font-bold tracking-widest uppercase mb-6">
              ITHAC Foundation · Abuja
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-headline text-on-primary tracking-tight mb-6 leading-tight">
              ITHAC Kids Summer Bootcamp
            </h1>
            <p className="text-xl md:text-2xl text-on-primary-container font-bold max-w-3xl leading-relaxed mb-4">
              Six days. One learning journey.
            </p>
            <p className="text-lg text-on-primary-container opacity-80 max-w-2xl leading-relaxed mb-10">
              We put curious young minds in a room and started talking about
              Artificial Intelligence and drone technology. What followed was a
              week of questions, first attempts, and real growth. This is how it
              went, day by day.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#journey"
                className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-bold hover:bg-secondary-container transition-all active:scale-95"
              >
                Watch the Journey
              </a>
              <Link
                href="/contact"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all"
              >
                Bring This to Your School
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* WHAT THEY EXPLORED */}
      <FadeIn delay={0.2}>
        <section className="py-20 bg-white border-b border-outline-variant/5">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-12 max-w-2xl">
              <span className="font-label uppercase tracking-widest text-sm text-secondary font-bold mb-4 block">
                The Curriculum
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-black text-primary tracking-tight">
                What the Kids Explored
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/10 h-full"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-5 text-secondary">
                    <span className="material-symbols-outlined text-2xl">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* DAY BY DAY VIDEOS */}
      <div id="journey">
        <BootcampJourney />
      </div>

      {/* CLOSING CTA */}
      <FadeIn delay={0.3}>
        <section className="py-24 bg-primary text-on-primary text-center">
          <div className="max-w-3xl mx-auto px-8">
            <h2 className="text-4xl font-black mb-6 leading-tight">
              Watching them move from “how does this work?” to “I’ve got this”
              was the best part of the week.
            </h2>
            <p className="text-lg text-on-primary-container opacity-80 mb-10">
              The ITHAC Foundation runs structured technology programmes for
              young people. If you would like to partner with us or bring a
              bootcamp to your school or community, let’s talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-secondary text-on-secondary px-12 py-5 rounded-2xl font-black text-xl hover:bg-secondary-container transition-all active:scale-95 shadow-xl inline-block text-center"
              >
                Get in Touch
              </Link>
              <Link
                href="/collaboration"
                className="bg-white/10 border border-white/20 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-all active:scale-95 inline-block text-center"
              >
                Partner with Us
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
