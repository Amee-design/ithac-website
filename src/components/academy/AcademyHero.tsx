"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code, Users, Trophy } from "lucide-react";
import Link from "next/link";
import { Container, Typography, Button } from "../ui";

const AcademyHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-ithac-blue via-ithac-purple to-ithac-emerald flex items-center justify-center overflow-hidden">
      {/* Animated learning elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
            className="absolute w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
          >
            {i % 4 === 0 && <GraduationCap className="w-6 h-6 text-white/70" />}
            {i % 4 === 1 && <Code className="w-6 h-6 text-white/70" />}
            {i % 4 === 2 && <Users className="w-6 h-6 text-white/70" />}
            {i % 4 === 3 && <Trophy className="w-6 h-6 text-white/70" />}
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
            <GraduationCap className="w-5 h-5 text-ithac-gold" />
            <span className="text-white/90 text-sm font-medium">
              ITHAC Academy
            </span>
          </div>

          <Typography
            variant="heroTitle"
            className="text-white leading-tight max-w-4xl mx-auto"
          >
            Learn. Build.
            <br />
            <span className="text-ithac-gold">Lead.</span>
          </Typography>

          <Typography
            variant="body"
            className="text-white/90 max-w-3xl mx-auto text-xl leading-relaxed"
          >
            Transform your career with comprehensive technology training
            programs. Learn from industry experts, build real-world projects,
            and join a community of innovators shaping Africa's digital future.
          </Typography>

          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <Typography
                variant="heroTitle"
                className="text-3xl font-bold text-ithac-gold"
              >
                500+
              </Typography>
              <Typography variant="small" className="text-white/80">
                Graduates
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <Typography
                variant="heroTitle"
                className="text-3xl font-bold text-ithac-gold"
              >
                85%
              </Typography>
              <Typography variant="small" className="text-white/80">
                Job Placement
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center"
            >
              <Typography
                variant="heroTitle"
                className="text-3xl font-bold text-ithac-gold"
              >
                15
              </Typography>
              <Typography variant="small" className="text-white/80">
                Programs
              </Typography>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#courses">
              <Button variant="cta" size="lg">
                Explore Programs
              </Button>
            </Link>
            <Link href="/academy#register">
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Apply Now
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>

      {/* Floating achievement badges */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute top-1/4 right-8 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hidden lg:block"
      >
        <div className="text-center text-white">
          <Trophy className="w-8 h-8 text-ithac-gold mx-auto mb-2" />
          <Typography variant="small" className="font-semibold">
            Best Tech Academy
          </Typography>
          <Typography variant="small" className="text-white/70">
            Nigeria 2024
          </Typography>
        </div>
      </motion.div>

      {/* Bottom gradient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ithac-gold/50 to-transparent"></div>
    </section>
  );
};

export default AcademyHero;
