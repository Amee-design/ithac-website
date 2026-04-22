"use client";

import { motion } from "framer-motion";
import {
  Code,
  Cloud,
  Smartphone,
  Database,
  Shield,
  Users,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { Container, Typography, Card, Button } from "../ui";

const ServiceCards = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Tailored software solutions built with cutting-edge technologies to meet your specific business needs and drive digital transformation.",
      features: [
        "Web Applications",
        "Mobile Apps",
        "API Development",
        "System Integration",
      ],
      gradient: "from-ithac-blue to-ithac-purple",
      delay: 0,
    },
    {
      icon: Cloud,
      title: "Cloud Computing Solutions",
      description:
        "Comprehensive cloud infrastructure setup, migration, and optimization services to enhance scalability and reduce operational costs.",
      features: [
        "Cloud Migration",
        "Infrastructure Setup",
        "DevOps",
        "Monitoring",
      ],
      gradient: "from-ithac-emerald to-ithac-blue-dark",
      delay: 0.1,
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
      features: [
        "iOS Development",
        "Android Development",
        "React Native",
        "Flutter",
      ],
      gradient: "from-ithac-purple to-ithac-emerald",
      delay: 0.2,
    },
    {
      icon: Database,
      title: "Data Analytics & AI",
      description:
        "Advanced data analytics, machine learning, and AI solutions to unlock insights and automate business processes.",
      features: [
        "Data Science",
        "Machine Learning",
        "AI Solutions",
        "Business Intelligence",
      ],
      gradient: "from-ithac-gold to-ithac-blue",
      delay: 0.3,
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description:
        "Comprehensive security solutions to protect your digital assets, ensure compliance, and maintain business continuity.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance",
        "Risk Assessment",
      ],
      gradient: "from-ithac-blue-dark to-ithac-purple",
      delay: 0.4,
    },
    {
      icon: Users,
      title: "Technology Training",
      description:
        "Professional development programs and technical training to upskill your team and build internal technology capabilities.",
      features: [
        "Corporate Training",
        "Bootcamps",
        "Workshops",
        "Certification",
      ],
      gradient: "from-ithac-emerald to-ithac-gold",
      delay: 0.5,
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
            Our Service Portfolio
          </Typography>
          <Typography variant="body" className="max-w-3xl mx-auto">
            We offer a comprehensive range of technology services designed to
            accelerate your digital transformation journey and drive sustainable
            growth.
          </Typography>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: service.delay }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full p-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden relative">
                {/* Background gradient effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <Typography
                    variant="subheading"
                    className="group-hover:text-ithac-blue transition-colors duration-300"
                  >
                    {service.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body"
                    className="text-sm leading-relaxed"
                  >
                    {service.description}
                  </Typography>

                  {/* Features List */}
                  <div className="space-y-3">
                    <Typography
                      variant="small"
                      className="font-semibold text-ithac-dark-gray"
                    >
                      Key Features:
                    </Typography>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-ithac-emerald rounded-full"></div>
                          <Typography
                            variant="small"
                            className="text-ithac-dark-gray/80"
                          >
                            {feature}
                          </Typography>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-ithac-light-blue transition-colors duration-300"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-ithac-blue to-ithac-purple p-8 text-white">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Lightbulb className="w-8 h-8 text-ithac-gold" />
              <Typography variant="sectionHeading" className="text-white">
                Need a Custom Solution?
              </Typography>
            </div>
            <Typography
              variant="body"
              className="text-white/90 mb-6 max-w-2xl mx-auto"
            >
              Don't see exactly what you're looking for? Our team of experts can
              design and implement custom technology solutions tailored to your
              unique requirements.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-ithac-blue hover:bg-ithac-light-blue"
              >
                Discuss Your Project
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Portfolio Highlights
              </Button>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
};

export default ServiceCards;
