"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CardContent } from "./CardContent";
import { BlockchainCard } from "./BlockChain";


const features = [
  {
    title: "Live Price Analysis",
    description:
      "Monitor real-time crop prices and market trends to make smarter selling decisions.",
  },
  {
    title: "Direct Crop Trading",
    description:
      "Buy and sell agricultural products through a transparent digital marketplace.",
  },
  {
    title: "Equipment Rental",
    description:
      "Rent tractors, tools, and farming equipment from nearby farmers when needed.",
  },
  {
    title: "Middleman-Free Selling",
    description:
      "Connect directly with buyers and markets to receive fair prices for your produce.",
  },
  {
    title: "Secure Transactions",
    description:
      "Trade with confidence through verified and transparent transactions.",
  },

  {
    title: "Farmer-to-Farmer Network",
    description:
      "Collaborate, share resources, and grow together with a connected farming community.",
  },
];

export default function ScrollFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll();
  const cardY = useTransform(scrollYProgress, [0, 1], [200, -10]);

  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  const cardOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

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
    <section className=" bg-amber-50 ">
      {/* Sticky Area */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Background Heading */}
        <h1
          className="
            absolute
            text-[7vw]
            font-black
            uppercase
            tracking-tighter
            text-black/40
            select-none
            pointer-events-none
            text-center
            transition-all
            pb-150
          "
        >
          {features[activeIndex].title}
        </h1>

        {/* Glass Card */}
        <motion.div
          style={{
            y: cardY,
            scale: cardScale,
            opacity: cardOpacity,
          }}
        >
          <BlockchainCard/>
          
        </motion.div>
        
      </div>

      {/* Scroll Triggers */}
      {features.map((feature, index) => (
        <div
          key={feature.title}
          data-index={index}
          className="feature-trigger h-screen"
        />
      ))}
    </section>
  );
}
