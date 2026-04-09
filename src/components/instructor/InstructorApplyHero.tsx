"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import { GraduationCap } from "lucide-react";

export default function InstructorApplyHero() {
  return (
    <section className="relative bg-white pt-32 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
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
            className="mb-6 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 bg-ithac-blue/10 text-ithac-blue px-4 py-2 rounded-full text-sm font-medium">
              <GraduationCap className="w-4 h-4" />
              Join Our Faculty
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-ithac-dark-gray mb-6 leading-tight relative z-10"
          >
            Become an <span className="text-ithac-blue">Instructor</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-ithac-gray max-w-3xl mx-auto leading-relaxed relative z-10"
          >
            Share your knowledge and passion with our growing community of learners.
            Apply to teach and inspire the next generation of tech leaders across Africa.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
