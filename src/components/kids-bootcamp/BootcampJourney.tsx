"use client";

import React from "react";
import { FadeIn } from "../animations/FadeIn";

type BootcampDay = {
  day: number;
  title: string;
  focus: string[];
  summary: string;
  video: string;
};

const days: BootcampDay[] = [
  {
    day: 1,
    title: "Getting Curious About AI",
    focus: ["Artificial Intelligence"],
    summary:
      "The bootcamp opened with an introduction to Artificial Intelligence. Participants explored how AI works and took on tasks designed to push their thinking beyond what they already knew. There were questions, ideas, and plenty of “Ohhh, so that’s how it works!” moments. Day 1 was about learning and getting curious — the practical work was still ahead.",
    video: "/VIDEOS/VIDEO-1.mp4",
  },
  {
    day: 2,
    title: "Meet the Drones",
    focus: ["Drone Technology", "Artificial Intelligence"],
    summary:
      "Day 2 brought the learning to life. Participants moved into drone technology, covering drone anatomy, flight principles, terminology, and safety, guided by one simple rule: know the drone before you fly it. From there it was back into AI, building on the Day 1 foundation. The questions were sharper, the engagement higher, and the excitement clear on every face.",
    video: "/VIDEOS/VIDEO-2.mp4",
  },
  {
    day: 3,
    title: "Hands On",
    focus: ["Prompt Engineering", "Drone Flight"],
    summary:
      "Things got hands-on. The day started with learning how to communicate better with AI through prompting — understanding that a useful response is less about what you ask and more about how you ask it. Then came the moment everyone was waiting for: the drones. Participants flew a drone for the first time, putting instructions into action. They weren’t just being introduced to technology anymore — they were starting to interact with it.",
    video: "/VIDEOS/VIDEO-3.mp4",
  },
  {
    day: 4,
    title: "Into the Field",
    focus: ["Hands-On Learning", "Drone Technology"],
    summary:
      "Learning doesn’t always look easy. Participants took their work outside the classroom and into the field, spending more time practising with the drones. For many, this was their first time doing this kind of field work, so there were mistakes, adjustments, and a lot of trying again. That’s the point of learning: you don’t have to get it right the first time, you have to be willing to try, learn, adjust, and try again.",
    video: "/VIDEOS/VIDEO-4.mp4",
  },
  {
    day: 5,
    title: "The Pieces Click",
    focus: ["Drone Technology", "Confidence"],
    summary:
      "Something shifted. The hesitation from earlier gave way to confidence. Participants picked up their drones with more certainty, adjusted settings faster, and needed far less guidance than on Day 1. What looked like trial and error a few days earlier was starting to look like real skill — moving from “how does this work?” to “I’ve got this.” One more day to go before closing day.",
    video: "/VIDEOS/VIDEO-5.mp4",
  },
];

const BootcampJourney = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16 max-w-2xl">
          <span className="font-label uppercase tracking-widest text-sm text-secondary font-bold mb-4 block">
            Day by Day
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-black text-primary tracking-tight mb-4">
            Inside the Journey
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Six days, one learning journey. Here is how the ITHAC Kids Summer
            Bootcamp unfolded — from a room full of curious questions to
            young hands flying drones with real confidence.
          </p>
        </div>

        <div className="grid gap-20">
          {days.map((entry, idx) => {
            const mediaRight = idx % 2 !== 0;
            return (
              <FadeIn key={entry.day} direction={mediaRight ? "right" : "left"}>
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  {/* Media */}
                  <div className={mediaRight ? "lg:order-2" : ""}>
                    <div className="rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-black">
                      <video
                        controls
                        preload="metadata"
                        playsInline
                        className="w-full max-h-[75vh] bg-black"
                      >
                        <source src={entry.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>

                  {/* Copy */}
                  <div className={mediaRight ? "lg:order-1" : ""}>
                    <div className="inline-flex items-center gap-3 mb-6">
                      <span className="w-12 h-12 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center font-black text-lg">
                        {entry.day}
                      </span>
                      <span className="font-label uppercase tracking-widest text-xs text-secondary font-bold">
                        Day {entry.day}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-primary mb-5 leading-tight">
                      {entry.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {entry.focus.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wide rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-lg text-on-surface-variant leading-relaxed">
                      {entry.summary}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BootcampJourney;
