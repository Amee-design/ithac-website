"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Bell } from "lucide-react";
import { Container, Typography, Button } from "../ui";

const BlogNewsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-soft-blue-tint to-accent-aqua-tint">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-secondary-blue to-accent-aqua rounded-2xl mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>

              <Typography variant="sectionHeading" className="mb-4">
                Stay Updated with{" "}
                <span className="text-accent-aqua">ITHAC Insights</span>
              </Typography>

              <Typography
                variant="body"
                className="text-gray-600 max-w-2xl mx-auto mb-8"
              >
                Get the latest articles, tutorials, and industry insights
                delivered directly to your inbox. Join our community of tech
                enthusiasts and never miss an update.
              </Typography>
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-accent-aqua focus:outline-none text-gray-800"
                  />
                  <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                <Button variant="primary" size="lg" className="px-8">
                  Subscribe
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Newsletter Benefits */}
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-secondary-blue/10 rounded-xl flex items-center justify-center mb-3">
                    <Bell className="w-6 h-6 text-secondary-blue" />
                  </div>
                  <Typography
                    variant="small"
                    className="font-medium text-gray-700"
                  >
                    Weekly Updates
                  </Typography>
                  <Typography variant="small" className="text-gray-500">
                    Fresh content every week
                  </Typography>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-accent-aqua/10 rounded-xl flex items-center justify-center mb-3">
                    <ArrowRight className="w-6 h-6 text-accent-aqua" />
                  </div>
                  <Typography
                    variant="small"
                    className="font-medium text-gray-700"
                  >
                    Exclusive Content
                  </Typography>
                  <Typography variant="small" className="text-gray-500">
                    Subscriber-only articles
                  </Typography>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-secondary-blue-dark/10 rounded-xl flex items-center justify-center mb-3">
                    <Mail className="w-6 h-6 text-secondary-blue-dark" />
                  </div>
                  <Typography
                    variant="small"
                    className="font-medium text-gray-700"
                  >
                    No Spam
                  </Typography>
                  <Typography variant="small" className="text-gray-500">
                    Quality content only
                  </Typography>
                </div>
              </div>

              <Typography
                variant="small"
                className="text-center text-gray-500 mt-6"
              >
                By subscribing, you agree to our privacy policy. Unsubscribe at
                any time.
              </Typography>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default BlogNewsletter;
