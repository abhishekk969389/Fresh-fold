"use client";

import React, { useState } from "react";
import Image from "next/image";
import { data } from "@/app/data";
import type { TestimonialData } from "@/app/data";
import { FaQuoteLeft, FaStar, FaMapMarkerAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <section className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 xl:px-12">
        
        {/* Top Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-6 sm:mb-8"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-2">
            <span className="w-8 sm:w-10 h-[1.5px] bg-[#00bcd4]"></span>
            <span className="text-[#00bcd4] font-bold tracking-widest text-[11px] sm:text-[13px] uppercase">
              {testimonialData.tag}
            </span>
            <span className="w-8 sm:w-10 h-[1.5px] bg-[#00bcd4]"></span>
          </div>
          <h2 className="text-[26px] sm:text-[34px] md:text-[40px] xl:text-[46px] font-extrabold leading-tight sm:leading-snug lg:leading-[0.9] mb-2 tracking-tight">
            <span className="text-[#0b2d4a]">{testimonialData.titleLine1} </span>
            <span className="text-[#00bcd4]">{testimonialData.titleLine2}</span>
          </h2>
          <p className="text-[#5a7184] text-[13px] sm:text-[15px] md:text-[16px] max-w-xl md:max-w-2xl mx-auto px-2">
            {testimonialData.subtitle}
          </p>
        </motion.div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 xl:gap-12 items-center">
          
          {/* Left Text Block */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left justify-center h-full pt-1 sm:pt-4"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-3 sm:mb-5">
              <span className="text-[#0b2d4a] font-bold tracking-widest text-[11px] sm:text-[12px] uppercase">
                {testimonialData.leftSection.tag}
              </span>
              <span className="w-8 sm:w-12 h-[2px] bg-[#fbbf24]"></span>
            </div>
            
            <h3 className="text-[26px] sm:text-[32px] md:text-[36px] xl:text-[46px] font-extrabold leading-tight sm:leading-snug lg:leading-[1.1] mb-3 sm:mb-6 text-[#0b2d4a] tracking-tight">
              Your <br className="hidden lg:block" />
              Satisfaction <br className="hidden lg:block" />
              Drives Us <br className="hidden lg:block" />
              <span className="text-[#00bcd4]">Forward</span>
            </h3>
            
            <p className="text-[#5a7184] text-[13px] sm:text-[15px] xl:text-[16px] leading-relaxed mb-5 sm:mb-8 max-w-md lg:max-w-[280px]">
              {testimonialData.leftSection.description}
            </p>

            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="flex -space-x-2.5 sm:-space-x-3">
                {testimonialData.leftSection.avatars.map((avatar, idx) => (
                  <div key={idx} className="relative w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 rounded-full border-[2.5px] sm:border-[3px] border-[#f8f9fa] shadow-sm overflow-hidden z-10">
                    <Image src={avatar} alt="Customer" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 rounded-full bg-[#fbbf24] flex items-center justify-center text-white font-normal text-[20px] sm:text-[26px] z-10 ml-1.5 sm:ml-2">
                +
              </div>
            </div>
            
            <p className="font-medium text-[#0b2d4a] text-[13px] sm:text-[15px] xl:text-[16px]">
              <span className="text-[#00bcd4] font-bold">{testimonialData.leftSection.happyCustomersCount}</span> {testimonialData.leftSection.happyCustomersText}
            </p>
          </motion.div>

          {/* Right Cards Grid/Carousel */}
          <div className="lg:col-span-9 w-full relative">
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 xl:gap-8 w-full pb-4 lg:pb-0 pt-2 lg:pt-4 px-2 sm:px-4 lg:px-0 items-center justify-center lg:justify-start">
              
              {testimonialData.reviews.map((review, idx) => {
                const isActive = idx === activeIndex;
                const nextIdx = (activeIndex + 1) % testimonialData.reviews.length;
                const isTabletVisible = isActive || idx === nextIdx;
                
                const displayClass = isActive ? 'flex' : (isTabletVisible ? 'hidden md:flex' : 'hidden lg:flex');
                
                let orderClass = 'order-3 lg:order-none';
                if (isActive) orderClass = 'order-1 lg:order-none';
                else if (idx === nextIdx) orderClass = 'order-2 lg:order-none';
                
                return (
                  <div 
                    key={review.id} 
                    className={`${displayClass} ${orderClass} flex-col shrink-0 w-full max-w-[340px] sm:max-w-[400px] md:max-w-none lg:w-auto rounded-[20px] sm:rounded-[24px] overflow-hidden transition-all duration-500 cursor-pointer shadow-md sm:shadow-lg mx-auto lg:mx-0 ${
                      isActive 
                        ? 'lg:scale-[1.05] z-20 shadow-[0_15px_35px_rgba(7,60,71,0.2)] lg:shadow-[0_20px_40px_rgba(7,60,71,0.25)] ring-2 ring-[#00bcd4]/30 lg:ring-0' 
                        : 'opacity-85 sm:opacity-80 hover:opacity-100 z-10'
                    }`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    {/* Top Content Area */}
                    <div className={`p-5 sm:p-6 xl:p-8 flex-1 flex flex-col justify-between ${isActive ? 'bg-[#073c47]' : 'bg-white'}`}>
                      {/* Quote & Stars */}
                      <div className="flex items-center justify-between gap-4 mb-4 sm:mb-5 xl:mb-6">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 rounded-full flex items-center justify-center text-[16px] sm:text-[18px] xl:text-[20px] transition-colors ${
                          isActive ? 'bg-[#fbbf24] text-[#073c47]' : 'bg-[#073c47] text-white'
                        }`}>
                          <FaQuoteLeft />
                        </div>
                        <div className="flex gap-1 text-[#fbbf24] text-[13px] sm:text-[15px] xl:text-[18px]">
                          {[...Array(review.rating)].map((_, i) => (
                            <FaStar key={i} />
                          ))}
                        </div>
                      </div>
                      
                      {/* Text */}
                      <p className={`text-[13px] sm:text-[14px] xl:text-[15px] leading-relaxed min-h-[100px] sm:min-h-[120px] xl:min-h-[160px] ${
                        isActive ? 'text-white/90' : 'text-[#5a7184]'
                      }`}>
                        "{review.text}"
                      </p>
                    </div>
                    
                    {/* Bottom User Info Area (Two-Tone Design) */}
                    <div className={`p-4 sm:p-5 xl:p-6 flex items-center gap-3 sm:gap-4 border-t border-black/5 ${
                      isActive ? 'bg-[#052b34]' : 'bg-[#f2f8f9]'
                    }`}>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 relative rounded-full overflow-hidden shrink-0">
                        <Image src={review.image} alt={review.name} fill className="object-cover" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <h4 className={`font-bold text-[14px] sm:text-[15px] xl:text-[16px] mb-0.5 sm:mb-1 truncate ${isActive ? 'text-white' : 'text-[#0b2d4a]'}`}>
                          {review.name}
                        </h4>
                        <span className={`flex items-center gap-1 text-[11px] sm:text-[12px] xl:text-[13px] truncate ${isActive ? 'text-white/70' : 'text-[#5a7184]'}`}>
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
        <div className="flex flex-col-reverse sm:flex-row lg:grid lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 xl:gap-12 mt-6 sm:mt-8 lg:mt-12 items-center justify-center">
          
          {/* Arrows */}
          <div className="lg:col-span-3 flex items-center gap-4 sm:gap-5 justify-center lg:justify-start">
            <button 
              onClick={handlePrev}
              aria-label="Previous review"
              className="w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 rounded-full bg-white text-[#073c47] flex items-center justify-center hover:bg-[#00bcd4] hover:text-white transition-colors shadow-[0_4px_15px_rgba(0,0,0,0.08)] text-[16px] sm:text-[18px]"
            >
              <FaArrowLeft />
            </button>
            <button 
              onClick={handleNext}
              aria-label="Next review"
              className="w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 rounded-full bg-[#073c47] text-white flex items-center justify-center hover:bg-[#00bcd4] transition-colors shadow-[0_4px_15px_rgba(0,188,212,0.3)] text-[16px] sm:text-[18px]"
            >
              <FaArrowRight />
            </button>
          </div>

          {/* Dots */}
          <div className="lg:col-span-9 hidden md:flex items-center justify-center gap-2 sm:gap-3">
            {testimonialData.reviews.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all rounded-full ${
                  idx === activeIndex 
                    ? 'w-6 sm:w-8 h-2.5 sm:h-3 bg-[#00bcd4]' 
                    : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[#cbd5e1] hover:bg-[#94a3b8]'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}