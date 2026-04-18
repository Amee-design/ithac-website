"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  
  Calendar,
  ArrowRight,
  Clock,
  Headphones,
  Shield,
} from "lucide-react";

const entryPoints = [
  {
    icon: Calendar,
    title: "Apply for Programmes",
    description: "Start Your Growth Journey with Structure. ITHAC programmes provide clarity, direction, and real world application.",
    action: "Apply Now",
    href: "/academy",
    availability: "Pathways to Growth",
    responseTime: "Structured",
    color: "ithac-blue",
  },
  {
    icon: MessageCircle,
    title: "Join the Community",
    description: "Stay Connected to Opportunities and Growth. Receive timely information on programmes, initiatives, and activities.",
    action: "Join Now",
    href: "https://whatsapp.com",
    availability: "Direct Access",
    responseTime: "Timely",
    color: "ithac-emerald",
  },
  {
    icon: Headphones,
    title: "Partner with ITHAC",
    description: "Collaborate for Impact and Innovation. Structured to ensure alignment, execution, and long term value creation.",
    action: "Become a Partner",
    href: "/collaboration",
    availability: "Value Creation",
    responseTime: "Collaborative",
    color: "ithac-purple",
  },
];

const supportFeatures = [
  {
    icon: Clock,
    title: "Fast Response Times",
    description:
      "We respond to all inquiries within 2 hours during business hours",
  },
  {
    icon: Headphones,
    title: "Expert Technical Team",
    description:
      "Our support team consists of experienced developers and project managers",
  },
  {
    icon: Shield,
    title: "Dedicated Account Manager",
    description:
      "Every client gets a dedicated point of contact for personalized service",
  },
];

export default function SupportCTA() {
  return (
    <section className="py-24 bg-ithac-light-gray/30">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-ithac-dark-gray mb-6 uppercase font-headline"
          >
            Take Action Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-ithac-gray max-w-3xl mx-auto"
          >
            Whether you are looking to develop skills, collaborate, or contribute, there are clear entry points designed to move you from interest to action.
          </motion.p>
        </div>

        {/* Support Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 px-4">
          {entryPoints.map((channel, index) => {
            const IconComponent = channel.icon;
            return (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl border border-ithac-light-gray p-6 hover:shadow-xl hover:shadow-ithac-blue/10 transition-all duration-500 hover:border-ithac-blue/30 hover:-translate-y-1 h-full">
                  <div className="text-center">
                    <div
                      className={`inline-flex p-4 rounded-2xl mb-6 ${
                        channel.color === "ithac-blue"
                          ? "bg-ithac-blue/10 group-hover:bg-ithac-blue"
                          : channel.color === "ithac-emerald"
                          ? "bg-ithac-emerald/10 group-hover:bg-ithac-emerald"
                          : channel.color === "ithac-purple"
                          ? "bg-ithac-purple/10 group-hover:bg-ithac-purple"
                          : "bg-ithac-gold/10 group-hover:bg-ithac-gold"
                      } transition-all duration-300`}
                    >
                      <IconComponent
                        className={`w-8 h-8 ${
                          channel.color === "ithac-blue"
                            ? "text-ithac-blue"
                            : channel.color === "ithac-emerald"
                            ? "text-ithac-emerald"
                            : channel.color === "ithac-purple"
                            ? "text-ithac-purple"
                            : "text-ithac-gold"
                        } group-hover:text-white transition-all duration-300`}
                      />
                    </div>

                    <h3 className="text-xl font-bold text-ithac-dark-gray mb-3">
                      {channel.title}
                    </h3>

                    <p className="text-ithac-gray mb-4 leading-relaxed">
                      {channel.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="text-sm">
                        <span className="font-semibold text-ithac-dark-gray">
                          Availability:
                        </span>
                        <span className="text-ithac-gray ml-1">
                          {channel.availability}
                        </span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold text-ithac-dark-gray">
                          Response:
                        </span>
                        <span className="text-ithac-gray ml-1">
                          {channel.responseTime}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 text-center block ${
                        channel.color === "ithac-blue"
                          ? "bg-ithac-blue/10 text-ithac-blue hover:bg-ithac-blue hover:text-white"
                          : channel.color === "ithac-emerald"
                          ? "bg-ithac-emerald/10 text-ithac-emerald hover:bg-ithac-emerald hover:text-white"
                          : channel.color === "ithac-purple"
                          ? "bg-ithac-purple/10 text-ithac-purple hover:bg-ithac-purple hover:text-white"
                          : "bg-ithac-gold/10 text-ithac-gold hover:bg-ithac-gold hover:text-white"
                      }`}
                    >
                      {channel.action}
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Support Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {supportFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.title} className="text-center">
                <div className="bg-ithac-blue/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-ithac-blue" />
                </div>
                <h3 className="text-xl font-bold text-ithac-dark-gray mb-3">
                  {feature.title}
                </h3>
                <p className="text-ithac-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Emergency Support */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-ithac-coral to-ithac-gold rounded-3xl p-12 text-white text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-4">
            Emergency Technical Support
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            For critical issues that affect your business operations, our
            emergency support team is available 24/7 to provide immediate
            assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="tel:+234800000000" 
              className="group bg-white text-ithac-coral px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/90 hover:shadow-lg flex items-center gap-2 justify-center"
            >
              <Phone className="w-5 h-5" />
              Emergency Hotline
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-ithac-coral text-center"
            >
              Priority Support Plan
            </Link>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border border-ithac-light-gray p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-ithac-dark-gray mb-4">
            Ready to Start Your Digital Journey?
          </h3>
          <p className="text-xl text-ithac-gray mb-8 max-w-3xl mx-auto">
            Whether you have a specific project in mind or just want to explore
            possibilities, our team is here to help you transform your ideas
            into digital reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#contact-form"
              className="group bg-ithac-blue text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-ithac-blue/90 hover:shadow-lg hover:shadow-ithac-blue/25 flex items-center gap-2 justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              href="/portfolio"
              className="border-2 border-ithac-blue text-ithac-blue px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-ithac-blue hover:text-white text-center"
            >
              View Our Impact
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-ithac-emerald text-ithac-emerald px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-ithac-emerald hover:text-white text-center"
            >
              Request Quote
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
