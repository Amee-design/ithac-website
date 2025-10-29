"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Award, Rocket } from "lucide-react";
import { Container, Typography } from "../ui";

const Timeline = () => {
  const milestones = [
    {
      year: "2018",
      title: "Foundation",
      description:
        "ITHAC was founded with a vision to transform Africa's technology landscape.",
      icon: Rocket,
      stats: "1 Campus",
    },
    {
      year: "2019",
      title: "First Cohort",
      description:
        "Launched our first comprehensive technology training program with 50 students.",
      icon: Users,
      stats: "50 Students",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Pivoted to digital-first approach during pandemic, reaching students across Africa.",
      icon: Calendar,
      stats: "5 Countries",
    },
    {
      year: "2021",
      title: "Industry Recognition",
      description:
        "Received multiple awards for innovation in technology education.",
      icon: Award,
      stats: "3 Awards",
    },
    {
      year: "2022",
      title: "Strategic Partnerships",
      description:
        "Formed partnerships with leading tech companies and international organizations.",
      icon: Users,
      stats: "10+ Partners",
    },
    {
      year: "2023",
      title: "Expansion",
      description:
        "Opened new campuses and launched online academy reaching 15 African countries.",
      icon: Rocket,
      stats: "15 Countries",
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description:
        "Established state-of-the-art innovation hub and startup incubator.",
      icon: Award,
      stats: "50+ Startups",
    },
    {
      year: "2025",
      title: "Future Vision",
      description:
        "Launching AI-powered learning platform and expanding to 25 African countries.",
      icon: Rocket,
      stats: "1000+ Alumni",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-ithac-gray-light">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography variant="sectionHeading" className="mb-4">
            Our Journey
          </Typography>
          <Typography variant="body" className="max-w-3xl mx-auto">
            From a small startup to Africa's leading technology hub, here are
            the key milestones that shaped our journey.
          </Typography>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-ithac-blue via-ithac-purple to-ithac-emerald transform -translate-x-1/2 hidden lg:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col lg:flex-row`}
              >
                {/* Content Card */}
                <div className="flex-1 max-w-lg">
                  <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-ithac-blue to-ithac-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <milestone.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center justify-between">
                          <Typography variant="subheading" className="text-lg">
                            {milestone.title}
                          </Typography>
                          <span className="text-ithac-gold font-bold text-sm bg-ithac-gold/10 px-3 py-1 rounded-full">
                            {milestone.stats}
                          </span>
                        </div>
                        <Typography variant="body" className="text-sm">
                          {milestone.description}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 hidden lg:block">
                  <div className="w-8 h-8 bg-gradient-to-r from-ithac-blue to-ithac-purple rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Year Display */}
                <div className="flex-1 max-w-lg">
                  <div
                    className={`${
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    } text-center lg:text-left`}
                  >
                    <Typography
                      variant="heroTitle"
                      className="text-6xl font-extrabold font-satoshi bg-gradient-to-r from-ithac-blue to-ithac-purple bg-clip-text text-transparent"
                    >
                      {milestone.year}
                    </Typography>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
