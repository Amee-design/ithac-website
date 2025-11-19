"use client";

import { motion } from "framer-motion";
import { Code, Laptop, Users, Lightbulb, Briefcase, Globe } from "lucide-react";
import { Container, Typography } from "../ui";

const BlogCategories = () => {
  const categories = [
    {
      name: "Programming",
      icon: Code,
      count: 45,
      color: "bg-secondary-blue",
      description: "Tutorials, best practices, and coding tips",
    },
    {
      name: "Tech Trends",
      icon: Laptop,
      count: 32,
      color: "bg-accent-aqua",
      description: "Latest technology trends and innovations",
    },
    {
      name: "Career Growth",
      icon: Briefcase,
      count: 28,
      color: "bg-accent-aqua-dark",
      description: "Career advice and professional development",
    },
    {
      name: "Innovation",
      icon: Lightbulb,
      count: 23,
      color: "bg-secondary-blue-dark",
      description: "African innovation and startup stories",
    },
    {
      name: "Community",
      icon: Users,
      count: 19,
      color: "bg-accent-aqua-light",
      description: "Community events and networking",
    },
    {
      name: "Global Tech",
      icon: Globe,
      count: 15,
      color: "bg-secondary-blue",
      description: "International tech news and insights",
    },
  ];

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
            Explore by <span className="text-accent-aqua">Category</span>
          </Typography>
          <Typography variant="body" className="max-w-2xl mx-auto">
            Browse our diverse collection of articles covering everything from
            programming tutorials to career guidance and African tech
            innovation.
          </Typography>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <div className="flex items-center justify-between mb-3">
                  <Typography variant="subheading" className="text-lg">
                    {category.name}
                  </Typography>
                  <span className="bg-soft-blue-tint text-secondary-blue px-3 py-1 rounded-full text-sm font-medium">
                    {category.count}
                  </span>
                </div>

                <Typography variant="small" className="text-gray-600">
                  {category.description}
                </Typography>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default BlogCategories;
