"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  Calendar,
  Tag,
  Users,
  Target,
  TrendingUp,
  Award,
} from "lucide-react";
import Image from "next/image";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  technologies: string[];
  timeline: string;
  teamSize: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "EcoBank Digital Transformation",
    client: "EcoBank Group",
    category: "Fintech",
    overview:
      "Complete digital transformation of Africa's leading pan-African bank, serving over 2 million customers across 15 countries with a unified digital banking platform.",
    challenge:
      "EcoBank needed to modernize their legacy banking systems and create a unified digital experience across multiple countries with different regulations, currencies, and languages.",
    solution:
      "We developed a comprehensive digital banking ecosystem including mobile apps, web platform, admin dashboard, and API infrastructure with multi-currency support, real-time fraud detection, and regulatory compliance features.",
    results: [
      "Increased digital adoption by 300% within 6 months",
      "Reduced customer service costs by 45%",
      "Improved transaction processing speed by 80%",
      "Achieved 99.9% uptime across all platforms",
      "Enhanced security with zero major breaches",
    ],
    metrics: [
      {
        label: "Active Users",
        value: "2M+",
        icon: Users,
      },
      {
        label: "Transaction Volume",
        value: "$50M+/month",
        icon: TrendingUp,
      },
      {
        label: "Countries Served",
        value: "15",
        icon: Target,
      },
      {
        label: "Awards Won",
        value: "3",
        icon: Award,
      },
    ],
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "AWS",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
    timeline: "18 months",
    teamSize: "12 developers",
    images: [
      "/images/stock/ecobank-app-1.jpg",
      "/images/stock/ecobank-dashboard-1.jpg",
      "/images/stock/ecobank-web-1.jpg",
    ],
    liveUrl: "https://ecobank.com",
  },
  {
    id: "2",
    title: "AgriConnect Marketplace Revolution",
    client: "African Union",
    category: "AgriTech",
    overview:
      "Revolutionary agricultural marketplace connecting farmers directly with buyers across Africa, featuring real-time pricing, logistics integration, and mobile-first design for rural areas.",
    challenge:
      "African farmers lacked direct access to markets, leading to unfair pricing and food waste. Traditional supply chains were inefficient and excluded smallholder farmers.",
    solution:
      "We built a comprehensive marketplace platform with mobile-first design, offline capabilities, real-time pricing, logistics tracking, and integrated payment systems optimized for rural connectivity.",
    results: [
      "Connected 50,000+ farmers to markets",
      "Increased farmer income by 40% on average",
      "Reduced food waste by 25%",
      "Processed $25M+ in transactions",
      "Expanded to 8 African countries",
    ],
    metrics: [
      {
        label: "Farmers Connected",
        value: "50K+",
        icon: Users,
      },
      {
        label: "Transaction Value",
        value: "$25M+",
        icon: TrendingUp,
      },
      {
        label: "Countries",
        value: "8",
        icon: Target,
      },
      {
        label: "Income Increase",
        value: "40%",
        icon: Award,
      },
    ],
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Stripe",
      "Google Maps API",
      "PWA",
      "WebSockets",
    ],
    timeline: "12 months",
    teamSize: "8 developers",
    images: [
      "/images/stock/agriconnect-mobile-1.jpg",
      "/images/stock/agriconnect-dashboard-1.jpg",
      "/images/stock/agriconnect-market-1.jpg",
    ],
    liveUrl: "https://agriconnect.africa",
    githubUrl: "https://github.com/ithac/agriconnect",
  },
];

interface CaseStudyModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  caseStudyId?: string;
}

export default function CaseStudyModal({
  isOpen = false,
  onClose,
  caseStudyId,
}: CaseStudyModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentCaseStudy = caseStudyId
    ? caseStudies.find((cs) => cs.id === caseStudyId)
    : caseStudies[0];

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleClose = () => {
    setIsModalOpen(false);
    onClose?.();
  };

  if (!currentCaseStudy) return null;

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-ithac-blue to-ithac-purple p-8 text-white">
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {currentCaseStudy.category}
                    </span>
                    <div className="flex items-center gap-2 text-white/80">
                      <Calendar className="w-4 h-4" />
                      {currentCaseStudy.timeline}
                    </div>
                  </div>

                  <h2 className="text-4xl font-bold mb-3">
                    {currentCaseStudy.title}
                  </h2>

                  <p className="text-xl opacity-90 mb-6">
                    {currentCaseStudy.client}
                  </p>

                  <div className="flex gap-4">
                    {currentCaseStudy.liveUrl && (
                      <a
                        href={currentCaseStudy.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live
                      </a>
                    )}
                    {currentCaseStudy.githubUrl && (
                      <a
                        href={currentCaseStudy.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {currentCaseStudy.metrics.map((metric) => {
                    const IconComponent = metric.icon;
                    return (
                      <div key={metric.label} className="text-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                          <IconComponent className="w-6 h-6 mx-auto mb-2" />
                          <div className="text-2xl font-bold">
                            {metric.value}
                          </div>
                          <div className="text-sm opacity-80">
                            {metric.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[60vh] p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* Overview */}
                  <div>
                    <h3 className="text-2xl font-bold text-ithac-dark-gray mb-4">
                      Overview
                    </h3>
                    <p className="text-ithac-gray leading-relaxed">
                      {currentCaseStudy.overview}
                    </p>
                  </div>

                  {/* Challenge */}
                  <div>
                    <h3 className="text-2xl font-bold text-ithac-dark-gray mb-4">
                      Challenge
                    </h3>
                    <p className="text-ithac-gray leading-relaxed">
                      {currentCaseStudy.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-2xl font-bold text-ithac-dark-gray mb-4">
                      Solution
                    </h3>
                    <p className="text-ithac-gray leading-relaxed">
                      {currentCaseStudy.solution}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-2xl font-bold text-ithac-dark-gray mb-4">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {currentCaseStudy.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="flex items-center gap-2 bg-ithac-blue/10 text-ithac-blue px-3 py-2 rounded-full text-sm font-medium"
                        >
                          <Tag className="w-3 h-3" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Project Images */}
                  <div>
                    <h3 className="text-2xl font-bold text-ithac-dark-gray mb-4">
                      Project Gallery
                    </h3>
                    <div className="space-y-4">
                      <div className="relative h-64 rounded-2xl overflow-hidden">
                        <Image
                          src={currentCaseStudy.images[currentImageIndex]}
                          alt={`${currentCaseStudy.title} screenshot`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex gap-2">
                        {currentCaseStudy.images.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                              index === currentImageIndex
                                ? "border-ithac-blue"
                                : "border-transparent opacity-70 hover:opacity-100"
                            }`}
                          >
                            <Image
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-2xl font-bold text-ithac-dark-gray mb-4">
                      Key Results
                    </h3>
                    <ul className="space-y-3">
                      {currentCaseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-ithac-blue rounded-full mt-2 flex-shrink-0" />
                          <span className="text-ithac-gray leading-relaxed">
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Details */}
                  <div className="bg-ithac-light-gray/30 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-ithac-dark-gray mb-4">
                      Project Details
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-ithac-gray mb-1">
                          Timeline
                        </div>
                        <div className="font-semibold text-ithac-dark-gray">
                          {currentCaseStudy.timeline}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-ithac-gray mb-1">
                          Team Size
                        </div>
                        <div className="font-semibold text-ithac-dark-gray">
                          {currentCaseStudy.teamSize}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
