import React from "react";
import { FadeIn } from "../../components/animations/FadeIn";
import Link from "next/link";

export default function ProgramsPage() {
  return (
    <main className="pt-20 bg-surface">
      {/* 1. HEADER */}
      <FadeIn delay={0.1}>
        <header className="relative py-24 bg-surface-container-low overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 -skew-x-12 transform translate-x-1/3"></div>
          <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
            <span className="font-label uppercase tracking-widest text-sm text-secondary font-bold mb-4 block">
              Our Pathways
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-primary tracking-tighter leading-[1.05] mb-8">
              CURRENT PROGRAMMES <br className="hidden md:block" /> AT ITHAC
            </h1>
            <p className="text-2xl font-bold text-on-surface-variant max-w-3xl mx-auto mb-8">
              Structured Pathways for Growth, Execution, and Impact
            </p>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
              At ITHAC, programmes are not designed as isolated learning
              experiences. They are structured pathways that move participants
              from uncertainty to clarity, from learning to application, and
              from effort to measurable results.
            </p>
          </div>
        </header>
      </FadeIn>

      {/* 2. DIGITAL EMPOWERMENT ACCELERATOR */}
      <FadeIn delay={0.2}>
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full mb-6">
                  <span className="text-secondary font-bold text-xs uppercase tracking-widest">
                    Skill Acceleration
                  </span>
                </div>
                <h2 className="font-headline text-4xl md:text-5xl font-black mb-6 text-primary">
                  Digital Empowerment Accelerator
                </h2>
                <p className="text-2xl font-bold text-secondary mb-8 leading-tight">
                  From Learning Without Direction to Building With Structure
                </p>
                <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                  Many individuals enter the digital space with ambition but
                  without clarity. They consume content, explore multiple
                  skills, and invest time into learning, yet struggle to
                  translate that effort into real opportunities. The Digital
                  Empowerment Accelerator is designed to eliminate that gap.
                </p>

                <div className="space-y-8 mb-10">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined">
                        person_search
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        Who This Is For
                      </h4>
                      <p className="text-on-surface-variant">
                        Students seeking relevant digital skills and early
                        professionals looking to transition into the digital
                        economy.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">
                        crisis_alert
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        What This Programme Solves
                      </h4>
                      <ul className="text-on-surface-variant text-sm space-y-2 list-disc pl-4">
                        <li>Lack of direction in skill development</li>
                        <li>
                          Inability to apply knowledge to real world scenarios
                        </li>
                        <li>
                          Difficulty in converting skills into income or
                          employability
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Link
                  href="https://forms.gle/5YSKCpEuBYYTGmBY9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-zinc-800 transition-all shadow-xl active:scale-95 inline-block text-center"
                >
                  Apply for the Accelerator
                </Link>
              </div>
              <div className="relative">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img
                    src="/programs-images/digital-empowerment-accelerator.jpeg"
                    alt="Digital Empowerment Accelerator"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 3. ENHANCED PARTNERSHIP PROGRAMME */}
      <FadeIn delay={0.3}>
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/programs-images/enhanced-partnership-program.jpeg"
                    alt="Enhanced Partnership Programme"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-on-tertiary-container/10 rounded-full mb-6">
                  <span className="text-on-tertiary-container font-bold text-xs uppercase tracking-widest">
                    Scalable Growth
                  </span>
                </div>
                <h2 className="font-headline text-4xl md:text-5xl font-black mb-6 text-primary">
                  Enhanced Partnership Programme
                </h2>
                <p className="text-2xl font-bold text-on-tertiary-container mb-8 leading-tight">
                  From Effort Without Systems to Scalable Growth
                </p>
                <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                  Many organisations and founders are actively working, yet
                  struggle with consistency, alignment, and long term growth.
                  The challenge is not effort. It is the absence of structure.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                  <div className="p-6 bg-white rounded-2xl shadow-sm border border-outline-variant/10">
                    <h4 className="font-bold mb-2">Sustainable Systems</h4>
                    <p className="text-sm text-on-surface-variant">
                      Build internal structures that support long-term
                      organisational goals.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow-sm border border-outline-variant/10">
                    <h4 className="font-bold mb-2">Strategic Clarity</h4>
                    <p className="text-sm text-on-surface-variant">
                      Move from fragmented execution to coordinated, scalable
                      systems.
                    </p>
                  </div>
                </div>

                <Link
                  href="https://forms.gle/oLsE2BoVxGLJFCxVA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-on-secondary px-10 py-4 rounded-xl font-bold hover:bg-secondary-container transition-all shadow-xl active:scale-95 inline-block text-center"
                >
                  Apply for Enhanced Partnership
                </Link>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 4. WHY ITHAC PROGRAMMES ARE DIFFERENT */}
      <FadeIn delay={0.4}>
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-8">
              Why ITHAC Programmes Are Different
            </h2>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-12">
              ITHAC programmes are built on integration, not isolation.
              Participants are not left to figure things out independently. They
              are supported within a system that connects learning, execution,
              and opportunity.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-8 border-2 border-primary rounded-3xl">
                <span className="material-symbols-outlined text-5xl text-primary mb-4">
                  track_changes
                </span>
                <h4 className="text-xl font-black mb-2">
                  Actionablecapability
                </h4>
                <p className="text-sm">
                  We measure success by transformation, not just participation.
                </p>
              </div>
              <div className="p-8 border-2 border-secondary rounded-3xl">
                <span className="material-symbols-outlined text-5xl text-secondary mb-4">
                  hub
                </span>
                <h4 className="text-xl font-black mb-2">Ecosystem Driven</h4>
                <p className="text-sm">
                  Direct connection between learning and real-world execution
                  platforms.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 5. FINAL CTA */}
      <FadeIn delay={0.5}>
        <section className="py-24 bg-primary text-on-primary">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Join a system that is built <br className="hidden md:block" /> to
              deliver results.
            </h2>
            <p className="text-xl opacity-80 mb-12">
              Whether you are an individual seeking direction or an organisation
              seeking structure.
            </p>
            <Link
              href="https://forms.gle/5YSKCpEuBYYTGmBY9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-on-secondary px-12 py-5 rounded-2xl font-black text-xl hover:bg-secondary-container transition-all shadow-xl active:scale-95 inline-block text-center"
            >
              Apply Today
            </Link>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
