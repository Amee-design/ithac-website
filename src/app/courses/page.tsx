import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "../../components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Courses | ITHAC Training Programs",
  description:
    "Explore ITHAC's professional training catalog across technology, innovation, media, and strategic communication.",
};

type Course = {
  id: number;
  title: string;
  duration: string;
  summary: string;
  learn: string[];
  careerPath: string;
};

type Category = {
  title: string;
  subtitle?: string;
  courses: Course[];
};

const WHATSAPP_NUMBER = "2349021439349";

function getCourseWhatsAppLink(course: Course, categoryTitle: string) {
  const message = `Hi ITHAC! I'm interested in enrolling in the *${course.title}* (Course ${course.id}, ${course.duration}) under ${categoryTitle}. Please share more details on enrollment.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const allProgramsInclude = [
  "Instructor-guided sessions",
  "Hands-on assignments",
  "Mentorship opportunities",
  "Portfolio development",
  "Networking within the ecosystem",
  "Certificate of completion",
];

const categories: Category[] = [
  {
    title: "Technology and Innovation Programs",
    courses: [
      {
        id: 1,
        title: "Product Design",
        duration: "2 Months",
        summary:
          "Design digital products with a strong focus on usability from concept to final interface.",
        learn: [
          "User research and personas",
          "Wireframing and prototyping",
          "Interface design principles",
          "Usability testing",
          "Figma workflow practice",
          "Portfolio development",
        ],
        careerPath: "UI Designer, UX Designer, Product Interface Specialist",
      },
      {
        id: 2,
        title: "Data Analytics",
        duration: "3 Months",
        summary:
          "Interpret complex datasets to support business and strategic decisions.",
        learn: [
          "Excel analytics",
          "SQL fundamentals",
          "Power BI dashboards",
          "Data storytelling techniques",
          "Visualization best practices",
          "Real-world dataset analysis",
        ],
        careerPath:
          "Data Analyst, Research Analyst, Business Intelligence Assistant",
      },
      {
        id: 3,
        title: "Cybersecurity",
        duration: "2 Months",
        summary:
          "Learn practical security methods to protect systems, people, and digital assets.",
        learn: [
          "Network security basics",
          "Threat identification",
          "Vulnerability awareness",
          "Identity protection methods",
          "Security tools introduction",
          "Risk assessment fundamentals",
        ],
        careerPath:
          "Security Support Analyst, SOC Trainee, IT Security Assistant",
      },
      {
        id: 4,
        title: "AI Engineering",
        duration: "3 Months",
        summary:
          "Build and automate intelligent workflows for practical problem solving.",
        learn: [
          "Machine learning concepts",
          "Prompt engineering",
          "Automation pipelines",
          "AI workflow integration",
          "Model deployment basics",
          "Solution prototyping",
        ],
        careerPath:
          "AI Solutions Assistant, Automation Specialist, Machine Learning Support Engineer",
      },
      {
        id: 5,
        title: "Product Management",
        duration: "2 Months",
        summary:
          "Manage digital products from early validation to launch and iteration.",
        learn: [
          "Product lifecycle strategy",
          "Roadmap development",
          "Stakeholder coordination",
          "Agile fundamentals",
          "Market validation methods",
          "Documentation practices",
        ],
        careerPath:
          "Associate Product Manager, Product Coordinator, Innovation Program Assistant",
      },
      {
        id: 6,
        title: "Digital Marketing",
        duration: "2 Months",
        summary:
          "Plan, execute, and evaluate digital campaigns for growth and visibility.",
        learn: [
          "Social media strategy",
          "SEO fundamentals",
          "Campaign planning",
          "Audience targeting",
          "Performance tracking",
          "Content positioning",
        ],
        careerPath:
          "Digital Marketing Associate, Social Media Strategist, Campaign Assistant",
      },
      {
        id: 7,
        title: "AI Content Creation",
        duration: "1 Month",
        summary:
          "Create high-quality content quickly with modern AI productivity workflows.",
        learn: [
          "AI writing workflows",
          "Automated visual generation tools",
          "Prompt optimization",
          "Storytelling automation",
          "Publishing pipelines",
          "Content productivity systems",
        ],
        careerPath:
          "AI Content Strategist, Creative Automation Assistant, Digital Storytelling Specialist",
      },
      {
        id: 8,
        title: "Project Management",
        duration: "3 Months",
        summary:
          "Deliver projects successfully with structured planning and execution frameworks.",
        learn: [
          "Project lifecycle management",
          "Scheduling tools",
          "Budgeting basics",
          "Stakeholder engagement",
          "Monitoring frameworks",
          "Risk tracking techniques",
        ],
        careerPath:
          "Project Assistant, Program Coordinator, Operations Support Specialist",
      },
      {
        id: 9,
        title: "Software Development Foundations",
        duration: "3 Months",
        summary:
          "Build practical programming skills for web and software project execution.",
        learn: [
          "Programming fundamentals",
          "Web development basics",
          "Version control using Git",
          "Debugging methods",
          "API integration introduction",
          "Deployment workflows",
        ],
        careerPath:
          "Junior Developer, Web Support Engineer, Technical Assistant",
      },
      {
        id: 10,
        title: "Cloud Computing Fundamentals",
        duration: "2 Months",
        summary:
          "Understand cloud infrastructure essentials and deployment fundamentals.",
        learn: [
          "Cloud architecture basics",
          "Storage systems",
          "Virtualization concepts",
          "Cloud deployment models",
          "Platform navigation practice",
          "Security fundamentals",
        ],
        careerPath:
          "Cloud Support Associate, Deployment Technician, Infrastructure Assistant",
      },
      {
        id: 11,
        title: "Innovation and Technology Entrepreneurship",
        duration: "2 Months",
        summary:
          "Turn ideas into scalable ventures using startup and innovation models.",
        learn: [
          "Startup validation frameworks",
          "Business model design",
          "Funding readiness preparation",
          "Pitch development",
          "Ecosystem mapping",
          "Partnership strategy",
        ],
        careerPath:
          "Startup Founder, Innovation Participant, Technology Venture Coordinator",
      },
    ],
  },
  {
    title: "Creative Media and Production Programs",
    subtitle: "Delivered through ITHAC Creative Productions",
    courses: [
      {
        id: 12,
        title: "Digital Film and Video Production",
        duration: "3 Months",
        summary:
          "Produce professional video content for education, media, and brand storytelling.",
        learn: [
          "Camera operation fundamentals",
          "Lighting setup techniques",
          "Audio recording basics",
          "Storyboarding and scripting",
          "Editing workflows",
          "Documentary production techniques",
        ],
        careerPath:
          "Video Producer, Content Creator, Media Production Assistant",
      },
      {
        id: 13,
        title: "Motion Graphics and Animation Design",
        duration: "2 Months",
        summary:
          "Design animations that elevate storytelling and visual communication.",
        learn: [
          "Motion design principles",
          "Typography animation",
          "Logo animation techniques",
          "Explainer video creation",
          "Storytelling workflows",
          "Animation software practice",
        ],
        careerPath:
          "Motion Graphics Designer, Animation Assistant, Digital Media Designer",
      },
    ],
  },
  {
    title: "Advertising and Visibility Programs",
    subtitle: "Delivered through UrbanView MediaWorks",
    courses: [
      {
        id: 14,
        title: "Strategic Advertising and Out-of-Home Media Planning",
        duration: "2 Months",
        summary:
          "Plan and run OOH campaigns from audience targeting to impact tracking.",
        learn: [
          "OOH advertising fundamentals",
          "Audience targeting methods",
          "Placement strategy",
          "Campaign budgeting",
          "Location impact analysis",
          "Visibility measurement techniques",
        ],
        careerPath:
          "Media Planning Assistant, Advertising Coordinator, OOH Campaign Strategist",
      },
      {
        id: 15,
        title: "Creative Brand Communication and Visual Campaign Design",
        duration: "2 Months",
        summary:
          "Build integrated visual campaigns for digital and real-world channels.",
        learn: [
          "Campaign concept development",
          "Visual storytelling strategy",
          "Brand identity alignment",
          "Flyer and poster layout systems",
          "Banner design workflows",
          "Campaign execution frameworks",
        ],
        careerPath:
          "Brand Communication Specialist, Creative Campaign Designer, Marketing Visuals Strategist",
      },
    ],
  },
];

const tracks = [
  {
    goal: "Design career",
    programs: "Product Design, Motion Graphics",
  },
  {
    goal: "Data career",
    programs: "Data Analytics, Cloud Computing",
  },
  {
    goal: "Security career",
    programs: "Cybersecurity, Cloud Computing",
  },
  {
    goal: "Engineering pathway",
    programs: "Software Development, AI Engineering",
  },
  {
    goal: "Leadership pathway",
    programs: "Project Management, Product Management",
  },
  {
    goal: "Startup pathway",
    programs: "Innovation Entrepreneurship, Digital Marketing",
  },
  {
    goal: "Creative production pathway",
    programs: "Film Production, Animation",
  },
  {
    goal: "Advertising pathway",
    programs: "OOH Media Planning, Campaign Design",
  },
];

export default function CoursesPage() {
  return (
    <main className="pt-20 bg-surface min-h-screen">
      <FadeIn delay={0.1}>
        <section className="relative overflow-hidden bg-primary py-24 md:py-32">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 h-full w-1/2 bg-secondary -skew-x-12 translate-x-1/3" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-on-tertiary-container text-tertiary text-xs font-bold tracking-widest uppercase mb-6">
              ITHAC Training Catalog
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-on-primary tracking-tight mb-6 leading-tight">
              Professional Courses Designed for Real-World Outcomes
            </h1>
            <p className="text-xl text-on-primary-container max-w-3xl leading-relaxed mb-10">
              Explore 15 structured programs across technology, innovation,
              creative media, and strategic communication. Each track combines
              guided learning, practical assignments, and mentorship exposure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://forms.gle/5YSKCpEuBYYTGmBY9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-bold hover:bg-secondary-container transition-all active:scale-95"
              >
                Apply for a Programme
              </Link>
              <Link
                href="/services"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all"
              >
                See Program Pathways
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.2}>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-8">
              All Programs Include
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allProgramsInclude.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-outline-variant/20 bg-surface-container-low p-4 font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {categories.map((category, categoryIndex) => (
        <FadeIn key={category.title} delay={0.25 + categoryIndex * 0.05}>
          <section className="py-16 bg-surface-container-lowest">
            <div className="max-w-7xl mx-auto px-8">
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-2">
                {category.title}
              </h2>
              {category.subtitle && (
                <p className="text-on-surface-variant font-medium mb-8">
                  {category.subtitle}
                </p>
              )}

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {category.courses.map((course) => (
                  <article
                    key={course.id}
                    className="h-full flex flex-col rounded-2xl border border-outline-variant/20 bg-white p-6 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <p className="text-xs font-black tracking-widest text-secondary uppercase">
                        Course {course.id}
                      </p>
                      <span className="text-xs font-bold bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                        {course.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-primary mb-3 leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                      {course.summary}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-xs font-black tracking-wider uppercase text-primary mb-2">
                        What you will learn
                      </h4>
                      <ul className="space-y-2 text-sm text-on-surface-variant">
                        {course.learn.map((topic) => (
                          <li key={topic} className="flex items-start gap-2">
                            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-secondary" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-outline-variant/20 mb-5 flex-1">
                      <h4 className="text-xs font-black tracking-wider uppercase text-primary mb-2">
                        Career Pathway
                      </h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        {course.careerPath}
                      </p>
                    </div>

                    <Link
                      href={getCourseWhatsAppLink(course, category.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-secondary text-on-secondary px-5 py-3 rounded-xl font-bold hover:bg-secondary-container transition-all active:scale-95 text-sm"
                    >
                      Chat With Us to Enroll →
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>
      ))}

      <FadeIn delay={0.45}>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-8">
              Recommended Learning Tracks by Career Goal
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {tracks.map((track) => (
                <div
                  key={track.goal}
                  className="rounded-xl border border-outline-variant/20 p-5 bg-surface"
                >
                  <p className="font-black text-primary mb-1">{track.goal}</p>
                  <p className="text-on-surface-variant">{track.programs}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
