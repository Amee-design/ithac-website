"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Adebayo Okonkwo",
      role: "Full-Stack Developer at TechCorp",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote:
        "ITHAC's bootcamp transformed my career completely. The hands-on approach and expert mentorship gave me the confidence to land my dream job as a full-stack developer.",
      rating: 5,
      program: "Full-Stack Bootcamp Graduate",
    },
    {
      name: "Funmi Adeleke",
      role: "UI/UX Designer at StartupLab",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote:
        "The UI/UX workshop at ITHAC opened my eyes to design thinking. I went from having no design background to leading design projects at a tech startup.",
      rating: 5,
      program: "UI/UX Workshop Graduate",
    },
    {
      name: "Chinedu Okafor",
      role: "CTO at InnovateTech",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote:
        "Partnering with ITHAC for our hackathon was the best decision. Their expertise in event execution and community building created an unforgettable experience for all participants.",
      rating: 5,
      program: "Corporate Partner",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Graduates",
      description: "Successfully trained professionals",
    },
    {
      number: "10+",
      label: "Global Partners",
      description: "International collaborations",
    },
    {
      number: "95%",
      label: "Success Rate",
      description: "Career advancement guarantee",
    },
    {
      number: "24/7",
      label: "Support",
      description: "Continuous learning assistance",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ithac-dark-gray mb-4">
            What Our Students &{" "}
            <span className="text-ithac-blue">Partners Say</span>
          </h2>
          <p className="text-lg text-ithac-dark-gray/70 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the amazing individuals
            and organizations who have been part of the ITHAC journey.
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6 bg-ithac-blue text-white p-3 rounded-full">
                <Quote className="w-5 h-5" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-ithac-dark-gray/80 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-ithac-dark-gray">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-ithac-dark-gray/60">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-ithac-blue font-medium">
                    {testimonial.program}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-ithac-blue to-blue-700 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Our Impact in Numbers
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              These numbers represent real people whose lives and careers have
              been transformed through our programs and partnerships.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statsVariants}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className="text-3xl md:text-4xl font-bold mb-2"
                >
                  {stat.number}
                </motion.div>
                <h4 className="text-lg font-semibold mb-1">{stat.label}</h4>
                <p className="text-blue-100 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
