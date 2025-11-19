"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container, Typography, Button } from "../ui";

const CommunityEvents = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "React Africa Conference 2025",
      description:
        "Join hundreds of React developers from across Africa for the biggest React conference on the continent.",
      date: "Dec 15, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Lagos, Nigeria",
      attendees: 450,
      type: "Conference",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: 2,
      title: "AI/ML Workshop Series",
      description:
        "Hands-on workshop covering machine learning fundamentals and practical applications.",
      date: "Nov 28, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual",
      attendees: 120,
      type: "Workshop",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Startup Pitch Night",
      description:
        "Local startups present their ideas to investors and the tech community.",
      date: "Nov 25, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Abuja, Nigeria",
      attendees: 85,
      type: "Networking",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Women in Tech Meetup",
      description:
        "Empowering women in technology through networking and knowledge sharing.",
      date: "Nov 30, 2025",
      time: "4:00 PM - 7:00 PM",
      location: "Accra, Ghana",
      attendees: 65,
      type: "Meetup",
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      Conference: "bg-secondary-blue text-white",
      Workshop: "bg-accent-aqua text-white",
      Networking: "bg-accent-aqua-dark text-white",
      Meetup: "bg-secondary-blue-dark text-white",
      Hackathon: "bg-accent-aqua-light text-secondary-blue",
    };
    return colors[type as keyof typeof colors] || "bg-gray-500 text-white";
  };

  return (
    <section className="py-20 bg-primary-light">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography variant="sectionHeading" className="mb-4">
            Upcoming <span className="text-accent-aqua">Events</span>
          </Typography>
          <Typography variant="body" className="max-w-2xl mx-auto">
            Join our exciting lineup of events designed to connect, educate, and
            inspire the African tech community.
          </Typography>
        </motion.div>

        {/* Featured Event */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-secondary-blue to-accent-aqua rounded-3xl p-8 md:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                  Featured Event
                </span>
                <Typography
                  variant="sectionHeading"
                  className="text-white mb-4"
                >
                  {upcomingEvents[0].title}
                </Typography>
                <Typography variant="body" className="text-white/90 mb-6">
                  {upcomingEvents[0].description}
                </Typography>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-white/90">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{upcomingEvents[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{upcomingEvents[0].time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">
                      {upcomingEvents[0].location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">
                      {upcomingEvents[0].attendees} attending
                    </span>
                  </div>
                </div>

                <Link href={`/events/${upcomingEvents[0].id}`}>
                  <Button
                    variant="accent"
                    className="bg-white text-secondary-blue hover:bg-white/90"
                  >
                    Register Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img
                  src={upcomingEvents[0].image}
                  alt={upcomingEvents[0].title}
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Event Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {upcomingEvents.slice(1).map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(
                      event.type
                    )}`}
                  >
                    {event.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <Typography
                  variant="subheading"
                  className="mb-3 group-hover:text-accent-aqua transition-colors"
                >
                  {event.title}
                </Typography>
                <Typography
                  variant="small"
                  className="text-gray-600 mb-4 line-clamp-2"
                >
                  {event.description}
                </Typography>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>

                <Link href={`/events/${event.id}`}>
                  <Button variant="secondary" size="sm" className="w-full">
                    Register
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Typography variant="subheading" className="mb-4">
            Want to host an event with us?
          </Typography>
          <Typography
            variant="body"
            className="text-gray-600 mb-6 max-w-2xl mx-auto"
          >
            We're always looking for community members to share their expertise
            and organize events. Let's collaborate!
          </Typography>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Propose an Event
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default CommunityEvents;
