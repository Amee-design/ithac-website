import React from "react";
import { FadeIn } from "../components/animations/FadeIn";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="pt-20 bg-surface min-h-screen">
      {/* 1. HERO SECTION */}
      <FadeIn delay={0.1}>
        <section className="relative min-h-[calc(100svh-5rem)] md:min-h-[85vh] flex items-start md:items-center overflow-hidden bg-primary pt-10 md:pt-0 pb-10">
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              className="w-full h-full object-cover"
              src="/images/new_content/hero.png"
              alt="ITHAC Ecosystem"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-primary leading-[1.1] tracking-tight mb-6">
                Building Africa’s Digital Capacity Through{" "}
                <span className="text-on-tertiary-container">
                  Structured Innovation
                </span>{" "}
                and Applied Learning
              </h1>
              <p className="text-xl text-on-primary-container font-medium mb-10 leading-relaxed max-w-2xl">
                ITHAC is a technology, innovation, and capacity development
                ecosystem designed to move individuals, organisations, and
                communities from knowledge to execution, and from execution to
                measurable impact.
              </p>
              <div className="flex flex-wrap gap-4">
                {/* <Link
                  href="https://forms.gle/5YSKCpEuBYYTGmBY9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-secondary-container text-on-secondary px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all active:scale-95 inline-block text-center"
                >
                  Apply for a Programme
                </Link> */}
                <Link
                  href="/courses"
                  className="bg-white/90 text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-white transition-all active:scale-95 inline-block text-center"
                >
                  Browse Courses
                </Link>
                <Link
                  href="https://chat.whatsapp.com/H0y0nOJAvpNEdQJS3BaSs8?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface-container-lowest/10 backdrop-blur-md border border-white/20 text-on-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all active:scale-95 inline-block text-center"
                >
                  Join the Community
                </Link>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 2. WHAT IS ITHAC SECTION */}
      <FadeIn delay={0.2}>
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="font-label uppercase tracking-widest text-sm text-secondary font-bold mb-4 block">
                  Definition
                </span>
                <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-8">
                  What is ITHAC?
                </h2>
                <p className="text-xl text-on-surface-variant leading-relaxed mb-6 font-medium">
                  ITHAC exists at the intersection of technology, education, and
                  innovation.
                </p>
                <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
                  As an integrated ecosystem, we provide structured pathways
                  that connect digital skill development, organisational growth,
                  and community impact through a unified system of programmes,
                  partnerships, and execution frameworks.
                </p>
                <p className="text-lg text-on-surface-variant leading-relaxed italic border-l-4 border-secondary pl-6 py-2">
                  "Our approach is not fragmented. It is designed to ensure that
                  every learning experience translates into real world
                  application, and every opportunity leads to sustainable
                  outcomes."
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl scale-95 hover:scale-100 transition-transform duration-700">
                  <img
                    src="/home-page/photo-a.png"
                    alt="Collaborative Innovation"
                    className="w-[110%] h-[110%] object-cover -translate-x-[5%]"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary-container/20 rounded-full blur-[80px] -z-10"></div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 3. WHO WE SERVE SECTION */}
      <FadeIn delay={0.3}>
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-8 text-center mb-16">
            <span className="font-label uppercase tracking-widest text-sm text-secondary font-bold mb-4 block">
              Audience
            </span>
            <h2 className="font-headline text-4xl font-extrabold tracking-tight">
              Who We Serve
            </h2>
          </div>
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Individuals",
                desc: "Students, early professionals, and career transitioners seeking structured pathways into the digital economy through practical skill development and guided execution.",
                img: "/home-page/photo-a.png",
              },
              {
                title: "Organisations and Founders",
                desc: "Teams and institutions looking to build scalable systems, strengthen operational structures, and position themselves for long term growth.",
                img: "/home-page/photo-b.png",
              },
              {
                title: "Communities",
                desc: "Underserved populations requiring access to education, healthcare support, and empowerment initiatives that improve quality of life and economic participation.",
                img: "/home-page/photo-c.png",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-surface p-8 rounded-2xl shadow-sm border border-outline-variant/10 flex flex-col items-center text-center"
              >
                <div className="w-full aspect-video rounded-xl overflow-hidden mb-6">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* 4. CORE PROGRAMMES SECTION */}
      <FadeIn delay={0.4}>
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div className="max-w-2xl">
                <span className="font-label uppercase tracking-widest text-sm text-secondary font-bold mb-4 block">
                  Excellence
                </span>
                <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4">
                  Core Programmes
                </h2>
                <p className="text-lg text-on-surface-variant">
                  We do not just teach. We build systems that enable growth,
                  scalability, and transformation.
                </p>
              </div>
              <Link
                href="/services"
                className="hidden md:block bg-secondary text-on-secondary px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all active:scale-95 text-center"
              >
                Explore Programmes
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Digital Empowerment Accelerator",
                  desc: "A structured capacity development programme designed to equip individuals with practical digital skills, guided mentorship, and project based experience that leads to employability and independent earning opportunities.",
                  icon: "bolt",
                },
                {
                  title: "Enhanced Partnership Programme",
                  desc: "A long term strategic growth programme designed for organisations and founders to build internal systems, develop sustainable partnerships, and align execution with long term organisational goals.",
                  icon: "handshake",
                },
                {
                  title: "Innovation and Community Initiatives",
                  desc: "Targeted interventions that integrate technology, education, and social impact to address real challenges within communities through scalable and measurable solutions.",
                  icon: "groups",
                },
              ].map((prog, idx) => (
                <div
                  key={idx}
                  className="group p-8 rounded-2xl bg-surface-container-low border border-transparent hover:border-secondary transition-all hover:bg-white shadow-sm"
                >
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-3xl">
                      {prog.icon}
                    </span>
                  </div>
                  <h3 className="font-headline text-xl font-bold mb-4">
                    {prog.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    {prog.desc}
                  </p>
                  <Link
                    href="/services"
                    className="text-secondary font-bold text-sm flex items-center gap-2"
                  >
                    Explore Programmes{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 5. THE ITHAC ECOSYSTEM SECTION */}
      <FadeIn delay={0.5}>
        <section className="py-24 bg-primary text-on-primary overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-on-tertiary-container/5 -skew-x-12 transform translate-x-1/4"></div>
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="max-w-3xl mb-16">
              <span className="font-label uppercase tracking-widest text-sm text-on-tertiary-container font-bold mb-4 block">
                Infrastructure
              </span>
              <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-8">
                The ITHAC Ecosystem
              </h2>
              <p className="text-xl opacity-90 leading-relaxed">
                ITHAC operates as a multi layered ecosystem designed to support
                growth across different sectors through specialised structures:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Technology and Innovation",
                  desc: "Development of digital solutions, infrastructure, and applied technology frameworks that support business and institutional needs.",
                },
                {
                  title: "Capacity Development",
                  desc: "Structured learning programmes focused on practical application, mentorship, and real world project execution.",
                },
                {
                  title: "Media and Creative",
                  desc: "Strategic storytelling and content systems through ITHAC Creative Production and Urban View that support brand positioning.",
                },
                {
                  title: "Social Impact Systems",
                  desc: "ITHAC Foundation implements community based interventions across education, healthcare, and empowerment.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <h4 className="font-headline text-xl font-bold mb-4 text-on-tertiary-container">
                    {item.title}
                  </h4>
                  <p className="text-sm opacity-80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-16 text-center text-lg italic opacity-70 max-w-4xl mx-auto">
              Each layer is interconnected, ensuring that learning, execution,
              and impact are not isolated but part of a continuous growth
              system.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* 6. IMPACT & OPPORTUNITIES SECTION */}
      <FadeIn delay={0.6}>
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <span className="font-label uppercase tracking-widest text-sm text-secondary font-bold mb-4 block">
                  Outcomes
                </span>
                <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-8">
                  Impact
                </h2>
                <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                  Our work is defined by measurable outcomes and sustained value
                  creation. We have supported individuals in transitioning into
                  the digital economy, enabled organisations to build scalable
                  systems, and delivered community interventions that improve
                  access to essential services.
                </p>
                <div className="bg-secondary/5 p-8 rounded-[2rem] border-2 border-dashed border-secondary/20">
                  <h4 className="font-headline text-2xl font-bold mb-4 text-secondary">
                    Impact for us is not activity.
                  </h4>
                  <p className="text-lg font-medium opacity-80">
                    It is a transformation that can be tracked, measured, and
                    sustained.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-8">
                  Opportunities
                </h2>
                <div className="space-y-4">
                  {[
                    "Campus Ambassador Programme",
                    "Structured learning programmes",
                    "Partnership and collaboration opportunities",
                    "Community initiatives and engagement platforms",
                  ].map((opp, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-5 rounded-xl bg-surface-container-low border border-outline-variant/5 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined">
                          check_circle
                        </span>
                      </div>
                      <span className="font-bold text-lg">{opp}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-on-surface-variant italic">
                  Each opportunity is designed to move participants from passive
                  involvement to active contribution within the ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 7. PROOF & CREDIBILITY SECTION */}
      <FadeIn delay={0.7}>
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <span className="font-label uppercase tracking-widest text-sm text-secondary font-bold mb-4 block">
              Credibility
            </span>
            <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-8">
              Built on Structure
            </h2>
            <p className="text-xl text-on-surface-variant mb-12 leading-relaxed">
              Our programmes and initiatives are built on structured frameworks,
              guided mentorship, and collaborative execution. We work with
              institutions, organisations, and communities to ensure that every
              intervention delivers measurable value and aligns with long term
              development goals.
            </p>
            <div className="text-3xl font-headline font-black text-primary leading-tight">
              The future of work, innovation, and growth requires more than
              intention. <br className="hidden md:block" />
              It requires{" "}
              <span className="text-secondary">
                structure, systems, and the right ecosystem.
              </span>
            </div>
            <p className="mt-6 text-2xl font-bold text-on-surface-variant">
              ITHAC provides that ecosystem.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* 8. FINAL CTA SECTION */}
      <FadeIn delay={0.8}>
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
            <h2 className="text-5xl font-black mb-12">Take the Next Step.</h2>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link
                href="https://forms.gle/5YSKCpEuBYYTGmBY9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-zinc-800 transition-all shadow-xl active:scale-95 inline-block text-center"
              >
                Apply for a Programme
              </Link>
              <Link
                href="https://chat.whatsapp.com/H0y0nOJAvpNEdQJS3BaSs8?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-on-secondary px-12 py-5 rounded-2xl font-black text-xl hover:bg-secondary-container transition-all shadow-xl active:scale-95 inline-block text-center"
              >
                Join the Community
              </Link>
              <Link
                href="/collaboration"
                className="border-4 border-primary text-primary px-12 py-5 rounded-2xl font-black text-xl hover:bg-primary hover:text-white transition-all active:scale-95 inline-block text-center"
              >
                Partner with us
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
