// components/ui/blockchain-card.tsx
'use client'

import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { Shield, Link, Eye, Lock, FileCode, Zap } from "lucide-react"

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Live Price Analysis",
    description: "Monitor real-time crop prices and market trends to make smarter selling decision.",
    color: "from-yellow-400 to-orange-500",
    glow: "shadow-yellow-500/20",
    border: "border-yellow-500/30",
    badge: "CORE",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Direct Crop Trading",
    description: "Buy and sell agriculture products through a transport digital marketpalce.",
    color: "from-blue-400 to-cyan-500",
    glow: "shadow-blue-500/20",
    border: "border-blue-500/30",
    badge: "ENCRYPTED",
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Equipment Rental",
    description: "Rent tractors, tools and farming equipment from nearby farmers when needed .",
    color: "from-green-400 to-emerald-500",
    glow: "shadow-green-500/20",
    border: "border-green-500/30",
    badge: "PUBLIC",
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Middleman-free Selling",
    description: "Connect directly with buyers and markets to recive fair prices for you produce.",
    color: "from-purple-400 to-violet-500",
    glow: "shadow-purple-500/20",
    border: "border-purple-500/30",
    badge: "PERMANENT",
  },
  {
    icon: <FileCode className="w-8 h-8" />,
    title: "Secure Transactions ",
    description: "Trade with confidence through verified and transparent transactions.",
    color: "from-pink-400 to-rose-500",
    glow: "shadow-pink-500/20",
    border: "border-pink-500/30",
    badge: "AUTOMATED",
  },
  {
    icon: <FileCode className="w-8 h-8" />,
    title: "Farmer-to-Farmer Network",
    description: "Collaborate , share resources and grow together with a connected farming community .",
    color: "from-pink-400 to-rose-500",
    glow: "shadow-pink-500/20",
    border: "border-pink-500/30",
    badge: "AUTOMATED",
  },
  
]

// Animated hash string for blockchain feel
function HashDisplay() {
  const [hash, setHash] = useState("0x1a2b3c4d5e6f...")

  useEffect(() => {
    const chars = "0123456789abcdef"
    const iv = setInterval(() => {
      const newHash =
        "0x" +
        Array.from({ length: 12 }, () =>
          chars[Math.floor(Math.random() * chars.length)]
        ).join("") + "..."
      setHash(newHash)
    }, 1500)
    return () => clearInterval(iv)
  }, [])

  return (
    <span className="font-mono text-xs text-zinc-500 tracking-wider">
      {hash}
    </span>
  )
}


export function BlockchainCard() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)


 

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



  const handleSelect = (index: number) => {
    if (index === activeIndex) return
    setIsAnimating(true)
    setTimeout(() => {
      setActiveIndex(index)
      setIsAnimating(false)
    }, 200)
  }

  const active = features[activeIndex]

  return (
    <section className="h-1/3 flex flex-col items-center justify-center px-10 py-20 pt-2
 bg-white/5 backdrop-blur-xl
 border border-white/10 rounded-2xl
 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]">

      {/* Section header */}
      <div className="text-center mt-25">
       
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

        {/* LEFT — Main Feature Card */}
        <Card
          variant="dots"
          className={`
            bg-zinc-900 border-zinc-700
            min-h-[420px] w-full
            transition-all duration-500
            shadow-2xl ${active.glow}
          `}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between mb-6 px-1">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            <HashDisplay />
          </div>

          {/* Badge */}
          <div className="mb-5">
            <span
              className={`
                text-[10px] font-bold tracking-[3px] font-mono
                px-3 py-1 rounded-full border
                bg-gradient-to-r ${active.color} bg-clip-text text-transparent
                ${active.border}
              `}
            >
              {active.badge}
            </span>
          </div>

          {/* Icon */}
          <div
            className={`
              w-14 h-14 rounded-xl mb-5
              bg-gradient-to-br ${active.color}
              flex items-center justify-center
              text-white shadow-lg
              transition-all duration-300
            `}
          >
            {active.icon}
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-200 ${
              isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            <h3
              className={`
                text-3xl md:text-4xl font-bold mb-4
                bg-gradient-to-r ${active.color} bg-clip-text text-transparent
              `}
            >
              {active.title}
            </h3>
            <p className="text-zinc-400 text-base leading-7">
              {active.description}
            </p>
          </div>

          {/* Bottom block info */}
          <div className="mt-8 pt-5 border-t border-zinc-800 flex items-center justify-between">
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
              Block #{Math.floor(Math.random() * 9999999 + 1000000)}
            </span>
            <div className="flex gap-1">
              {features.map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? `w-6 bg-gradient-to-r ${active.color}`
                      : "w-1.5 bg-zinc-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </Card>

        {/* RIGHT — Feature selector list */}
        <div className="flex flex-col gap-3">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={`
                w-full text-left px-5 py-4 rounded-xl border
                transition-all duration-300 group
                ${
                  activeIndex === index
                    ? `bg-zinc-800/80 border-zinc-600 shadow-lg ${feature.glow}`
                    : "bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800/50 hover:border-zinc-700"
                }
              `}
            >
              <div className="flex items-center gap-4">
                {/* Mini icon */}
                <div
                  className={`
                    w-9 h-9 rounded-lg flex-shrink-0
                    flex items-center justify-center
                    transition-all duration-300
                    ${
                      activeIndex === index
                        ? `bg-gradient-to-br ${feature.color} text-white`
                        : "bg-zinc-800 text-zinc-500 group-hover:text-zinc-300"
                    }
                  `}
                >
                  {/* Clone icon at smaller size */}
                  <span className="w-4 h-4 scale-75">{feature.icon}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm font-semibold transition-colors duration-200 ${
                        activeIndex === index
                          ? "text-white"
                          : "text-zinc-400 group-hover:text-zinc-200"
                      }`}
                    >
                      {features[activeIndex].title}
                    </span>
                    <span
                      className={`
                        text-[9px] font-mono tracking-widest
                        transition-opacity duration-200
                        ${activeIndex === index ? "opacity-100" : "opacity-0"}
                        bg-gradient-to-r ${feature.color} bg-clip-text text-transparent
                      `}
                    >
                      ACTIVE
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 mt-0.5 truncate">
                    {features[activeIndex].description.slice(0, 55)}...
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom chain line */}
      <div className="mt-16 flex items-center gap-3 opacity-30">
        <div className="h-px w-20 bg-gradient-to-r from-transparent to-zinc-500" />
        <span className="text-[10px] font-mono text-zinc-500 tracking-[3px] uppercase">
          Powered by Blockchain
        </span>
        <div className="h-px w-20 bg-gradient-to-l from-transparent to-zinc-500" />
      </div>
    </section>
  )
}