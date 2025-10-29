"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../ui/Container";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Calendar,
  Tag,
} from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  year: string;
  client: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: "1",
    title: "EcoBank Digital Platform",
    description:
      "Complete digital transformation with mobile banking app and web platform serving 2M+ users across 15 African countries.",
    category: "Fintech",
    image: "/images/stock/fintech-dashboard.jpg",
    tags: ["React Native", "Node.js", "MongoDB", "AWS"],
    year: "2024",
    client: "EcoBank Group",
    liveUrl: "https://ecobank.com",
    featured: true,
  },
  {
    id: "2",
    title: "AgriConnect Marketplace",
    description:
      "Revolutionary agricultural platform connecting farmers directly with buyers, featuring real-time pricing and logistics integration.",
    category: "AgriTech",
    image: "/images/stock/agritech-platform.jpg",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Google Maps API"],
    year: "2024",
    client: "African Union",
    liveUrl: "https://agriconnect.africa",
    githubUrl: "https://github.com/ithac/agriconnect",
    featured: true,
  },
  {
    id: "3",
    title: "MedFlow Health Records",
    description:
      "Secure healthcare management system enabling seamless patient data sharing across hospitals and clinics.",
    category: "HealthTech",
    image: "/images/stock/healthcare-system.jpg",
    tags: ["Vue.js", "Django", "PostgreSQL", "Docker"],
    year: "2023",
    client: "Ghana Health Service",
    featured: false,
  },
  {
    id: "4",
    title: "EduStream Learning Platform",
    description:
      "Interactive e-learning platform with AI-powered personalized learning paths and real-time collaboration tools.",
    category: "EdTech",
    image: "/images/stock/education-platform.jpg",
    tags: ["React", "Python", "TensorFlow", "WebRTC"],
    year: "2023",
    client: "University of Lagos",
    liveUrl: "https://edustream.ng",
    featured: true,
  },
  {
    id: "5",
    title: "SmartCity Traffic Management",
    description:
      "IoT-powered traffic optimization system using AI to reduce congestion and improve urban mobility.",
    category: "Smart City",
    image: "/images/stock/smart-city.jpg",
    tags: ["IoT", "Python", "Machine Learning", "Redis"],
    year: "2023",
    client: "Lagos State Government",
    featured: false,
  },
  {
    id: "6",
    title: "Solar Energy Dashboard",
    description:
      "Real-time monitoring and analytics platform for solar energy installations across rural communities.",
    category: "CleanTech",
    image: "/images/stock/solar-dashboard.jpg",
    tags: ["Angular", "Node.js", "InfluxDB", "Grafana"],
    year: "2022",
    client: "Solar Sister",
    liveUrl: "https://solarsister.org",
    featured: false,
  },
];

const categories = [
  "All",
  "Fintech",
  "AgriTech",
  "HealthTech",
  "EdTech",
  "Smart City",
  "CleanTech",
];

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = filteredProjects.filter(
    (project) => project.featured
  );
  const regularProjects = filteredProjects.filter(
    (project) => !project.featured
  );

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-ithac-dark-gray mb-6"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-ithac-gray max-w-3xl mx-auto"
          >
            Discover how we've helped organizations across Africa leverage
            technology to solve real-world challenges and drive meaningful
            impact.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-ithac-blue text-white shadow-lg shadow-ithac-blue/25"
                  : "bg-white text-ithac-gray border border-ithac-light-gray hover:border-ithac-blue hover:text-ithac-blue"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Projects Grid */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-ithac-dark-gray mb-8">
              Featured Work
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="wait">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative bg-white rounded-3xl border border-ithac-light-gray overflow-hidden hover:shadow-2xl hover:shadow-ithac-blue/10 transition-all duration-500"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Hover Overlay */}
                      <AnimatePresence>
                        {hoveredProject === project.id && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-ithac-blue/90 flex items-center justify-center"
                          >
                            <div className="flex gap-4">
                              {project.liveUrl && (
                                <motion.a
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.1 }}
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                                >
                                  <ExternalLink className="w-6 h-6" />
                                </motion.a>
                              )}
                              {project.githubUrl && (
                                <motion.a
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.2 }}
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                                >
                                  <Github className="w-6 h-6" />
                                </motion.a>
                              )}
                              <motion.button
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                              >
                                <ArrowUpRight className="w-6 h-6" />
                              </motion.button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-ithac-blue/10 text-ithac-blue px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-2 text-ithac-gray text-sm">
                          <Calendar className="w-4 h-4" />
                          {project.year}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-ithac-dark-gray mb-3 group-hover:text-ithac-blue transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-ithac-gray mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex items-center gap-2 mb-4">
                        <Tag className="w-4 h-4 text-ithac-gray" />
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-ithac-light-gray text-ithac-gray px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="text-xs text-ithac-gray">
                              +{project.tags.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="text-sm text-ithac-gray">
                        <strong>Client:</strong> {project.client}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Regular Projects Grid */}
        {regularProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-ithac-dark-gray mb-8">
              More Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="wait">
                {regularProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative bg-white rounded-2xl border border-ithac-light-gray overflow-hidden hover:shadow-lg hover:shadow-ithac-blue/10 transition-all duration-300"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-ithac-blue px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-ithac-dark-gray mb-2 group-hover:text-ithac-blue transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-ithac-gray text-sm mb-4 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-ithac-gray text-xs">
                          <Calendar className="w-3 h-3" />
                          {project.year}
                        </div>

                        <div className="flex gap-2">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-ithac-blue hover:text-ithac-blue/80 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-ithac-blue hover:text-ithac-blue/80 transition-colors"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
