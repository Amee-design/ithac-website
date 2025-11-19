"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Heart } from "lucide-react";
import Link from "next/link";
import { Container, Typography, Button, Card } from "../ui";

const CommunityJoin = () => {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography variant="sectionHeading" className="mb-4">
            Join Our <span className="text-accent-aqua">Community</span>
          </Typography>
          <Typography variant="body" className="max-w-2xl mx-auto mb-8">
            Ready to take your tech journey to the next level? Join thousands of
            passionate learners and professionals.
          </Typography>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button variant="primary" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Join the Community
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-blue to-accent-aqua rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <Typography variant="sectionHeading" className="text-xl mb-4">
                Get Verified
              </Typography>
              <Typography variant="body" className="text-gray-600">
                Complete your profile and join verified professionals in the
                community.
              </Typography>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-blue to-accent-aqua rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <Typography variant="sectionHeading" className="text-xl mb-4">
                Network
              </Typography>
              <Typography variant="body" className="text-gray-600">
                Connect with like-minded professionals and grow your network.
              </Typography>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-blue to-accent-aqua rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <Typography variant="sectionHeading" className="text-xl mb-4">
                Support
              </Typography>
              <Typography variant="body" className="text-gray-600">
                Get support and mentorship from experienced community members.
              </Typography>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Typography variant="body" className="text-gray-600 mb-4">
            Have questions about joining? We're here to help!
          </Typography>
          <Typography variant="small" className="text-gray-500 mb-6">
            Email us at{" "}
            <a
              href="mailto:community@ithac.org"
              className="text-accent-aqua hover:text-secondary-blue transition-colors"
            >
              community@ithac.org
            </a>{" "}
            or call us at{" "}
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-aqua hover:text-secondary-blue transition-colors"
            >
              +234 800 000 0000
            </a>
          </Typography>
        </motion.div>
      </Container>
    </section>
  );
};

export default CommunityJoin;
