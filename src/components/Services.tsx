"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, BarChart3, Heart, Video, Trophy } from "lucide-react";
import Link from "next/link";

interface EventCardData {
  status: string;
  time: string;
  title: string;
  participants: string[];
  icon: React.ReactNode;
}

interface ProductItem {
  name: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  bgColor: string;
}

interface CardData {
  items?: ProductItem[];
}

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const serviceCategories = [
    {
      id: "training",
      title: "Training & Education",
      badge: "Most Popular",
      badgeColor: "bg-sky-500",
      bgColor: "bg-gradient-to-br from-sky-50 to-blue-100",
      description:
        "From beginner courses to advanced workshops, our training programs are the simplest way to level up your tech skills. Create your learning path with hands-on projects and industry mentorship.",
      cardType: "event",
      cardData: {
        status: "Ongoing",
        time: "6:30 PM to 9:30 PM",
        title: "Full-Stack Bootcamp Session",
        participants: ["👨‍💻", "👩‍💻", "🧑‍💻"],
        icon: <BarChart3 className="w-5 h-5" />,
      },
      features: [
        "Full-Stack Development",
        "UI/UX Design",
        "Mobile Development",
        "DevOps Training",
      ],
    },
    {
      id: "services",
      title: "Development Services",
      badge: "Premium",
      badgeColor: "bg-rose-500",
      bgColor: "bg-gradient-to-br from-rose-50 to-pink-100",
      description:
        "Whatever you want to build, from startups to enterprise solutions, it's easier with ITHAC 😊",
      cardType: "product",
      cardData: {
        items: [
          {
            name: "Web Development",
            price: "",
            rating: 4.9,
            reviews: 127,
            image: "💻",
            bgColor: "bg-gradient-to-br from-pink-200 to-pink-300",
          },
          {
            name: "Mobile Apps",
            price: "",
            rating: 4.8,
            reviews: 89,
            image: "📱",
            bgColor: "bg-gradient-to-br from-sky-200 to-sky-300",
          },
        ],
      },
      features: [
        "Custom Web Apps",
        "Mobile Applications",
        "API Development",
        "Cloud Solutions",
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const EventCard = ({ data }: { data: EventCardData }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-sm mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="text-gray-500">{data.icon}</div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zM12 13a1 1 0 110-2 1 1 0 010 2zM12 20a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
      </div>

      <div className="mb-4">
        <span className="inline-block bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
          {data.status}
        </span>
        <p className="text-gray-600 text-sm">{data.time}</p>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-4">{data.title}</h3>

      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {data.participants.map((participant: string, idx: number) => (
            <div
              key={idx}
              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm border-2 border-white"
            >
              {participant}
            </div>
          ))}
        </div>
        <Link
          href="https://forms.gle/5YSKCpEuBYYTGmBY9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gradient-to-r from-secondary-blue to-accent-aqua text-white px-6 py-2 rounded-xl font-medium hover:scale-105 transition-all">
            Join Now
          </button>
        </Link>
      </div>
    </div>
  );

  const ProductCard = ({ item }: { item: ProductItem }) => (
    <div className="relative">
      <div
        className={`${item.bgColor} rounded-2xl p-6 shadow-lg border-2 border-gray-900 max-w-48 relative`}
      >
        <div className="absolute top-3 right-3">
          <Heart className="w-5 h-5 text-gray-600" />
        </div>

        <div className="text-4xl mb-4 text-center">{item.image}</div>

        <div className="text-center">
          <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
          <div className="flex items-center justify-center gap-1 mb-2">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs text-gray-600">
              {item.rating} ({item.reviews})
            </span>
          </div>
          <p className="font-bold text-gray-900">{item.price}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="services" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Core <span className="text-secondary-blue">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to empower individuals
            and businesses in their digital transformation journey.
          </p>
        </motion.div>

        {/* Service Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8"
        >
          {serviceCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className={`${category.bgColor} rounded-3xl p-8 relative overflow-hidden`}
            >
              {/* Badge */}
              <div className="mb-6">
                <span
                  className={`${category.badgeColor} text-white px-4 py-2 rounded-full text-sm font-medium`}
                >
                  {category.badge}
                </span>
              </div>

              {/* Content */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {category.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Card */}
              <div className="relative z-10">
                {category.cardType === "event" ? (
                  <EventCard data={category.cardData as EventCardData} />
                ) : (
                  <div className="flex gap-4 justify-center">
                    {(category.cardData as CardData).items?.map(
                      (item, itemIndex) => (
                        <ProductCard key={itemIndex} item={item} />
                      ),
                    )}
                  </div>
                )}
              </div>

              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Video className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Multimedia Solutions
              </h3>
              <p className="text-gray-600 text-sm">
                Creative multimedia content including video production, graphic
                design, and interactive media experiences.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Hackathon Events
              </h3>
              <p className="text-gray-600 text-sm">
                End-to-end hackathon planning and execution, fostering
                innovation and collaboration in the tech community.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
