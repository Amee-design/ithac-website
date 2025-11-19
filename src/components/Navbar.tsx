"use client";

import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Academy", href: "/academy" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const additionalPages = [
    { name: "Blog", href: "/blog" },
    { name: "Community", href: "/community" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-ithac-light-gray shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt="ITHAC Logo"
                width={150}
                height={40}
                className="rounded-lg"
              />
            
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    className="text-ithac-dark-gray hover:text-ithac-blue px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-ithac-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </Link>
                </motion.div>
              ))}

              {/* More Dropdown */}
              <div className="relative">
                <motion.button
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 text-ithac-dark-gray hover:text-ithac-blue px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  More
                  <ChevronDown className="w-4 h-4" />
                </motion.button>

                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-lg border border-ithac-light-gray py-2"
                  >
                    {additionalPages.map((page) => (
                      <Link
                        key={page.name}
                        href={page.href}
                        className="block px-4 py-2 text-sm text-ithac-dark-gray hover:text-ithac-blue hover:bg-ithac-light-gray/30 transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {page.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden md:block"
          >
            <Link href="/academy">
              <button className="bg-ithac-blue text-white px-6 py-2 rounded-xl hover:bg-ithac-blue/90 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
                Join Academy
              </button>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ithac-dark-gray hover:text-ithac-blue p-2 rounded-lg hover:bg-ithac-light-gray/30 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-t border-ithac-light-gray"
        >
          <div className="px-4 py-6 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-ithac-dark-gray hover:text-ithac-blue py-3 px-4 text-base font-medium rounded-xl hover:bg-ithac-light-gray/30 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Additional Pages in Mobile */}
            <div className="border-t border-ithac-light-gray pt-3 mt-3">
              {additionalPages.map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  className="block text-ithac-dark-gray hover:text-ithac-blue py-3 px-4 text-base font-medium rounded-xl hover:bg-ithac-light-gray/30 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {page.name}
                </Link>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/academy">
                <button
                  className="w-full bg-ithac-blue text-white px-6 py-3 rounded-xl hover:bg-ithac-blue/90 transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Join Academy
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
