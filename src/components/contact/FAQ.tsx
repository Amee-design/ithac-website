"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../ui/Container";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: "1",
    question: "What types of projects does ITHAC specialize in?",
    answer:
      "ITHAC specializes in comprehensive digital transformation projects including web development, mobile applications, e-commerce platforms, custom software solutions, API development, cloud migration, and digital strategy consulting. We focus on scalable solutions that drive business growth across various industries in Africa.",
  },
  {
    id: "2",
    question: "How long does a typical project take to complete?",
    answer:
      "Project timelines vary based on complexity and scope. Simple websites typically take 4-6 weeks, while complex web applications can take 3-6 months. Mobile apps usually require 3-5 months, and enterprise solutions may take 6-12 months. We provide detailed timelines during our initial consultation.",
  },
  {
    id: "3",
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive post-launch support including 24/7 monitoring, regular updates, security patches, performance optimization, and technical support. We have different support packages to fit various needs and budgets, ensuring your digital solutions continue to perform optimally.",
  },
  {
    id: "4",
    question: "What is your development process like?",
    answer:
      "Our development process follows agile methodologies with regular client communication. It includes discovery & planning, design & prototyping, development & testing, client reviews, deployment, and ongoing support. We provide regular updates and involve clients in key decision points throughout the project.",
  },
  {
    id: "5",
    question: "Can you work with our existing team or systems?",
    answer:
      "Absolutely! We excel at integrating with existing teams and systems. Whether you need to augment your current development team, integrate with legacy systems, or migrate from existing platforms, we have the expertise to ensure smooth collaboration and seamless integration.",
  },
  {
    id: "6",
    question: "What makes ITHAC different from other development companies?",
    answer:
      "ITHAC combines deep African market knowledge with world-class technical expertise. We understand local challenges and opportunities, offer competitive pricing without compromising quality, provide dedicated project management, and focus on building long-term partnerships rather than just delivering projects.",
  },
  {
    id: "7",
    question: "Do you offer training and knowledge transfer?",
    answer:
      "Yes, through our ITHAC Academy, we provide comprehensive training programs for your team. This includes technical training on the solutions we build, best practices workshops, and knowledge transfer sessions to ensure your team can effectively manage and maintain your digital solutions.",
  },
  {
    id: "8",
    question: "How do you handle data security and privacy?",
    answer:
      "Data security is our top priority. We implement industry-standard security measures including encryption, secure authentication, regular security audits, and compliance with international standards like GDPR. All our team members sign NDAs, and we follow strict data handling protocols.",
  },
  {
    id: "9",
    question: "What are your payment terms and pricing structure?",
    answer:
      "We offer flexible payment terms typically structured as: 30% upfront, 40% at key milestones, and 30% upon completion. For larger projects, we can arrange monthly payment schedules. Our pricing is transparent with detailed breakdowns, and we provide fixed-price quotes for defined scopes.",
  },
  {
    id: "10",
    question: "Can you help with digital strategy and consulting?",
    answer:
      "Yes, our digital strategy consultants help businesses develop comprehensive digital transformation roadmaps. We assess your current digital maturity, identify opportunities, recommend technology solutions, and create implementation strategies aligned with your business goals and market dynamics.",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-24 bg-ithac-light-gray/30">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-ithac-blue/10 text-ithac-blue px-4 py-2 rounded-full text-sm font-medium">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-ithac-dark-gray mb-6"
          >
            Got Questions? We've Got Answers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-ithac-gray max-w-3xl mx-auto"
          >
            Find answers to the most common questions about our services,
            processes, and how we can help transform your digital presence.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-ithac-light-gray overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-ithac-light-gray/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-ithac-dark-gray pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-ithac-blue/10 p-2 rounded-full"
                    >
                      {openItems.includes(faq.id) ? (
                        <Minus className="w-5 h-5 text-ithac-blue" />
                      ) : (
                        <Plus className="w-5 h-5 text-ithac-blue" />
                      )}
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {openItems.includes(faq.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="pt-4 border-t border-ithac-light-gray">
                          <p className="text-ithac-gray leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-white rounded-3xl border border-ithac-light-gray p-12"
          >
            <h3 className="text-2xl font-bold text-ithac-dark-gray mb-4">
              Still Have Questions?
            </h3>
            <p className="text-ithac-gray mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our expert team is here
              to help you with any specific questions about your project
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#contact-form">
                <button className="bg-ithac-blue text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-ithac-blue/90 hover:shadow-lg hover:shadow-ithac-blue/25">
                  Schedule a Call
                </button>
              </Link>
              <Link href="mailto:contactus@ithac.org">
                <button className="border-2 border-ithac-blue text-ithac-blue px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-ithac-blue hover:text-white">
                  Send us an Email
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
