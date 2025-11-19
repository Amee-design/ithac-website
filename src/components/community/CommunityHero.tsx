"use client";

import { motion } from "framer-motion";
import {
  Users,
  MessageCircle,
  Calendar,
  Trophy,
  ArrowRight,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { Container, Typography, Button } from "../ui";

const CommunityHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-secondary-blue via-accent-aqua to-accent-aqua-light flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Animated Community Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
            className="absolute w-16 h-16 bg-white/10 rounded-full flex items-center justify-center"
            style={{
              left: `${5 + i * 12}%`,
              top: `${10 + i * 10}%`,
            }}
          >
            {i % 4 === 0 && <Users className="w-8 h-8 text-white/70" />}
            {i % 4 === 1 && <MessageCircle className="w-8 h-8 text-white/70" />}
            {i % 4 === 2 && <Calendar className="w-8 h-8 text-white/70" />}
            {i % 4 === 3 && <Heart className="w-8 h-8 text-white/70" />}
          </motion.div>
        ))}
      </div>

      <Container className="relative z-10 text-center text-white max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-4 md:px-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20 mb-6">
            <div className="w-2 h-2 bg-accent-aqua-light rounded-full animate-pulse"></div>
            <span className="text-white font-semibold text-sm tracking-wide uppercase">
              Connect • Learn • Grow Together
            </span>
          </div>

          <Typography variant="heroTitle" className="text-white mb-6">
            Join Africa's <br />
            <span className="text-accent-aqua-light">Tech Community</span>
          </Typography>

          <Typography
            variant="body"
            className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-12 px-4"
          >
            Connect with thousands of developers, innovators, and tech
            enthusiasts across Africa. Share knowledge, collaborate on projects,
            and build the future together.
          </Typography>

          {/* Community Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-4xl mx-auto"
          >
            {[
              { number: "5,000+", label: "Active Members" },
              { number: "150+", label: "Weekly Events" },
              { number: "25+", label: "Cities" },
              { number: "1,200+", label: "Projects Built" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20"
              >
                <div className="text-2xl md:text-3xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Link href="#join-community">
              <Button
                variant="accent"
                size="xl"
                className=" text-secondary-blue hover:bg-white/90"
              >
                Join Our Community
                <Users className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="#events">
              <Button
                variant="ghost"
                size="xl"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Explore Events
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Floating Community Features */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-32 right-4 xl:right-10 hidden lg:block w-72"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-accent-aqua rounded-full flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold">Hackathon Winner</div>
                <div className="text-sm text-white/70">Last Week</div>
              </div>
            </div>
            <div className="text-sm text-white/80">
              Amazing fintech solution!
            </div>
          </div>
        </motion.div> */}

        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-32 left-4 xl:left-10 hidden lg:block w-72"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-secondary-blue-dark rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold">Live Discussion</div>
                <div className="text-sm text-white/70">
                  React Best Practices
                </div>
              </div>
            </div>
            <div className="text-sm text-white/80">45 participants online</div>
          </div>
        </motion.div> */}
      </Container>
    </section>
  );
};

export default CommunityHero;
