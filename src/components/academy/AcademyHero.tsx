"use client";

import { Container } from "../ui";
import { LandingAccordionItem } from "../ui/interactive-image-accordion";

const AcademyHero = () => {
  return (
    <div className="w-full">
      <Container className="text-center py-20">
        <LandingAccordionItem />
      </Container>
    </div>
  );
};

export default AcademyHero;
