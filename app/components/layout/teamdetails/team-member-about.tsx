"use client";

import React from 'react';
import Image from 'next/image';
import type { TeamDetailsData } from '@/app/data';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from "framer-motion";
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'] });

interface Props {
  data: TeamDetailsData;
}

export default function TeamMemberAbout({ data }: Props) {
  const { member } = data;
  return (
    <section className=" mt-8">
      <div className="max-w-[1360px] mx-auto px-6 xl:px-12 flex flex-col lg:flex-row gap-12 xl:gap-20 items-stretch">
        
        {/* Left Side: About Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <h3 className="text-[32px] md:text-[38px] font-extrabold text-[#0b2d4a] mb-2">{member.about.title}</h3>
          <div className="w-12 h-[3px] bg-[#fbbf24] mb-8"></div>
          
          <div className="flex flex-col gap-6 text-[16px] text-[#64748b] leading-[1.8]">
            {member.about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Message Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 bg-[#e8f8f9] rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-center min-h-[400px]"
        >
          {/* Decorative circles */}
         <div className="absolute top-10 right-10 w-14 h-14 rounded-full bg-gradient-to-br from-[#c8f5f8] via-[#8fe3ec] to-[#5ecad7] shadow-[inset_-8px_-8px_16px_rgba(38,198,218,0.45),inset_8px_8px_16px_rgba(255,255,255,0.7)] blur-[0.5px]"></div>
         <div className="absolute top-20 right-2 w-10 h-10 rounded-full bg-gradient-to-br from-[#d4f8fb] via-[#8fe3ec] to-[#5ecad7] shadow-[inset_-5px_-5px_10px_rgba(38,198,218,0.45),inset_5px_5px_10px_rgba(255,255,255,0.75)] blur-[0.4px]"></div>
         <div className="absolute bottom-10 left-10 w-14 h-14 rounded-full bg-gradient-to-br from-[#c8f5f8]/20 via-[#8fe3ec]/30 to-[#5ecad7]/40 shadow-[inset_-8px_-8px_16px_rgba(38,198,218,0.45),inset_8px_8px_16px_rgba(255,255,255,0.7)] blur-[0.5px]"></div>
          
          {/* Bottom Right Image */}
          <div className="absolute bottom-0 right-0 w-[240px] h-[180px] md:w-[300px] md:h-[240px] z-0 pointer-events-none">
            {member.about.image && (
              <Image 
                src={member.about.image.src} 
                alt={member.about.image.alt} 
                fill 
                className="object-contain object-right-bottom"
              />
            )}
          </div>

          <div className="relative z-10 w-full md:w-[85%]">
            <h4 className="text-[28px] md:text-[32px] font-extrabold text-[#0b2d4a] mb-2">{member.message.title}</h4>
            <div className="w-12 h-[3px] bg-[#fbbf24] mb-8"></div>
            
            <div className="flex items-start gap-4 mb-8">
              <FaQuoteLeft className="text-[#00bcd4] text-[40px] shrink-0 mt-1" />
              <p className="text-[17px] md:text-[18px] text-[#5a7184] leading-[1.6]">
                {member.message.quote}
              </p>
            </div>
            
            <div className="ml-14">
              <span 
                className={`${greatVibes.className} text-[32px] md:text-[36px] text-[#0b2d4a] block leading-[1] mb-2 tracking-wide`}
              >
                {member.message.name}
              </span>
              <span className="text-[16px] font-extrabold text-[#0b2d4a] block mb-1">{member.message.name}</span>
              <span className="text-[14px] text-[#5a7184]">{member.message.role}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
