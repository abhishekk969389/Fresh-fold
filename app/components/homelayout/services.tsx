"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { data } from "@/app/data";
import type { ServicesData } from "@/app/data";
import { FaLeaf, FaShieldAlt, FaMagic, FaClock } from "react-icons/fa";
import { MdLocalLaundryService, MdIron } from "react-icons/md";
import {
  GiHanger,
  GiRunningShoe,
  GiWindow,
  GiRedCarpet,
  GiBriefcase,
  GiSparkles,
  GiAlarmClock,
  GiPoloShirt,
} from "react-icons/gi";
import { LuArrowRight } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MdLocalLaundryService,
  GiHanger,
  MdIron,
  GiRunningShoe,
  GiWindow,
  GiRedCarpet,
  GiBriefcase,
  GiSparkles,
  GiAlarmClock,
  FaLeaf,
  FaShieldAlt,
  FaMagic,
  FaClock,
  GiPoloShirt,
};

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}

export default function Services() {
  const servicesData = (data as any).services as ServicesData;
  const [activeTabId, setActiveTabId] = useState(servicesData.tabs[0].id);

  const activeService = servicesData.activeService;

  return (
    <section className="w-full relative font-sans mt-6 sm:mt-10 md:mt-12 lg:mt-14 bg-[#f8f9fa] overflow-hidden">
      {/* Top Dark Teal Background */}
      <div className="relative bg-[#073c47] text-white pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-28 sm:pb-36 lg:pb-40 w-full z-0">
        {/* Background Decorative Curve */}
        <div className="absolute -bottom-[30px] sm:-bottom-[50px] left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
          <svg
            className="relative block w-[200%] sm:w-[150%] md:w-full h-[60px] sm:h-[100px] md:h-[150px] -ml-[50%] sm:-ml-[25%] md:ml-0"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C400,150 800,150 1200,0 L1200,120 L0,120 Z"
              fill="#f8f9fa"
            ></path>
          </svg>
        </div>

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 xl:px-12 relative z-10 flex flex-col items-center text-center">
          {/* Title */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
            <span className="w-6 sm:w-8 h-px bg-[#00bcd4]"></span>
            <span className="text-[#00bcd4] font-bold tracking-widest text-[12px] sm:text-[14px] uppercase">
              {servicesData.tag}
            </span>
            <span className="w-6 sm:w-8 h-px bg-[#00bcd4]"></span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[26px] sm:text-[36px] md:text-[40px] xl:text-[44px] font-extrabold leading-tight sm:leading-snug lg:leading-[0.9] mb-3 sm:mb-4 tracking-tight px-2"
          >
            <span className="text-white">{servicesData.titleLine1} </span>
            <span className="text-[#00bcd4]">{servicesData.titleLine2}</span>
          </motion.h2>

          <p className="text-white/80 text-[13px] sm:text-[15px] md:text-[16px] max-w-xl md:max-w-2xl mx-auto mb-8 sm:mb-10 px-2 leading-relaxed">
            {servicesData.subtitle}
          </p>

          {/* Tabs */}
          <div className="flex w-full overflow-x-auto pb-4 sm:pb-6 hide-scrollbar snap-x snap-mandatory gap-2.5 sm:gap-4 justify-start xl:justify-center px-2 sm:px-4 xl:px-0">
            {servicesData.tabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative flex flex-col items-center justify-center min-w-[95px] sm:min-w-[120px] md:min-w-[130px] h-[85px] sm:h-[105px] md:h-[110px] rounded-xl transition-all snap-center shrink-0 border-2 ${
                    isActive
                      ? "bg-[#0092a3] text-white border-[#00bcd4] shadow-[0_10px_20px_rgba(0,146,163,0.3)]"
                      : "bg-white text-[#0b434f] border-transparent hover:border-[#00bcd4]/30"
                  }`}
                >
                  <DynamicIcon
                    name={tab.icon}
                    className="text-[26px] sm:text-[32px] md:text-[36px] mb-1.5 sm:mb-2"
                  />
                  <span className="text-[11px] sm:text-[12px] md:text-[13px] font-bold">
                    {tab.label}
                  </span>
                  {isActive && (
                    <div className="absolute -bottom-[9px] sm:-bottom-[10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] sm:border-l-[10px] border-l-transparent border-t-[8px] sm:border-t-[10px] border-t-[#00bcd4] border-r-[8px] sm:border-r-[10px] border-r-transparent"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Card Overlapping */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 xl:px-12 relative z-20 -mt-[90px] sm:-mt-[120px] lg:-mt-[160px]">
        <motion.div
          key={activeTabId}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[#f8f9fa] rounded-[20px] sm:rounded-[24px] lg:rounded-[30px] shadow-[0_-15px_40px_-10px_rgba(0,0,0,0.12)] p-5 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 xl:gap-20"
        >
          {/* Left Content */}
          <div className="w-full lg:w-[45%] xl:w-1/2 flex flex-col pt-1 sm:pt-2 lg:pt-4 text-center lg:text-left items-center lg:items-start">
            <div className="flex items-center gap-3 sm:gap-4 mb-2">
              <span className="w-6 sm:w-8 h-[2px] bg-[#00bcd4]"></span>
              <span className="text-[#00bcd4] font-bold tracking-widest text-[12px] sm:text-[14px] uppercase">
                {activeService.tag}
              </span>
            </div>

            <h3 className="text-[24px] sm:text-[32px] md:text-[38px] xl:text-[44px] font-extrabold leading-tight sm:leading-snug lg:leading-[0.9] mb-3 sm:mb-5 tracking-tight">
              <span className="text-[#0b2d4a] block">{activeService.titleLine1}</span>
              <span className="text-[#00bcd4] block">{activeService.titleLine2}</span>
            </h3>

            <div className="w-12 sm:w-16 h-[3px] bg-gold mb-4 sm:mb-6"></div>

            <p className="text-gray-600 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-6 sm:mb-8 max-w-xl lg:max-w-none">
              {activeService.description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 w-full">
              {activeService.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center gap-2 sm:gap-3 p-2 rounded-xl bg-white/60 sm:bg-transparent shadow-sm sm:shadow-none"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#e6f7f9] text-[#00bcd4] flex items-center justify-center text-[18px] sm:text-[20px] shadow-sm shrink-0">
                    <DynamicIcon name={feature.icon} />
                  </div>
                  <span className="text-[#0b2d4a] font-bold text-[11px] sm:text-[12px] md:text-[13px] leading-tight">
                    {feature.labelLine1}
                    <br />
                    {feature.labelLine2}
                  </span>
                </div>
              ))}
            </div>

            <div className="w-full sm:w-auto flex justify-center lg:justify-start">
              <Link
                href={`/servicedetails/${activeTabId}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold text-[#0b2d4a] font-bold text-[14px] sm:text-[15px] px-7 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-[0_4px_14px_rgba(255,190,48,0.4)] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(255,190,48,0.5)] transition-all"
              >
                View Details
                <LuArrowRight className="text-[16px] sm:text-[18px]" />
              </Link>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="w-full lg:w-[55%] xl:w-1/2 relative min-h-[280px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-0 aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto mt-2 sm:mt-4 lg:mt-0">
            {/* Background Decor Triangles */}
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-[60px] sm:w-[90px] md:w-[100px] h-[60px] sm:h-[90px] md:h-[100px] bg-[#0b434f] rounded-[16px] sm:rounded-[24px] -z-10"></div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-[60px] sm:w-[90px] md:w-[100px] h-[60px] sm:h-[90px] md:h-[100px] bg-[#0b434f] rounded-[16px] sm:rounded-[24px] -z-10"></div>

            <div className="relative w-full h-full rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden shadow-lg border-2 sm:border-4 border-white">
              <Image
                src={activeService.image.src}
                alt={activeService.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                priority
              />

              {/* Cursive Sticker Text */}
              <div
                className="absolute top-[8%] sm:top-[10%] left-[6%] sm:left-[8%] transform -rotate-[12deg] flex flex-col items-start font-medium text-[#0b434f] leading-[1] drop-shadow-sm select-none"
                style={{ fontFamily: "'Brush Script MT', 'Comic Sans MS', cursive" }}
              >
                <span className="text-[20px] sm:text-[28px] md:text-[36px] ml-0">Clean</span>
                <span className="text-[20px] sm:text-[28px] md:text-[36px] ml-4 sm:ml-6">Fresh</span>
                <div className="relative ml-3 sm:ml-4">
                  <span className="text-[20px] sm:text-[28px] md:text-[36px] relative z-10">
                    Confident
                  </span>
                  <svg
                    className="absolute -bottom-1 left-0 w-[110%] h-2 sm:h-3 text-[#0b434f]"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 8 Q 50 2 100 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Quality Badge Overlay */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-3 sm:bottom-6 md:bottom-8 right-3 sm:right-6 md:right-8 bg-white/95 backdrop-blur-sm sm:bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 shadow-lg sm:shadow-xl flex items-center gap-2 sm:gap-3 md:gap-4 z-20 border border-gray-100 pr-3 sm:pr-6 md:pr-8"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#0092a3] text-white rounded-md sm:rounded-lg flex items-center justify-center text-[16px] sm:text-[20px] md:text-[24px] shrink-0">
                <DynamicIcon name={activeService.qualityBadge.icon} />
              </div>
              <div className="flex flex-col">
                <span className="text-[#0b2d4a] font-bold text-[10px] sm:text-[11px] md:text-[13px] leading-tight whitespace-nowrap">
                  {activeService.qualityBadge.textLine1}
                </span>
                <span className="text-[#0b2d4a] font-bold text-[10px] sm:text-[11px] md:text-[13px] leading-tight whitespace-nowrap">
                  {activeService.qualityBadge.textLine2}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}