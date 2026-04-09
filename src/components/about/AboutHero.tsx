"use client";

import { motion } from "framer-motion";
import { Container, Typography } from "../ui";

const AboutHero = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-ithac-blue via-ithac-purple to-ithac-emerald flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-ithac-gold/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ithac-silver/10 rounded-full blur-3xl"
        />
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
            <span className="text-white/90 text-sm font-medium">
              About ITHAC
            </span>
          </div>

          <Typography
            variant="heroTitle"
            className="text-white leading-tight max-w-4xl mx-auto"
          >
            Building Africa's
            <br />
            <span className="text-ithac-gold">Digital Future</span>
          </Typography>

          <Typography
            variant="body"
            className="text-white/90 max-w-2xl mx-auto text-xl leading-relaxed"
          >
            Information Technologies Hub and Cynosure (ITHAC) is cultivating a nurturing and synergistic environment that fosters information technology product and service creation and support. We envision becoming the go-to destination for the people of Ondo state and Nigeria at large seeking to gain digital skills, have access to top-notched infrastructures utilization and entrepreneurs aiming to transform their ideas into successful digital ventures. Our aim is to establish an ecosystem that nurtures creativity, collaboration, and entrepreneurship, allowing individuals to flourish and make a meaningful, long-lasting difference in the world. ITHAC embraces the convergence of technology, creativity, and business with our commitment to excellence, innovation, and partnership, we support organizations and individuals to realize their vision towards making a lasting impact on the digital landscape.
          </Typography>
        </motion.div>
      </Container>

      {/* Bottom gradient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ithac-gold/50 to-transparent"></div>
    </section>
  );
};

export default AboutHero;
