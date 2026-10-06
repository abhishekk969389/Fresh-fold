"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

// React Icons
import * as FiIcons from "react-icons/fi";
import * as LuIcons from "react-icons/lu";
import * as GiIcons from "react-icons/gi";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import { AppPricingData, HighlightFeature, PriceItem, TabCategory } from "@/app/data";
import rawData from "@/app/data/data.json";

const iconMap: Record<string, IconType> = {
    ...FiIcons,
    ...LuIcons,
    ...GiIcons,
    ...BiIcons,
    ...MdIcons,
};

const DynamicIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
    const IconComponent = iconMap[name] || LuIcons.LuSparkles;
    return <IconComponent className={className} />;
};

export default function PricingSection() {
    const data: AppPricingData = rawData as AppPricingData;
    const pricing = data.pricingSection;
    const [activeTab, setActiveTab] = useState<string>(pricing.categories[0].id);

    return (
        <section className="w-full text-[#083c48]  mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-8 sm:mb-10 md:mb-12 lg:mb-14">
            <div className="max-w-[1360px] mx-auto px-6 xl:px-12 space-y-6">

                {/* Top Category Tabs */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3"
                >
                    {pricing.categories.map((cat: TabCategory) => {
                        const isActive = activeTab === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-300 border ${isActive
                                        ? "bg-[#007b8b] text-white border-[#007b8b] shadow-md"
                                        : "bg-white text-[#083c48] border-gray-100 hover:border-cyan-200"
                                    }`}
                            >
                                <DynamicIcon name={cat.icon} className="text-2xl mb-2" />
                                <span className="text-[12px] font-bold text-center leading-tight">
                                    {cat.name}
                                </span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* Content & Banner Header */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">

                    {/* Left Text Header */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex-1 space-y-2.5"
                    >
                        <div className="flex items-center gap-2">
                            <span className="w-5 h-[2px] bg-[#00bcd4]"></span>
                            <span className="text-[#00bcd4] font-bold tracking-wider text-[12px] uppercase">
                                {pricing.tag}
                            </span>
                        </div>

                        <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-extrabold text-[#083c48] leading-[1.15]">
                            {pricing.titleLine1} <br />
                            <span className="text-[#00bcd4]">{pricing.titleLine2}</span>
                        </h2>

                        {/* Accent Yellow Line under Title */}
                        <div className="w-12 h-[3.5px] bg-amber-400 rounded-full my-2" />

                        <p className="text-[#5a7184] text-[14px] sm:text-[15px] leading-relaxed max-w-[540px]">
                            {pricing.description}
                        </p>
                    </motion.div>

                    {/* Right Banner Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative w-full lg:w-[48%] h-[200px] sm:h-[220px] lg:h-[230px] rounded-[22px] overflow-hidden shrink-0 shadow-sm"
                    >
                        <Image
                            src={pricing.image.src}
                            alt={pricing.image.alt}
                            fill
                            className="object-cover"
                        />

                        {/* Floating Badge */}
                        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-[16px] flex items-center gap-2.5 shadow-lg border border-white/80 max-w-[230px]">
                            <div className="w-9 h-9 rounded-[10px] bg-[#007b8b] text-white flex items-center justify-center text-lg shrink-0">
                                <DynamicIcon name={pricing.badge.icon} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[12px] font-bold text-[#083c48] leading-tight">
                                    {pricing.badge.line1}
                                </span>
                                <span className="text-[10px] font-semibold text-[#007b8b] leading-tight mt-0.5 border-b-2 border-[#00bcd4] pb-0.5 inline-block">
                                    {pricing.badge.line2}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Highlight Features Row (Screenshot Design: Single Bar with Dividers) */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-full bg-[#eaf8fc] rounded-2xl md:rounded-[24px] border border-cyan-100/70 py-6 px-3 sm:px-6 shadow-sm"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-cyan-200/60">
                        {pricing.features.map((feat: HighlightFeature) => (
                            <div
                                key={feat.id}
                                className="flex flex-col items-center text-center px-3 py-3 md:py-1 space-y-2.5"
                            >
                                {/* Circular Icon Container */}
                                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#d0f3fa] text-[#007b8b] flex items-center justify-center text-2xl shrink-0">
                                    <DynamicIcon name={feat.icon} />
                                </div>

                                {/* Title */}
                                <h4 className="text-[15px] sm:text-[16px] font-bold text-[#083c48] tracking-tight">
                                    {feat.title}
                                </h4>

                                {/* Subtitle */}
                                <p className="text-[12px] sm:text-[13px] text-[#5a7184] font-normal leading-normal">
                                    {feat.subtitle}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Pricing Table */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#007b8b] text-white text-[14px]">
                                    <th className="py-4 px-6 font-bold">Item</th>
                                    <th className="py-4 px-6 font-bold text-center">Regular Price (₹)</th>
                                    <th className="py-4 px-6 font-bold text-center">Premium Price (₹)</th>
                                    <th className="py-4 px-6 font-bold">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-[14px] text-[#083c48]">
                                {pricing.pricingTable.map((row: PriceItem, index: number) => (
                                    <tr
                                        key={row.id}
                                        className={index % 2 === 0 ? "bg-white" : "bg-[#f8fcff]"}
                                    >
                                        <td className="py-3.5 px-6 font-bold">{row.item}</td>
                                        <td className="py-3.5 px-6 font-semibold text-center">₹{row.regularPrice}</td>
                                        <td className="py-3.5 px-6 font-semibold text-center text-[#007b8b]">
                                            ₹{row.premiumPrice}
                                        </td>
                                        <td className="py-3.5 px-6 text-[#5a7184] text-[13px]">{row.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}