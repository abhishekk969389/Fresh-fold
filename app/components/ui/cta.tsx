import React from "react";
import Link from "next/link";
import { data } from "@/app/data";
import type { CtaData } from "@/app/data";
import { BsCalendarCheck } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { MdLocalLaundryService } from "react-icons/md";
import { GiSparkles } from "react-icons/gi"; // For little sparkles

interface CtaProps {
  className?: string;
}

export default function CTA({ className }: CtaProps = {}) {
  const ctaData = (data as any).cta as CtaData;

  return (
    <section className={`w-full px-6 xl:px-12 ${className !== undefined ? className : "my-8 sm:my-10 md:my-12 lg:my-14"}`}>
      <div className="max-w-[1360px] mx-auto bg-[#025974] rounded-[24px] lg:rounded-[32px] p-8 lg:p-12 xl:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Section: Icon & Text */}
        <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center text-center md:text-left gap-6 lg:gap-8 z-10 w-full lg:w-auto">
          
          {/* Main Icon in Circle */}
          <div className="relative shrink-0 w-24 h-24 lg:w-28 lg:h-28 bg-white/10 rounded-full flex items-center justify-center">
            <MdLocalLaundryService className="text-[44px] lg:text-[52px] text-white" />
            <GiSparkles className="absolute top-4 right-4 text-[20px] text-[#fbbf24]" />
            <GiSparkles className="absolute bottom-6 right-2 text-[14px] text-[#fbbf24]" />
          </div>
          
          {/* Text Content */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] xl:text-[42px] font-extrabold text-white leading-[1.2] tracking-tight lg:whitespace-nowrap">
              {ctaData.titleStart} 
              <span className="text-[#fbbf24]">{ctaData.titleHighlight}</span> 
              {ctaData.titleEnd}
            </h2>
            <p className="text-white/80 text-[15px] lg:text-[16px] leading-relaxed max-w-[500px]">
              {ctaData.description}
            </p>
          </div>
        </div>

        {/* Right Section: Arrow & Button */}
        <div className="relative shrink-0 flex items-center justify-center w-full lg:w-auto mt-4 lg:mt-0 z-10">
          
          {/* Curved Arrow SVG (Desktop only) */}
          <div className="hidden lg:block absolute right-[100%] top-1/2 -translate-y-1/2 mr-6 pointer-events-none text-white opacity-80">
            <svg width="70" height="40" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="-rotate-12">
              <path d="M10 40 Q 50 40 90 10" />
              <path d="M75 5 L 90 10 L 85 25" />
            </svg>
          </div>

          <Link 
            href={ctaData.buttonLink}
            className="group bg-[#fbbf24] text-[#073c47] px-5 py-4 lg:py-4 rounded-full font-bold text-[16px] lg:text-[18px] flex items-center justify-center gap-3 hover:bg-white transition-colors duration-300 shadow-xl"
          >
            <BsCalendarCheck className="text-[20px] lg:text-[22px]" />
            <span>{ctaData.buttonText}</span>
            <FaArrowRight className="text-[14px] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
     
      </div>
    </section>
  );
}
