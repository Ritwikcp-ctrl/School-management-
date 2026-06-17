"use client";

import { Feature, motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import UserCard from "../Cards/UserCard";
import ProjectCard from "../Cards/ProjectCard";
import AnalyticsCard from "../Cards/AnalyticsCard";
import Toggle from "./Toggle";
import Suno from "../Cards/Suno";
import HeroSection from "../Cards/HeroSection";
import FeatureCard from "../Cards/FeatureCard";
import AnimateSecond from "../Cards/AnimateSecond";
import MotionButton from "./MotionButton";
import ScrollFeatures from "./ScrollFeature";
import { BackgroundStyle } from "./BackgroundStyle";

const HomePageCard = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Move from first item centered to last item centered
  const totalDistance = (items.length - 1) * (ITEM_WIDTH + GAP);
  const x = useTransform(scrollYProgress, [0, 1], [-600, -totalDistance]);

  return (
    <div id="example">
      <div className="fixed top-4 right-5 z-50 flex -1">
        <Toggle />
      </div>

      <HeroSection />

      <div ref={containerRef} className="scroll-container ">
        <div className="sticky-wrapper ">
          <motion.div className="gallery" style={{ x }}>
            {items.map((item) => {
              const Card = item.component;

              return (
                <div key={item.id} className="gallery-item">
                  <Card />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="w-full min-h-screen flex items-center justify-center px-2 py-10 flex-col ">
        <div className="flex-1 h-px  border-t-2  border-dotted border-black py-1 mx-auto w-245 " />
        <div className="w-full flex  max-w-7xl bg-white  mb-10 rounded-3xl p-7 lg:p-16  m-0 ">
          <div className="flex flex-col lg:flex-row items-center pr-40 pt-0 pb-0 pl-10 gap-0">
            {/* Left Side */}
            <div className="flex-1 space-y-8">
              {/* Heading */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                  Building trusted paths of growth for every agri citizen
                </h1>
              </div>

              {/* Paragraph Section */}
              <div>
                <div>
                  <p className="text-lg lg:text-1xl text-black leading-tight">
                    <span className="block">For almost a decade,</span>
                    <span className="block">we have been focused on</span>
                    <span className="block">
                      transforming the agri ecosystem.
                    </span>
                  </p>
                  <br />
                  <br />
                  <p className="text-lg text-black leading-relaxed">
                    <span className="block">
                      By harnessing technology and innovation,
                    </span>
                    <span className="block">
                      we create products and services that help
                    </span>
                    <span className="block">
                      small businesses grow across the value chain.
                    </span>
                  </p>
                </div>
              </div>

              <MotionButton label="Get started" />
            </div>

            {/* Right Side */}
            <div className="flex-1 flex justify-center items-center">
              <div className="w-full max-w-md">
                <AnimateSecond />
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackgroundStyle/>
      <StyleSheet />
    </div>
  );
};

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
  return (
    <style>{`
            body {
                overflow-x: hidden;
            }

            #example {
                height: auto;
                overflow: visible;
                margin:10px;
                
            }

            .intro-section {
                height: 50vh;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;
                text-align: center;
                padding-bottom: 40px;
                
            }

            .intro-section h1 {
                font-size: clamp(36px, 8vw, 72px);
                
                margin: 0;
                text-transform: uppercase;
            }

            .scroll-container {
                height: 400vh;
                position: relative;

    /* Horizontal breathing room */
    padding-left: 5rem;
    padding-right: 5rem;


       /* Better box sizing */
    box-sizing: border-box;


    /* Horizontal breathing room */
    padding-left: 5rem;
    padding-right: 5rem;
    
    
            }

            .sticky-wrapper {
                position: sticky;
                top: 0;
                height: 100vh;
                width: 400px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                overflow: visible;
            }

            .gallery {
                display: flex;
                gap: 30px;
                will-change: transform;
            }

            .gallery-item {
                flex-shrink: 0;
                width: 400px;
                height: 700px;
                border-radius: 20px;
                
                position: relative;
                overflow: hidden;
            }

            .gallery-item::before {
                content: "";
                position: absolute;
                inset: 0;
                background: linear-gradient(
                    to bottom,
                    transparent 60%,
                    var(item)
                );
                mix-blend-mode: multiply;
            }

            .item-content {
                position: absolute;
                bottom: 30px;
                left: 30px;
                z-index: 1;
            }

            .item-number {
                font-size: 14px;
                color: var(--item-color);
                font-family: "Geist Mono", monospace;
                display: block;
                margin-bottom: 8px;
            }

            .gallery-item h2 {
                font-size: 28px;
                font-weight: 600;
                color: var(--white);
                margin: 0;
            }

            

            @media (max-width: 600px) {
                .sticky-wrapper {
                    width: 280px;
                }

                .gallery {
                    gap: 15px;
                }

                .gallery-item {
                    width: 280px;
                    height: 350px;
                }
            }

            @media (prefers-reduced-motion: reduce) {
                .gallery {
                    transform: none !important;
                }
                .scroll-container {
                    height: auto;
                }
                .sticky-wrapper {
                    position: relative;
                    height: auto;
                    width: 100%;
                    overflow-x: auto;
                    padding: 50px 0;
                }
            }
        `}</style>
  );
}

/**
 * ==============   Data   ================
 */

const items = [
  { id: 1, component: UserCard },
  { id: 2, component: ProjectCard },
  { id: 3, component: AnalyticsCard },
  { id: 4, component: Suno },
  { id: 5, component: FeatureCard },
];

const ITEM_WIDTH = 300;
const GAP = 20;

export default HomePageCard;
