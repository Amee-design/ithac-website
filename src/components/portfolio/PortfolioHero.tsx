"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import { ArrowRight, Code, Sparkles, Trophy } from "lucide-react";

const stats = [
  { number: "150+", label: "Projects Delivered", icon: Trophy },
  { number: "50+", label: "Happy Clients", icon: Sparkles },
  { number: "8", label: "Years Experience", icon: Code },
];

export default function PortfolioHero() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-ithac-blue to-ithac-purple"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-ithac-blue/10 text-ithac-blue px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Our Digital Innovation Showcase
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-ithac-dark-gray mb-6 leading-tight"
          >
            Transforming Ideas Into
            <span className="text-ithac-blue block">Digital Reality</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-ithac-gray max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Explore our portfolio of cutting-edge digital solutions that have
            empowered businesses across Africa to thrive in the digital age.
            From innovative web platforms to transformative mobile applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button className="group bg-ithac-blue text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-ithac-blue/90 hover:shadow-lg hover:shadow-ithac-blue/25 flex items-center justify-center gap-2">
              View Our Work
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="border-2 border-ithac-blue text-ithac-blue px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-ithac-blue hover:text-white">
              Start Your Project
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/80 backdrop-blur-sm border border-ithac-light-gray rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-ithac-blue/30">
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-ithac-blue/10 p-3 rounded-full group-hover:bg-ithac-blue group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-ithac-blue group-hover:text-white" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-ithac-dark-gray mb-2">
                      {stat.number}
                    </div>
                    <div className="text-ithac-gray font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
