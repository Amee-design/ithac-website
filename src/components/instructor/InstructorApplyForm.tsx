"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import {
  Send,
  User,
  Mail,
  Globe,
  Phone,
  BookOpen,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface FormData {
  fullname: string;
  email: string;
  country: string;
  phone: string;
  propose_title: string;
  detail: string;
}

export default function InstructorApplyForm() {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    country: "",
    phone: "",
    propose_title: "",
    detail: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [apiError, setApiError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.propose_title.trim())
      newErrors.propose_title = "Proposed title is required";
    if (!formData.detail.trim()) newErrors.detail = "Details are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://ithac.onrender.com/v1/instructor/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      setIsSubmitted(true);

      // Reset form on success after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullname: "",
          email: "",
          country: "",
          phone: "",
          propose_title: "",
          detail: "",
        });
      }, 5000);
    } catch (error) {
      setApiError("There was an error submitting your application. Please try again.");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center bg-white rounded-3xl p-12 border border-ithac-light-gray shadow-sm"
          >
            <div className="bg-ithac-emerald/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-ithac-emerald" />
            </div>
            <h3 className="text-3xl font-bold text-ithac-dark-gray mb-4">
              Application Received!
            </h3>
            <p className="text-xl text-ithac-gray mb-6">
              Thank you for applying to become an instructor. We've received your
              application and will review it shortly.
            </p>
            <div className="bg-ithac-blue/5 rounded-2xl p-6">
              <p className="text-ithac-blue font-medium">
                Our team will process your application and get back to you with next steps.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {apiError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl flex items-center gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p>{apiError}</p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl border border-ithac-light-gray p-8 md:p-12 shadow-sm"
          >
            {/* Personal Information */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-ithac-dark-gray mb-6 flex items-center gap-3">
                <User className="w-6 h-6 text-ithac-blue" />
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-ithac-dark-gray">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullname}
                    onChange={(e) => handleInputChange("fullname", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue/20 transition-all ${
                      errors.fullname
                        ? "border-red-500"
                        : "border-ithac-light-gray focus:border-ithac-blue"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullname && (
                    <div className="flex items-center gap-2 text-red-500 text-sm mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.fullname}
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
                    <div className="flex items-center gap-2 text-red-500 text-sm mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-ithac-dark-gray">
                    <Globe className="w-4 h-4" />
                    Country *
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => handleInputChange("country", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue/20 transition-all ${
                      errors.country
                        ? "border-red-500"
                        : "border-ithac-light-gray focus:border-ithac-blue"
                    }`}
                    placeholder="e.g. Nigeria"
                  />
                  {errors.country && (
                    <div className="flex items-center gap-2 text-red-500 text-sm mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.country}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-ithac-dark-gray">
                    <Phone className="w-4 h-4" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue/20 transition-all ${
                      errors.phone
                        ? "border-red-500"
                        : "border-ithac-light-gray focus:border-ithac-blue"
                    }`}
                    placeholder="+234 902 143 9349"
                  />
                  {errors.phone && (
                    <div className="flex items-center gap-2 text-red-500 text-sm mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.phone}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Course Details */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-ithac-dark-gray mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-ithac-blue" />
                Course Proposal
              </h3>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-ithac-dark-gray">
                    Proposed Course Title *
                  </label>
                  <input
                    type="text"
                    value={formData.propose_title}
                    onChange={(e) => handleInputChange("propose_title", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue/20 transition-all ${
                      errors.propose_title
                        ? "border-red-500"
                        : "border-ithac-light-gray focus:border-ithac-blue"
                    }`}
                    placeholder="e.g. How To Dance Afro Wave"
                  />
                  {errors.propose_title && (
                    <div className="flex items-center gap-2 text-red-500 text-sm mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.propose_title}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-ithac-dark-gray">
                    <MessageSquare className="w-4 h-4" />
                    Course Details *
                  </label>
                  <textarea
                    value={formData.detail}
                    onChange={(e) => handleInputChange("detail", e.target.value)}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue/20 transition-all resize-none ${
                      errors.detail
                        ? "border-red-500"
                        : "border-ithac-light-gray focus:border-ithac-blue"
                    }`}
                    placeholder="Provide details about what your course will cover, target audience, and structure..."
                  />
                  {errors.detail && (
                    <div className="flex items-center gap-2 text-red-500 text-sm mt-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.detail}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group bg-ithac-blue text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-ithac-blue/90 hover:shadow-lg hover:shadow-ithac-blue/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 mx-auto"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <p className="text-ithac-gray text-sm mt-4">
                By submitting this application, you agree to our privacy policy and
                instructor terms of service.
              </p>
            </div>
          </form>
        </motion.div>
      </Container>
    </section>
  );
}
