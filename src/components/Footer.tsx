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
            <Image
              src="/images/logo.jpg"
              alt="ITHAC Logo"
              width={120}
              height={120}
              className="rounded-md"
            />
          </Link>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
            The Editorial Architect of Digital Excellence. Guiding IT
            professionals towards institutional authority.
          </p>
          <div className="flex gap-4">
            <a
              className="text-zinc-500 hover:text-blue-700 transition-colors"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined">
                social_leaderboard
              </span>
            </a>
            <a
              className="text-zinc-500 hover:text-blue-700 transition-colors"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
            <a
              className="text-zinc-500 hover:text-blue-700 transition-colors"
              href="https://chat.whatsapp.com/H0y0nOJAvpNEdQJS3BaSs8?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
        </div>
        {/* Sitemap */}
        <div className="space-y-6">
          <h5 className="font-label uppercase tracking-widest text-xs font-bold text-zinc-900 dark:text-white">
            Sitemap
          </h5>
          <ul className="space-y-4">
            <li>
              <Link
                className="text-zinc-500 hover:underline decoration-blue-500 decoration-2 underline-offset-4 text-sm"
                href="/services"
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-500 hover:underline decoration-blue-500 decoration-2 underline-offset-4 text-sm"
                href="/courses"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-500 hover:underline decoration-blue-500 decoration-2 underline-offset-4 text-sm"
                href="/hub"
              >
                Ecosystem
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-500 hover:underline decoration-blue-500 decoration-2 underline-offset-4 text-sm"
                href="/portfolio"
              >
                Impact
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-500 hover:underline decoration-blue-500 decoration-2 underline-offset-4 text-sm"
                href="/hub"
              >
                Hub
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-500 hover:underline decoration-blue-500 decoration-2 underline-offset-4 text-sm"
                href="/communities"
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-500 hover:underline decoration-blue-500 decoration-2 underline-offset-4 text-sm"
                href="/collaboration"
              >
                Partnerships
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div className="space-y-6">
          <h5 className="font-label uppercase tracking-widest text-xs font-bold text-zinc-900 dark:text-white">
            Contact
          </h5>
          <ul className="space-y-4">
            <li className="flex flex-col gap-1 text-zinc-500 text-sm">
              <span className="font-bold text-xs uppercase">Call Now</span>
              <a href="tel:+2349021439349" className="hover:text-blue-700">
                +234 902 143 9349
              </a>
            </li>
            <li className="flex flex-col gap-1 text-zinc-500 text-sm">
              <span className="font-bold text-xs uppercase">Email Us</span>
              <a
                href="mailto:contactus@ithac.org"
                className="hover:text-blue-700"
              >
                contactus@ithac.org
              </a>
            </li>
            <li className="flex flex-col gap-1 text-zinc-500 text-sm">
              <span className="font-bold text-xs uppercase">Follow Us</span>
              Stay tuned with us for updates
              <div className="flex gap-2 mt-1">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-blue-700 transition-colors font-bold"
                >
                  in
                </a>
                <a
                  href="https://chat.whatsapp.com/H0y0nOJAvpNEdQJS3BaSs8?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-green-600 transition-colors font-bold"
                >
                  wa
                </a>
              </div>
            </li>
          </ul>
        </div>
        {/* Address */}
        <div className="space-y-6">
          <h5 className="font-label uppercase tracking-widest text-xs font-bold text-zinc-900 dark:text-white">
            Our Address
          </h5>
          <ul className="space-y-4">
            <li className="flex flex-col gap-1 text-zinc-500 text-sm">
              <span className="font-bold text-base text-zinc-900 dark:text-zinc-200">
                Nigeria
              </span>
              <span className="font-medium text-zinc-700 dark:text-zinc-300">
                Abuja Office
              </span>
              <span className="leading-loose mt-2">
                Carlin Concept Plaza, opposite Aco estate or Mantrac Caterpillar
                company, beside Salbas petrol station, Airport Road, Abuja,
                Nigeria
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-200 dark:border-zinc-800 py-8 max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-zinc-500 text-xs font-medium">
          © 2026 ITHAC. The Editorial Architect of Digital Excellence.
        </div>
        <div className="flex gap-6">
          <span className="text-zinc-400 text-xs font-medium">
            Made with precision in a modern lab.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
