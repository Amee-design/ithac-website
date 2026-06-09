import React from "react";
import { FadeIn } from "../../components/animations/FadeIn";
import Link from "next/link";

export default function EcosystemPage() {
  return (
    <main className="pt-20 bg-surface">
      {/* 1. HEADER */}
      <FadeIn delay={0.1}>
        <section className="relative overflow-hidden bg-primary py-24 md:py-32">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary -skew-x-12 transform translate-x-1/2"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 relative z-10 text-center md:text-left">
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-on-tertiary-container text-tertiary text-xs font-bold tracking-widest uppercase mb-6">
                Integrated Solutions
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter text-on-primary leading-[1.1] mb-8">
                ITHAC ECOSYSTEM
              </h1>
              <p className="text-2xl text-on-primary-container leading-relaxed mb-4 font-bold">
                An Integrated System for Innovation, Capacity, and Impact
              </p>
              <p className="text-xl text-on-primary-container opacity-80 max-w-2xl leading-relaxed">
                ITHAC operates as a multi-layered ecosystem designed to support
                individuals, organisations, and communities through
                interconnected systems of technology, training, media, and
                social impact.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 2. CORE SOLUTIONS GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="text-4xl font-black text-primary mb-6">
                  Technology and Innovation Systems
                </h2>
                <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                  ITHAC develops and supports digital solutions, technology
                  infrastructure, and innovation frameworks that enable
                  businesses and institutions to operate efficiently and scale
                  effectively. This includes software development, digital
                  solution deployment, and infrastructure support tailored to
                  organisational needs.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    "Startups",
                    "Digital Transformation",
                    "Structured Systems",
                  ].map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-1.5 bg-secondary/5 text-secondary text-xs font-bold uppercase rounded-lg border border-secondary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href="/contact"
                    className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all text-center"
                  >
                    Explore Solutions
                  </Link>
                  <Link
                    href="/collaboration"
                    className="border-2 border-primary text-primary px-8 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-all text-center"
                  >
                    Partner with ITHAC
                  </Link>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl skew-y-1">
                <img
                  src="/home-page/photo%20(6).jpg"
                  alt="Technology Systems"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
            <FadeIn direction="left" className="lg:order-2">
              <div>
                <h2 className="text-4xl font-black text-primary mb-6">
                  Training and Capacity Development
                </h2>
                <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                  Through initiatives such as the Digital Empowerment
                  Accelerator, participants gain not just knowledge, but the
                  ability to apply skills in real world contexts. The Campus
                  Ambassador Programme extends this by positioning students as
                  active participants within the ecosystem.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl">
                    <span className="material-symbols-outlined text-secondary">
                      school
                    </span>
                    <span className="font-bold">
                      Digital Empowerment Accelerator
                    </span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl">
                    <span className="material-symbols-outlined text-secondary">
                      campaign
                    </span>
                    <span className="font-bold">
                      Campus Ambassador Programme
                    </span>
                  </div>
                </div>
                <Link
                  href="https://forms.gle/FVRTXAu4VA3FEAcZA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-bold hover:bg-secondary-container transition-all text-center inline-block"
                >
                  Join as a Campus Ambassador
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" className="lg:order-1">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl -skew-y-1">
                <img
                  src="/home-page/photo%20(7).jpg"
                  alt="Capacity Development"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-surface-container-low p-10 rounded-3xl h-full flex flex-col justify-between border border-outline-variant/5">
                <div>
                  <div className="w-14 h-14 bg-on-tertiary-container/10 flex items-center justify-center rounded-2xl mb-8">
                    <span className="material-symbols-outlined text-3xl text-on-tertiary-container">
                      movie
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Media and Creative Systems
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    Through ITHAC Creative Production and UrbanView MediaWorks,
                    we develop strategic media and creative systems that support
                    communication, storytelling, and brand positioning.
                  </p>
                </div>
                <Link
                  href="/hub"
                  className="text-secondary font-bold text-sm flex items-center gap-2"
                >
                  Explore Creative Solutions{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-surface-container-low p-10 rounded-3xl h-full flex flex-col justify-between border border-outline-variant/5">
                <div>
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-2xl mb-8">
                    <span className="material-symbols-outlined text-3xl text-primary">
                      volunteer_activism
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Social Impact Systems
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    Through ITHAC Foundation, we design and implement
                    community-based interventions focused on education,
                    healthcare, and empowerment.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="text-secondary font-bold text-sm flex items-center gap-2"
                >
                  Support an Initiative{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-primary text-on-primary p-10 rounded-3xl h-full flex flex-col justify-between shadow-xl">
                <div>
                  <div className="w-14 h-14 bg-white/10 flex items-center justify-center rounded-2xl mb-8">
                    <span className="material-symbols-outlined text-3xl">
                      hub
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6">Co-working Space</h3>
                  <p className="opacity-80 text-sm leading-relaxed mb-6">
                    A collaborative environment designed to support
                    productivity, innovation, and interaction among individuals
                    and teams.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="text-on-tertiary-container font-black text-sm flex items-center gap-2"
                >
                  Access the Space{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. A CONNECTED ECOSYSTEM SUMMARY */}
      <FadeIn delay={0.4}>
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-5xl mx-auto px-8 text-center">
            <h2 className="text-4xl font-extrabold text-primary mb-8 tracking-tight">
              A Connected Ecosystem
            </h2>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-12">
              Each part of the ITHAC ecosystem is designed to function
              independently while contributing to a broader system that supports
              continuous growth.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 text-left mb-16">
              <div className="p-6 border-l-4 border-secondary bg-white shadow-sm rounded-r-xl">
                <p className="text-sm font-bold opacity-60 uppercase mb-2">
                  Pathway 1
                </p>
                <p className="font-medium">
                  Move from training into internship opportunities.
                </p>
              </div>
              <div className="p-6 border-l-4 border-secondary bg-white shadow-sm rounded-r-xl">
                <p className="text-sm font-bold opacity-60 uppercase mb-2">
                  Pathway 2
                </p>
                <p className="font-medium">
                  Move from partnership into technology solutions.
                </p>
              </div>
              <div className="p-6 border-l-4 border-secondary bg-white shadow-sm rounded-r-xl">
                <p className="text-sm font-bold opacity-60 uppercase mb-2">
                  Pathway 3
                </p>
                <p className="font-medium">
                  Connect community initiatives into funding and impact.
                </p>
              </div>
            </div>
            <p className="text-3xl font-black text-primary leading-tight">
              ITHAC is not just a platform. It is an ecosystem designed to
              support your growth at every stage.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* 4. FINAL CTA */}
      <FadeIn delay={0.5}>
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="bg-secondary rounded-[3rem] p-12 md:p-20 text-center text-on-secondary relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-black mb-8">
                  Be part of a system that is built to create real outcomes.
                </h3>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href="/contact"
                    className="bg-primary text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-zinc-800 transition-all shadow-xl active:scale-95 inline-block text-center"
                  >
                    Explore Solutions
                  </Link>
                  <Link
                    href="/collaboration"
                    className="bg-white text-secondary px-12 py-5 rounded-2xl font-black text-xl hover:bg-zinc-100 transition-all shadow-xl active:scale-95 inline-block text-center"
                  >
                    Partner with us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
