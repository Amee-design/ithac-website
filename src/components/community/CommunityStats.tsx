"use client";

import { motion } from "framer-motion";
import {
  Users,
  MessageCircle,
  Calendar,
  Code,
  Award,
  Globe,
} from "lucide-react";
import { Container, Typography } from "../ui";

const CommunityStats = () => {
  const stats = [
    {
      icon: Users,
      number: "5,247",
      label: "Active Members",
      description: "Growing developer community",
      color: "from-secondary-blue to-accent-aqua",
    },
    {
      icon: MessageCircle,
      number: "12,450",
      label: "Monthly Discussions",
      description: "Knowledge sharing sessions",
      color: "from-accent-aqua to-accent-aqua-light",
    },
    {
      icon: Calendar,
      number: "156",
      label: "Events This Year",
      description: "Meetups, workshops, hackathons",
      color: "from-accent-aqua-dark to-secondary-blue",
    },
    {
      icon: Code,
      number: "1,892",
      label: "Projects Collaborated",
      description: "Open source contributions",
      color: "from-secondary-blue-dark to-accent-aqua",
    },
    {
      icon: Award,
      number: "89",
      label: "Success Stories",
      description: "Career transitions & startups",
      color: "from-accent-aqua to-secondary-blue-dark",
    },
    {
      icon: Globe,
      number: "34",
      label: "Cities Represented",
      description: "Across 15 African countries",
      color: "from-secondary-blue to-accent-aqua-dark",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography variant="sectionHeading" className="mb-4">
            Our <span className="text-accent-aqua">Community</span> Impact
          </Typography>
          <Typography variant="body" className="max-w-2xl mx-auto">
            See how our vibrant community is transforming lives and driving
            innovation across Africa's technology landscape.
          </Typography>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Main Card */}
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-aqua/20 relative overflow-hidden">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>

                    <Typography variant="subheading" className="text-xl mb-2">
                      {stat.label}
                    </Typography>

                    <Typography variant="small" className="text-gray-600">
                      {stat.description}
                    </Typography>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Community Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Typography variant="sectionHeading" className="mb-6">
                Building <span className="text-accent-aqua">Tomorrow's</span>{" "}
                Leaders
              </Typography>
              <Typography variant="body" className="mb-6">
                Our community has become a catalyst for career growth,
                innovation, and entrepreneurship across Africa. From junior
                developers to startup founders, we're nurturing the next
                generation of tech leaders.
              </Typography>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-soft-blue-tint rounded-2xl">
                  <div className="text-2xl font-bold text-secondary-blue">
                    92%
                  </div>
                  <div className="text-sm text-gray-600">Career Growth</div>
                </div>
                <div className="text-center p-4 bg-accent-aqua-tint rounded-2xl">
                  <div className="text-2xl font-bold text-accent-aqua-dark">
                    78%
                  </div>
                  <div className="text-sm text-gray-600">Skill Advancement</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-secondary-blue to-accent-aqua rounded-2xl p-6 text-white">
                    <Users className="w-8 h-8 mb-3" />
                    <div className="font-semibold">Mentorship</div>
                    <div className="text-sm opacity-90">1:1 guidance</div>
                  </div>
                  <div className="bg-gradient-to-br from-accent-aqua to-accent-aqua-light rounded-2xl p-6 text-white">
                    <Code className="w-8 h-8 mb-3" />
                    <div className="font-semibold">Collaboration</div>
                    <div className="text-sm opacity-90">Open projects</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gradient-to-br from-secondary-blue-dark to-accent-aqua-dark rounded-2xl p-6 text-white">
                    <Award className="w-8 h-8 mb-3" />
                    <div className="font-semibold">Recognition</div>
                    <div className="text-sm opacity-90">Achievements</div>
                  </div>
                  <div className="bg-gradient-to-br from-accent-aqua-light to-secondary-blue rounded-2xl p-6 text-white">
                    <Globe className="w-8 h-8 mb-3" />
                    <div className="font-semibold">Network</div>
                    <div className="text-sm opacity-90">Global reach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CommunityStats;
