import React from 'react';
import { FadeIn } from '../../components/animations/FadeIn';
import Link from 'next/link';

export default function ImpactPage() {
  return (
    <main className="pt-20 bg-surface">
      
      {/* 1. HERO - IMPACT OVERVIEW */}
      <FadeIn delay={0.1}>
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-on-tertiary-container/10 -skew-x-12 transform translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
            <span className="text-on-tertiary-container font-black tracking-[0.3em] uppercase text-sm mb-6 block">Our Legacy</span>
            <h1 className="text-5xl md:text-7xl font-black text-on-primary tracking-tighter leading-[1.05] mb-8">
              MEASURABLE <br className="hidden md:block"/> IMPACT
            </h1>
            <p className="text-2xl font-bold text-on-primary-container max-w-3xl mx-auto mb-8">
              Moving Beyond Intention to Trackable Transformation
            </p>
            <p className="text-xl text-on-primary-container opacity-80 max-w-2xl mx-auto leading-relaxed">
              At ITHAC, impact is not just an activity. It is a transformation that can be tracked, measured, and sustained across individuals, organisations, and communities.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* 2. METRICS SECTION */}
      <FadeIn delay={0.2}>
        <section className="py-24 bg-white border-b border-outline-variant/5">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Individuals Empowered", value: "2,500+" },
                { label: "Systems Built", value: "120+" },
                { label: "Communities Reached", value: "45" },
                { label: "Impact Sustainability", value: "98%" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-8 bg-surface-container-low rounded-3xl border border-outline-variant/10">
                  <div className="text-4xl md:text-5xl font-black text-secondary mb-2">{stat.value}</div>
                  <div className="text-sm font-bold opacity-60 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 3. FEATURED PROJECTS - CASE STUDIES */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20">
            <span className="font-label uppercase tracking-widest text-sm text-secondary font-bold mb-4 block">Case Studies</span>
            <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight">Featured Impact Projects</h2>
          </div>

          <div className="grid gap-24">
            {[
              {
                title: "Medical Outreach & Support",
                tag: "Healthcare",
                desc: "Implementing community-based interventions that improve access to essential medical services and health education for underserved populations.",
                outcome: "Successfully reached 5,000+ individuals with primary healthcare support and screenings.",
                img: "/images/new_content/medical_impact.png",
                color: "ithac-blue"
              },
              {
                title: "Education & Digital Literacy",
                tag: "Education",
                desc: "Equipping children and youth with digital tools and structured learning frameworks to bridge the educational gap.",
                outcome: "Distributed 500+ tablets and established 10 modern learning hubs across suburban regions.",
                img: "/images/new_content/education_impact.png",
                color: "ithac-emerald"
              },
              {
                title: "Community Feeding Initiatives",
                tag: "Social Impact",
                desc: "Targeted interventions integrating technology and social impact to solve nutritional challenges within local communities.",
                outcome: "Provided 100,000+ nutritious meals through structured community distribution systems.",
                img: "/images/new_content/feeding_impact.png",
                color: "ithac-coral"
              }
            ].map((project, idx) => (
              <FadeIn key={idx} direction={idx % 2 === 0 ? "left" : "right"}>
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full mb-6 text-secondary font-black text-xs uppercase tracking-widest">
                      {project.tag}
                    </div>
                    <h3 className="text-4xl font-extrabold text-primary mb-6 leading-tight">{project.title}</h3>
                    <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="bg-white p-8 rounded-2xl border-l-8 border-secondary shadow-sm">
                      <h4 className="font-black text-primary uppercase text-xs tracking-widest mb-4">Outcome & Impact</h4>
                      <p className="text-xl font-bold italic opacity-80">"{project.outcome}"</p>
                    </div>
                  </div>
                  <div className={`relative ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-video border-8 border-white">
                      <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VISUAL STORYTELLING GALLERY */}
      <FadeIn delay={0.3}>
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-primary mb-6">Impact Through the Lens</h2>
              <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">Moments of transformation across Africa.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
               {[1,2,3,4,5,6,7,8].map((i) => (
                 <div key={i} className="aspect-square rounded-2xl bg-surface-container-low overflow-hidden group">
                    <img 
                      src={`/images/new_content/${i % 2 === 0 ? 'hero.png' : 'individuals.png'}`} 
                      alt="Gallery" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                    />
                 </div>
               ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 5. FINAL CALL */}
      <FadeIn delay={0.4}>
        <section className="py-24 bg-primary text-on-primary text-center">
          <div className="max-w-3xl mx-auto px-8">
            <h2 className="text-4xl font-black mb-8 leading-tight">Ready to be part of the next transformation?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/collaboration" className="bg-secondary text-on-secondary px-12 py-5 rounded-2xl font-black text-xl hover:bg-secondary-container transition-all active:scale-95 shadow-xl text-center inline-block">
                Partner with us
              </Link>
              <Link href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 border border-white/20 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-all active:scale-95 text-center inline-block">
                Join the Community
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

    </main>
  );
}
