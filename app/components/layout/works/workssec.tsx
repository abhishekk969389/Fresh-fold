"use client";

import React from "react";
import Image from "next/image";
import { data } from "@/app/data";
import { motion } from "framer-motion";
import type { WorksData } from "@/app/data";
import { FaCheckCircle, FaCalendarAlt, FaShoppingBasket, FaShieldAlt, FaTruck } from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaCalendarAlt,
  FaShoppingBasket,
  FaShieldAlt,
  FaTruck,
};

export default function WorksSec() {
  const worksData = (data as any).works as WorksData;

  return (
    <section className="w-full   mt-8 sm:mt-10 md:mt-12 lg:mt-14 relative">
      {/* Background Dots Pattern (Decorative) */}
      <div className="absolute top-20  left-10 text-[#e2e8f0] opacity-50 hidden lg:block">
        <svg width="100" height="100" fill="none" viewBox="0 0 100 100">
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="currentColor" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto px-6 xl:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[700px] mx-auto mb-8"
        >
            <div className="flex items-center justify-center gap-4 mb-2">
                    <span className="w-10 h-[1.5px] bg-[#00bcd4]"></span>
                    <span className="text-[#00bcd4] font-bold tracking-widest text-[14px] uppercase">{worksData.tag}</span>
                    <span className="w-10 h-[1.5px] bg-[#00bcd4]"></span>
                </div>

                <h2 className="text-[36px] sm:text-[44px] xl:text-[48px] font-extrabold leading-[0.9] mb-1 tracking-tight">
                    <span className="text-[#0b2d4a]">{worksData.titleLine1} </span>
                    <span className="text-[#0092a3]">{worksData.titleLine2}</span>
                    <div className="w-14 h-1 bg-yellow-400 mx-auto rounded-full mt-2"></div>
                </h2>


                 <p className="text-[#5a7184] text-[15px] sm:text-[16px] max-w-2xl mx-auto mb-6">
                    {worksData.leftSticker}
                </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col gap-16 relative">
          {worksData.steps.map((step, index) => {
            const isEven = index % 2 !== 0;
            const BadgeIcon = step.badge?.icon ? iconMap[step.badge.icon] : null;

            return (
              <motion.div 
                key={step.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-20`}
              >
                
                {/* Text Content */}
                <div className="w-full lg:w-[42%] flex flex-col items-start text-left relative">
                  
                  {/* Step Number & Icon Group */}
                  <div className="flex items-center gap-6 relative mb-6">
                    {/* Step Number */}
                    <div className="w-14 h-14 rounded-full bg-[#00bcd4] text-white flex items-center justify-center font-bold text-[22px] shadow-lg shrink-0 relative z-10">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    {/* Icon Bubble with Custom SVG Dotted Border */}
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center bg-white shrink-0 relative z-0 p-2">
                      {/* SVG Dashed Border */}
                      <svg className="absolute inset-0 w-full h-full rotate-[-90deg]" viewBox="0 0 128 128">
                        <circle cx="64" cy="64" r="62" fill="none" stroke="#00bcd4" strokeWidth="3" strokeDasharray="10 10" />
                      </svg>
                      {/* Inner Bubble */}
                      <div className="w-full h-full bg-[#f0f9fa] rounded-full flex items-center justify-center text-[#0b2d4a] relative z-10">
                        {BadgeIcon && <BadgeIcon className="text-[64px]" />}
                      </div>
                      
                      {/* Wavy Connecting Dotted Line (Desktop only) */}
                      <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 ${isEven ? 'right-[90%] mr-4' : 'left-[100%] ml-4'} w-[250px] lg:w-[350px] xl:w-[450px] 2xl:w-[500px] pointer-events-none z-[-1]`}>
                        <svg viewBox="0 0 200 50" fill="none" stroke="#00bcd4" strokeWidth="1.5" strokeDasharray="4 4" className="w-full h-full overflow-visible">
                          <path 
                            d={isEven ? "M 200,25 C 170,110 50,0 0,25" : "M 0,25 C 50,0 150,50 200,25"} 
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-[28px] md:text-[32px] font-bold text-[#0b2d4a] mt-4 mb-2">
                    {step.title}
                  </h3>
                  <h4 className="text-[18px] md:text-[20px] font-semibold text-[#00bcd4] mb-4">
                    {step.description}
                  </h4>
                  <p className="text-[#5a7184] text-[15px] md:text-[16px] leading-relaxed mb-8">
                    {step.paragraph}
                  </p>

                  {/* Bullets */}
                  {step.bullets && step.bullets.length > 0 && (
                    <ul className="flex flex-col gap-3 w-full">
                      {step.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-3 text-[#0b2d4a] font-medium text-[15px]">
                          <FaCheckCircle className="text-[#00bcd4] text-[18px] shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-[58%] relative flex justify-center">
                  <div className="relative w-full max-w-[650px] aspect-[4/3] rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl">
                    {step.image && (
                      <Image 
                        src={step.image.src} 
                        alt={step.image.alt} 
                        fill 
                        className="object-cover"
                      />
                    )}
                    
                    {/* Floating Badge (Inside the Image) */}
                    {step.badge && (
                      <div className={`absolute ${isEven ? 'left-4 md:left-8 bottom-6 md:bottom-10' : 'right-4 md:right-8 top-1/2 -translate-y-1/2'} bg-white rounded-2xl p-3 md:p-4 shadow-[0_15px_35px_rgba(0,0,0,0.15)] flex items-center gap-3 md:gap-4 z-20 border border-gray-100 min-w-[180px] md:min-w-[200px]`}>
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#e6f8fa] text-[#00bcd4] flex items-center justify-center shrink-0">
                          {BadgeIcon && <BadgeIcon className="text-[20px] md:text-[22px]" />}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[#0b2d4a] font-bold text-[13px] md:text-[14px] leading-tight">
                            {step.badge.textLine1}
                          </span>
                          {step.badge.textLine2 && (
                            <span className="text-[#0b2d4a] font-bold text-[13px] md:text-[14px] leading-tight">
                              {step.badge.textLine2}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
