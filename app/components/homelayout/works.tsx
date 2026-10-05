"use client";

import React from "react";
import { data } from "@/app/data";
import type { WorksData } from "@/app/data";
import { FaCalendarCheck, FaShoppingBasket, FaTruck, FaRegHeart } from "react-icons/fa";
import { MdLocalLaundryService } from "react-icons/md";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaCalendarCheck,
  FaShoppingBasket,
  MdLocalLaundryService,
  FaTruck
};

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}

export default function Works() {
  const worksData = (data as any).works as WorksData;

  return (
    <section className="relative w-full mt-2 sm:mt-4 md:mt-6 lg:mt-6 overflow-hidden bg-[#f4fcfc]">

      <div className="max-w-[1360px] mx-auto px-6 xl:px-12 relative z-10 text-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-2">
          <span className="w-10 h-[1.5px] bg-[#00bcd4]"></span>
          <span className="text-[#00bcd4] font-bold tracking-widest text-[14px] uppercase">{worksData.tag}</span>
          <span className="w-10 h-[1.5px] bg-[#00bcd4]"></span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[36px] sm:text-[44px] xl:text-[48px] font-extrabold leading-[0.9] mb-3 tracking-tight">
            <span className="text-[#0b2d4a]">{worksData.titleLine1} </span>
            <span className="text-[#0092a3]">{worksData.titleLine2}</span>
          </h2>

          <div className="w-16 h-[3px] bg-[#fbbf24] mx-auto mb-2"></div>

          <p className="text-[#5a7184] text-[16px] sm:text-[17px] max-w-xl mx-auto mb-16 font-medium">
            {worksData.subtitle}
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4 mt-16 lg:px-4">

          {/* Connecting Dotted Line (Desktop only) */}
          <div className="hidden md:block absolute top-[10px] left-[11.5%] w-[77%] h-[120px] z-0 pointer-events-none">
            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M 0,25 C 16.6,25 16.6,85 33.3,85 C 50,85 50,25 66.6,25 C 83.3,25 83.3,70 100,70" fill="none" stroke="#0092a3" strokeWidth="0.8" strokeDasharray="3,3" />
            </svg>
          </div>

          {worksData.steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center w-full md:w-[23%]"
            >

              {/* Icon Circle */}
              <div className="relative w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] rounded-full bg-white border-2 border-dashed border-[#0092a3] flex items-center justify-center mb-6 shadow-[0_8px_20px_rgba(0,146,163,0.1)] mx-auto group hover:-translate-y-2 transition-transform duration-300">
                <DynamicIcon name={step.icon} className="text-[54px] sm:text-[68px] text-[#0b2d4a] group-hover:text-[#0092a3] transition-colors" />

                {/* Number Badge */}
                <div className="absolute top-0 -left-2 sm:-top-1 sm:-left-3 w-12 h-12 sm:w-14 sm:h-14 bg-[#0092a3] text-white rounded-full flex items-center justify-center font-extrabold text-[20px] sm:text-[24px] border-[4px] border-[#f4fcfc] shadow-sm">
                  {step.id}
                </div>
              </div>

              {/* Text Content */}
              <h4 className="text-[20px] sm:text-[22px] font-extrabold text-[#0b2d4a] mb-3">
                {step.title}
              </h4>
              <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#5a7184] max-w-[280px] mx-auto font-medium">
                {step.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
