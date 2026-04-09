import React from 'react';
import { FadeIn } from '../components/animations/FadeIn';
import WhyChooseITHAC from '../components/services/WhyChooseITHAC';

export default function HomePage() {
  return (
    <main className="pt-20">
      
{/**/}
<FadeIn delay={0.1}><section className="relative h-[870px] min-h-[600px] flex items-center overflow-hidden bg-primary">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-40 mix-blend-luminosity" data-alt="diverse group of tech professionals collaborating in a modern high-tech laboratory with glowing screens and glass partitions" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7Xbv9BnS7bc0fpvplLtJpo3xtym0pH-U61xnW7uYHg1BmaxdTQ1iKGBd_H1dySa13V0eujiM61BNBnnrEDWf8IcULvGOerGqV1I2kwft4NBZH7Al6PR52mUw0je2bzsTaJhkgGwv3AgTnXWBtzK412vafyrmf9OnK2VBqEQcQnQ3neE3194wbNYkUTBLhrTmKJ4JmCvYcPrg3dLJgxUjc1rUaULo1U6N30rGGhm6z0Whd8L5aPkdKZhBNvxF48rDQ4aYXxKR4V1z6" alt="home"/>
<div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
<div className="max-w-2xl">
<h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-primary leading-[1.1] tracking-tight mb-6">
                        Unlock Your <span className="text-on-tertiary-container">Digital</span> Potential.
                    </h1>
<p className="text-xl text-on-primary-container font-medium mb-10 leading-relaxed">
                        Join the ITHAC Ecosystem. Gain skills, access infrastructure, and transform ideas into successful ventures with our editorial approach to IT excellence.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-secondary hover:bg-secondary-container text-on-secondary px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all">
                            Explore Programs
                        </button>
<button className="bg-surface-container-lowest/10 backdrop-blur-md border border-white/20 text-on-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                            Learn More
                        </button>
</div>
</div>
</div>
</section></FadeIn>
{/**/}
<FadeIn delay={0.1}><section className="py-24 bg-surface">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="space-y-6">
<div className="w-14 h-14 bg-secondary/10 flex items-center justify-center rounded-2xl">
<span className="material-symbols-outlined text-secondary text-3xl">school</span>
</div>
<h3 className="font-headline text-2xl font-bold">Skill-building</h3>
<p className="text-on-surface-variant leading-relaxed">Curated educational tracks designed by industry architects to bridge the gap between theory and high-stakes production.</p>
</div>
<div className="space-y-6">
<div className="w-14 h-14 bg-on-tertiary-container/10 flex items-center justify-center rounded-2xl">
<span className="material-symbols-outlined text-on-tertiary-container text-3xl">settings_input_component</span>
</div>
<h3 className="font-headline text-2xl font-bold">Infrastructure</h3>
<p className="text-on-surface-variant leading-relaxed">Access world-class digital assets, server environments, and testing labs to scale your technical vision without barriers.</p>
</div>
<div className="space-y-6">
<div className="w-14 h-14 bg-secondary/10 flex items-center justify-center rounded-2xl">
<span className="material-symbols-outlined text-secondary text-3xl">hub</span>
</div>
<h3 className="font-headline text-2xl font-bold">Community</h3>
<p className="text-on-surface-variant leading-relaxed">A cynosure for technical minds. Connect with mentors, investors, and peers in an ecosystem built for collaborative growth.</p>
</div>
</div>
</div>
</section></FadeIn>
{/**/}
<FadeIn delay={0.1}>
  <section className="py-24 bg-surface-container-lowest">
    <div className="max-w-7xl mx-auto px-8">
      <div className="max-w-4xl mx-auto text-center">
        <span className="font-label uppercase tracking-widest text-xs text-secondary font-bold mb-4 block">About Us</span>
        <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-8">About ITHAC</h2>
        <p className="text-xl text-on-surface-variant leading-relaxed text-justify">
          Information Technologies Hub and Cynosure (ITHAC) is cultivating a nurturing and synergistic environment that fosters information technology product and service creation and support. We envision becoming the go-to destination for the people of Ondo state and Nigeria at large seeking to gain digital skills, have access to top-notched infrastructures utilization and entrepreneurs aiming to transform their ideas into successful digital ventures. Our aim is to establish an ecosystem that nurtures creativity, collaboration, and entrepreneurship, allowing individuals to flourish and make a meaningful, long-lasting difference in the world. ITHAC embraces the convergence of technology, creativity, and business with our commitment to excellence, innovation, and partnership, we support organizations and individuals to realize their vision towards making a lasting impact on the digital landscape.
        </p>
      </div>
    </div>
  </section>
</FadeIn>
{/**/}
<FadeIn delay={0.1}><section className="py-24 bg-surface-container-low overflow-hidden">
<div className="max-w-7xl mx-auto px-8 mb-12 flex justify-between items-end">
<div>
<span className="font-label uppercase tracking-widest text-xs text-secondary font-bold mb-2 block">Our Expertise</span>
<h2 className="font-headline text-4xl font-extrabold tracking-tight">Featured Programs &amp; Services</h2>
</div>
<div className="flex gap-4">
<button className="p-3 rounded-full bg-surface-container-lowest shadow-sm hover:shadow-md text-on-surface transition-all">
<span className="material-symbols-outlined">arrow_back</span>
</button>
<button className="p-3 rounded-full bg-surface-container-lowest shadow-sm hover:shadow-md text-on-surface transition-all">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-8 px-8 pb-12 hide-scrollbar snap-x">
{/**/}
<div className="flex-none w-80 snap-start bg-surface-container-lowest rounded-xl p-8 shadow-[0_20px_40px_rgba(25,28,29,0.05)] border border-outline-variant/10">
<div className="h-40 mb-6 rounded-lg overflow-hidden">
<img className="w-full h-full object-cover" data-alt="close up of code on a screen with blue and purple highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlQbTNH3QZmwqPskeakYJZULqxHDl3lfavdMZ6ktHUj4N04EMC1sQE34eGFwy06hb-rnzZjOkEv32qfJ1RoOwfX-LVhekYAQd-YWYB32aYbtxpH9-HDEOC-MMfT7JC8U5qcvahKdE7nTOZk-efYQTI687-aP-L5JUiFydlaVaOzLSLODB7Ds-HIHDXJckZi-3Ux_tWWV-s5SGt_fLXhxE_-MpRP_mzHqe3Bm_H7_tnKpuwidlZrRjIPEx0uTHMkeSH4pmQtZZC5-wR" alt="home"/>
</div>
<h4 className="font-headline text-xl font-bold mb-3">Technical Education Services</h4>
<p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Enhance your digital skills with our cutting-edge technical education programs.</p>
<button className="w-full py-3 bg-on-tertiary-container/10 text-on-tertiary-container font-bold rounded-lg hover:bg-on-tertiary-container hover:text-white transition-all text-sm">Learn More</button>
</div>
{/**/}
<div className="flex-none w-80 snap-start bg-surface-container-lowest rounded-xl p-8 shadow-[0_20px_40px_rgba(25,28,29,0.05)] border border-outline-variant/10">
<div className="h-40 mb-6 rounded-lg overflow-hidden">
<img className="w-full h-full object-cover" data-alt="laptop on a desk showing software development environment with clean white space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr_i-lhfUVV8xMwBISQK1aAmyof_-8RNCa8gjgA2H3TsH5wrPU-orf7vPMOyfrWtjnEx9WjPXOd14H8gwxMGOXhKaN2CHdIrsbpFHKp5Dxre89_sByWjGh949HupbTomyxG13I91QeAXxyrrSGnOG3DhQDjEKDjMhUEMq-fntGt-990rdUVr09KR3wlOYu-Ukh_swcgp3GsfVPG49Qi1rKWy4hyIIkJWv1EVIOhDKlMGC-sTkaxtueCcLWiSidiEt6N7JNcYW8nrER" alt="home"/>
</div>
<h4 className="font-headline text-xl font-bold mb-3">Consulting and Advisory Services</h4>
<p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Unlock strategic insights with our expert consulting and advisory services.</p>
<button className="w-full py-3 bg-on-tertiary-container/10 text-on-tertiary-container font-bold rounded-lg hover:bg-on-tertiary-container hover:text-white transition-all text-sm">Learn More</button>
</div>
{/**/}
<div className="flex-none w-80 snap-start bg-surface-container-lowest rounded-xl p-8 shadow-[0_20px_40px_rgba(25,28,29,0.05)] border border-outline-variant/10">
<div className="h-40 mb-6 rounded-lg overflow-hidden">
<img className="w-full h-full object-cover" data-alt="futuristic server room with glowing blue lights and sleek hardware" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsepTSZgQheuEHGCqdGf6OFKCkx4fw7FL4_-SH5Yoj5tZqH-wzoYCYZDXxW7zdvn0Ydb5Yx9cLdPeUJA3OvEwboVjT6egqGyzwh4DHn36_FuehO0YDMKXeGFUC_hibo5QTo3XjNODMtOL_soCXILdtIha5n2Pth8x0JBr2MYHAXAZxaUY4IhePTVLvk7RCy9V0_gEa2OeN4xWmz9w3cTKe8Ys3RygtgyTn5bgYCMYM43xaIpexMtGH3vPZ9PDVKeTXdT2rRMXXVUXy" alt="home"/>
</div>
<h4 className="font-headline text-xl font-bold mb-3">Training and Workshops</h4>
<p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Stay ahead in the digital landscape with our specialized training and workshops.</p>
<button className="w-full py-3 bg-on-tertiary-container/10 text-on-tertiary-container font-bold rounded-lg hover:bg-on-tertiary-container hover:text-white transition-all text-sm">Learn More</button>
</div>
{/**/}
<div className="flex-none w-80 snap-start bg-surface-container-lowest rounded-xl p-8 shadow-[0_20px_40px_rgba(25,28,29,0.05)] border border-outline-variant/10">
<div className="h-40 mb-6 rounded-lg overflow-hidden">
<img className="w-full h-full object-cover" data-alt="cybersecurity concept with digital lock and binary code background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeTsGKZ_ePz3es3ApS36ad8zMjOO-VxfPX04i8Oy67SmrwgJmR-pzmerqI3sYCyuImfvDud-LdG6klpRlxE4bceyAp1_yUne2gsyFnbnUBnSGiAOgjKVbEYiAhltDzxPCIXVRtAqALirZrv-F5sy2qrOWYbLn8sR2oxBQi7KmHyWrwWiZFZ8awSNAY5OHYVl0BDVvqfhueYHUDCthbHzfMAA3RO6fmX0zMsPENUtJHVdvHpgiWX_RRsIgy2RpUbqzu-GfHVUuybvgK" alt="home"/>
</div>
<h4 className="font-headline text-xl font-bold mb-3">Software Development Services</h4>
<p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Bring your ideas to life with our top-notch software development services.</p>
<button className="w-full py-3 bg-on-tertiary-container/10 text-on-tertiary-container font-bold rounded-lg hover:bg-on-tertiary-container hover:text-white transition-all text-sm">Learn More</button>
</div>
{/**/}
<div className="flex-none w-80 snap-start bg-surface-container-lowest rounded-xl p-8 shadow-[0_20px_40px_rgba(25,28,29,0.05)] border border-outline-variant/10">
<div className="h-40 mb-6 rounded-lg overflow-hidden">
<img className="w-full h-full object-cover" data-alt="dashboard showing data visualization and charts on a large screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwE1pRKqBquhyOzjkCBlckzgCsk7L5FAgXPgQ4t0nd52wFpmxgeI2CVFgXqmGzfxSljDexdrL_yK1Abuzq4WUtgNKjLZb-Sq3UP9U6aB3uuJ3Y9y0V6ngPTau6m7Gg6PrGJ32AQn_tBH7mwpGeIAiatuU5lESOUgcTj1JaGKGZWQmh7kzUxVq1PO27U_eBelr6AbiZq5Sc-1iC4MuLaDAPMDwkYMT8_MiCcRzGGOyPrLprFtfuh-UhMywnqC3KOMYB7dhVEduLW0IR" alt="home"/>
</div>
<h4 className="font-headline text-xl font-bold mb-3">Infotech Product Creation &amp; Sales</h4>
<p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Explore and create innovative information technology products with our support.</p>
<button className="w-full py-3 bg-on-tertiary-container/10 text-on-tertiary-container font-bold rounded-lg hover:bg-on-tertiary-container hover:text-white transition-all text-sm">Learn More</button>
</div>
{/**/}
<div className="flex-none w-80 snap-start bg-surface-container-lowest rounded-xl p-8 shadow-[0_20px_40px_rgba(25,28,29,0.05)] border border-outline-variant/10">
<div className="h-40 mb-6 rounded-lg overflow-hidden">
<img className="w-full h-full object-cover" data-alt="creative team brainstorming in a sunlit loft office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM7SEnwzQDHx4e5jQTNHs_2NHMN_ujIRsy5PNx4AdMcKrOQwKZWkKV1ztjFB30nUskKzHpRQoyFHGlohr1TqaIYmTxQTj57ieRnoA-q7uVXFo5E1krtd2et9ilL91vxxSyoTFB-tamBmcmticGIFqB6wMz0NOxzFdEDz730xiUAO641gR_yvtKdl92xXBqlY60i9XQpSohdvj2DRz1LktzWDT81_RpcZCzAtOSBNCAl4sH-CCNsFZXGuktaqdWfeT4lyKqEATMvNmD" alt="home"/>
</div>
<h4 className="font-headline text-xl font-bold mb-3">Maintenance and Support Services</h4>
<p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Ensure the longevity of your digital ventures with our reliable maintenance and support.</p>
<button className="w-full py-3 bg-on-tertiary-container/10 text-on-tertiary-container font-bold rounded-lg hover:bg-on-tertiary-container hover:text-white transition-all text-sm">Learn More</button>
</div>
</div>
</section></FadeIn>
{/**/}
<WhyChooseITHAC />
{/**/}
<FadeIn delay={0.1}><section className="py-24 bg-tertiary text-on-tertiary overflow-hidden relative">
<div className="absolute top-0 right-0 w-1/3 h-full bg-secondary-container/10 -skew-x-12 transform translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="max-w-xl">
<h2 className="font-headline text-4xl font-extrabold mb-6">Stay at the Center of Excellence</h2>
<p className="text-lg opacity-80 mb-8">Receive editorial insights, event invitations, and infrastructure updates directly to your inbox.</p>
<div className="flex flex-col sm:flex-row gap-4">
<input className="bg-surface-container-low/10 border-none rounded-xl px-6 py-4 text-on-tertiary placeholder:text-on-tertiary/40 flex-grow focus:ring-2 focus:ring-on-tertiary-container transition-all" placeholder="professional@email.com" type="email"/>
<button className="bg-on-tertiary-container text-tertiary font-bold px-8 py-4 rounded-xl hover:bg-tertiary-fixed transition-all whitespace-nowrap">Subscribe Now</button>
</div>
</div>
<div className="hidden md:block w-96 h-96 relative">
<div className="absolute inset-0 border-4 border-on-tertiary-container/20 rounded-full animate-pulse"></div>
<div className="absolute inset-8 border-2 border-on-tertiary-container/40 rounded-full"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="material-symbols-outlined text-8xl text-on-tertiary-container">stream</span>
</div>
</div>
</div>
</section></FadeIn>

    </main>
  );
}
