"use client";

import React, { useState } from "react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

import * as FiIcons from "react-icons/fi";
import * as LuIcons from "react-icons/lu";

import {
  AppFaqData,
  FaqHighlightBadge,
  FaqItem,
  FaqSectionData,
} from "@/app/data";
import rawData from "@/app/data/data.json";

const iconMap: Record<string, IconType> = {
  ...FiIcons,
  ...LuIcons,
};

interface DynamicIconProps {
  name: string;
  className?: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className }) => {
  const IconComponent: IconType = iconMap[name] || FiIcons.FiHelpCircle;
  return <IconComponent className={className} />;
};

export default function FaqSection() {
  const data: AppFaqData = rawData as AppFaqData;
  const section: FaqSectionData = data.faqSection;

  // Pehla FAQ default open jaise screenshot me hai
  const [openFaqId, setOpenFaqId] = useState<string | null>("l-1");

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const renderAccordionItem = (faq: FaqItem) => {
    const isOpen = openFaqId === faq.id;

    return (
      <div
        key={faq.id}
        className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
          isOpen
            ? "border-[#005d6e] shadow-sm"
            : "bg-[#f5f9fc] border-transparent hover:border-cyan-200"
        }`}
      >
        {/* Accordion Header */}
        <button
          type="button"
          onClick={() => toggleFaq(faq.id)}
          className={`w-full flex items-center justify-between px-6 py-4.5 text-left transition-colors duration-300 cursor-pointer ${
            isOpen
              ? "bg-[#005d6e] text-white"
              : "bg-[#f5f9fc] text-[#083c48] hover:text-[#005d6e]"
          }`}
        >
          <span className="text-[15px] sm:text-[16px] font-bold tracking-tight pr-4 leading-snug">
            {faq.question}
          </span>
          <span className="text-2xl font-bold shrink-0 leading-none select-none transition-transform duration-200">
            {isOpen ? "−" : "+"}
          </span>
        </button>

        {/* Smooth Accordion Body using CSS Grid transition */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 bg-[#e7f7fa] border-t border-cyan-100/60"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-6 py-5">
              <p className="text-[13.5px] sm:text-[14.5px] text-[#365765] leading-relaxed font-normal">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-8 sm:mb-10 md:mb-12 lg:mb-14">
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
                    className="text-[36px] sm:text-[44px] xl:text-[48px] font-extrabold leading-[0.9] mb-1 tracking-tight"
                >
                    <span className="text-[#0b2d4a]">{section.titlePrefix} </span>
                    <span className="text-[#0092a3]">{section.titleHighlight}</span>
                    <div className="w-14 h-1 bg-yellow-400 mx-auto rounded-full mt-2"></div>
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

        {/* 4 Feature Badges Row (Screenshot exact design) */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-14"
        >
          {section.badges.map((badge: FaqHighlightBadge) => (
            <div
              key={badge.id}
              className="flex items-center gap-3.5 p-3 rounded-2xl bg-white"
            >
              {/* Circular Badge */}
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#dcf5fa] text-[#074b59] flex items-center justify-center text-2xl shrink-0 shadow-2xs">
                <DynamicIcon name={badge.icon} />
              </div>

              {/* Title & Subtitle */}
              <div className="flex flex-col text-left">
                <span className="text-[15px] sm:text-[16px] font-extrabold text-[#083c48] leading-tight">
                  {badge.title}
                </span>
                <span className="text-[12px] sm:text-[12.5px] text-[#6b8292] leading-tight mt-1 font-medium">
                  {badge.subtitle}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* 2-Columns FAQ Accordion List */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start"
        >
          {/* Left Column */}
          <div className="space-y-3.5">
            {section.leftColumnFaqs.map((faq: FaqItem) =>
              renderAccordionItem(faq)
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-3.5">
            {section.rightColumnFaqs.map((faq: FaqItem) =>
              renderAccordionItem(faq)
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}