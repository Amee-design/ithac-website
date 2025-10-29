"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import { MapPin, Clock, Phone, Mail, Globe, Users } from "lucide-react";

const offices = [
  {
    city: "Lagos",
    country: "Nigeria",
    address: "123 Victoria Island, Lagos State, Nigeria",
    phone: "+234 901 234 5678",
    email: "lagos@ithac.tech",
    hours: "Mon-Fri: 8am-6pm WAT",
    timezone: "GMT+1",
    isHeadquarters: true,
  },
  {
    city: "Accra",
    country: "Ghana",
    address: "456 Cantonments Road, Accra, Ghana",
    phone: "+233 20 123 4567",
    email: "accra@ithac.tech",
    hours: "Mon-Fri: 8am-6pm GMT",
    timezone: "GMT+0",
    isHeadquarters: false,
  },
  {
    city: "Nairobi",
    country: "Kenya",
    address: "789 Westlands, Nairobi, Kenya",
    phone: "+254 700 123 456",
    email: "nairobi@ithac.tech",
    hours: "Mon-Fri: 8am-6pm EAT",
    timezone: "GMT+3",
    isHeadquarters: false,
  },
];

export default function ContactInfo() {
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
            Our Locations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-ithac-gray max-w-3xl mx-auto"
          >
            We're strategically located across Africa to serve you better. Visit
            any of our offices or connect with us remotely.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl border border-ithac-light-gray p-8 hover:shadow-xl hover:shadow-ithac-blue/10 transition-all duration-500 hover:border-ithac-blue/30 h-full">
                {office.isHeadquarters && (
                  <div className="absolute -top-3 -right-3">
                    <span className="bg-ithac-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                      Headquarters
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-ithac-blue/10 p-3 rounded-full group-hover:bg-ithac-blue transition-all duration-300">
                      <MapPin className="w-6 h-6 text-ithac-blue group-hover:text-white transition-all duration-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-ithac-dark-gray">
                        {office.city}
                      </h3>
                      <p className="text-ithac-gray">{office.country}</p>
                    </div>
                  </div>

                  <p className="text-ithac-gray leading-relaxed mb-6">
                    {office.address}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-ithac-blue mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-ithac-dark-gray">Phone</p>
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="text-ithac-blue hover:underline"
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-ithac-blue mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-ithac-dark-gray">Email</p>
                      <a
                        href={`mailto:${office.email}`}
                        className="text-ithac-blue hover:underline"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-ithac-blue mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-ithac-dark-gray">
                        Business Hours
                      </p>
                      <p className="text-ithac-gray">{office.hours}</p>
                      <p className="text-ithac-gray text-sm">
                        {office.timezone}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-ithac-light-gray">
                  <button className="w-full bg-ithac-blue/10 text-ithac-blue py-3 rounded-xl font-medium hover:bg-ithac-blue hover:text-white transition-all duration-300">
                    Get Directions
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-ithac-blue to-ithac-purple rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-8">Our Global Reach</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center justify-center mb-3">
                <Globe className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="opacity-90">Countries Served</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="opacity-90">Team Members</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-3">
                <Clock className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="opacity-90">Support Available</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-3">
                <MapPin className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">3</div>
              <div className="opacity-90">Office Locations</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
