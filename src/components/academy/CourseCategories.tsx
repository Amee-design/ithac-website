"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code,
  Database,
  Smartphone,
  Cloud,
  Shield,
  BarChart,
  Users,
  Clock,
  Award,
  ArrowRight,
} from "lucide-react";
import { Container, Typography, Card, Button } from "../ui";

const CourseCategories = () => {
  const categories = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Master modern web technologies including React, Node.js, and full-stack development.",
      duration: "12 weeks",
      level: "Beginner to Advanced",
      students: "150+ enrolled",
      courses: [
        "Frontend Development with React",
        "Backend Development with Node.js",
        "Full-Stack Web Applications",
        "Modern JavaScript & TypeScript",
      ],
      gradient: "from-ithac-blue to-ithac-purple",
      price: "₦150,000",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Build native and cross-platform mobile applications for iOS and Android.",
      duration: "10 weeks",
      level: "Intermediate",
      students: "80+ enrolled",
      courses: [
        "React Native Development",
        "Flutter App Development",
        "iOS Development with Swift",
        "Android Development with Kotlin",
      ],
      gradient: "from-ithac-emerald to-ithac-blue-dark",
      price: "₦120,000",
    },
    {
      icon: Database,
      title: "Data Science & AI",
      description:
        "Learn data analysis, machine learning, and artificial intelligence technologies.",
      duration: "16 weeks",
      level: "Intermediate to Advanced",
      students: "100+ enrolled",
      courses: [
        "Python for Data Science",
        "Machine Learning Fundamentals",
        "Deep Learning & Neural Networks",
        "AI Ethics & Applications",
      ],
      gradient: "from-ithac-purple to-ithac-emerald",
      price: "₦200,000",
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description:
        "Master cloud platforms, DevOps practices, and modern infrastructure management.",
      duration: "8 weeks",
      level: "Intermediate",
      students: "60+ enrolled",
      courses: [
        "AWS Cloud Fundamentals",
        "Docker & Kubernetes",
        "DevOps & CI/CD Pipelines",
        "Cloud Architecture Design",
      ],
      gradient: "from-ithac-gold to-ithac-blue",
      price: "₦100,000",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Protect digital assets with comprehensive cybersecurity and ethical hacking skills.",
      duration: "14 weeks",
      level: "Beginner to Advanced",
      students: "90+ enrolled",
      courses: [
        "Network Security Fundamentals",
        "Ethical Hacking & Penetration Testing",
        "Digital Forensics",
        "Security Compliance & Risk Management",
      ],
      gradient: "from-ithac-blue-dark to-ithac-purple",
      price: "₦180,000",
    },
    {
      icon: BarChart,
      title: "Digital Marketing",
      description:
        "Master digital marketing strategies, analytics, and growth hacking techniques.",
      duration: "6 weeks",
      level: "Beginner",
      students: "200+ enrolled",
      courses: [
        "Social Media Marketing",
        "Search Engine Optimization",
        "Google Ads & Analytics",
        "Content Marketing Strategy",
      ],
      gradient: "from-ithac-emerald to-ithac-gold",
      price: "₦80,000",
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
            Course Categories
          </Typography>
          <Typography variant="body" className="max-w-3xl mx-auto">
            Choose from our comprehensive range of technology programs designed
            to build real-world skills and advance your career in the digital
            economy.
          </Typography>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full p-0 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                {/* Header with Icon and Price */}
                <div
                  className={`bg-gradient-to-r ${category.gradient} p-6 text-white relative overflow-hidden`}
                >
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <Typography variant="small" className="text-white/80">
                          Starting at
                        </Typography>
                        <Typography
                          variant="subheading"
                          className="text-white font-bold"
                        >
                          {category.price}
                        </Typography>
                      </div>
                    </div>
                    <Typography
                      variant="subheading"
                      className="text-white mb-2"
                    >
                      {category.title}
                    </Typography>
                    <Typography variant="small" className="text-white/90">
                      {category.description}
                    </Typography>
                  </div>
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-8 translate-x-8"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Course Info */}
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="space-y-1">
                      <div className="flex items-center justify-center gap-1">
                        <Clock className="w-4 h-4 text-ithac-blue" />
                        <Typography
                          variant="small"
                          className="font-medium text-ithac-blue"
                        >
                          Duration
                        </Typography>
                      </div>
                      <Typography
                        variant="small"
                        className="text-ithac-dark-gray/80"
                      >
                        {category.duration}
                      </Typography>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-center gap-1">
                        <Users className="w-4 h-4 text-ithac-emerald" />
                        <Typography
                          variant="small"
                          className="font-medium text-ithac-emerald"
                        >
                          Students
                        </Typography>
                      </div>
                      <Typography
                        variant="small"
                        className="text-ithac-dark-gray/80"
                      >
                        {category.students}
                      </Typography>
                    </div>
                  </div>

                  {/* Level Badge */}
                  <div className="flex items-center justify-center">
                    <span className="bg-ithac-light-blue text-ithac-blue px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {category.level}
                    </span>
                  </div>

                  {/* Course List */}
                  <div className="space-y-3">
                    <Typography
                      variant="small"
                      className="font-semibold text-ithac-dark-gray"
                    >
                      What you'll learn:
                    </Typography>
                    <div className="space-y-2">
                      {category.courses.slice(0, 3).map((course, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-ithac-emerald rounded-full flex-shrink-0"></div>
                          <Typography
                            variant="small"
                            className="text-ithac-dark-gray/80"
                          >
                            {course}
                          </Typography>
                        </div>
                      ))}
                      {category.courses.length > 3 && (
                        <Typography
                          variant="small"
                          className="text-ithac-blue font-medium ml-3.5"
                        >
                          +{category.courses.length - 3} more courses
                        </Typography>
                      )}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3 pt-4">
                    <Link
                      href="https://ithac-web-application.vercel.app/register"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="primary" className="w-full group">
                        Enroll Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link
                      href="https://ithac-web-application.vercel.app/register"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        variant="ghost"
                        className="w-full text-ithac-blue"
                      >
                        View Curriculum
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-white p-8 border border-ithac-light-blue">
            <Typography variant="subheading" className="mb-4">
              Can't find the right program?
            </Typography>
            <Typography
              variant="body"
              className="text-ithac-dark-gray/80 mb-6 max-w-2xl mx-auto"
            >
              We offer custom training programs tailored to your organization's
              specific needs. Contact us to discuss a personalized learning
              path.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://ithac-web-application.vercel.app/register"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="secondary" size="lg">
                  Request Custom Training
                </Button>
              </Link>
              <Link
                href="https://ithac-web-application.vercel.app/register"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="ghost" size="lg">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
};

export default CourseCategories;
