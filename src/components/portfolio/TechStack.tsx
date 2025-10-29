"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import { Code, Database, Cloud, Smartphone, Brain, Shield } from "lucide-react";

interface TechCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  technologies: string[];
  bgColor: string;
  textColor: string;
  hoverBg: string;
  hoverText: string;
}

const techCategories: TechCategory[] = [
  {
    title: "Frontend Development",
    icon: Code,
    description: "Modern, responsive user interfaces",
    technologies: [
      "React",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    bgColor: "bg-ithac-blue/10",
    textColor: "text-ithac-blue",
    hoverBg: "group-hover:bg-ithac-blue",
    hoverText: "group-hover:text-white",
  },
  {
    title: "Backend Development",
    icon: Database,
    description: "Scalable server-side solutions",
    technologies: [
      "Node.js",
      "Python",
      "Django",
      "Express.js",
      "GraphQL",
      "REST APIs",
    ],
    bgColor: "bg-ithac-purple/10",
    textColor: "text-ithac-purple",
    hoverBg: "group-hover:bg-ithac-purple",
    hoverText: "group-hover:text-white",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Reliable infrastructure and deployment",
    technologies: [
      "AWS",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Terraform",
    ],
    bgColor: "bg-ithac-emerald/10",
    textColor: "text-ithac-emerald",
    hoverBg: "group-hover:bg-ithac-emerald",
    hoverText: "group-hover:text-white",
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    description: "Native and cross-platform apps",
    technologies: [
      "React Native",
      "Flutter",
      "iOS",
      "Android",
      "Expo",
      "Firebase",
    ],
    bgColor: "bg-ithac-gold/10",
    textColor: "text-ithac-gold",
    hoverBg: "group-hover:bg-ithac-gold",
    hoverText: "group-hover:text-white",
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    description: "Intelligent solutions and automation",
    technologies: [
      "TensorFlow",
      "PyTorch",
      "OpenAI",
      "Computer Vision",
      "NLP",
      "Data Science",
    ],
    bgColor: "bg-ithac-coral/10",
    textColor: "text-ithac-coral",
    hoverBg: "group-hover:bg-ithac-coral",
    hoverText: "group-hover:text-white",
  },
  {
    title: "Security & Testing",
    icon: Shield,
    description: "Secure and reliable applications",
    technologies: [
      "OAuth",
      "JWT",
      "Jest",
      "Cypress",
      "Penetration Testing",
      "GDPR Compliance",
    ],
    bgColor: "bg-ithac-teal/10",
    textColor: "text-ithac-teal",
    hoverBg: "group-hover:bg-ithac-teal",
    hoverText: "group-hover:text-white",
  },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-ithac-light-gray/30">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-ithac-dark-gray mb-6"
          >
            Our Technology Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-ithac-gray max-w-3xl mx-auto"
          >
            We leverage cutting-edge technologies and industry best practices to
            deliver exceptional digital solutions that scale with your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 border border-ithac-light-gray hover:shadow-xl hover:shadow-ithac-blue/10 transition-all duration-500 h-full">
                  <div className="mb-6">
                    <div
                      className={`inline-flex p-4 rounded-2xl ${category.bgColor} ${category.hoverBg} transition-all duration-300 mb-4`}
                    >
                      <IconComponent
                        className={`w-8 h-8 ${category.textColor} ${category.hoverText} transition-all duration-300`}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-ithac-dark-gray mb-3">
                      {category.title}
                    </h3>
                    <p className="text-ithac-gray leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-ithac-dark-gray uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + techIndex * 0.05,
                          }}
                          viewport={{ once: true }}
                          className={`px-3 py-1 ${category.bgColor} ${category.textColor} rounded-full text-sm font-medium hover:bg-ithac-blue hover:text-white transition-all duration-300 cursor-default`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl border border-ithac-light-gray p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-ithac-dark-gray mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-xl text-ithac-gray mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology expertise can help bring your
              vision to life and drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-ithac-blue text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-ithac-blue/90 hover:shadow-lg hover:shadow-ithac-blue/25">
                Start Your Project
              </button>
              <button className="border-2 border-ithac-blue text-ithac-blue px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-ithac-blue hover:text-white">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
