"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";

import {
  AppTestimonialsData,
  TestimonialItem,
  TestimonialsSectionData,
} from "@/app/data";
import rawData from "@/app/data/data.json";
import Pagination from "@/app/components/ui/pagination";

const iconMap: Record<string, IconType> = {
  ...FaIcons,
  ...IoIcons,
};

interface DynamicIconProps {
  name: string;
  className?: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className }) => {
  const IconComponent: IconType = iconMap[name] || FaIcons.FaStar;
  return <IconComponent className={className} />;
};

export default function TestimonialsSection() {
  const data: AppTestimonialsData = rawData as AppTestimonialsData;
  const section: TestimonialsSectionData = data.testimonialsSection;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(section.testimonials.length / itemsPerPage);
  const currentTestimonials = section.testimonials.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="w-full  mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-8 sm:mb-10 md:mb-12 lg:mb-14">
      <div className="max-w-[1360px] mx-auto px-6 xl:px-12 relative z-10 text-center">
        
        {/* Header Section */}
       <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-2"
        >
          <span className="w-10 h-[1.5px] bg-[#00bcd4]"></span>
          <span className="text-[#00bcd4] font-bold tracking-widest text-[14px] uppercase">{section.tag}</span>
          <span className="w-10 h-[1.5px] bg-[#00bcd4]"></span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[36px] sm:text-[44px] xl:text-[48px] font-extrabold leading-[0.9] mb-3 tracking-tight"
        >
          <span className="text-[#0b2d4a]">{section.titleLine1} </span>
          <span className="text-[#0092a3]">{section.titleLine2}</span>
        </motion.h2>
        
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#5a7184] text-[15px] sm:text-[16px] max-w-2xl mx-auto mb-6"
        >
          {section.description}
        </motion.p>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          {currentTestimonials.map((item: TestimonialItem, index: number) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group rounded-[28px] overflow-hidden flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-lg cursor-pointer bg-white text-[#083c48] border border-gray-100/80 hover:bg-[#084b59] hover:text-white hover:border-[#084b59]"
              >
                {/* Upper Body: Quote Icon, Star Ratings, and Text */}
                <div className="p-7 sm:p-8 space-y-5">
                  <div className="flex items-center gap-3">
                    {/* Circle Quote Badge */}
                    <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold shadow-xs shrink-0 transition-colors duration-300 bg-[#084b59] text-white group-hover:bg-[#f59e0b] group-hover:text-[#084b59]">
                      <DynamicIcon name={item.quoteIcon} />
                    </div>

                    {/* Star Ratings */}
                    <div className="flex items-center gap-1 text-[#f59e0b]">
                      {Array.from({ length: item.rating }).map((_, starIdx: number) => (
                        <DynamicIcon
                          key={starIdx}
                          name={item.ratingIcon}
                          className="w-4 h-4 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="text-[14px] sm:text-[14.5px] leading-relaxed font-normal transition-colors duration-300 text-[#5a7184] group-hover:text-cyan-50/90">
                    {item.comment}
                  </p>
                </div>

                {/* Bottom User Profile Section */}
                <div className="px-7 py-5 flex items-center gap-4 transition-colors duration-300 bg-[#f4faff] border-t border-cyan-50/60 group-hover:bg-[#053d48] group-hover:border-transparent">
                  {/* Circular Avatar */}
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-[2.5px] border-white shadow-sm bg-white">
                    <Image
                      src={item.user.avatar.src}
                      alt={item.user.avatar.alt}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  {/* Name and Location */}
                  <div className="flex flex-col">
                    <span className="text-[16px] font-bold leading-tight transition-colors duration-300 text-[#083c48] group-hover:text-white">
                      {item.user.name}
                    </span>
                    <span className="text-[13px] flex items-center gap-1 mt-1 font-medium transition-colors duration-300 text-[#0092a3] group-hover:text-cyan-200/90">
                      <DynamicIcon
                        name={item.locationIcon}
                        className="text-sm shrink-0"
                      />
                      {item.user.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-6">
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}

      </div>
    </section>
  );
}