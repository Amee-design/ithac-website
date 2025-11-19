"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Users,
  Trophy,
  Globe,
  Star,
  BarChart3,
} from "lucide-react";
import { Button, Container } from "./ui";
import Link from "next/link";

const Hero = () => {
  const heroCategories = [
    {
      id: "education",
      title: "Tech Education",
      badge: "Most Popular",
      badgeColor: "bg-sky-500",
      bgColor: "bg-gradient-to-br from-sky-50 to-blue-100",
      description:
        "Transform your career with cutting-edge technology education. From beginner to expert, we guide your journey with hands-on projects and industry mentorship.",
      cardType: "event",
      cardData: {
        status: "Live Classes",
        time: "6:30 PM to 9:30 PM",
        title: "Full-Stack Bootcamp",
        participants: ["👨‍💻", "👩‍💻", "🧑‍💻", "👨‍🎓"],
        icon: <BarChart3 className="w-5 h-5" />,
        joinButton: "Join Academy",
      },
      features: [
        "Full-Stack Development",
        "UI/UX Design",
        "Data Science",
        "Cloud Computing",
      ],
    },
    {
      id: "innovation",
      title: "Innovation Hub",
      badge: "Premium",
      badgeColor: "bg-rose-500",
      bgColor: "bg-gradient-to-br from-rose-50 to-pink-100",
      description:
        "Building Africa's digital future through innovative solutions. We create world-class applications that solve real problems and drive economic growth.",
      cardType: "product",
      cardData: {
        items: [
          {
            name: "Web Apps",
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
        "Custom Solutions",
        "Scalable Architecture",
        "African Focus",
        "Global Standards",
      ],
    },
  ];

  const achievements = [
    { icon: Users, number: "2,500+", label: "Students Graduated" },
    { icon: Trophy, number: "150+", label: "Projects Delivered" },
    { icon: Globe, number: "15+", label: "Countries Reached" },
    { icon: BookOpen, number: "50+", label: "Courses Offered" },
  ];

  interface EventCardData {
    status: string;
    time: string;
    title: string;
    participants: string[];
    icon: React.ReactNode;
    joinButton: string;
  }

  interface ProductItem {
    name: string;
    price: string;
    rating: number;
    reviews: number;
    image: string;
    bgColor: string;
  }

  interface ProductCardData {
    items: ProductItem[];
  }

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
        <Link href="/academy">
          <button className="bg-gradient-to-r from-secondary-blue to-accent-aqua text-white px-6 py-2 rounded-xl font-medium hover:scale-105 transition-all">
            {data.joinButton}
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
          <Star className="w-5 h-5 text-gray-600" />
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
    <section
      id="home"
      className="relative bg-gray-50 min-h-screen flex items-center overflow-hidden pt-16"
    >
      <Container className="py-20 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-secondary-blue/10 rounded-2xl px-6 py-3 border border-secondary-blue/20 mb-6">
            <div className="w-2 h-2 bg-secondary-blue rounded-full animate-pulse"></div>
            <span className="text-secondary-blue font-semibold text-sm tracking-wide uppercase">
              Established 2016 • Abuja, Nigeria
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Information Technologies
            <br />
            Hub & <span className="text-secondary-blue">Cynosure</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Africa's premier institution for digital transformation, cultivating
            the next generation of technology leaders and innovators across the
            continent.
          </p>
        </motion.div>

        {/* Main Content Grid - Using Services Pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {heroCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
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
                    {(category.cardData as ProductCardData).items?.map(
                      (item, itemIndex) => (
                        <ProductCard key={itemIndex} item={item} />
                      )
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

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-secondary-blue/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-secondary-blue" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {achievement.number}
                </div>
                <div className="text-sm font-medium text-gray-600">
                  {achievement.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-secondary-blue to-accent-aqua rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Future?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of African innovators who have launched their tech
              careers with ITHAC. Your journey to digital excellence starts
              here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/academy">
                <Button className="bg-white text-secondary-blue hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-2xl">
                  Explore Our Academy
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button className="border-2 border-white text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-2xl bg-transparent">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
