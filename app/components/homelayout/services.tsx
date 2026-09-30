"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { data } from "@/app/data";
import type { ServicesData } from "@/app/data";
import { FaLeaf, FaShieldAlt, FaMagic, FaClock } from "react-icons/fa";
import { MdLocalLaundryService, MdIron } from "react-icons/md";
import { GiHanger, GiRunningShoe, GiWindow, GiRedCarpet, GiBriefcase, GiSparkles, GiAlarmClock, GiPoloShirt } from "react-icons/gi";
import { LuArrowRight } from "react-icons/lu";

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
  GiPoloShirt
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
    <section className="w-full relative font-sans mt-8 sm:mt-10 md:mt-12 lg:mt-14 bg-[#f8f9fa]">
      {/* Top Dark Teal Background */}
      <div className="relative bg-[#073c47] text-white pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-40 w-full z-0">
        
        {/* Background Decorative Curve */}
        <div className="absolute -bottom-[50px] left-0 w-full overflow-hidden leading-none z-0">
          <svg className="relative block w-[200%] md:w-full h-[100px] md:h-[150px] -ml-[50%] md:ml-0" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C400,150 800,150 1200,0 L1200,120 L0,120 Z" fill="#f8f9fa"></path>
          </svg>
        </div>

        <div className="max-w-[1360px] mx-auto px-6 xl:px-12 relative z-10 flex flex-col items-center text-center">
          {/* Title */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="w-8 h-px bg-[#00bcd4]"></span>
            <span className="text-[#00bcd4] font-bold tracking-widest text-[14px] uppercase">{servicesData.tag}</span>
            <span className="w-8 h-px bg-[#00bcd4]"></span>
          </div>
          <h2 className="text-[32px] sm:text-[40px] xl:text-[44px] font-extrabold leading-[0.9] mb-2 tracking-tight">
            <span className="text-white">{servicesData.titleLine1} </span>
            <span className="text-[#00bcd4]">{servicesData.titleLine2}</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[16px] max-w-2xl mx-auto mb-10">
            {servicesData.subtitle}
          </p>

          {/* Tabs */}
          <div className="flex w-full overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory gap-3 sm:gap-4 justify-start xl:justify-center px-4 xl:px-0">
            {servicesData.tabs.map(tab => {
              const isActive = tab.id === activeTabId;
              return (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative flex flex-col items-center justify-center min-w-[110px] sm:min-w-[130px] h-[100px] sm:h-[110px] rounded-xl transition-all snap-center shrink-0 border-2 ${
                    isActive 
                      ? 'bg-[#0092a3] text-white border-[#00bcd4] shadow-[0_10px_20px_rgba(0,146,163,0.3)]' 
                      : 'bg-white text-[#0b434f] border-transparent hover:border-[#00bcd4]/30'
                  }`}
                >
                  <DynamicIcon name={tab.icon} className="text-[32px] sm:text-[36px] mb-2" />
                  <span className="text-[12px] sm:text-[13px] font-bold">{tab.label}</span>
                  {isActive && (
                    <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-[#00bcd4] border-r-[10px] border-r-transparent"></div>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main White Content Card Overlapping */}
      <div className="max-w-[1360px] mx-auto px-6 xl:px-12 relative z-20 -mt-[140px] lg:-mt-[160px]">
        <div className="bg-white rounded-[24px] lg:rounded-[30px] shadow-2xl p-6 sm:p-10 lg:p-12 xl:p-16 flex flex-col lg:flex-row gap-12 xl:gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-[45%] xl:w-1/2 flex flex-col pt-2 lg:pt-4">
            <div className="flex items-center gap-4 mb-2">
              <span className="w-8 h-[2px] bg-[#00bcd4]"></span>
              <span className="text-[#00bcd4] font-bold tracking-widest text-[14px] uppercase">{activeService.tag}</span>
            </div>
            <h3 className="text-[32px] sm:text-[40px] xl:text-[44px] font-extrabold leading-[0.9] mb-5 tracking-tight">
              <span className="text-[#0b2d4a] block">{activeService.titleLine1}</span>
              <span className="text-[#00bcd4] block">{activeService.titleLine2}</span>
            </h3>
            <div className="w-16 h-[3px] bg-gold mb-6"></div>
            <p className="text-gray-600 text-[15px] sm:text-[16px] leading-relaxed mb-8">
              {activeService.description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {activeService.features.map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#e6f7f9] text-[#00bcd4] flex items-center justify-center text-[20px] shadow-sm">
                    <DynamicIcon name={feature.icon} />
                  </div>
                  <span className="text-[#0b2d4a] font-bold text-[12px] sm:text-[13px] leading-tight">
                    {feature.labelLine1}<br/>{feature.labelLine2}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <Link 
                href={activeService.ctaLink}
                className="inline-flex items-center justify-center gap-3 bg-gold text-[#0b2d4a] font-bold text-[15px] px-8 py-3.5 rounded-full shadow-[0_4px_14px_rgba(255,190,48,0.4)] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(255,190,48,0.5)] transition-all"
              >
                {activeService.ctaText}
                <LuArrowRight className="text-[18px]" />
              </Link>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="w-full lg:w-[55%] xl:w-1/2 relative min-h-[400px] lg:min-h-0 mt-6 lg:mt-0">
            {/* Background Decor Triangles */}
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-[100px] h-[100px] bg-[#0b434f] rounded-[24px] -z-10"></div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-[100px] h-[100px] bg-[#0b434f] rounded-[24px] -z-10"></div>

            <div className="relative w-full h-full rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-lg border-4 border-white">
              <Image src={activeService.image.src} alt={activeService.image.alt} fill className="object-cover" />
              
              {/* Cursive Sticker Text */}
              <div className="absolute top-[10%] left-[8%] transform -rotate-[12deg] flex flex-col items-start font-medium text-[#0b434f] leading-[1] drop-shadow-sm" style={{ fontFamily: "'Brush Script MT', 'Comic Sans MS', cursive" }}>
                 <span className="text-[28px] sm:text-[36px] ml-0">Clean</span>
                 <span className="text-[28px] sm:text-[36px] ml-6">Fresh</span>
                 <div className="relative ml-4">
                   <span className="text-[28px] sm:text-[36px] relative z-10">Confident</span>
                   <svg className="absolute -bottom-1 left-0 w-[110%] h-3 text-[#0b434f]" viewBox="0 0 100 10" preserveAspectRatio="none">
                     <path d="M0 8 Q 50 2 100 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                   </svg>
                 </div>
              </div>
            </div>

            {/* Quality Badge Overlay */}
            <div className="absolute bottom-[5%] right-[-10px] sm:right-[-20px] bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl flex items-center gap-3 sm:gap-4 z-20 border border-gray-100 pr-6 sm:pr-8">
               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0092a3] text-white rounded-lg flex items-center justify-center text-[20px] sm:text-[24px]">
                 <DynamicIcon name={activeService.qualityBadge.icon} />
               </div>
               <div className="flex flex-col">
                 <span className="text-[#0b2d4a] font-bold text-[11px] sm:text-[13px] leading-tight">{activeService.qualityBadge.textLine1}</span>
                 <span className="text-[#0b2d4a] font-bold text-[11px] sm:text-[13px] leading-tight">{activeService.qualityBadge.textLine2}</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
