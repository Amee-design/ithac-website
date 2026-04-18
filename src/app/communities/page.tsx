import React from 'react';
import { FadeIn } from '../../components/animations/FadeIn';
import Link from 'next/link';

export default function CommunityPage() {
  return (
    <main className="pt-20 bg-surface">
      
      {/* 1. HERO HEADER */}
      <FadeIn delay={0.1}>
        <header className="relative py-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30">
            <img src="/images/new_content/communities.png" alt="ITHAC Community" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
            <span className="text-on-tertiary-container font-black tracking-[0.3em] uppercase text-sm mb-6 block">The Collective</span>
            <h1 className="text-5xl md:text-8xl font-black text-on-primary tracking-tighter mb-8 leading-[0.9]">
              COMMUNITY <br className="hidden md:block"/> AT ITHAC
            </h1>
            <p className="text-2xl font-bold text-on-primary-container max-w-3xl mx-auto mb-10">
              Where Access Meets Opportunity and Participation Becomes Growth
            </p>
            <Link href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="bg-secondary text-on-secondary px-12 py-5 rounded-2xl font-black text-xl hover:bg-secondary-container transition-all shadow-2xl active:scale-95 inline-block text-center">
              Join the Community
            </Link>
          </div>
        </header>
      </FadeIn>

      {/* 2. WHAT IT MEANS TO BE PART SECTION */}
      <FadeIn delay={0.2}>
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black text-primary mb-8">What It Means to Be Part of the ITHAC Community</h2>
                <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                  Joining the ITHAC community gives you direct access to a structured environment where information, opportunities, and support systems are consistently shared. The community is designed to ensure that you are not disconnected from opportunities that can shape your growth.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Programme Updates", icon: "notifications_active" },
                    { title: "Early Training Info", icon: "history_edu" },
                    { title: "Elite Network", icon: "hub" },
                    { title: "Growth Pathways", icon: "trending_up" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-surface-container-low rounded-xl border border-outline-variant/10">
                      <span className="material-symbols-outlined text-secondary">{item.icon}</span>
                      <span className="font-bold text-sm">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface-container-low p-12 rounded-[3rem] border border-outline-variant/5">
                <p className="text-2xl font-black text-primary mb-6 leading-tight">"Where individuals are not just present, but engaged. This is where opportunities are not just announced, but accessed."</p>
                <Link href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all active:scale-95 text-center inline-block">
                  Stay Connected to Opportunities
                </Link>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 3. CAMPUS AMBASSADOR PROGRAMME SECTION */}
      <FadeIn delay={0.3}>
        <section className="py-24 bg-surface-container-low relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/50">
                  <img src="/images/new_content/campus_ambassadors.png" alt="Campus Ambassadors" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="font-label uppercase tracking-widest text-sm text-secondary font-bold mb-4 block">Leadership</span>
                <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 tracking-tight">Campus Ambassador <br/> Programme</h2>
                <p className="text-xl font-bold text-secondary mb-6">Lead Innovation Within Your Campus</p>
                <p className="text-lg text-on-surface-variant mb-10 italic">
                  Designed for students who are ready to move beyond participation into leadership.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h4 className="font-black text-primary uppercase text-xs tracking-widest mb-4">What You Do</h4>
                    <ul className="space-y-3">
                      {["Promote opportunities", "Mobilise students", "Coordinate awareness", "Support initiatives"].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-secondary text-sm bg-secondary/10 rounded-full p-0.5">check</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-black text-primary uppercase text-xs tracking-widest mb-4">What You Gain</h4>
                    <ul className="space-y-3">
                      {["Leadership experience", "Ecosystem access", "Real-world projects", "Impact recognition"].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-on-surface-variant font-bold">
                          <span className="material-symbols-outlined text-primary text-sm bg-primary/10 rounded-full p-0.5">star</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Link href="/contact" className="bg-secondary text-on-secondary px-10 py-4 rounded-xl font-black transition-all hover:shadow-xl active:scale-95 text-center inline-block">
                  Apply to Become an Ambassador
                </Link>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 4. EVENTS & OPPORTUNITIES */}
      <FadeIn delay={0.4}>
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-black text-primary mb-4">Events and Opportunities</h2>
                <p className="text-lg text-on-surface-variant font-body opacity-80">Stay Engaged with What Matters. ITHAC regularly organises programmes, workshops, and initiatives.</p>
              </div>
              <Link href="/services" className="bg-surface-container-low border border-outline-variant/10 px-8 py-3 rounded-xl font-bold hover:bg-surface-container-high transition-colors text-center inline-block">
                Explore All Opportunities
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Specialised Training", desc: "Workshops designed to provide practical learning and technical exposure.", icon: "terminal" },
                { title: "Innovation Initiatives", desc: "Community driven projects addressing real challenges with scalable solutions.", icon: "lightbulb" },
                { title: "Ecosystem Events", desc: "Collaborative networking and high-engagement industry activities.", icon: "groups" }
              ].map((event, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/10 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6">
                    <span className="material-symbols-outlined">{event.icon}</span>
                  </div>
                  <h4 className="font-headline text-xl font-bold mb-4">{event.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{event.desc}</p>
                  <Link href="/contact" className="text-secondary font-bold text-xs uppercase tracking-widest flex items-center gap-2">Participate <span className="material-symbols-outlined text-sm">open_in_new</span></Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 5. SUMMARY CALLOUT */}
      <FadeIn delay={0.5}>
        <section className="py-24 bg-primary text-on-primary relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tight">A Community That Moves You Forward</h2>
            <p className="text-xl opacity-80 mb-12 italic font-medium">
              Being part of ITHAC means more than staying informed. It means being positioned. Positioned for access. Positioned for growth. Positioned for opportunity.
            </p>
            <div className="text-3xl font-black text-on-tertiary-container mb-12">
              Opportunities are easier to access when you are part of the right system.
            </div>
            <Link href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="bg-secondary text-on-secondary px-12 py-5 rounded-2xl font-black text-xl hover:bg-secondary-container transition-all shadow-xl active:scale-95 inline-block text-center">
              Join the ITHAC Community Today
            </Link>
          </div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-on-tertiary-container/10 rounded-full blur-3xl -mr-32 -mb-32"></div>
        </section>
      </FadeIn>

    </main>
  );
}
