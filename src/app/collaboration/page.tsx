import React from 'react';
import { FadeIn } from '../../components/animations/FadeIn';
import Link from 'next/link';

export default function PartnershipsPage() {
  return (
    <main className="pt-20 bg-surface">
      {/* 1. HEADER HERO */}
      <FadeIn delay={0.1}>
        <section className="relative py-24 bg-surface-container-low overflow-hidden">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-secondary/5 -skew-x-12 transform translate-x-1/4"></div>
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="max-w-4xl">
              <span className="font-label uppercase tracking-widest text-sm text-secondary font-bold mb-4 block">
                Collaboration
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-primary tracking-tighter leading-[1.05] mb-8">
                PARTNERSHIPS <br className="hidden md:block" /> AT ITHAC
              </h1>
              <p className="text-2xl font-bold text-on-surface-variant mb-4">
                Building Strategic Alliances for Sustainable Impact
              </p>
              <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                At ITHAC, partnerships are not transactional. They are
                structured collaborations designed to create measurable value,
                drive innovation, and deliver long term impact across
                individuals, organisations, and communities.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 2. WHO SHOULD PARTNER */}
      <FadeIn delay={0.2}>
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black text-primary mb-8">
                  Who Should Partner with ITHAC
                </h2>
                <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                  We collaborate with organisations and institutions that are
                  committed to growth, innovation, and impact.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Corporate Organisations",
                      desc: "Structured impact initiatives for the modern enterprise.",
                    },
                    {
                      title: "Educational Institutions",
                      desc: "Expanding learning opportunities through technical ecosystems.",
                    },
                    {
                      title: "Development Foundations",
                      desc: "Community transformation through scalable interventions.",
                    },
                    {
                      title: "Startups & Scaleups",
                      desc: "Strategic support and ecosystem access for growth.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10"
                    >
                      <h4 className="font-bold text-primary mb-2 line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-on-surface-variant">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-4 border-white">
                  <img
                    src="/home-page/photo-a.png"
                    alt="Partnerships"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 3. VALUE FOR PARTNERS GRID */}
      <FadeIn delay={0.3}>
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-black text-primary mb-6">
                Value for Partners
              </h2>
              <p className="text-xl text-on-surface-variant">
                Engaging across multiple touchpoints within one integrated
                ecosystem.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Structured Collaboration",
                  desc: "Partnerships designed with clear frameworks, defined objectives, and measurable outcomes.",
                  icon: "account_tree",
                },
                {
                  title: "Multi-Layered Access",
                  desc: "Connect with Tech, Capacity Development, Media, and Social Impact systems.",
                  icon: "layers",
                },
                {
                  title: "Impact Driven Execution",
                  desc: "Every partnership is aligned with initiatives that deliver tangible, trackable results.",
                  icon: "speed",
                },
                {
                  title: "Visibility & Positioning",
                  desc: "Receive structured visibility across our media systems and brand positioning.",
                  icon: "visibility",
                },
                {
                  title: "Talent & Innovation",
                  desc: "Access to a growing pool of trained individuals and emerging innovation initiatives.",
                  icon: "psychology",
                },
              ].map((val, idx) => (
                <div
                  key={idx}
                  className={`p-10 rounded-3xl bg-white border border-outline-variant/5 shadow-sm hover:shadow-md transition-all ${idx === 4 ? "md:col-span-2" : ""}`}
                >
                  <div className="w-12 h-12 bg-secondary/5 rounded-xl flex items-center justify-center text-secondary mb-6">
                    <span className="material-symbols-outlined">
                      {val.icon}
                    </span>
                  </div>
                  <h4 className="font-headline text-2xl font-bold mb-4">
                    {val.title}
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 4. OUR PARTNERSHIP APPROACH */}
      <FadeIn delay={0.4}>
        <section className="py-24 bg-primary text-on-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-on-tertiary-container/5 -skew-x-12 transform translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="max-w-3xl mb-16">
              <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-8">
                Our Partnership Approach
              </h2>
              <p className="text-xl opacity-90 font-medium">
                We do not approach partnerships as one-off engagements. We build
                systems that allow for long-term collaboration.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Long-term Focus",
                  desc: "Building collaborations that evolve and grow over time.",
                },
                {
                  title: "Scalable Initiatives",
                  desc: "Starting small and expanding impact through structured systems.",
                },
                {
                  title: "Shared Ownership",
                  desc: "Collaboratively defining and reaching mission-critical outcomes.",
                },
                {
                  title: "Continuous Review",
                  desc: "Regular evaluation and refinement to ensure sustained relevance.",
                },
              ].map((app, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-white/5 rounded-2xl border border-white/10"
                >
                  <h4 className="font-bold text-on-tertiary-container mb-4 uppercase tracking-widest text-xs">
                    Principle 0{idx + 1}
                  </h4>
                  <h5 className="text-xl font-bold mb-4">{app.title}</h5>
                  <p className="text-sm opacity-70 leading-relaxed font-body">
                    {app.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 5. CALL TO ACTION */}
      <FadeIn delay={0.5}>
        <section className="py-32 bg-surface text-center px-8">
          <div className="max-w-3xl mx-auto bg-surface-container-low p-12 md:p-20 rounded-[4rem] border border-outline-variant/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-secondary/10 rounded-full blur-3xl -ml-12 -mt-12"></div>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">
              If your organisation is looking to drive meaningful impact...
            </h2>
            <p className="text-xl text-on-surface-variant mb-12">
              Then we invite you to partner with ITHAC. Build with us. Execute
              with us. Create impact with us.
            </p>
            <Link
              href="/contact"
              className="bg-secondary text-on-secondary px-12 py-5 rounded-2xl font-black text-xl hover:bg-secondary-container transition-all shadow-xl active:scale-95 inline-block text-center"
            >
              Become a Partner Today
            </Link>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
