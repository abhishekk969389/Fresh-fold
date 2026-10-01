"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Caveat } from 'next/font/google';

const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });

import { sitemapData, SitemapSection } from "@/app/data";
import {
  FiHome,
  FiUsers,
  FiSettings,
  FiTag,
  FiAward,
  FiImage,
  FiFileText,
  FiHelpCircle,
  FiShield,
  FiGitMerge,
  FiChevronRight
} from "react-icons/fi";

const iconMap: Record<string, React.ElementType> = {
  FiHome,
  FiUsers,
  FiSettings,
  FiTag,
  FiAward,
  FiImage,
  FiFileText,
  FiHelpCircle,
  FiShield,
  FiGitMerge
};

const themeClasses: Record<string, { bg: string, text: string }> = {
  blue: { bg: "bg-blue-100", text: "text-blue-600" },
  teal: { bg: "bg-teal-100", text: "text-teal-600" },
  yellow: { bg: "bg-yellow-100", text: "text-yellow-600" },
  red: { bg: "bg-red-100", text: "text-red-600" },
  purple: { bg: "bg-purple-100", text: "text-purple-600" },
  green: { bg: "bg-green-100", text: "text-green-600" },
  gray: { bg: "bg-gray-100", text: "text-gray-600" },
  slate: { bg: "bg-slate-100", text: "text-slate-600" },
};

const SitemapSec = () => {
  const { header, sections, promoCard } = sitemapData;

  return (
    <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-8 sm:mb-10 md:mb-12 lg:mb-14">
      <div className="max-w-[1360px] mx-auto px-6 xl:px-12 relative z-10 text-center">

        {/* Header Section */}
        <div className="flex items-center justify-center gap-4 mb-2">
          <span className="w-10 h-[1.5px] bg-[#00bcd4]"></span>
          <span className="text-[#00bcd4] font-bold tracking-widest text-[14px] uppercase">{header.eyebrow}</span>
          <span className="w-10 h-[1.5px] bg-[#00bcd4]"></span>
        </div>

        <h2 className="text-[36px] sm:text-[44px] xl:text-[48px] font-extrabold leading-[0.9] mb-1 tracking-tight">
          <span className="text-[#0b2d4a]">{header.titleStart} </span>
          <span className="text-[#0092a3]">{header.titleHighlight}</span>
          <div className="w-14 h-1 bg-yellow-400 mx-auto rounded-full mt-2"></div>
        </h2>


        <p className="text-[#5a7184] text-[15px] sm:text-[16px] max-w-2xl mx-auto mb-6">
          {header.subtitle}
        </p>

        {/* Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {sections.map((section: SitemapSection) => (
            <div
              key={section.id}
              className="bg-white rounded-2xl border border-blue-50 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col"
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center ${themeClasses[section.theme]?.bg || "bg-blue-100"} ${themeClasses[section.theme]?.text || "text-blue-600"}`}
                >
                  {React.createElement(iconMap[section.icon] || FiSettings, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {section.title}
                </h3>
              </div>

              <hr className="border-gray-100 mb-5" />

              {/* Links List */}
              <ul className="space-y-4 flex-grow">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="flex items-center text-gray-600 hover:text-blue-500 font-medium transition-colors group"
                    >
                      <FiChevronRight className="w-5 h-5 text-blue-500 mr-2 group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Promo Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm group bg-[#eef6fc] min-h-[300px]">
            <Image
              src={promoCard.image.src}
              alt={promoCard.image.alt}
              fill
              className="object-contain object-left-bottom p-4 transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute inset-0 z-20 p-4 sm:p-6 flex flex-col items-end justify-start text-right">
              <div className={`flex flex-col items-center transform -rotate-12 translate-x-2 -translate-y-2 ${caveat.className}`}>
                <span className="text-[28px] sm:text-[34px] leading-tight font-bold text-[#55a2d6]">
                  {promoCard.titleLine1}
                </span>
                <span className="text-[28px] sm:text-[34px] leading-tight font-bold text-[#55a2d6] -mt-3">
                  {promoCard.titleLine2}
                </span>
                <span className="text-[28px] sm:text-[34px] leading-tight font-bold text-[#55a2d6] -mt-3">
                  {promoCard.titleLine3}
                </span>

                <svg
                  className="w-7 h-7 text-[#55a2d6] mt-1 animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SitemapSec;
