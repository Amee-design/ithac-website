"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import {
  Send,
  User,
  Mail,
  Building,
  MessageSquare,
  Phone,
  Calendar,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

const projectTypes = [
  "Web Development",
  "Mobile App Development",
  "E-commerce Platform",
  "Digital Transformation",
  "Custom Software",
  "UI/UX Design",
  "Cloud Migration",
  "API Development",
  "Other",
];

const budgetRanges = [
  "$5K - $10K",
  "$10K - $25K",
  "$25K - $50K",
  "$50K - $100K",
  "$100K+",
  "Not Sure Yet",
];

const timelineOptions = [
  "1-2 months",
  "3-4 months",
  "5-6 months",
  "6+ months",
  "Flexible",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after successful submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });
    }, 3000);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-ithac-light-gray/30">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center bg-white rounded-3xl p-12 border border-ithac-light-gray"
          >
            <div className="bg-ithac-emerald/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-ithac-emerald" />
            </div>
            <h3 className="text-3xl font-bold text-ithac-dark-gray mb-4">
              Thank You!
            </h3>
            <p className="text-xl text-ithac-gray mb-6">
              Your message has been sent successfully. We'll get back to you
              within 2 hours during business hours.
            </p>
            <div className="bg-ithac-blue/5 rounded-2xl p-6">
              <p className="text-ithac-blue font-medium">
                What's next? Our team will review your project details and
                schedule a consultation call to discuss your requirements in
                detail.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-24 bg-ithac-light-gray/30">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-ithac-dark-gray mb-6"
          >
            Tell Us About Your Project
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-ithac-gray max-w-3xl mx-auto"
          >
            Share your project details with us and we'll provide you with a
            custom solution designed to meet your specific needs and goals.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl border border-ithac-light-gray p-8 md:p-12"
          >
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-ithac-dark-gray mb-6 flex items-center gap-3">
                <User className="w-6 h-6 text-ithac-blue" />
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-ithac-dark-gray">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue/20 transition-all ${
                      errors.firstName
                        ? "border-red-500"
                        : "border-ithac-light-gray focus:border-ithac-blue"
                    }`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <div className="flex items-center gap-2 text-red-500 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.firstName}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-ithac-dark-gray">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue/20 transition-all ${
                      errors.lastName
                        ? "border-red-500"
                        : "border-ithac-light-gray focus:border-ithac-blue"
                    }`}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <div className="flex items-center gap-2 text-red-500 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.lastName}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-ithac-dark-gray">
                    <Mail className="w-4 h-4" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue/20 transition-all ${
                      errors.email
                        ? "border-red-500"
                        : "border-ithac-light-gray focus:border-ithac-blue"
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <div className="flex items-center gap-2 text-red-500 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-ithac-dark-gray">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-4 py-3 border border-ithac-light-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue/20 focus:border-ithac-blue transition-all"
                    placeholder="+234 901 234 5678"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-ithac-dark-gray">
                    <Building className="w-4 h-4" />
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      handleInputChange("company", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-ithac-light-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue/20 focus:border-ithac-blue transition-all"
                    placeholder="Your company or organization name"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-ithac-dark-gray mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-ithac-blue" />
                Project Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-ithac-dark-gray">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) =>
                      handleInputChange("projectType", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-ithac-light-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue/20 focus:border-ithac-blue transition-all"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-ithac-dark-gray">
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      handleInputChange("budget", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-ithac-light-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue/20 focus:border-ithac-blue transition-all"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-ithac-dark-gray">
                    <Calendar className="w-4 h-4" />
                    Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) =>
                      handleInputChange("timeline", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-ithac-light-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue/20 focus:border-ithac-blue transition-all"
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-ithac-dark-gray">
                  <MessageSquare className="w-4 h-4" />
                  Project Description *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue/20 transition-all resize-none ${
                    errors.message
                      ? "border-red-500"
                      : "border-ithac-light-gray focus:border-ithac-blue"
                  }`}
                  placeholder="Tell us about your project, goals, requirements, and any specific features you need..."
                />
                {errors.message && (
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group bg-ithac-blue text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-ithac-blue/90 hover:shadow-lg hover:shadow-ithac-blue/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 mx-auto"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <p className="text-ithac-gray text-sm mt-4">
                By submitting this form, you agree to our privacy policy and
                terms of service.
              </p>
            </div>
          </form>
        </motion.div>
      </Container>
    </section>
  );
}
