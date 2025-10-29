"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

const locations = [
  {
    city: "Lagos",
    country: "Nigeria",
    coordinates: { lat: 6.5244, lng: 3.3792 },
    address: "123 Victoria Island, Lagos State, Nigeria",
    isHeadquarters: true,
    mapEmbedId: "lagos-office",
  },
  {
    city: "Accra",
    country: "Ghana",
    coordinates: { lat: 5.6037, lng: -0.187 },
    address: "456 Cantonments Road, Accra, Ghana",
    isHeadquarters: false,
    mapEmbedId: "accra-office",
  },
  {
    city: "Nairobi",
    country: "Kenya",
    coordinates: { lat: -1.2921, lng: 36.8219 },
    address: "789 Westlands, Nairobi, Kenya",
    isHeadquarters: false,
    mapEmbedId: "nairobi-office",
  },
];

export default function MapSection() {
  const handleDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      "_blank"
    );
  };

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
            Visit Our Offices
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-ithac-gray max-w-3xl mx-auto"
          >
            We're strategically located across major African cities. Drop by for
            a coffee and let's discuss your next big project in person.
          </motion.p>
        </div>

        <div className="space-y-16">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Location Info */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative">
                  {location.isHeadquarters && (
                    <div className="absolute -top-4 -left-4">
                      <span className="bg-ithac-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                        Headquarters
                      </span>
                    </div>
                  )}

                  <div className="bg-ithac-light-gray/30 rounded-3xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-ithac-blue/10 p-4 rounded-2xl">
                        <MapPin className="w-8 h-8 text-ithac-blue" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-ithac-dark-gray">
                          {location.city}
                        </h3>
                        <p className="text-xl text-ithac-gray">
                          {location.country}
                        </p>
                      </div>
                    </div>

                    <p className="text-ithac-gray text-lg mb-8 leading-relaxed">
                      {location.address}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => handleDirections(location.address)}
                        className="group bg-ithac-blue text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-ithac-blue/90 hover:shadow-lg hover:shadow-ithac-blue/25 flex items-center gap-2"
                      >
                        <Navigation className="w-5 h-5" />
                        Get Directions
                        <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>

                      <button className="border-2 border-ithac-blue text-ithac-blue px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-ithac-blue hover:text-white">
                        Schedule Visit
                      </button>
                    </div>

                    {/* Quick Info */}
                    <div className="mt-8 pt-8 border-t border-ithac-light-gray">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-semibold text-ithac-dark-gray">
                            Coordinates:
                          </span>
                          <p className="text-ithac-gray">
                            {location.coordinates.lat.toFixed(4)},{" "}
                            {location.coordinates.lng.toFixed(4)}
                          </p>
                        </div>
                        <div>
                          <span className="font-semibold text-ithac-dark-gray">
                            Parking:
                          </span>
                          <p className="text-ithac-gray">Available on-site</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative bg-ithac-light-gray/30 rounded-3xl overflow-hidden h-96">
                  {/* Interactive Map Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-ithac-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-10 h-10 text-ithac-blue" />
                      </div>
                      <h4 className="text-xl font-bold text-ithac-dark-gray mb-2">
                        Interactive Map
                      </h4>
                      <p className="text-ithac-gray mb-4">
                        {location.city}, {location.country}
                      </p>
                      <button
                        onClick={() => handleDirections(location.address)}
                        className="bg-ithac-blue text-white px-6 py-3 rounded-xl font-semibold hover:bg-ithac-blue/90 transition-colors"
                      >
                        Open in Google Maps
                      </button>
                    </div>
                  </div>

                  {/* Map Overlay with Coordinates */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3">
                    <div className="text-xs text-ithac-gray">
                      <div>{location.coordinates.lat.toFixed(4)}°N</div>
                      <div>{location.coordinates.lng.toFixed(4)}°E</div>
                    </div>
                  </div>

                  {/* Location Marker */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-6 h-6 bg-ithac-blue rounded-full shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regional Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-ithac-blue to-ithac-purple rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-6">Serving All of Africa</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            While we have physical offices in Lagos, Accra, and Nairobi, we
            serve clients across the entire African continent through our remote
            collaboration capabilities and regional partnerships.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold mb-1">15+</div>
              <div className="opacity-80">Countries</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">50+</div>
              <div className="opacity-80">Cities</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">3</div>
              <div className="opacity-80">Time Zones</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="opacity-80">Support</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
