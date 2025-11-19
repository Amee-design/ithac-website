"use client";

import { motion } from "framer-motion";
import { Users, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container, Typography, Button } from "../ui";

const CommunityMentorship = () => {
  return (
    <section className="py-20 bg-primary-light">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography variant="sectionHeading" className="mb-4">
            Mentorship <span className="text-accent-aqua">Program</span>
          </Typography>
          <Typography variant="body" className="max-w-2xl mx-auto">
            Connect with experienced mentors or become a mentor yourself. Share
            knowledge and accelerate career growth.
          </Typography>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Typography variant="subheading" className="mb-6">
              Get paired with industry experts
            </Typography>
            <Typography variant="body" className="text-gray-600 mb-8">
              Our mentorship program connects you with experienced professionals
              who can guide your career journey and help you achieve your goals.
            </Typography>
            <div className="flex gap-4">
              <Link href="/mentorship/apply">
                <Button variant="primary">
                  Find a Mentor
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/mentorship/become">
                <Button variant="secondary">Become a Mentor</Button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-blue to-accent-aqua rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div>
                <Typography variant="subheading" className="text-lg">
                  Success Story
                </Typography>
                <Typography variant="small" className="text-gray-600">
                  From Junior to Senior Developer
                </Typography>
              </div>
            </div>
            <Typography variant="body" className="text-gray-600 mb-4">
              "The mentorship program changed my career completely. My mentor
              helped me navigate complex projects and eventually land my dream
              job."
            </Typography>
            <Typography variant="small" className="text-gray-500">
              - Sarah Adenike, Software Engineer at Paystack
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CommunityMentorship;
