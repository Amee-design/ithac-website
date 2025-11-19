"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Zap, Globe, CheckCircle } from "lucide-react";
import { Container, Typography, Card } from "../ui";

const WhyChooseITHAC = () => {
  const pillars = [
    {
      icon: Trophy,
      title: "Proven Excellence",
      description:
        "Award-winning solutions with a track record of successful project deliveries across Africa.",
      stats: "95% Client Satisfaction",
      features: [
        "Industry-recognized expertise",
        "Quality-driven development",
        "Continuous improvement culture",
        "Best practice implementation",
      ],
      gradient: "from-secondary-blue to-accent-aqua",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Highly skilled professionals with deep expertise in cutting-edge technologies and African market insights.",
      stats: "50+ Technical Experts",
      features: [
        "Certified professionals",
        "Local market knowledge",
        "Global technology standards",
        "Collaborative approach",
      ],
      gradient: "from-accent-aqua to-secondary-blue-dark",
    },
    {
      icon: Zap,
      title: "Rapid Innovation",
      description:
        "Agile methodologies and modern technologies to deliver solutions faster and more efficiently.",
      stats: "50% Faster Delivery",
      features: [
        "Agile development process",
        "Modern tech stack",
        "Rapid prototyping",
        "Iterative improvement",
      ],
      gradient: "from-accent-aqua-light to-secondary-blue",
    },
    {
      icon: Globe,
      title: "African Focus",
      description:
        "Deep understanding of African challenges with solutions designed for local contexts and global standards.",
      stats: "15 Countries Served",
      features: [
        "Local context understanding",
        "Cultural sensitivity",
        "Scalable solutions",
        "Community impact focus",
      ],
      gradient: "from-secondary-blue to-accent-aqua-dark",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-blue/20 to-accent-aqua/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-aqua/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-soft-blue-tint/20 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography variant="sectionHeading" className="mb-4">
            Why Choose ITHAC?
          </Typography>
          <Typography variant="body" className="max-w-3xl mx-auto">
            We combine global expertise with local insights to deliver
            technology solutions that truly make a difference in Africa's
            digital landscape.
          </Typography>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative">
                {/* Glass Card Effect */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-3xl border border-white/20 group-hover:bg-white/60 transition-all duration-500"></div>

                <Card className="relative z-10 p-8 bg-white/80 backdrop-blur-sm border-0 hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                  <div className="space-y-6">
                    {/* Icon and Stats */}
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${pillar.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <pillar.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <Typography
                          variant="small"
                          className="text-ithac-emerald font-semibold"
                        >
                          {pillar.stats}
                        </Typography>
                      </div>
                    </div>

                    {/* Title and Description */}
                    <div className="space-y-3">
                      <Typography
                        variant="subheading"
                        className="group-hover:text-ithac-blue transition-colors duration-300"
                      >
                        {pillar.title}
                      </Typography>
                      <Typography
                        variant="body"
                        className="text-sm leading-relaxed"
                      >
                        {pillar.description}
                      </Typography>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3">
                      {pillar.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.1 + idx * 0.05,
                          }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-4 h-4 text-ithac-emerald flex-shrink-0" />
                          <Typography
                            variant="small"
                            className="text-ithac-dark-gray/80"
                          >
                            {feature}
                          </Typography>
                        </motion.div>
                      ))}
                    </div>

                    {/* Hover Effect Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                    ></div>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-r from-ithac-gray-light to-white p-8 border-0 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "15", label: "Countries Served" },
                { number: "95%", label: "Client Retention" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <Typography
                    variant="heroTitle"
                    className="text-3xl font-bold"
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body"
                    className="text-sm text-ithac-dark-gray/70"
                  >
                    {stat.label}
                  </Typography>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyChooseITHAC;
