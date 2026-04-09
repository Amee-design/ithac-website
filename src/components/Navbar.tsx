import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-[12px] shadow-[0_20px_40px_rgba(25,28,29,0.05)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20 w-full">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.jpg" alt="ITHAC Logo" width={120} height={120} className="rounded-md" />
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            className="text-blue-700 border-b-2 border-blue-700 pb-1 text-sm font-semibold tracking-tight hover:text-blue-800 transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-zinc-600 text-sm font-semibold tracking-tight hover:text-blue-600 transition-colors"
            href="/about-us"
          >
            About Us
          </Link>
          <Link
            className="text-zinc-600 text-sm font-semibold tracking-tight hover:text-blue-600 transition-colors"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="text-zinc-600 text-sm font-semibold tracking-tight hover:text-blue-600 transition-colors"
            href="/hub"
          >
            Hub
          </Link>
          <Link
            className="text-zinc-600 text-sm font-semibold tracking-tight hover:text-blue-600 transition-colors"
            href="/communities"
          >
            Communities
          </Link>
          <Link
            className="text-zinc-600 text-sm font-semibold tracking-tight hover:text-blue-600 transition-colors"
            href="/collaboration"
          >
            Collaboration
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden lg:flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-secondary-container transition-all active:scale-95">
            Join the Ecosystem
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
