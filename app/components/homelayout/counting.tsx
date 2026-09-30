import React from "react";
import Image from "next/image";
import { data } from "@/app/data";
import type { CountingData } from "@/app/data";
import { BsTrophy, BsClipboardCheck, BsPeople, BsClipboardData } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BsTrophy,
  BsClipboardCheck,
  BsPeople,
  BsClipboardData
};

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}

export default function Counting() {
  const countingData = (data as any).counting as CountingData;

  return (
    <section className="relative w-full font-sans mt-8 sm:mt-10 md:mt-12 lg:mt-14 pb-10 xl:pb-14 z-10">
      
      {/* Dark background starts exactly at 1/3 of image height */}
      <div className="absolute left-0 w-full bg-[#113a45] -z-10
                      top-[80px] sm:top-[120px] lg:top-[150px] xl:top-[180px]
                      bottom-0"></div>

      <div className="max-w-[1360px] mx-auto px-6 xl:px-12 relative">
        
        {/* Top Image / Video Block */}
        <div className="relative w-full h-[240px] sm:h-[360px] lg:h-[450px] xl:h-[540px] mb-10 xl:mb-14 rounded-[20px] overflow-hidden shadow-2xl group cursor-pointer">
          <Image src={countingData.videoImage} alt="Video Thumbnail" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
          
          {/* Play Button & Ripples */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            {/* Ripples */}
            <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white animate-[ping_2s_ease-out_infinite]"></div>
            <div className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-white animate-[ping_2.5s_ease-out_infinite]"></div>
            <div className="absolute w-36 h-36 sm:w-40 sm:h-40 rounded-full border border-white animate-[ping_3s_ease-out_infinite]"></div>
            
            {/* Button */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center text-[#0b2d4a] z-10 shadow-[0_0_20px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-300">
              <FaPlay className="text-[18px] sm:text-[20px] ml-1" />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/10">
          {countingData.stats.map((stat, idx) => (
            <div key={stat.id} className={`flex items-center justify-center lg:justify-start gap-4 xl:gap-5 ${idx > 0 ? 'lg:pl-8 xl:pl-10' : 'lg:pl-4 xl:pl-6'}`}>
              {/* Icon */}
              <div className="shrink-0 flex items-center justify-center">
                <DynamicIcon name={stat.icon} className="text-[44px] xl:text-[52px] text-white opacity-95" />
              </div>
              
              {/* Text */}
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-[32px] xl:text-[38px] leading-[1.1] mb-1 tracking-wide">{stat.number}</span>
                <span className="text-white/80 text-[13px] xl:text-[14px] font-medium tracking-wide">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
