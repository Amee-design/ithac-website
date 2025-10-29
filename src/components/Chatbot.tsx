"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm ITHAC's assistant. I can help you with information about our training programs, services, and more. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Knowledge base for ITHAC
  const knowledgeBase = {
    services: {
      keywords: ["service", "what do you do", "offer", "provide"],
      response:
        "ITHAC offers 4 core services:\n\n🎓 IT Training & Workshops - Comprehensive training in web development, mobile apps, and emerging technologies\n\n💻 Software & Mobile Development - Custom software solutions and mobile applications\n\n🎬 Multimedia Solutions - Video production, graphic design, and interactive media\n\n🏆 Hackathon Design & Execution - End-to-end hackathon planning and community events",
    },
    programs: {
      keywords: ["program", "course", "training", "bootcamp", "learn"],
      response:
        "Our featured training programs include:\n\n🚀 Full-Stack Development Bootcamp (12 weeks) - Learn React, Node.js, and cloud deployment\n\n🎨 UI/UX Design Workshop (6 weeks) - Design thinking, Figma, and prototyping\n\n📱 Mobile App Development Lab (10 weeks) - React Native and Flutter development\n\n💡 Innovation Hackathon Sprint (48 hours) - Monthly hackathon events with mentorship",
    },
    pricing: {
      keywords: ["price", "cost", "fee", "payment", "how much"],
      response:
        "Our pricing varies by program:\n\n💰 Training Programs: Starting from ₦150,000 for workshops\n💰 Development Services: Custom quotes based on project scope\n💰 Hackathon Events: Free participation for students\n\nContact us for detailed pricing and payment plans!",
    },
    location: {
      keywords: ["location", "where", "address", "lagos", "office"],
      response:
        "📍 We're located in Lagos, Nigeria:\n\nITHAC Headquarters\n123 Innovation Drive\nVictoria Island, Lagos, Nigeria\n\n📞 Phone: +234 (0) 901 234 5678\n📧 Email: hello@ithac.ng",
    },
    requirements: {
      keywords: ["requirement", "prerequisite", "need", "qualify"],
      response:
        "Our program requirements:\n\n✅ Full-Stack Bootcamp: Basic computer skills, passion for learning\n✅ UI/UX Workshop: No prior experience needed\n✅ Mobile Development: Some programming knowledge helpful\n✅ Hackathons: Open to all skill levels\n\nWe welcome beginners and provide comprehensive support!",
    },
    duration: {
      keywords: ["duration", "how long", "time", "schedule"],
      response:
        "Program durations:\n\n⏰ Full-Stack Bootcamp: 12 weeks (6:30 PM - 9:30 PM)\n⏰ UI/UX Workshop: 6 weeks (weekends)\n⏰ Mobile Development: 10 weeks (flexible schedule)\n⏰ Hackathons: 48-hour intensive events\n\nWe offer both full-time and part-time schedules!",
    },
    contact: {
      keywords: ["contact", "reach", "get in touch", "call", "email"],
      response:
        "Get in touch with us:\n\n📧 Email: hello@ithac.ng\n📧 Admissions: admissions@ithac.ng\n📞 Phone: +234 (0) 901 234 5678\n📞 WhatsApp: +234 (0) 803 456 7890\n\nOr use the contact form on our website!",
    },
    about: {
      keywords: ["about", "who are you", "company", "ithac"],
      response:
        "About ITHAC:\n\n🚀 We're a Lagos-based software company empowering the next generation of tech innovators\n\n📈 Our Impact:\n• 500+ Graduates\n• 10+ Global Partners\n• 95% Success Rate\n\nWe provide training, development, and innovation experiences through comprehensive tech programs!",
    },
  };

  const findBestResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    for (const data of Object.values(knowledgeBase)) {
      if (data.keywords.some((keyword) => message.includes(keyword))) {
        return data.response;
      }
    }

    // Default response for unmatched queries
    return "I'd be happy to help! I can provide information about:\n\n• Our training programs and courses\n• Services we offer\n• Pricing and requirements\n• Location and contact details\n• Program duration and schedules\n\nPlease ask me about any of these topics, or contact our team directly at hello@ithac.ng for personalized assistance!";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findBestResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "bg-red-500 hover:bg-red-600"
            : "bg-ithac-blue hover:bg-blue-700"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-ithac-blue text-white p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">ITHAC Assistant</h3>
                <p className="text-blue-100 text-sm">Online now</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex gap-2 max-w-[85%] ${
                      message.sender === "user"
                        ? "flex-row-reverse"
                        : "flex-row"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === "user"
                          ? "bg-ithac-blue"
                          : "bg-gray-300"
                      }`}
                    >
                      {message.sender === "user" ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-gray-600" />
                      )}
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-2 ${
                        message.sender === "user"
                          ? "bg-ithac-blue text-white"
                          : "bg-white text-gray-800 border border-gray-200"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">
                        {message.text}
                      </p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "user"
                            ? "text-blue-100"
                            : "text-gray-500"
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-2 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="bg-white text-gray-800 border border-gray-200 rounded-2xl px-4 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-ithac-blue focus:border-transparent text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-ithac-blue text-white p-2 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Powered by ITHAC AI Assistant
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
