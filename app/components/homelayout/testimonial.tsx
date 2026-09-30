"use client";

import React, { useState } from "react";
import Image from "next/image";
import { data } from "@/app/data";
import type { TestimonialData } from "@/app/data";
import { FaQuoteLeft, FaStar, FaMapMarkerAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Testimonial() {
  const testimonialData = (data as any).testimonial as TestimonialData;
  const [activeIndex, setActiveIndex] = useState(1);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialData.reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialData.reviews.length - 1 : prev - 1));
  };

  return (
    <section className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 font-sans overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 xl:px-12">
        
        {/* Top Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-4 mb-2">
            <span className="w-10 h-[1.5px] bg-[#00bcd4]"></span>
            <span className="text-[#00bcd4] font-bold tracking-widest text-[13px] uppercase">{testimonialData.tag}</span>
            <span className="w-10 h-[1.5px] bg-[#00bcd4]"></span>
          </div>
          <h2 className="text-[32px] sm:text-[40px] xl:text-[46px] font-extrabold leading-[0.9] mb-2 tracking-tight">
            <span className="text-[#0b2d4a]">{testimonialData.titleLine1} </span>
            <span className="text-[#00bcd4]">{testimonialData.titleLine2}</span>
          </h2>
          <p className="text-[#5a7184] text-[15px] sm:text-[16px] max-w-2xl mx-auto">
            {testimonialData.subtitle}
          </p>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-4 xl:col-span-3 flex flex-col justify-center h-full pt-4">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#0b2d4a] font-bold tracking-widest text-[12px] uppercase">{testimonialData.leftSection.tag}</span>
              <span className="w-12 h-[2px] bg-[#fbbf24]"></span>
            </div>
            
            <h3 className="text-[38px] xl:text-[46px] font-extrabold leading-[1.1] mb-6 text-[#0b2d4a] tracking-tight">
              Your <br />
              Satisfaction <br />
              Drives Us <br />
              <span className="text-[#00bcd4]">Forward</span>
            </h3>
            
            <p className="text-[#5a7184] text-[15px] xl:text-[16px] leading-relaxed mb-8 max-w-[280px]">
              {testimonialData.leftSection.description}
            </p>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex -space-x-3">
                {testimonialData.leftSection.avatars.map((avatar, idx) => (
                  <div key={idx} className="relative w-12 h-12 xl:w-14 xl:h-14 rounded-full border-[3px] border-[#f8f9fa] shadow-sm overflow-hidden z-10">
                    <Image src={avatar} alt="Customer" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="relative w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-[#fbbf24] flex items-center justify-center text-white font-normal text-[26px] z-10 ml-2">
                +
              </div>
            </div>
            
            <p className="font-medium text-[#0b2d4a] text-[15px] xl:text-[16px]">
              <span className="text-[#00bcd4] font-bold">{testimonialData.leftSection.happyCustomersCount}</span> {testimonialData.leftSection.happyCustomersText}
            </p>
          </div>

          {/* Right Cards Grid/Carousel */}
          <div className="lg:col-span-8 xl:col-span-9 w-full relative">
            <div className="flex lg:grid lg:grid-cols-3 gap-6 xl:gap-8 w-full overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 pt-4 hide-scrollbar snap-x snap-mandatory px-4 lg:px-0 items-center">
              
              {testimonialData.reviews.map((review, idx) => {
                const isActive = idx === activeIndex;
                
                return (
                  <div 
                    key={review.id} 
                    className={`shrink-0 w-[280px] sm:w-[320px] lg:w-auto rounded-[24px] overflow-hidden snap-center transition-all duration-500 cursor-pointer flex flex-col shadow-lg ${
                      isActive 
                        ? 'lg:scale-[1.05] z-20 shadow-[0_20px_40px_rgba(7,60,71,0.25)]' 
                        : 'opacity-80 hover:opacity-100 z-10'
                    }`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    {/* Top Content Area */}
                    <div className={`p-6 xl:p-8 flex-1 ${isActive ? 'bg-[#073c47]' : 'bg-white'}`}>
                      {/* Quote & Stars */}
                      <div className="flex items-center justify-between gap-4 mb-5 xl:mb-6">
                        <div className={`w-12 h-12 xl:w-14 xl:h-14 rounded-full flex items-center justify-center text-[18px] xl:text-[20px] transition-colors ${
                          isActive ? 'bg-[#fbbf24] text-[#073c47]' : 'bg-[#073c47] text-white'
                        }`}>
                          <FaQuoteLeft />
                        </div>
                        <div className="flex gap-1 text-[#fbbf24] text-[15px] xl:text-[18px]">
                          {[...Array(review.rating)].map((_, i) => (
                            <FaStar key={i} />
                          ))}
                        </div>
                      </div>
                      
                      {/* Text */}
                      <p className={`text-[14px] xl:text-[15px] leading-relaxed min-h-[140px] xl:min-h-[160px] ${
                        isActive ? 'text-white/90' : 'text-[#5a7184]'
                      }`}>
                        "{review.text}"
                      </p>
                    </div>
                    
                    {/* Bottom User Info Area (Two-Tone Design) */}
                    <div className={`p-5 xl:p-6 flex items-center gap-4 border-t border-black/5 ${
                      isActive ? 'bg-[#052b34]' : 'bg-[#f2f8f9]'
                    }`}>
                      <div className="w-12 h-12 xl:w-14 xl:h-14 relative rounded-full overflow-hidden shrink-0">
                        <Image src={review.image} alt={review.name} fill className="object-cover" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <h4 className={`font-bold text-[15px] xl:text-[16px] mb-1 truncate ${isActive ? 'text-white' : 'text-[#0b2d4a]'}`}>
                          {review.name}
                        </h4>
                        <span className={`flex items-center gap-1 text-[12px] xl:text-[13px] truncate ${isActive ? 'text-white/70' : 'text-[#5a7184]'}`}>
                          <FaMapMarkerAlt className={`shrink-0 ${isActive ? 'text-[#00bcd4]' : 'text-[#94a3b8]'}`} /> {review.location}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
              
            </div>
          </div>
          
        </div>

        {/* Bottom Navigation Row (Arrows + Dots) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12 mt-8 lg:mt-12 items-center">
          
          {/* Arrows (Aligned with Left Column) */}
          <div className="lg:col-span-4 xl:col-span-3 flex items-center gap-5 justify-center lg:justify-start">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-white text-[#073c47] flex items-center justify-center hover:bg-[#00bcd4] hover:text-white transition-colors shadow-[0_4px_15px_rgba(0,0,0,0.05)] text-[18px]"
            >
              <FaArrowLeft />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-[#073c47] text-white flex items-center justify-center hover:bg-[#00bcd4] transition-colors shadow-[0_4px_15px_rgba(0,188,212,0.3)] text-[18px]"
            >
              <FaArrowRight />
            </button>
          </div>

          {/* Dots (Aligned with Right Carousel) */}
          <div className="lg:col-span-8 xl:col-span-9 flex items-center justify-center gap-3">
            {testimonialData.reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === activeIndex ? 'bg-[#00bcd4]' : 'bg-[#cbd5e1] hover:bg-[#94a3b8]'
                }`}
              />
            ))}
            <button className="w-3 h-3 rounded-full bg-[#cbd5e1] hover:bg-[#94a3b8] transition-colors"></button>
          </div>

        </div>

      </div>
    </section>
  );
}
