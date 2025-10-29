"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award, Users, Globe } from "lucide-react";
import { Container, Typography, Card, Button } from "../ui";

const PartnershipHighlights = () => {
  const partners = [
    {
      name: "Microsoft",
      logo: "https://img.logoipsum.com/297.svg",
      type: "Technology Partner",
      description:
        "Strategic partnership for cloud computing and AI solutions.",
      achievements: "Azure credits for startups, Developer training programs",
    },
    {
      name: "Google",
      logo: "https://img.logoipsum.com/298.svg",
      type: "Education Partner",
      description: "Collaboration on digital skills and career development.",
      achievements: "Google for Education platform, Career certificates",
    },
    {
      name: "Amazon Web Services",
      logo: "https://img.logoipsum.com/299.svg",
      type: "Cloud Partner",
      description: "Infrastructure support and cloud computing education.",
      achievements: "AWS Educate membership, Cloud training programs",
    },
    {
      name: "African Development Bank",
      logo: "https://img.logoipsum.com/300.svg",
      type: "Financial Partner",
      description: "Funding support for African technology initiatives.",
      achievements: "Digital transformation grants, Scholarship programs",
    },
    {
      name: "United Nations",
      logo: "https://img.logoipsum.com/301.svg",
      type: "Development Partner",
      description: "Collaboration on sustainable development goals.",
      achievements: "SDG initiatives, Youth empowerment programs",
    },
    {
      name: "Lagos State Government",
      logo: "https://img.logoipsum.com/302.svg",
      type: "Government Partner",
      description: "Supporting local technology ecosystem development.",
      achievements: "Tech hubs establishment, Policy development",
    },
  ];

  const achievements = [
    {
      icon: Users,
      number: "500+",
      label: "Students Trained",
      description: "Across 15 African countries",
    },
    {
      icon: Award,
      number: "50+",
      label: "Projects Delivered",
      description: "Real-world technology solutions",
    },
    {
      icon: Globe,
      number: "15",
      label: "Countries Reached",
      description: "Expanding across Africa",
    },
    {
      icon: ExternalLink,
      number: "85%",
      label: "Job Placement Rate",
      description: "Within 6 months of graduation",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography variant="sectionHeading" className="mb-4">
            Partnership Highlights
          </Typography>
          <Typography variant="body" className="max-w-3xl mx-auto">
            We collaborate with leading organizations to amplify our impact and
            create opportunities for African tech talent.
          </Typography>
        </motion.div>

        {/* Achievements Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <Card className="p-6 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-ithac-blue to-ithac-purple rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <Typography
                  variant="heroTitle"
                  className="text-3xl font-bold mb-2"
                >
                  {achievement.number}
                </Typography>
                <Typography variant="subheading" className="text-lg mb-2">
                  {achievement.label}
                </Typography>
                <Typography variant="small" className="text-ithac-dark-gray/70">
                  {achievement.description}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 hover:shadow-xl transition-all duration-300 group h-full">
                <div className="space-y-6">
                  {/* Partner Logo */}
                  <div className="flex items-center justify-between">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-xs bg-ithac-light-blue text-ithac-blue px-3 py-1 rounded-full font-medium">
                      {partner.type}
                    </span>
                  </div>

                  {/* Partner Info */}
                  <div className="space-y-4">
                    <Typography variant="subheading">{partner.name}</Typography>
                    <Typography variant="body" className="text-sm">
                      {partner.description}
                    </Typography>
                    <div className="border-t border-ithac-light-blue pt-4">
                      <Typography
                        variant="small"
                        className="font-medium text-ithac-emerald"
                      >
                        Key Achievements:
                      </Typography>
                      <Typography variant="small" className="mt-1">
                        {partner.achievements}
                      </Typography>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-ithac-blue to-ithac-purple p-8 text-white">
            <Typography variant="sectionHeading" className="text-white mb-4">
              Partner With Us
            </Typography>
            <Typography
              variant="body"
              className="text-white/90 mb-6 max-w-2xl mx-auto"
            >
              Join our mission to transform Africa's technology landscape. Let's
              create opportunities and build the future together.
            </Typography>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-ithac-blue hover:bg-ithac-light-blue"
            >
              Become a Partner
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
};

export default PartnershipHighlights;
