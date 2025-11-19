"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { Container, Typography, Button } from "../ui";

const BlogHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-secondary-blue to-accent-aqua flex items-center justify-center overflow-hidden pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/2 w-24 h-24 bg-white rounded-full"></div>
      </div>

      <Container className="relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20 mb-6">
            <div className="w-2 h-2 bg-accent-aqua-light rounded-full animate-pulse"></div>
            <span className="text-white font-semibold text-sm tracking-wide uppercase">
              Tech Insights & Innovation
            </span>
          </div>

          <Typography variant="heroTitle" className="text-white mb-6">
            ITHAC Blog
          </Typography>

          <Typography
            variant="body"
            className="text-white/90 text-xl max-w-3xl mx-auto mb-8"
          >
            Discover the latest in African tech innovation, career insights, and
            educational content from our expert team. Stay ahead in the rapidly
            evolving technology landscape.
          </Typography>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles, tutorials, insights..."
                className="w-full px-6 py-4 pl-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent-aqua-light"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-accent-aqua text-white px-6 py-2 rounded-xl hover:bg-accent-aqua-dark transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Featured Article Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <span className="bg-accent-aqua text-white px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                    Featured Article
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    The Future of African Tech: Building World-Class Solutions
                  </h3>
                  <p className="text-white/80 mb-6">
                    Explore how African tech companies are revolutionizing
                    global software development with innovative approaches and
                    local solutions.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-white/70 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Nov 15, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>ITHAC Team</span>
                    </div>
                  </div>
                  <Link href="#featured-article">
                    <Button
                      variant="accent"
                      className="bg-white text-secondary-blue hover:bg-white/90"
                    >
                      Read Full Article
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <div className="aspect-video bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ArrowRight className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-white/80">Featured Article Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default BlogHero;
