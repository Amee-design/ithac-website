"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import { MessageCircle, Mail, Phone, MapPin, Clock, Zap } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime",
    value: "contactus@ithac.org",
    href: "mailto:contactus@ithac.org",
    color: "ithac-blue",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 8am to 6pm",
    value: "+234 902 143 9349",
    href: "tel:+2349021439349",
    color: "ithac-emerald",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our team",
    value: "Start Conversation",
    href: "#",
    color: "ithac-purple",
  },
];

const stats = [
  { number: "< 2hrs", label: "Response Time", icon: Clock },
  { number: "24/7", label: "Support Available", icon: Zap },
  { number: "1", label: "Office Location", icon: MapPin },
];

export default function ContactHero() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <Container>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-ithac-blue/10 text-ithac-blue px-4 py-2 rounded-full text-sm font-medium">
              <MessageCircle className="w-4 h-4" />
              Let's Connect
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-ithac-dark-gray mb-6 leading-tight uppercase font-headline"
          >
            GET INVOLVED{" "}
            <span className="text-secondary block">WITH ITHAC</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-on-surface-variant font-bold max-w-3xl mx-auto mb-4 leading-relaxed tracking-tight"
          >
            Access Opportunities. Join the Ecosystem. Take Action.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-ithac-gray max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            ITHAC is built as an ecosystem where individuals, organisations, and
            communities can actively participate in structured pathways for
            growth, innovation, and impact.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm border border-ithac-light-gray rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-ithac-blue/30"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-ithac-blue/10 p-3 rounded-full">
                      <IconComponent className="w-6 h-6 text-ithac-blue" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-ithac-dark-gray mb-2">
                    {stat.number}
                  </div>
                  <div className="text-ithac-gray font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.a
                key={method.title}
                href={method.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group bg-white rounded-3xl border border-ithac-light-gray p-8 hover:shadow-xl hover:shadow-ithac-blue/10 transition-all duration-500 hover:border-ithac-blue/30 hover:-translate-y-1"
              >
                <div className="text-center">
                  <div
                    className={`inline-flex p-4 rounded-2xl ${
                      method.color === "ithac-blue"
                        ? "bg-ithac-blue/10 group-hover:bg-ithac-blue"
                        : method.color === "ithac-emerald"
                          ? "bg-ithac-emerald/10 group-hover:bg-ithac-emerald"
                          : "bg-ithac-purple/10 group-hover:bg-ithac-purple"
                    } transition-all duration-300 mb-6`}
                  >
                    <IconComponent
                      className={`w-8 h-8 ${
                        method.color === "ithac-blue"
                          ? "text-ithac-blue"
                          : method.color === "ithac-emerald"
                            ? "text-ithac-emerald"
                            : "text-ithac-purple"
                      } group-hover:text-white transition-all duration-300`}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-ithac-dark-gray mb-3 group-hover:text-ithac-blue transition-colors">
                    {method.title}
                  </h3>

                  <p className="text-ithac-gray mb-4">{method.description}</p>

                  <div
                    className={`font-semibold ${
                      method.color === "ithac-blue"
                        ? "text-ithac-blue"
                        : method.color === "ithac-emerald"
                          ? "text-ithac-emerald"
                          : "text-ithac-purple"
                    } group-hover:underline`}
                  >
                    {method.value}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-ithac-blue to-ithac-purple rounded-3xl p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Book a free consultation call with our experts to discuss your
              project requirements and get a custom solution designed just for
              you.
            </p>
            <a
              href="https://wa.me/2349021439349?text=Hello%20ITHAC%2C%20I%20want%20to%20book%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-ithac-blue px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
            >
              Book Free Consultation
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
