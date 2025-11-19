"use client";

import { motion } from "framer-motion";
import { MessageCircle, Users } from "lucide-react";
import { Container, Typography } from "../ui";

const CommunityForums = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography variant="sectionHeading" className="mb-4">
            Discussion <span className="text-accent-aqua">Forums</span>
          </Typography>
          <Typography variant="body" className="max-w-2xl mx-auto">
            Engage in meaningful conversations with fellow developers, ask
            questions, and share your expertise.
          </Typography>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-primary-light rounded-3xl p-8">
            <MessageCircle className="w-12 h-12 text-secondary-blue mb-4" />
            <Typography variant="subheading" className="mb-4">
              Active Discussions
            </Typography>
            <Typography variant="body" className="text-gray-600">
              Join ongoing conversations about the latest technologies, best
              practices, and industry trends.
            </Typography>
          </div>

          <div className="bg-accent-aqua-tint rounded-3xl p-8">
            <Users className="w-12 h-12 text-accent-aqua-dark mb-4" />
            <Typography variant="subheading" className="mb-4">
              Expert Q&A
            </Typography>
            <Typography variant="body" className="text-gray-600">
              Get answers from experienced developers and industry experts in
              our community.
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CommunityForums;
