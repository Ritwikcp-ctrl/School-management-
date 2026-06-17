"use client ";

import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

const features = [
  {
    title: "Live Price Analysis",
    description:
      "Blockchain removes central authorities and distributes control across a secure network.",
  },
  {
    title: "Direct Crop Trading",
    description:
      "Advanced cryptography protects transactions and digital assets from unauthorized access.",
  },
  {
    title: "Equipment Rental",
    description:
      "Every transaction is publicly verifiable, creating trust and accountability.",
  },
  {
    title: "Middleman-Free Selling",
    description:
      "Once recorded, data cannot be altered or deleted, ensuring permanent records.",
  },
  {
    title: "Secure Transactions",
    description:
      "Automated digital agreements execute instantly when predefined conditions are met.",
  },

  {
    title: "Farmer-to-Farmer Network",
    description:
      "Collaborate, share resources, and grow together with a connected farming community..",
  },
];

export function CardContent() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll(".feature-trigger");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.getAttribute("data-index")));
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <Card
      variant="dots"
      {...CardContent}
      className="mb-90          
        bg-background   
        mx-auto "
    >
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-3 mt-30">
        {features[activeIndex].title}
      </h2>

      <p className="text-gray-700 text-lg leading-8">
        {features[activeIndex].description}
      </p>
    </Card>
  );
}
