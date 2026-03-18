"use client";

import { useState } from "react";

type AccordionItemType = {
  id: number;
  title: string;
  imageUrl: string;
};

const accordionItems: AccordionItemType[] = [
  {
    id: 1,
    title: "Web Development",
    imageUrl:
      "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Mobile Development",
    imageUrl:
      "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Data Science",
    imageUrl:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Cloud Computing",
    imageUrl:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2090&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Digital Marketing",
    imageUrl:
      "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop",
  },
];

const AccordionItem = ({
  item,
  isActive,
  onMouseEnter,
}: {
  item: AccordionItemType;
  isActive: boolean;
  onMouseEnter: () => void;
}) => {
  return (
    <div
      className={`relative h-[450px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${
        isActive ? "w-[400px]" : "w-[60px]"
      }`}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src =
            "https://placehold.co/400x450/2d3748/ffffff?text=Image+Error";
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <span
        className={`absolute text-white text-lg font-semibold whitespace-nowrap transition-all duration-300 ease-in-out ${
          isActive
            ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0"
            : "bottom-24 left-1/2 -translate-x-1/2 rotate-90"
        }`}
      >
        {item.title}
      </span>
    </div>
  );
};

export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(4);

  return (
    <div className="bg-primary font-sans">
      <section className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-black text-ithac-blue leading-tight">
              Learn, Build, Lead with ITHAC Academy
            </h1>
            <p className="mt-5 text-base md:text-lg text-ithac-dark-gray max-w-xl mx-auto md:mx-0">
              Get trained in software, AI, and digital skills through practical
              projects, mentorship, and career support for African talent.
            </p>
            <div className="mt-8">
              <a
                href="https://ithac-web-application.vercel.app/register"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-ithac-blue text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all hover:bg-ithac-blue-dark"
              >
                Apply Now
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 overflow-x-auto p-2">
            <div className="flex flex-row items-center justify-center gap-3">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
