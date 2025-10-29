"use client";

import { motion } from "framer-motion";
import { Code, Cloud, Users, Lightbulb } from "lucide-react";
import { Container, Typography, Button } from "../ui";

const ServicesHero = () => {
  const floatingIcons = [
    { icon: Code, delay: 0, x: 20, y: 30 },
    { icon: Cloud, delay: 1, x: -30, y: 20 },
    { icon: Users, delay: 2, x: 40, y: -20 },
    { icon: Lightbulb, delay: 0.5, x: -20, y: -30 },
  ];

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-ithac-blue via-ithac-purple to-ithac-emerald flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0.8, 1.2, 0.8],
              x: [item.x, item.x + 20, item.x],
              y: [item.y, item.y - 20, item.y],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center"
            style={{
              left: `${20 + index * 15}%`,
              top: `${20 + index * 10}%`,
            }}
          >
            <item.icon className="w-8 h-8 text-white/70" />
          </motion.div>
        ))}
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
            <span className="text-white/90 text-sm font-medium">
              Our Services
            </span>
          </div>

          <Typography
            variant="heroTitle"
            className="text-white leading-tight max-w-4xl mx-auto"
          >
            Comprehensive
            <br />
            <span className="text-ithac-gold">Technology Solutions</span>
          </Typography>

          <Typography
            variant="body"
            className="text-white/90 max-w-3xl mx-auto text-xl leading-relaxed"
          >
            From custom software development to digital transformation
            consultancy, we provide end-to-end technology solutions that drive
            innovation and growth across Africa.
          </Typography>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Explore Services
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white border-white/30 hover:bg-white/10"
            >
              Get Custom Quote
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Bottom gradient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ithac-gold/50 to-transparent"></div>
    </section>
  );
};

export default ServicesHero;
