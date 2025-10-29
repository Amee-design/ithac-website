"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Globe } from "lucide-react";
import { Container, Typography, Card } from "../ui";

const VisionMission = () => {
  const sections = [
    {
      icon: Eye,
      title: "Our Vision",
      content:
        "To be Africa's leading technology hub and cynosure, inspiring a generation of digital innovators who will transform the continent through cutting-edge technology and entrepreneurial excellence.",
      gradient: "from-ithac-blue to-ithac-purple",
    },
    {
      icon: Target,
      title: "Our Mission",
      content:
        "To cultivate innovation, creativity, and entrepreneurship across Africa by providing world-class technology education, fostering strategic partnerships, and building solutions that address real-world challenges.",
      gradient: "from-ithac-emerald to-ithac-blue-dark",
    },
    {
      icon: Heart,
      title: "Our Values",
      content:
        "Excellence, Innovation, Integrity, Collaboration, and Empowerment. We believe in the transformative power of technology when guided by strong ethical principles and a commitment to community development.",
      gradient: "from-ithac-gold to-ithac-blue",
    },
    {
      icon: Globe,
      title: "Our Impact",
      content:
        "Connecting African talent with global opportunities, bridging the digital divide, and creating sustainable technology ecosystems that drive economic growth and social development across the continent.",
      gradient: "from-ithac-purple to-ithac-emerald",
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
            Vision & Mission
          </Typography>
          <Typography variant="body" className="max-w-3xl mx-auto">
            Our foundation is built on a clear vision for Africa's digital
            future and a mission to empower the next generation of technology
            leaders.
          </Typography>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                variant="feature"
                className="h-full hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="space-y-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${section.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <section.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="space-y-4">
                    <Typography variant="subheading">
                      {section.title}
                    </Typography>
                    <Typography variant="body" className="leading-relaxed">
                      {section.content}
                    </Typography>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default VisionMission;
