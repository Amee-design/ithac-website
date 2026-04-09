import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 w-full rounded-none">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8 py-16">
        {/* Brand Section */}
        <div className="space-y-6">
          <Link href="/" className="inline-block">
            <Image src="/images/logo.jpg" alt="ITHAC Logo" width={120} height={120} className="rounded-md" />
          </Link>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
            The Editorial Architect of Digital Excellence. Guiding IT professionals towards institutional authority.
          </p>
          <div className="flex gap-4">
            <a className="text-zinc-500 hover:text-blue-700 transition-colors" href="#!">
              <span className="material-symbols-outlined">social_leaderboard</span>
            </a>
            <a className="text-zinc-500 hover:text-blue-700 transition-colors" href="#!">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a className="text-zinc-500 hover:text-blue-700 transition-colors" href="#!">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
        </div>
        {/* Sitemap */}
        <div className="space-y-6">
          <h5 className="font-label uppercase tracking-widest text-xs font-bold text-zinc-900 dark:text-white">Sitemap</h5>
          <ul className="space-y-4">
            <li><Link className="text-zinc-500 hover:underline decoration-blue-500 decoration-2 underline-offset-4 text-sm" href="/services">Programs</Link></li>
            <li><Link className="text-zinc-500 hover:underline decoration-blue-500 decoration-2 underline-offset-4 text-sm" href="/services">Infrastructure</Link></li>
            <li><Link className="text-zinc-500 hover:underline decoration-blue-500 decoration-2 underline-offset-4 text-sm" href="/about-us">Case Studies</Link></li>
            <li><Link className="text-zinc-500 hover:underline decoration-blue-500 decoration-2 underline-offset-4 text-sm" href="/hub">Join Hub</Link></li>
            <li><Link className="text-zinc-500 hover:underline decoration-blue-500 decoration-2 underline-offset-4 text-sm" href="/communities">Communities</Link></li>
            <li><Link className="text-zinc-500 hover:underline decoration-blue-500 decoration-2 underline-offset-4 text-sm" href="/collaboration">Collaboration</Link></li>
          </ul>
        </div>
        {/* Contact */}
        <div className="space-y-6">
          <h5 className="font-label uppercase tracking-widest text-xs font-bold text-zinc-900 dark:text-white">Contact Us</h5>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-zinc-500 text-sm">
              <span className="material-symbols-outlined text-sm">location_on</span>
              101 Innovation Blvd, Tech City
            </li>
            <li className="flex items-center gap-3 text-zinc-500 text-sm">
              <span className="material-symbols-outlined text-sm">mail</span>
              contact@ithac.tech
            </li>
            <li className="flex items-center gap-3 text-zinc-500 text-sm">
              <span className="material-symbols-outlined text-sm">call</span>
              +1 (555) 0123-4567
            </li>
          </ul>
        </div>
        {/* Legal */}
        <div className="space-y-6">
          <h5 className="font-label uppercase tracking-widest text-xs font-bold text-zinc-900 dark:text-white">Legal</h5>
          <ul className="space-y-4">
            <li><Link className="text-zinc-500 hover:underline decoration-blue-500 decoration-2 underline-offset-4 text-sm" href="#!">Privacy Policy</Link></li>
            <li><Link className="text-zinc-500 hover:underline decoration-blue-500 decoration-2 underline-offset-4 text-sm" href="#!">Terms of Service</Link></li>
            <li><Link className="text-zinc-500 hover:underline decoration-blue-500 decoration-2 underline-offset-4 text-sm" href="#!">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-200 dark:border-zinc-800 py-8 max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-zinc-500 text-xs font-medium">© 2024 ITHAC. The Editorial Architect of Digital Excellence.</div>
        <div className="flex gap-6">
          <span className="text-zinc-400 text-xs font-medium">Made with precision in a modern lab.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
