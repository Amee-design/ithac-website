"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Users, Award, Calendar } from "lucide-react";
import Link from "next/link";
const Programs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const programs = [
    {
      title: "Full-Stack Development Bootcamp",
      description:
        "Intensive 12-week program covering modern web development with React, Node.js, and cloud deployment.",
      duration: "12 weeks",
      students: "25 students",
      level: "Beginner to Advanced",
      nextStart: "November 2025",
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: [
        "React & Next.js Mastery",
        "Backend Development",
        "Database Design",
        "Cloud Deployment",
      ],
    },
    {
      title: "UI/UX Design Workshop",
      description:
        "Comprehensive design thinking workshop focused on user experience, prototyping, and modern design tools.",
      duration: "6 weeks",
      students: "20 students",
      level: "All Levels",
      nextStart: "December 2025",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Design Thinking Process",
        "Figma & Adobe XD",
        "User Research",
        "Prototyping",
      ],
    },
    {
      title: "Mobile App Development Lab",
      description:
        "Hands-on mobile development using React Native and Flutter to build cross-platform applications.",
      duration: "10 weeks",
      students: "18 students",
      level: "Intermediate",
      nextStart: "January 2026",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: [
        "React Native",
        "Flutter Development",
        "App Store Deployment",
        "Performance Optimization",
      ],
    },
    {
      title: "Innovation Hackathon Sprint",
      description:
        "48-hour intensive hackathon experience with mentorship, focusing on solving real-world problems.",
      duration: "48 hours",
      students: "100+ participants",
      level: "All Levels",
      nextStart: "Monthly Events",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Team Formation",
        "Expert Mentorship",
        "Pitch Competition",
        "Networking",
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="programs"
      ref={ref}
      className="py-20 bg-gradient-to-br from-ithac-light-blue to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ithac-dark-gray mb-4">
            Featured Training <span className="text-ithac-blue">Programs</span>
          </h2>
          <p className="text-lg text-ithac-dark-gray/70 max-w-3xl mx-auto">
            Structured learning paths designed to take you from beginner to
            industry-ready professional with hands-on projects and expert
            mentorship.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Program Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Quick Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/90 text-ithac-blue px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                      {program.level}
                    </span>
                    <span className="bg-ithac-blue/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                      {program.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Program Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-ithac-dark-gray mb-3 group-hover:text-ithac-blue transition-colors">
                  {program.title}
                </h3>
                <p className="text-ithac-dark-gray/70 mb-4 text-sm leading-relaxed">
                  {program.description}
                </p>

                {/* Program Details */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-ithac-blue" />
                    <span className="text-xs text-ithac-dark-gray/70">
                      {program.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-ithac-blue" />
                    <span className="text-xs text-ithac-dark-gray/70">
                      {program.students}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-ithac-blue" />
                    <span className="text-xs text-ithac-dark-gray/70">
                      {program.level}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-ithac-blue" />
                    <span className="text-xs text-ithac-dark-gray/70">
                      {program.nextStart}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-ithac-dark-gray mb-2">
                    What You'll Learn:
                  </h4>
                  <div className="grid grid-cols-2 gap-1">
                    {program.highlights.map((highlight, highlightIndex) => (
                      <div
                        key={highlightIndex}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-ithac-blue rounded-full"></div>
                        <span className="text-xs text-ithac-dark-gray/70">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-ithac-blue text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <Link
                      href={"https://ithac-web-application.vercel.app/register"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Enroll Now
                    </Link>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border border-ithac-blue text-ithac-blue rounded-lg hover:bg-ithac-blue hover:text-white transition-colors text-sm font-medium"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
