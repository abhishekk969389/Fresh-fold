"use client";

import React from 'react';
import Image from 'next/image';
import type { TeamDetailsData } from '@/app/data';
import { motion } from "framer-motion";
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'] });

interface Props {
  data: TeamDetailsData;
}

export default function TeamMemberExperience({ data }: Props) {
  const { member } = data;
  return (
    <section className="w-full  mt-8 relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 xl:px-12 flex flex-col lg:flex-row gap-10 xl:gap-20">
        
        {/* Left Side: Timeline */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[60%] flex flex-col relative z-10"
        >
          <h3 className="text-[32px] md:text-[38px] font-extrabold text-[#0b2d4a] mb-2">{member.experience.title}</h3>
          <div className="w-12 h-[3px] bg-[#fbbf24] mb-12"></div>
          
          <div className="relative pl-10">
            {/* Vertical Line */}
            <div className="absolute left-[13px] top-3 bottom-5 w-[2px] bg-[#00bcd4]/60"></div>
            
            <div className="flex flex-col gap-12">
              {member.experience.items.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start"
                >
                  {/* Dot */}
                  <div className="absolute -left-[35px] top-2 w-[18px] h-[18px] rounded-full bg-[#00bcd4] z-10"></div>
                  
                  {/* Period Box */}
                  <div className="w-[180px] shrink-0 bg-[#e8f8f9] py-2.5 px-5 rounded-lg flex items-center justify-center">
                    <span className="text-[15px] font-bold text-[#0b2d4a]">{item.period}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col flex-1">
                    <h4 className="text-[18px] md:text-[20px] font-extrabold text-[#0b2d4a] mb-1">{item.role}</h4>
                    <span className="text-[15px] text-[#5a7184] mb-2">{item.company}</span>
                    <p className="text-[15px] text-[#64748b] leading-[1.6]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side Spacer for Desktop */}
        <div className="hidden lg:block lg:w-[40%]"></div>

        {/* Mobile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full relative mt-20 lg:hidden flex items-center justify-end pt-20"
        >
          {/* Floating Cursive Text */}
          <div className="absolute top-8 right-2 z-20 transform -rotate-[15deg] flex flex-col items-center">
            <p 
              className={`${greatVibes.className} text-[26px] md:text-[32px] text-[#0c5369] leading-[1.1] text-center`}
              dangerouslySetInnerHTML={{ __html: member.experience.imageOverlayText || "" }}
            />
            <div className="w-14 h-[2px] bg-[#fbbf24] mt-1.5 transform -rotate-3 rounded-full"></div>
          </div>
          <Image
            src={member.experience.image.src}
            alt={member.experience.image.alt}
            width={500}
            height={500}
            className="object-contain object-right relative z-10 w-full h-auto"
          />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex absolute top-0 right-0 bottom-0 w-[45%] xl:w-[40%] items-center justify-end pointer-events-none"
      >
        {/* Floating Cursive Text */}
        <div className="absolute top-32 right-10 z-20 transform -rotate-[15deg] flex flex-col items-center pointer-events-auto">
          <p 
            className={`${greatVibes.className} text-[26px] md:text-[32px] text-[#0c5369] leading-[1.1] text-center`}
            dangerouslySetInnerHTML={{ __html: member.experience.imageOverlayText || "" }}
          />
          <div className="w-14 h-[2px] bg-[#fbbf24] mt-1.5 transform -rotate-3 rounded-full"></div>
        </div>
        <Image
          src={member.experience.image.src}
          alt={member.experience.image.alt}
          width={800}
          height={800}
          className="object-contain object-right w-full h-auto pointer-events-auto"
        />
      </motion.div>
    </section>
  );
}
