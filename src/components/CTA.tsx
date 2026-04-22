"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-gradient-to-br from-secondary-blue to-accent-aqua relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center text-white"
        >
          {/* Main CTA Content */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Build the <span className="text-blue-200">Future</span>{" "}
              with Us?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join our community of innovators and changemakers. Start your
              journey towards tech excellence today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="https://forms.gle/5YSKCpEuBYYTGmBY9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white text-secondary-blue px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-secondary-blue transition-all duration-300 font-semibold flex items-center gap-2"
                >
                  Partner With Us
                </motion.button>
              </Link>
              <a
                href="https://wa.me/2349021439349?text=Hello%20ITHAC%2C%20I%20want%20to%20book%20a%20free%20consultation."
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group border border-blue-300 text-blue-100 px-6 py-3 rounded-lg hover:bg-blue-700 hover:border-blue-600 transition-all duration-300 font-medium"
                >
                  Schedule a Call
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <a
                href="mailto:contactus@ithac.org"
                className="text-blue-100 hover:text-white transition-colors"
              >
                contactus@ithac.org
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">WhatsApp Us</h3>
              <a
                href="https://wa.me/2349021439349"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors"
              >
                +234 902 143 9349
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
              <p className="text-blue-100">
                Carlin Concept Plaza, opposite Aco estate
              </p>
              <p className="text-blue-100">Airport Road, Abuja, Nigeria</p>
            </motion.div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-blue-400/30"
          >
            <p className="text-blue-200 mb-4">
              Trusted by leading organizations
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Placeholder for partner logos */}
              <div className="text-blue-200 font-semibold">Microsoft</div>
              <div className="text-blue-200 font-semibold">Google</div>
              <div className="text-blue-200 font-semibold">Meta</div>
              <div className="text-blue-200 font-semibold">AWS</div>
              <div className="text-blue-200 font-semibold">Stripe</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
