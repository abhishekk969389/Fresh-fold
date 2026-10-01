"use client";

import React from "react";
import Image from "next/image";
import { data } from "@/app/data";
import type { MissionVisionData } from "@/app/data";
import { 
  IoDiamondOutline 
} from "react-icons/io5";
import { 
  LuLeaf 
} from "react-icons/lu";
import { 
  FaUsers, 
  FaShieldAlt, 
  FaGlobeAmericas, 
  FaRegHeart 
} from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  IoDiamondOutline,
  LuLeaf,
  FaUsers,
  FaShieldAlt,
  FaGlobeAmericas,
  FaRegHeart
};

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}

export default function MissionSec() {
  const mvData = (data as any).missionVision as MissionVisionData;

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 bg-[#f4f9fb] overflow-hidden">
      
      {/* Background Dots Pattern */}
      <div className="absolute top-20 right-10 grid grid-cols-4 gap-3 opacity-20 pointer-events-none">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={`dot1-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#073c47]"></div>
        ))}
      </div>
      <div className="absolute bottom-40 left-10 grid grid-cols-4 gap-3 opacity-20 pointer-events-none">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={`dot2-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#073c47]"></div>
        ))}
      </div>
      
      {/* Decorative large faint leaf (optional) */}
      <div className="absolute top-[60%] right-[-5%] text-[#00bcd4] opacity-5 pointer-events-none">
        <LuLeaf className="w-96 h-96" />
      </div>

      <div className="max-w-[1360px] mx-auto px-6 xl:px-12 flex flex-col gap-12 lg:gap-16 relative z-10">
        
        {/* ─── MISSION ROW ─── */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Text */}
          <div className="flex-1 w-full flex flex-col">
            <div className="flex items-center gap-4 ">
              <span className="w-8 h-[2px] bg-[#fbbf24]"></span>
              <span className="text-[#073c47] font-bold tracking-widest text-[18px] uppercase">{mvData.mission.tag}</span>
            </div>
            
            <h2 className="text-[42px] sm:text-[52px] lg:text-[64px] font-extrabold text-[#073c47] leading-[0.9] mb-2">
              {mvData.mission.title}
            </h2>
            
            <h3 className="text-[#567a84] font-bold tracking-widest text-[12px] sm:text-[14px] uppercase mb-5">
              {mvData.mission.subtitle}
            </h3>
            
            <p className="text-[#4a6b73] text-[15px] sm:text-[16px] leading-relaxed mb-8 max-w-[550px]">
              {mvData.mission.description}
            </p>
            
            {/* Features Row */}
            <div className="flex items-start gap-4 sm:gap-8">
              {mvData.mission.features.map(f => (
                <div key={f.id} className="flex flex-col items-center text-center gap-3 w-20">
                  <div className="w-16 h-16 rounded-full bg-[#e6f4f8] flex items-center justify-center text-[#073c47] shadow-sm transition-transform hover:scale-110">
                    <DynamicIcon name={f.icon} className="text-[26px]" />
                  </div>
                  <span className="text-[#073c47] text-[12px] sm:text-[13px] font-semibold leading-tight whitespace-pre-line">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex-1 w-full relative">
            <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px] rounded-[32px] overflow-hidden shadow-2xl">
              <Image 
                src={mvData.mission.image.src} 
                alt={mvData.mission.image.alt}
                fill
                className="object-cover"
              />
              
              {/* Sticker Overlay Removed */}

              {/* Bottom Badge */}
              {mvData.mission.image.badge && (
                <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-[#007b8f]/95 backdrop-blur-sm rounded-[16px] px-5 py-4 flex items-center gap-4 shadow-xl">
                  {mvData.mission.image.badge.icon && (
                    <DynamicIcon name={mvData.mission.image.badge.icon} className="text-white text-[32px]" />
                  )}
                  <div className="w-px h-10 bg-white/30"></div>
                  <div className="flex flex-col">
                    <span className="text-white text-[12px] font-bold tracking-wider">{mvData.mission.image.badge.line1}</span>
                    <span className="text-white text-[12px] font-bold tracking-wider">{mvData.mission.image.badge.line2}</span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Soft blob behind image */}
            <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#d9f1f6] rounded-full blur-3xl -z-10"></div>
          </div>
          
        </div>

        {/* ─── VISION ROW ─── */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 border-t border-[#073c47]/5">
          
          {/* Left Image */}
          <div className="flex-1 w-full relative">
            <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px] rounded-[32px] overflow-hidden shadow-2xl">
              <Image 
                src={mvData.vision.image.src} 
                alt={mvData.vision.image.alt}
                fill
                className="object-cover"
              />
              
              {/* Paper Tag Overlay Removed */}

              {/* Bottom Badge */}
              {mvData.vision.image.badge && (
                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-[#007b8f]/95 backdrop-blur-sm rounded-[16px] px-5 py-4 flex items-center gap-4 shadow-xl">
                  {mvData.vision.image.badge.icon && (
                    <DynamicIcon name={mvData.vision.image.badge.icon} className="text-white text-[32px]" />
                  )}
                  <div className="w-px h-10 bg-white/30"></div>
                  <div className="flex flex-col">
                    <span className="text-white text-[12px] font-bold tracking-wider">{mvData.vision.image.badge.line1}</span>
                    <span className="text-white text-[12px] font-bold tracking-wider">{mvData.vision.image.badge.line2}</span>
                    <div className="w-12 h-1 bg-[#fbbf24] mt-1 rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Soft blob behind image */}
            <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#d9f1f6] rounded-full blur-3xl -z-10"></div>
          </div>
          
          {/* Right Text */}
          <div className="flex-1 w-full flex flex-col">
            <div className="flex items-center gap-4 ">
              <span className="w-8 h-[2px] bg-[#fbbf24]"></span>
              <span className="text-[#073c47] font-bold tracking-widest text-[18px] uppercase">{mvData.vision.tag}</span>
            </div>
            
            <h2 className="text-[42px] sm:text-[52px] lg:text-[64px] font-extrabold text-[#073c47] leading-[0.9] mb-2">
              {mvData.vision.title}
            </h2>
            
            <h3 className="text-[#567a84] font-bold tracking-widest text-[12px] sm:text-[14px] uppercase mb-5">
              {mvData.vision.subtitle}
            </h3>
            
            <p className="text-[#4a6b73] text-[15px] sm:text-[16px] leading-relaxed mb-8 max-w-[550px]">
              {mvData.vision.description}
            </p>
            
            {/* Features Row */}
            <div className="flex items-start gap-4 sm:gap-8">
              {mvData.vision.features.map(f => (
                <div key={f.id} className="flex flex-col items-center text-center gap-3 w-20">
                  <div className="w-16 h-16 rounded-full bg-[#e6f4f8] flex items-center justify-center text-[#073c47] shadow-sm transition-transform hover:scale-110">
                    <DynamicIcon name={f.icon} className="text-[26px]" />
                  </div>
                  <span className="text-[#073c47] text-[12px] sm:text-[13px] font-semibold leading-tight whitespace-pre-line">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
