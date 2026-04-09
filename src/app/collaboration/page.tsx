import React from 'react';
import { FadeIn } from '../../components/animations/FadeIn';


export default function CollaborationPage() {
  return (
    <main className="pt-20 min-h-screen bg-surface">
      <FadeIn><header className="pt-16 pb-8 text-center px-8">
        <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-4 tracking-tight uppercase">Let's Collaborate</h1>
        <p className="text-on-surface-variant font-body max-w-2xl mx-auto">Fill out the form below to begin a project or query.</p>
      </header></FadeIn>
      {/* Contact/Inquiry Section */}
<FadeIn delay={0.1}><section className="py-24 bg-surface px-8">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-4 tracking-tight uppercase">Curious about ITHAC?</h2>
<p className="text-on-surface-variant font-body">Let's build something exceptional together.</p>
</div>
<div className="bg-white p-8 md:p-12 rounded-xl shadow-[0_20px_40px_rgba(25,28,29,0.05)] border border-outline-variant/15">
<form action="#" className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Full Name</label>
<input className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 transition-all p-4 rounded-t-lg" placeholder="Enter your name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Email Address</label>
<input className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 transition-all p-4 rounded-t-lg" placeholder="email@example.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Mobile Number</label>
<input className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 transition-all p-4 rounded-t-lg" placeholder="+234 ..." type="tel"/>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Industry</label>
<select className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 transition-all p-4 rounded-t-lg">
<option>Select Industry</option>
<option>Designer</option>
<option>Developer</option>
<option>Creative</option>
<option>Other</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Project Collaboration / Message</label>
<textarea className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 transition-all p-4 rounded-t-lg" placeholder="Tell us about your project..." rows={4}></textarea>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
<a className="flex items-center gap-3 text-secondary font-bold hover:opacity-80 transition-opacity" href="https://wa.me/yourlink" target="_blank">
<span className="material-symbols-outlined">forum</span>
                                JOIN OUR WHATSAPP COMMUNITY
                            </a>
<button className="w-full md:w-auto px-12 py-4 bg-secondary text-white font-headline font-extrabold rounded-xl hover:bg-secondary-container shadow-lg transition-all active:scale-95" type="submit">
                                SEND MESSAGE
                            </button>
</div>
</form>
</div>
</div>
</section></FadeIn>
    </main>
  );
}
