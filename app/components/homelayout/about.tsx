import React from "react";
import Image from "next/image";
import Link from "next/link";
import { data } from "@/app/data";
import type { AboutData } from "@/app/data";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";

const aboutData = (data as any).about as AboutData;

export default function About() {
  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden font-sans">
      
      {/* Decorative dots top right */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#f0f9fa] rounded-bl-full opacity-70 -z-0 pointer-events-none hidden lg:block"></div>
      
      <div className="max-w-[1360px] mx-auto px-6 xl:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-10 xl:gap-20 items-center">
          
          {/* Left Side: Images */}
          <div className="w-full lg:w-1/2 relative lg:pr-10 xl:pr-16">
            <div className="relative w-full max-w-[500px] xl:max-w-[550px] mx-auto lg:ml-0 aspect-[4/4.5] sm:aspect-[4/4.5] lg:aspect-[4/4.5]">
              
              {/* Dotted pattern behind top-right */}
              <div className="absolute top-10 right-[-10px] sm:right-[-40px] w-24 h-48 bg-[radial-gradient(#c2e8e5_3px,transparent_3px)] [background-size:16px_16px] -z-10"></div>

              {/* Main Image */}
              <div className="absolute top-[5%] left-[15%] right-[0%] bottom-[10%] bg-gray-100 overflow-hidden z-0 rounded-md">
                <Image
                  src={aboutData.images.main.src}
                  alt={aboutData.images.main.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* 95% Badge */}
              <div className="absolute top-[12%] left-[0%] z-20">
                {/* Ribbon Fold Elements */}
                <div className="absolute -top-[24px] left-0 flex">
                  {/* Light teal fold */}
                  <div className="w-0 h-0 border-b-[24px] border-b-[#0092a3] border-l-[80px] border-l-transparent"></div>
                  {/* Dark teal shadow */}
                  <div className="w-0 h-0 border-b-[24px] border-b-[#062b33] border-r-transparent"></div>
                </div>

                {/* Main Badge Box */}
                <div className="bg-[#0b434f] text-white py-5 px-6 flex items-center gap-5 shadow-2xl relative z-10">
                  {/* Circular Progress */}
                  <div className="relative w-[60px] h-[60px] flex items-center justify-center shrink-0">
                    <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                      <circle cx="30" cy="30" r="26" fill="none" stroke="#062b33" strokeWidth="3" />
                      <circle cx="30" cy="30" r="26" fill="none" stroke="#00bcd4" strokeWidth="3" strokeDasharray="163" strokeDashoffset="8" strokeLinecap="round" />
                    </svg>
                    <span className="font-bold text-[16px] leading-none text-white">{aboutData.satisfactionRate}</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="font-bold text-[16px] leading-tight text-white mb-2 w-24">
                      Customers<br />Satisfy
                    </span>
                    <span className="w-10 h-[3px] bg-[#fbbf24]"></span>
                  </div>
                </div>
              </div>

              {/* Sticker Text */}
              <div className="absolute bottom-[12%] left-[0%] sm:left-[2%] z-30 transform -rotate-[12deg] flex flex-col items-start font-medium text-[#14808f] leading-[1.1] drop-shadow-md" style={{ fontFamily: "'Brush Script MT', 'Comic Sans MS', cursive" }}>
                <span className="text-[30px]  ml-0">Clean</span>
                <span className="text-[30px] ml-6">Fresh</span>
                <div className="relative ml-4">
                  <span className="text-[30px] relative z-10">Confident</span>
                  {/* Underline */}
                  <svg className="absolute -bottom-1 left-0 w-[110%] h-3 text-[#14808f]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 8 Q 50 2 100 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Small Image Overlay */}
              <div className="absolute bottom-[2%] right-[-5%] sm:right-[-10%] w-[55%] aspect-[1.1/1] z-20">
                {/* Dark teal triangle behind bottom-right corner */}
                <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-[#0b434f]" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}></div>
                
                {/* Image with white border */}
                <div className="relative w-full h-full bg-white p-[6px] shadow-xl">
                  <div className="relative w-full h-full overflow-hidden bg-gray-100">
                    <Image
                      src={aboutData.images.small.src}
                      alt={aboutData.images.small.alt}
                      fill
                      className="object-cover"
                    />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center text-[#14808f] shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform z-10">
                        <FaPlay className="text-[24px] ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 flex flex-col relative z-10">
            
            {/* Tag */}
            <div className="flex items-center gap-4 mb-2">
              <span className="text-[#00bcd4] opacity-70">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M12 12L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
              </span>
              <span className="text-[#14808f] font-bold tracking-widest text-[14px] uppercase">{aboutData.tag}</span>
              <span className="w-12 h-px bg-[#14808f]/50"></span>
            </div>

            {/* Title */}
            <h2 className="text-[36px] sm:text-[44px] xl:text-[50px] font-extrabold leading-[0.9] mb-6 tracking-tight">
              <span className="text-[#0b2d4a] block">{aboutData.titleLine1}</span>
              <span className="text-[#14808f] block">{aboutData.titleLine2}</span>
            </h2>

            {/* Descriptions */}
            <p className="text-gray-600 text-[16px] leading-relaxed mb-5">
              {aboutData.description1}
            </p>
            <p className="text-gray-600 text-[16px] leading-relaxed mb-8">
              {aboutData.description2}
            </p>

            {/* Features */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
              {aboutData.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#14808f] text-[18px] shrink-0" />
                  <span className="text-[#0b2d4a] font-semibold text-[15px]">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div>
              <Link 
                href={aboutData.ctaLink}
                className="inline-flex items-center justify-center gap-3 bg-gold text-[#0b2d4a] font-bold text-[16px] px-8 py-3.5 rounded-full shadow-[0_4px_14px_rgba(255,190,48,0.4)] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(255,190,48,0.5)] transition-all"
              >
                {aboutData.ctaText}
                <LuArrowRight className="text-[20px]" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
