"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../ui/Container";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Building2,
} from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  image: string;
  content: string;
  rating: number;
  project: string;
  industry: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Amara Okafor",
    role: "Chief Technology Officer",
    company: "EcoBank Group",
    companyLogo: "/images/stock/ecobank-logo.png",
    image: "/images/stock/testimonial-1.jpg",
    content:
      "ITHAC transformed our entire digital infrastructure. Their team delivered a banking platform that serves over 2 million users across 15 countries. The level of security, scalability, and user experience they achieved exceeded all our expectations.",
    rating: 5,
    project: "Digital Banking Platform",
    industry: "Financial Services",
  },
  {
    id: "2",
    name: "Dr. Kwame Asante",
    role: "Director of Innovation",
    company: "African Union",
    companyLogo: "/images/stock/african-union-logo.png",
    image: "/images/stock/testimonial-2.jpg",
    content:
      "The AgriConnect platform has revolutionized how farmers connect with markets across Africa. ITHAC's understanding of our unique challenges and their innovative approach made this project a tremendous success.",
    rating: 5,
    project: "AgriConnect Marketplace",
    industry: "Agriculture Technology",
  },
  {
    id: "3",
    name: "Sarah Mensah",
    role: "Head of Digital Health",
    company: "Ghana Health Service",
    companyLogo: "/images/stock/ghana-health-logo.png",
    image: "/images/stock/testimonial-3.jpg",
    content:
      "ITHAC built us a healthcare management system that has streamlined patient care across hundreds of facilities. Their attention to data security and user experience made adoption seamless for our medical staff.",
    rating: 5,
    project: "MedFlow Health Records",
    industry: "Healthcare",
  },
  {
    id: "4",
    name: "Prof. Adebayo Ogundimu",
    role: "Vice-Chancellor",
    company: "University of Lagos",
    companyLogo: "/images/stock/unilag-logo.png",
    image: "/images/stock/testimonial-4.jpg",
    content:
      "The EduStream platform has transformed how we deliver education to thousands of students. The AI-powered personalization and real-time collaboration features have significantly improved learning outcomes.",
    rating: 5,
    project: "EduStream Learning Platform",
    industry: "Education Technology",
  },
  {
    id: "5",
    name: "Chioma Uzor",
    role: "Smart City Coordinator",
    company: "Lagos State Government",
    companyLogo: "/images/stock/lagos-state-logo.png",
    image: "/images/stock/testimonial-5.jpg",
    content:
      "ITHAC's traffic management system has reduced congestion in Lagos by 30%. Their IoT and AI solutions are helping us build a truly smart city that serves our 20 million residents better.",
    rating: 5,
    project: "Smart Traffic Management",
    industry: "Smart City",
  },
];

export default function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      }
    });
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-ithac-dark-gray mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-ithac-gray max-w-3xl mx-auto"
          >
            Hear from the leaders and organizations who have trusted us to
            transform their digital landscape and drive meaningful impact across
            Africa.
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative overflow-hidden rounded-3xl bg-white border border-ithac-light-gray shadow-lg min-h-[500px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 p-12 flex flex-col lg:flex-row items-center gap-12"
              >
                {/* Testimonial Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-8">
                    <Quote className="w-16 h-16 text-ithac-blue/30 mb-6 mx-auto lg:mx-0" />
                    <p className="text-2xl md:text-3xl leading-relaxed text-ithac-dark-gray font-medium mb-8">
                      {currentTestimonial.content}
                    </p>

                    {/* Rating */}
                    <div className="flex justify-center lg:justify-start gap-1 mb-6">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 fill-ithac-gold text-ithac-gold"
                        />
                      ))}
                    </div>

                    {/* Project Info */}
                    <div className="bg-ithac-blue/5 rounded-2xl p-4 mb-8">
                      <div className="text-sm text-ithac-blue font-semibold mb-1">
                        Project
                      </div>
                      <div className="text-ithac-dark-gray font-medium">
                        {currentTestimonial.project}
                      </div>
                      <div className="text-sm text-ithac-gray mt-1">
                        {currentTestimonial.industry}
                      </div>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-ithac-dark-gray text-lg">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-ithac-gray">
                        {currentTestimonial.role}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Building2 className="w-4 h-4 text-ithac-blue" />
                        <span className="text-ithac-blue font-medium">
                          {currentTestimonial.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 lg:w-64 lg:h-64 relative rounded-3xl bg-ithac-light-gray/30 flex items-center justify-center">
                    <Image
                      src={currentTestimonial.companyLogo}
                      alt={`${currentTestimonial.company} logo`}
                      width={200}
                      height={200}
                      className="object-contain filter grayscale opacity-60"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => paginate(-1)}
              className="group bg-white border border-ithac-light-gray rounded-2xl p-4 hover:border-ithac-blue hover:bg-ithac-blue transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-ithac-gray group-hover:text-white transition-colors" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-ithac-blue scale-125"
                      : "bg-ithac-light-gray hover:bg-ithac-blue/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="group bg-white border border-ithac-light-gray rounded-2xl p-4 hover:border-ithac-blue hover:bg-ithac-blue transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-ithac-gray group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Client Logos Strip */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-lg font-semibold text-ithac-gray mb-8">
              Trusted by leading organizations across Africa
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="relative w-24 h-16">
                  <Image
                    src={testimonial.companyLogo}
                    alt={`${testimonial.company} logo`}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
