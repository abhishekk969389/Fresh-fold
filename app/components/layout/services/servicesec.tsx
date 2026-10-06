"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { data, ServiceItem, ServiceFeature } from "@/app/data";
import { IconType } from "react-icons";

// React Icons
import * as FiIcons from "react-icons/fi";
import * as LuIcons from "react-icons/lu";
import * as GiIcons from "react-icons/gi";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";

// Grid / Map no nā hōʻailona (Icon Map) me ka 'any' ʻole
const iconMap: Record<string, IconType> = {
  ...FiIcons,
  ...LuIcons,
  ...GiIcons,
  ...BiIcons,
  ...FaIcons,
};

// ─── Dynamic Icon Component (Type-Safe) ───────────────────────────────────────

interface IconProps {
  name: string;
  className?: string;
}

const DynamicIcon: React.FC<IconProps> = ({ name, className }) => {
  const IconComponent = iconMap[name] || LuIcons.LuSparkles;
  return <IconComponent className={className} />;
};

export default function ServicesList() {
  const services: ServiceItem[] = data.servicesSection.services;

  return (
    <section className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-8 sm:mb-10 md:mb-12 lg:mb-14">
      <div className="max-w-[1360px] mx-auto px-6 xl:px-12 space-y-10 md:space-y-12">
        {services.map((service, index: number) => {
          const isImageLeft = service.imagePosition === "left";

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8 bg-white p-4 sm:p-6 rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-cyan-50/50 ${
                isImageLeft ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Box - Main Container */}
              <div className="relative w-full lg:w-[42%] min-h-[260px] sm:min-h-[300px] rounded-[24px] overflow-hidden group shrink-0">
                {/* Main Image */}
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Top-Left Teal Corner */}
                <div 
                  className="absolute top-0 left-0 w-12 h-12 bg-[#007b8b] pointer-events-none"
                  style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                />

                {/* Top-Right Teal Corner */}
                <div 
                  className="absolute top-0 right-0 w-12 h-12 bg-[#007b8b] pointer-events-none"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                />

                {/* Bottom-Left Teal Corner */}
                <div 
                  className="absolute bottom-0 left-0 w-12 h-12 bg-[#007b8b] pointer-events-none"
                  style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
                />

                {/* Bottom-Right Teal Corner */}
                <div 
                  className="absolute bottom-0 right-0 w-12 h-12 bg-[#007b8b] pointer-events-none"
                  style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
                />

                {/* Floating White Badge */}
                {/* <div
                  className={`absolute bottom-3 ${
                    isImageLeft ? "right-3" : "left-3"
                  } bg-white/95 backdrop-blur-md text-[#083c48] px-4 py-3 rounded-t-[20px] rounded-bl-[20px] rounded-br-[40px] flex items-center gap-3 shadow-xl max-w-[260px] border border-white/60 z-10`}
                >
                  <div className="w-11 h-11 rounded-[14px] bg-[#007b8b] text-white flex items-center justify-center text-2xl shrink-0">
                    <DynamicIcon name={service.badge.icon} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-[#083c48] leading-tight">
                      {service.badge.line1}
                    </span>
                    <span className="text-[11px] font-semibold text-[#007b8b] leading-tight mt-0.5">
                      {service.badge.line2}
                    </span>
                  </div>
                </div> */}
              </div>

              {/* Content Details Box */}
              <div className="flex-1 flex flex-col justify-between py-2 px-1 sm:px-3">
                {/* Header Tagline & Title */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-[2px] bg-[#00bcd4]"></span>
                    <span className="text-[#00bcd4] font-bold tracking-wider text-[12px] uppercase">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold text-[#083c48] leading-tight mb-3">
                    {service.titleLine1}{" "}
                    <span className="text-[#00bcd4]">{service.titleLine2}</span>
                  </h3>

                  <p className="text-[#5a7184] text-sm sm:text-sm md:text-[15px] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features Row & CTA Button */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  {/* Features Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full sm:w-auto">
                    {service.features.map((feature: ServiceFeature) => (
                      <div
                        key={feature.id}
                        className="flex flex-col items-center text-center group"
                      >
                        <div className="w-13 h-13 rounded-full bg-[#e6f8fa] text-[#00bcd4] flex items-center justify-center text-xl mb-1.5 transition-colors group-hover:bg-[#00bcd4] group-hover:text-white">
                          <DynamicIcon className="h-8 w-8" name={feature.icon} />
                        </div>
                        <span className="text-[11px] font-bold text-[#083c48] leading-tight">
                          {feature.titleLine1}
                        </span>
                        <span className="text-[11px] font-medium text-[#5a7184] leading-tight">
                          {feature.titleLine2}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Read More Yellow Button */}
                  <Link
                    href={`/servicedetails/${service.id}`}
                    className="shrink-0 bg-[#fbbf24] hover:bg-[#f59e0b] text-[#083c48] px-6 py-3 rounded-full font-extrabold text-[13px] tracking-wide flex items-center gap-2 shadow-sm transition-all duration-300 self-start sm:self-center"
                  >
                    {service.ctaText}
                    <FaIcons.FaArrowRight className="text-[12px]" />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}