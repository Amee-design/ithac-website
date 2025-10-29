"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Calendar,
  Send,
  CheckCircle,
} from "lucide-react";
import { Container, Typography, Card, Button } from "../ui";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    program: "",
    experience: "",
    startDate: "",
    motivation: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const programs = [
    "Web Development",
    "Mobile Development",
    "Data Science & AI",
    "Cloud Computing",
    "Cybersecurity",
    "Digital Marketing",
  ];

  const experienceLevels = [
    "Complete Beginner",
    "Some Experience",
    "Intermediate",
    "Advanced",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - Replace with actual Supabase integration
    try {
      // TODO: Integrate with Supabase
      // const { data, error } = await supabase
      //   .from('registrations')
      //   .insert([formData]);

      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSubmitted(true);
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="p-12 bg-gradient-to-br from-ithac-emerald/5 to-ithac-blue/5 border border-ithac-emerald/20">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-20 h-20 bg-ithac-emerald rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-10 h-10 text-white" />
              </motion.div>

              <Typography
                variant="sectionHeading"
                className="text-ithac-emerald mb-4"
              >
                Registration Successful!
              </Typography>

              <Typography variant="body" className="mb-8">
                Thank you for your interest in ITHAC Academy. We've received
                your application and our admissions team will contact you within
                24 hours to discuss the next steps.
              </Typography>

              <div className="space-y-4">
                <Typography variant="small" className="text-ithac-dark-gray/70">
                  What happens next:
                </Typography>
                <div className="space-y-3 text-left max-w-md mx-auto">
                  {[
                    "Admissions team review (24 hours)",
                    "Schedule interview call",
                    "Program orientation",
                    "Start your learning journey",
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-ithac-blue rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <Typography variant="small">{step}</Typography>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography variant="sectionHeading" className="mb-4">
            Start Your Journey Today
          </Typography>
          <Typography variant="body" className="max-w-3xl mx-auto">
            Ready to transform your career? Fill out the registration form below
            and take the first step towards becoming a technology leader.
          </Typography>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <Typography
                  variant="subheading"
                  className="flex items-center gap-2"
                >
                  <User className="w-5 h-5 text-ithac-blue" />
                  Personal Information
                </Typography>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-ithac-dark-gray">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-ithac-silver rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue focus:border-transparent transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-ithac-dark-gray">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-ithac-silver rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue focus:border-transparent transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-ithac-dark-gray">
                      <Mail className="w-4 h-4" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-ithac-silver rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-ithac-dark-gray">
                      <Phone className="w-4 h-4" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-ithac-silver rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue focus:border-transparent transition-colors"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-ithac-dark-gray">
                    <MapPin className="w-4 h-4" />
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-ithac-silver rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue focus:border-transparent transition-colors"
                    placeholder="City, State, Country"
                  />
                </div>
              </div>

              {/* Program Selection */}
              <div className="space-y-6">
                <Typography
                  variant="subheading"
                  className="flex items-center gap-2"
                >
                  <GraduationCap className="w-5 h-5 text-ithac-purple" />
                  Program Information
                </Typography>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-ithac-dark-gray">
                      Preferred Program *
                    </label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-ithac-silver rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue focus:border-transparent transition-colors"
                    >
                      <option value="">Select a program</option>
                      {programs.map((program) => (
                        <option key={program} value={program}>
                          {program}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-ithac-dark-gray">
                      Experience Level *
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-ithac-silver rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue focus:border-transparent transition-colors"
                    >
                      <option value="">Select your level</option>
                      {experienceLevels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-ithac-dark-gray">
                    <Calendar className="w-4 h-4" />
                    Preferred Start Date *
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-ithac-silver rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <Typography variant="subheading">
                  Tell Us About Yourself
                </Typography>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-ithac-dark-gray">
                    What motivates you to join ITHAC Academy? *
                  </label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-ithac-silver rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue focus:border-transparent transition-colors resize-none"
                    placeholder="Share your goals, background, and what you hope to achieve..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing Application...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Submit Application
                      <Send className="w-5 h-5" />
                    </div>
                  )}
                </Button>

                <Typography
                  variant="small"
                  className="text-ithac-dark-gray/60 text-center mt-4"
                >
                  By submitting this form, you agree to our Terms of Service and
                  Privacy Policy. Our admissions team will contact you within 24
                  hours.
                </Typography>
              </div>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default RegistrationForm;
