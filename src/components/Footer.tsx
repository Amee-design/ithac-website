"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "IT Training", href: "#services" },
      { name: "Software Development", href: "#services" },
      { name: "Multimedia Solutions", href: "#services" },
      { name: "Hackathons", href: "#services" },
    ],
    programs: [
      { name: "Full-Stack Bootcamp", href: "#programs" },
      { name: "UI/UX Workshop", href: "#programs" },
      { name: "Mobile Development", href: "#programs" },
      { name: "Innovation Sprint", href: "#programs" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" },
    ],
    support: [
      { name: "Help Center", href: "#support" },
      { name: "Documentation", href: "#docs" },
      { name: "Community", href: "#community" },
      { name: "Privacy Policy", href: "#privacy" },
    ],
  };

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/company/information-technologies-hub-and-cynosure-ithac/",
      name: "LinkedIn",
    },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/ithacceomd?igsh=N25kMHI2Z20wajlx",
      name: "Instagram",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/share/17EcJUNSAe/",
      name: "Facebook",
    },
  ];

  return (
    <footer className="bg-ithac-dark-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-ithac-blue mb-4">
                  ITHAC
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Empowering the next generation of tech innovators through
                  comprehensive training, development, and innovation
                  experiences.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-ithac-blue flex-shrink-0" />
                    <span className="text-gray-300 text-sm">
                      Carlin Concept Plaza, opposite Aco estate or Mantrac
                      Caterpillar company, beside Salbas petrol station, Airport
                      Road, Abuja, Nigeria
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-ithac-blue flex-shrink-0" />
                    <span className="text-gray-300 text-sm">
                      +234 902 143 9349
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-ithac-blue flex-shrink-0" />
                    <span className="text-gray-300 text-sm">
                      contactus@ithac.org
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-lg mb-4">Services</h4>
                <ul className="space-y-2">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-ithac-blue transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Programs */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-lg mb-4">Programs</h4>
                <ul className="space-y-2">
                  {footerLinks.programs.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-ithac-blue transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Company */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-lg mb-4">Company</h4>
                <ul className="space-y-2">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-ithac-blue transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Support */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-lg mb-4">Support</h4>
                <ul className="space-y-2">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-ithac-blue transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-700"
          >
            <div className="max-w-md">
              <h4 className="font-semibold text-lg mb-3">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4">
                Get the latest updates on our programs and tech innovations.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-ithac-blue focus:border-transparent text-sm"
                />
                <button className="bg-ithac-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-300 text-sm"
            >
              © {currentYear} ITHAC. All rights reserved. | Made with ❤️ in
              Abuja, Nigeria
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="text-gray-400 hover:text-ithac-blue transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
