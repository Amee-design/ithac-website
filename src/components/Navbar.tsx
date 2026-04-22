"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Programmes" },
    { href: "/courses", label: "Courses" },
    { href: "/hub", label: "Ecosystem" },
    { href: "/communities", label: "Community" },
    { href: "/collaboration", label: "Partnerships" },
    { href: "/portfolio", label: "Impact" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-[12px] shadow-[0_20px_40px_rgba(25,28,29,0.05)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20 w-full">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.jpg"
            alt="ITHAC Logo"
            width={120}
            height={120}
            className="rounded-md"
          />
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="text-zinc-600 text-sm font-semibold tracking-tight hover:text-blue-600 transition-colors"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden lg:flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
          <Link
            href="https://ithac-web-application.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary hidden text-on-secondary px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-secondary-container transition-all active:scale-95 lg:inline-block"
          >
            Join the Ecosystem
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white p-2 text-zinc-700"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white/95 backdrop-blur px-6 py-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={`mobile-${link.href}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-700 font-semibold py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://ithac-web-application.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 bg-secondary text-on-secondary px-4 py-3 rounded-xl font-bold text-center"
            >
              Join the Ecosystem
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
