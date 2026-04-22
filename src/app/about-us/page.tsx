import React from "react";
import { FadeIn } from "../../components/animations/FadeIn";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="pt-20 bg-surface">
      {/* 1. WHO WE ARE / HERO */}
      <FadeIn delay={0.1}>
        <section className="relative min-h-[70vh] flex items-center overflow-hidden hero-gradient py-24">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[80px]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-white/40 rounded-full mb-8 shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-secondary animate-ping"></span>
                  <span className="text-xs font-bold tracking-widest uppercase text-on-surface-variant">
                    Who We Are
                  </span>
                </div>
                <h1 className="text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] text-primary mb-8">
                  Building Systems for{" "}
                  <span className="text-secondary">Transformation.</span>
                </h1>
                <p className="text-xl text-on-surface-variant leading-relaxed font-medium mb-10 max-w-xl">
                  ITHAC is a technology, innovation, and capacity development
                  ecosystem designed to build individuals, strengthen
                  organisations, and transform communities through structured
                  systems of learning, execution, and collaboration.
                </p>
                <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm max-w-lg mb-8">
                  <p className="text-lg font-bold text-primary mb-2">
                    ITHAC is not a single programme or initiative. It is a
                    system.
                  </p>
                  <p className="text-on-surface-variant italic">
                    Connecting digital skills, innovation, media, and social
                    impact into one continuous pathway for growth.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl relative z-10">
                  <img
                    src="/images/new_content/about_hero.png"
                    alt="Who We Are"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 left-10 p-4 border-l-4 border-secondary backdrop-blur-md bg-white/10 rounded-r-xl">
                    <p className="text-white font-bold text-xl uppercase tracking-tighter">
                      Information Technologies Hub and Cynosure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 2. VISION & MISSION */}
      <FadeIn delay={0.2}>
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-surface-container-low p-12 rounded-[2.5rem] border border-outline-variant/5">
                <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center rounded-2xl mb-8">
                  <span className="material-symbols-outlined text-4xl text-secondary">
                    visibility
                  </span>
                </div>
                <h3 className="font-headline text-3xl font-extrabold mb-6 text-primary">
                  Our Vision
                </h3>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  Our vision is to cultivate a dynamic and modern collective of
                  individuals who avidly embrace the convergence of technology
                  and the arts. We are building a generation that understands
                  how to integrate technical expertise with creative thinking to
                  drive innovation and create sustainable value.
                </p>
              </div>
              <div className="bg-primary text-on-primary p-12 rounded-[2.5rem] border border-white/5 shadow-2xl">
                <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-2xl mb-8">
                  <span className="material-symbols-outlined text-4xl text-on-tertiary-container">
                    rocket_launch
                  </span>
                </div>
                <h3 className="font-headline text-3xl font-extrabold mb-6">
                  Our Mission
                </h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Our mission is to facilitate accessibility to cutting-edge
                  technology, nurture the spirit of entrepreneurship, extend
                  comprehensive training and educational opportunities, and
                  establish a collaborative environment for esteemed individuals
                  in the realm of technology and creative enterprise.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 3. WHAT MAKES ITHAC DIFFERENT */}
      <FadeIn delay={0.3}>
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="font-label uppercase tracking-widest text-sm text-secondary font-bold mb-4 block">
                Differentiation
              </span>
              <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-8">
                What Makes ITHAC Different
              </h2>
              <p className="text-xl text-on-surface-variant leading-relaxed">
                At ITHAC, we do not believe in fragmented learning or isolated
                opportunities. Our approach is built on integration.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Structured Pathways",
                  desc: "Learning journeys that lead directly to real world application.",
                  icon: "account_tree",
                },
                {
                  title: "Execution Systems",
                  desc: "Platforms that connect individuals to tangible execution opportunities.",
                  icon: "settings_input_component",
                },
                {
                  title: "Continuous Growth",
                  desc: "An ecosystem that supports participants across different stages of their journey.",
                  icon: "trending_up",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-10 rounded-2xl shadow-sm border border-outline-variant/10 text-center"
                >
                  <div className="w-12 h-12 bg-secondary/5 rounded-full flex items-center justify-center text-secondary mx-auto mb-6">
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                  </div>
                  <h4 className="font-headline text-xl font-bold mb-4">
                    {item.title}
                  </h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 4. OUR ECOSYSTEM */}
      <FadeIn delay={0.4}>
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4 text-primary">
                  Our Ecosystem
                </h2>
                <p className="text-lg text-on-surface-variant font-body">
                  ITHAC operates through interconnected systems that support
                  different dimensions of growth.
                </p>
              </div>
              <div className="h-px flex-grow bg-outline-variant/30 hidden md:block mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Technology and Innovation",
                  desc: "We develop and support digital solutions, infrastructure, and innovation frameworks that enable businesses and institutions to operate efficiently and scale effectively.",
                  icon: "biotech",
                },
                {
                  title: "Capacity Development",
                  desc: "Through structured programmes, we provide practical training, mentorship, and guided execution pathways that prepare individuals for the demands of the digital economy.",
                  icon: "school",
                },
                {
                  title: "Media and Creative Enterprise",
                  desc: "Through ITHAC Creative Production and Urban View, we drive storytelling, content development, and media systems that enhance visibility.",
                  icon: "movie",
                },
                {
                  title: "Social Impact",
                  desc: "Through the ITHAC Foundation, we implement initiatives that improve access to education, healthcare, and empowerment opportunities.",
                  icon: "volunteer_activism",
                },
              ].map((layer, idx) => (
                <div
                  key={idx}
                  className="flex gap-6 p-8 rounded-2xl bg-surface-container-low hover:bg-white transition-all border border-transparent hover:border-outline-variant/10 shadow-sm"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-xl text-secondary">
                    <span className="material-symbols-outlined text-3xl">
                      {layer.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold mb-3">
                      {layer.title}
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {layer.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 5. OUR APPROACH */}
      <FadeIn delay={0.5}>
        <section className="py-24 bg-primary text-on-primary">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-6">
                Our Methodology
              </h2>
              <p className="text-xl text-on-tertiary-container max-w-2xl mx-auto opacity-90 font-medium">
                Rooted in three core principles designed for lasting
                transformation.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Structure",
                  desc: "Every programme and initiative is designed with clear frameworks, defined pathways, and measurable outcomes.",
                },
                {
                  title: "Application",
                  desc: "We prioritise practical engagement, ensuring that learning is translated into real world execution.",
                },
                {
                  title: "Sustainability",
                  desc: "Our focus extends beyond short term results to long term impact, ensuring growth beyond initial engagement.",
                },
              ].map((princ, idx) => (
                <div
                  key={idx}
                  className="relative group p-10 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="text-7xl font-black text-secondary/10 absolute top-4 right-10">
                    0{idx + 1}
                  </div>
                  <h4 className="font-headline text-2xl font-bold mb-6 relative z-10">
                    {princ.title}
                  </h4>
                  <p className="opacity-80 leading-relaxed font-body relative z-10">
                    {princ.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 6. OUR COMMITMENT & FINAL CALL */}
      <FadeIn delay={0.6}>
        <section className="py-24 bg-surface overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-8">
                Our Commitment
              </h2>
              <p className="text-xl text-on-surface-variant mb-12 italic">
                "We are building more than programmes. We are building a future
                driven by innovation, collaboration, and purposeful execution."
              </p>
              <div className="grid sm:grid-cols-3 gap-8">
                <div className="p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
                  <p className="font-bold text-primary mb-2">Individuals</p>
                  <p className="text-sm">
                    Gain not just skills, but opportunities.
                  </p>
                </div>
                <div className="p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
                  <p className="font-bold text-primary mb-2">Organisations</p>
                  <p className="text-sm">
                    Develop not just ideas, but scalable structures.
                  </p>
                </div>
                <div className="p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
                  <p className="font-bold text-primary mb-2">Communities</p>
                  <p className="text-sm">
                    Experience not just interventions, but lasting
                    transformation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-[3rem] p-12 md:p-20 text-center text-on-secondary relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                  Join us in building systems <br className="hidden md:block" />{" "}
                  that create real impact.
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="https://forms.gle/5YSKCpEuBYYTGmBY9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-secondary px-10 py-4 rounded-xl font-black shadow-lg hover:shadow-xl transition-all active:scale-95 text-center"
                  >
                    Individual Seeking Growth
                  </Link>
                  <Link
                    href="/collaboration"
                    className="bg-primary text-white px-10 py-4 rounded-xl font-black shadow-lg hover:shadow-xl transition-all active:scale-95 text-center"
                  >
                    Organisation Seeking Structure
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
