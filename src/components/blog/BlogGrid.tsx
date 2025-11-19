"use client";

import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container, Typography, Button } from "../ui";

const BlogGrid = () => {
  const articles = [
    {
      id: 1,
      title: "Building Scalable Web Applications with Next.js 14",
      excerpt:
        "Learn how to create high-performance web applications using the latest Next.js features, including server components and app router.",
      author: "Adebayo Ogundimu",
      date: "Nov 18, 2025",
      readTime: "8 min read",
      category: "Programming",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: 2,
      title: "The Rise of African Fintech: Opportunities and Challenges",
      excerpt:
        "Exploring the rapid growth of financial technology across Africa and the unique opportunities it presents for local developers.",
      author: "Chioma Nwankwo",
      date: "Nov 16, 2025",
      readTime: "6 min read",
      category: "Innovation",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "From Junior to Senior: A Developer's Journey",
      excerpt:
        "Career progression tips and strategies for developers looking to advance their careers in the African tech ecosystem.",
      author: "Kelechi Okoro",
      date: "Nov 14, 2025",
      readTime: "12 min read",
      category: "Career Growth",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Building a Strong Tech Community in Nigeria",
      excerpt:
        "How local tech communities are fostering innovation and creating opportunities for the next generation of developers.",
      author: "Amara Eze",
      date: "Nov 12, 2025",
      readTime: "7 min read",
      category: "Community",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Machine Learning Applications in African Agriculture",
      excerpt:
        "Innovative ML solutions addressing food security and farming challenges across the African continent.",
      author: "Fatima Ibrahim",
      date: "Nov 10, 2025",
      readTime: "10 min read",
      category: "Innovation",
      image:
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Remote Work Best Practices for Tech Teams",
      excerpt:
        "Essential strategies and tools for maintaining productivity and collaboration in distributed tech teams.",
      author: "Emeka Okafor",
      date: "Nov 8, 2025",
      readTime: "9 min read",
      category: "Career Growth",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Programming: "bg-secondary-blue text-white",
      Innovation: "bg-accent-aqua text-white",
      "Career Growth": "bg-accent-aqua-dark text-white",
      Community: "bg-accent-aqua-light text-secondary-blue",
      "Tech Trends": "bg-secondary-blue-dark text-white",
      "Global Tech": "bg-secondary-blue text-white",
    };
    return colors[category as keyof typeof colors] || "bg-gray-500 text-white";
  };

  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography variant="sectionHeading" className="mb-4">
            Latest <span className="text-accent-aqua">Articles</span>
          </Typography>
          <Typography variant="body" className="max-w-2xl mx-auto">
            Stay informed with our latest insights on technology, career
            development, and African innovation.
          </Typography>
        </motion.div>

        {/* Featured Article */}
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
                  Featured
                </span>
                <Typography
                  variant="sectionHeading"
                  className="text-white mb-4"
                >
                  {articles[0].title}
                </Typography>
                <Typography variant="body" className="text-white/90 mb-6">
                  {articles[0].excerpt}
                </Typography>
                <div className="flex items-center gap-6 text-sm text-white/80 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{articles[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{articles[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{articles[0].readTime}</span>
                  </div>
                </div>
                <Link href={`/blog/${articles[0].id}`}>
                  <Button
                    variant="accent"
                    className="bg-white text-secondary-blue hover:bg-white/90"
                  >
                    Read Article
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.slice(1).map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                      article.category
                    )}`}
                  >
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <Typography
                  variant="subheading"
                  className="mb-3 group-hover:text-accent-aqua transition-colors"
                >
                  {article.title}
                </Typography>
                <Typography
                  variant="small"
                  className="text-gray-600 mb-4 line-clamp-3"
                >
                  {article.excerpt}
                </Typography>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="secondary" size="lg">
            Load More Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default BlogGrid;
