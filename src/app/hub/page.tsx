import React from 'react';
import { FadeIn } from '../../components/animations/FadeIn';


export default function HubPage() {
  return (
    <main className="pt-20">
      
{/**/}
<FadeIn delay={0.1}><section className="relative overflow-hidden bg-surface py-24 md:py-32">
<div className="max-w-7xl mx-auto px-8 relative z-10">
<div className="max-w-3xl">
<span className="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold tracking-widest uppercase mb-6">Internal Community</span>
<h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter text-primary leading-[1.1] mb-8">
                        Connect. Collaborate. <span className="text-transparent bg-clip-text editorial-gradient">Create.</span> Join the ITHAC Hub.
                    </h1>
<p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
                        A digital cynosure where technology meets human ambition. Access resources, network with experts, and build the future of the ecosystem.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-bold transition-all hover:bg-secondary-container shadow-lg shadow-secondary/20">Explore Communities</button>
<button className="bg-surface-container-highest/50 border border-outline-variant/15 text-primary px-8 py-4 rounded-xl font-bold transition-all hover:bg-surface-container-highest">Member Directory</button>
</div>
</div>
</div>
<div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block opacity-10">
<svg className="h-full w-full fill-current text-secondary" viewBox="0 0 100 100">
<circle cx="80" cy="20" r="40"></circle>
</svg>
</div>
</section></FadeIn>
{/**/}
<FadeIn delay={0.1}><section className="py-20 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-bold font-headline tracking-tight text-primary">Community Moments</h2>
<p className="text-on-surface-variant mt-2">Real-time collaboration across our global centers.</p>
</div>
<button className="text-secondary font-bold flex items-center gap-2 hover:underline decoration-2 underline-offset-4">
                        View Feed <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square rounded-xl overflow-hidden group relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="diverse group of creative professionals in a brightly lit modern office brainstorming around a wooden table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtiBF9lfmYP9IiOzcDFonSaMnhXvqpFGM7T7RwUnB3BcxfaPoGsjQW_yGi-91juXPoAB3Mfs3FD94bcjmCp2I-W2kp_MrGP7BqAstj3HlDHU4drHqmHryIfca7tiLFd9uEx6Yxh8acfPSMKUKOe0fWzSeEji1voqPR7zNOtVLQqARA0zZWis4DZTn8Q1h3n4AxP45MqiqJO79gukggZLft3W_vLusc-uTTkYuUGJG8dv66LbL-5ZD9ciwsmoHg7j9D9PJ8xwhd9vgJ"  alt="home"/>
<div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="material-symbols-outlined text-white text-3xl">favorite</span>
</div>
</div>
<div className="aspect-square rounded-xl overflow-hidden group relative md:row-span-2 md:h-full">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="professional developers coding together on multiple monitors in a dark high-tech environment with cyan accent lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMC268Vp4LRkDs1utVRwi657riqf_F5q-9GgdUf0cIEnTWIhBTpxBh91uMgtW4i5_XSi7zgUwFTLB7hZ11M2SMYzF9BlXFGOjsJjm9qg4Yq3tMcLUmHK-tZm1wIrFBkZR9bhGOqu_hgaSJ5fgt3HiuooYpbBphIVxLmJ90_YBd49L3pRST1buVQcApFJlhE890KprbjPoPTV7cWc2BgE3ErU-GCYW6lEloGKRngf7fOfKmxcHH7hZ8XHTafaK5NchpLUcsMBbeMmy7" alt="home"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Networking" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="close-up of people networking at a tech conference holding coffee and laughing in a sun-drenched lobby" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-mPK9JoGxHDsI2aKBmaS5UHWHRGda-CARanQzCYSrRyoVNBbMVN-2zK9vGmI8jqJCZduom-C1M0zK_ijA1wkd0eTXmqxrXbUpfIh_46I3mqmkIgE4ONm5ampkI0YKgVmxc-N4fJJ9w6N1Dyeln3hrvQ_7OCSDYmwLlzw5Jjkpd8EID6mGLLYlBzfqNBE8SWuXBYpaqTeABs1IVcDvxjTiRIdeXDCRfBiV0Js5BEC3T3cRxc0Jiv-zltIvCgKxPc1CorKwwa5hFtCS"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Whiteboarding" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="software engineers whiteboarding complex logic in a modern collaborative space with glass walls" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJtSY9g8dPB6eyZ-LBLbZyVbWOWuogoVQEFwe55Yl6wc955bhbgfZEL7obe-H46x9pNKwvkyTwTX5IFMwnksVzLZuWZl0F6N6l3h9xWS_oh3iT0lM2KSqyib9y4llxc5PawDnsPxxrS131UOZosn8gDGpomK90gNrpA1wmy1vUzCxJ3PfgNtVaXKQug-OLG21QLFqHLffa0LB4qiB7uX17JRDzj0HK-fiNGU3ixhLbntSjU9nluEx5cdbAn0m5nxKczMZIavf55tWS"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Students" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="students and mentors collaborating on laptops in a vibrant colorful university hub environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9E4q8ka7KIG75_YPp6Cx5qkUFpz9oi4NYdGmvOD7vdEWDcAF_3woHPb_wlU6df6_qCG2MAp4x8dGHZX0su_th9ZVxCb79w7QPNRwi0eMWqxkVf4rbrpujiUwXnCwJKXBxS7nwc5SKZ6Kixw4cNWD9xcTzKlnb81q7wMe11aPi2yT2QLI_VdRUD1wnImkO2Y0PWXHZIyypCUl6G16uj0YVtY2KDKGsn5aD3eOATzH2bfYrTIM3PSack7nAK5LqqVbfuBzHeEepPxOD"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Meeting" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="business leaders in a meeting room with panoramic city views during a strategy session at sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3on363drsKHHFkz9vSUmt39uz_BSXQqn_jzz03Z-pYU50PZdoa6dDd4ilvaeyVoGrEoXEJW-z4MUmk_xKBXVxZjM3z6Eju4wuXB0SLPrZ0ZbMwQGA6qvlolY8dMvXnNbRvRkLcOf-8qsFnX-YgmtVQC7tijtpDjk6_Ot6f3aCRQW1D0ecTUw0Cm3nFcKUsMUGWniG_xt4jNPHQTuzmYwhk9_ydhkT3saM3pFbDllmrzVtbvFTJNN1d8XUgtwz0DuWFgrT72xuiStI"/>
</div>
</div>
</div>
</section></FadeIn>
{/**/}
<FadeIn delay={0.1}><section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-4xl font-extrabold font-headline tracking-tight text-primary mb-4">Special Interest Groups</h2>
<p className="text-on-surface-variant text-lg">Deep dive into specific domains with peers and industry veterans.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/**/}
<div className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/10 hover:shadow-xl transition-all duration-300">
<div className="w-16 h-16 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-[40px] text-secondary" >smartphone</span>
</div>
<h3 className="text-2xl font-bold font-headline text-primary mb-3">Mobile App Dev</h3>
<p className="text-on-surface-variant mb-8">Exploring Flutter, Swift, and Kotlin architectures for the next generation of handheld experiences.</p>
<div className="flex items-center justify-between">
<span className="text-sm font-bold text-on-tertiary-container">1.2k Members</span>
<button className="bg-secondary text-on-secondary px-6 py-2 rounded-lg font-bold text-sm">Join</button>
</div>
</div>
{/**/}
<div className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/10 hover:shadow-xl transition-all duration-300 border-b-4 border-b-on-tertiary-container">
<div className="w-16 h-16 rounded-lg bg-on-tertiary-container/10 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-[40px] text-on-tertiary-container" >psychology</span>
</div>
<h3 className="text-2xl font-bold font-headline text-primary mb-3">AI &amp; ML</h3>
<p className="text-on-surface-variant mb-8">From neural networks to generative models. Discussing the ethics and implementation of intelligence.</p>
<div className="flex items-center justify-between">
<span className="text-sm font-bold text-on-tertiary-container">850 Members</span>
<button className="bg-secondary text-on-secondary px-6 py-2 rounded-lg font-bold text-sm">Join</button>
</div>
</div>
{/**/}
<div className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/10 hover:shadow-xl transition-all duration-300">
<div className="w-16 h-16 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-[40px] text-tertiary" >rocket_launch</span>
</div>
<h3 className="text-2xl font-bold font-headline text-primary mb-3">Entrepreneur's Corner</h3>
<p className="text-on-surface-variant mb-8">Startup scaling, venture capital networking, and pitch deck refinement for ITHAC founders.</p>
<div className="flex items-center justify-between">
<span className="text-sm font-bold text-on-tertiary-container">2.4k Members</span>
<button className="bg-secondary text-on-secondary px-6 py-2 rounded-lg font-bold text-sm">Join</button>
</div>
</div>
</div>
</div>
</section></FadeIn>
{/**/}
<FadeIn delay={0.1}><section className="py-24 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-8">
<div className="mb-12">
<h2 className="text-3xl font-extrabold font-headline tracking-tight text-primary">Upcoming Hub Events</h2>
<p className="text-on-surface-variant">Synchronize with the ecosystem's heartbeat.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/**/}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
<div className="h-3 bg-secondary"></div>
<div className="p-6">
<div className="flex items-center gap-2 mb-4">
<span className="bg-secondary/10 text-secondary text-[10px] uppercase font-black px-2 py-0.5 rounded">Workshop</span>
<span className="text-on-surface-variant text-xs font-semibold">Oct 24, 2024</span>
</div>
<h4 className="text-xl font-bold mb-2">Cloud Native Architecture 101</h4>
<p className="text-on-surface-variant text-sm mb-6">Learn to scale applications with modern containerization strategies.</p>
<div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
<span className="text-xs font-bold text-primary">Hybrid / Virtual</span>
<button className="text-secondary text-xs font-bold uppercase tracking-widest hover:underline">Register</button>
</div>
</div>
</div>
{/**/}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
<div className="h-3 bg-on-tertiary-container"></div>
<div className="p-6">
<div className="flex items-center gap-2 mb-4">
<span className="bg-on-tertiary-container/10 text-on-tertiary-container text-[10px] uppercase font-black px-2 py-0.5 rounded">Meetup</span>
<span className="text-on-surface-variant text-xs font-semibold">Oct 28, 2024</span>
</div>
<h4 className="text-xl font-bold mb-2">The Founders Social Night</h4>
<p className="text-on-surface-variant text-sm mb-6">Networking mixer for tech entrepreneurs and ecosystem investors.</p>
<div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
<span className="text-xs font-bold text-primary">ITHAC HQ, Austin</span>
<button className="text-secondary text-xs font-bold uppercase tracking-widest hover:underline">Register</button>
</div>
</div>
</div>
{/**/}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
<div className="h-3 bg-tertiary"></div>
<div className="p-6">
<div className="flex items-center gap-2 mb-4">
<span className="bg-tertiary/10 text-tertiary text-[10px] uppercase font-black px-2 py-0.5 rounded">Webinar</span>
<span className="text-on-surface-variant text-xs font-semibold">Nov 02, 2024</span>
</div>
<h4 className="text-xl font-bold mb-2">AI Ethics &amp; Governance Panel</h4>
<p className="text-on-surface-variant text-sm mb-6">Industry leaders discuss the future of regulated artificial intelligence.</p>
<div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
<span className="text-xs font-bold text-primary">Virtual Event</span>
<button className="text-secondary text-xs font-bold uppercase tracking-widest hover:underline">Register</button>
</div>
</div>
</div>
</div>
</div>
</section></FadeIn>
{/**/}
<FadeIn delay={0.1}><section className="py-24 bg-primary text-on-primary">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-on-primary/10">
<img alt="Portrait of Sarah" className="w-full h-full object-cover" data-alt="portrait of a confident female tech entrepreneur in a modern minimalist workspace with natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5euB6pQ9qr2YmYywuxG8pJMcE3KfkjOBoxHrBWZqYyADfPYHWvLqYSqcVvzFVI07-JarVThrmCIqDJbGqCWRMmkDC0SazKsHXQ5WwWhP2IlNl_sZiKumGjnmwoTAFeTHAzm2_QDStpn18IlStWuWQbaXX3KRfD6CZzTAArNNvE-cKFtfollS9OGUOeQPOMee5K210hH0uuWBgR4XjxQ7EEsbzbHhMnPfGtKNlUduQ8ZNGkG13bQ8WhmISBuzxBq8K-tWmsynMAMFO"/>
</div>
<div className="absolute -bottom-8 -right-8 w-64 h-64 bg-on-tertiary-container/20 rounded-full blur-3xl"></div>
</div>
<div>
<span className="text-on-tertiary-container font-black tracking-widest uppercase text-xs mb-6 inline-block">Member Spotlight</span>
<h2 className="text-4xl md:text-5xl font-extrabold font-headline leading-tight mb-8">How Sarah Chen built 'Lumix AI' through the ITHAC Hub.</h2>
<blockquote className="text-xl italic text-on-primary-container leading-relaxed mb-10">
                            "The mentorship in the AI &amp; ML SIG was the turning point for our startup. I met my co-founder and secured our seed round all within the Hub's ecosystem. It's truly the editorial architect of my career."
                        </blockquote>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
<span className="material-symbols-outlined">play_arrow</span>
</div>
<div>
<p className="font-bold">Sarah Chen</p>
<p className="text-sm text-on-primary-container">Founder, Lumix AI • Hub Alumnus</p>
</div>
</div>
</div>
</div>
</div>
</section></FadeIn>

    </main>
  );
}
