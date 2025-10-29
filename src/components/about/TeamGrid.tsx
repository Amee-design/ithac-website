"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";
import { Container, Typography, Card } from "../ui";

const TeamGrid = () => {
  const teamMembers = [
    {
      name: "Adebayo Olanrewaju",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Visionary leader with 15+ years in tech innovation and African development.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Folake Adeyemi",
      role: "Head of Programs",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Education technology expert passionate about empowering the next generation.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Kwame Asante",
      role: "Head of Technology",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Full-stack engineer and architect of scalable technology solutions.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Amina Hassan",
      role: "Head of Partnerships",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Strategic partnership developer connecting African talent with global opportunities.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Chidi Okonkwo",
      role: "Head of Innovation",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Innovation catalyst driving cutting-edge technology adoption across Africa.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Zara Abdullahi",
      role: "Head of Community",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Community builder fostering collaboration and knowledge sharing.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
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
            Meet Our Team
          </Typography>
          <Typography variant="body" className="max-w-3xl mx-auto">
            Our diverse team of leaders, innovators, and educators is united by
            a shared commitment to transforming Africa's technology landscape.
          </Typography>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  {/* Profile Image */}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ithac-blue/90 via-ithac-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white space-y-2">
                      <p className="text-sm leading-relaxed opacity-90">
                        {member.bio}
                      </p>
                      <div className="flex gap-3">
                        <a
                          href={member.social.linkedin}
                          className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                          href={member.social.twitter}
                          className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a
                          href={member.social.github}
                          className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6 space-y-2">
                  <Typography variant="subheading" className="text-lg">
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body"
                    className="text-ithac-blue font-medium"
                  >
                    {member.role}
                  </Typography>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamGrid;
