"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

import * as FiIcons from "react-icons/fi";
import * as LuIcons from "react-icons/lu";

import {
    AppBookingData,
    BookingSectionData,
    FormField,
    FeaturePoint,
    ContactInfoItem,
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
    const IconComponent: IconType = iconMap[name] || FiIcons.FiCheck;
    return <IconComponent className={className} />;
};

export default function BookingSection() {
    const data: AppBookingData = rawData as AppBookingData;
    const section: BookingSectionData = data.bookingSection;
    const [agreed, setAgreed] = useState<boolean>(false);

    return (
        <section className="relative w-full  mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-8 sm:mb-10 md:mb-12 lg:mb-14">
            {/* Google Cursive Font for Slogan */}
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
      `}</style>

            {/* Decorative Blur Circles in background */}
            <div className="absolute top-10 -left-20 w-80 h-80 rounded-full bg-cyan-100/50 blur-3xl pointer-events-none" />
            <div className="absolute top-10 -right-20 w-80 h-80 rounded-full bg-cyan-100/50 blur-3xl pointer-events-none" />

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
                    {section.descriptionLine1} {section.descriptionLine2}
                </motion.p>

                {/* Main Content Grid: items-stretch keeps both sides equal height */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

                    {/* Left Column: Form Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 bg-white rounded-[32px] p-6 sm:p-10 shadow-sm border border-gray-100 flex flex-col justify-between"
                    >
                        <div>
                            {/* Form Top Title with Icon */}
                            <div className="flex items-center gap-4 mb-8 text-left">
                                {/* Left Icon */}
                                <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 text-[#00bcd4] flex items-center justify-center text-3xl shrink-0 shadow-xs">
                                    <DynamicIcon name={section.formCard.headerIcon} />
                                </div>

                                {/* Text Wrapper - Strictly Left Aligned */}
                                <div className="flex flex-col items-start text-left">
                                    <h3 className="text-[22px] sm:text-[24px] font-extrabold text-[#083c48] leading-tight text-left m-0 p-0">
                                        {section.formCard.headerTitle}
                                    </h3>
                                    <p className="text-[14px] sm:text-[15px] text-[#718797] mt-0.5 text-left m-0 p-0">
                                        {section.formCard.headerSubtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Form Fields Grid */}
                            <form onSubmit={(e) => e.preventDefault()} className="space-y-5 text-left">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                                    {section.formCard.fields.map((field: FormField) => {
                                        const isColSpan2 = field.colSpan === 2;

                                        return (
                                            <div
                                                key={field.id}
                                                className={`${isColSpan2 ? "sm:col-span-2" : ""
                                                    } flex flex-col items-start text-left space-y-2 w-full`}
                                            >
                                                <label
                                                    htmlFor={field.id}
                                                    className="block text-[13.5px] sm:text-[14.5px] font-bold text-[#083c48] text-left"
                                                >
                                                    {field.label}{" "}
                                                    {field.required && (
                                                        <span className="text-red-500 font-bold">*</span>
                                                    )}
                                                </label>

                                                {/* Input Types */}
                                                {field.type === "textarea" ? (
                                                    <div className="relative w-full text-left">
                                                        <textarea
                                                            id={field.id}
                                                            name={field.name}
                                                            rows={field.id === "address" ? 3 : 3}
                                                            placeholder={field.placeholder}
                                                            required={field.required}
                                                            className={`w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-[14px] sm:text-[15px] text-[#083c48] placeholder-gray-400 focus:outline-none focus:border-[#00bcd4] focus:ring-2 focus:ring-[#00bcd4]/20 transition-all resize-none text-left ${field.icon ? "pl-11" : ""
                                                                }`}
                                                        />
                                                        {field.icon && (
                                                            <DynamicIcon
                                                                name={field.icon}
                                                                className="absolute left-4 top-4 text-gray-400 text-lg"
                                                            />
                                                        )}
                                                    </div>
                                                ) : field.type === "select" ? (
                                                    <div className="relative w-full text-left">
                                                        <select
                                                            id={field.id}
                                                            name={field.name}
                                                            required={field.required}
                                                            defaultValue=""
                                                            className={`w-full appearance-none rounded-2xl border border-gray-200 bg-white px-4 py-3 text-[14px] sm:text-[15px] text-[#083c48] focus:outline-none focus:border-[#00bcd4] focus:ring-2 focus:ring-[#00bcd4]/20 transition-all cursor-pointer text-left ${field.icon ? "pl-11" : ""
                                                                }`}
                                                        >
                                                            <option value="" disabled>
                                                                {field.placeholder}
                                                            </option>
                                                            {field.options?.map((opt) => (
                                                                <option key={opt.value} value={opt.value}>
                                                                    {opt.label}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        {field.icon && (
                                                            <DynamicIcon
                                                                name={field.icon}
                                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none"
                                                            />
                                                        )}
                                                        <FiIcons.FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-lg" />
                                                    </div>
                                                ) : (
                                                    <div className="relative w-full text-left">
                                                        <input
                                                            type={field.type}
                                                            id={field.id}
                                                            name={field.name}
                                                            placeholder={field.placeholder}
                                                            required={field.required}
                                                            className={`w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-[14px] sm:text-[15px] text-[#083c48] placeholder-gray-400 focus:outline-none focus:border-[#00bcd4] focus:ring-2 focus:ring-[#00bcd4]/20 transition-all text-left ${field.icon ? "pl-11" : ""
                                                                }`}
                                                        />
                                                        {field.icon && (
                                                            <DynamicIcon
                                                                name={field.icon}
                                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"
                                                            />
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Checkbox: Terms & Conditions */}
                                <div className="flex items-center justify-start gap-2.5 pt-2 text-left">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        checked={agreed}
                                        onChange={(e) => setAgreed(e.target.checked)}
                                        className="w-5 h-5 rounded-md border-gray-300 text-[#007b8b] focus:ring-[#00bcd4] cursor-pointer"
                                    />
                                    <label
                                        htmlFor="terms"
                                        className="text-[13.5px] sm:text-[14px] text-[#5a7184] cursor-pointer select-none text-left"
                                    >
                                        {section.formCard.termsText}{" "}
                                        <a
                                            href={section.formCard.termsLinkHref}
                                            className="text-[#00bcd4] font-bold hover:underline"
                                        >
                                            {section.formCard.termsLinkText}
                                        </a>
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-[#007b8b] hover:bg-[#006977] text-white py-4 rounded-2xl font-bold text-[16px] sm:text-[17px] flex items-center justify-center gap-3 transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99] mt-4 cursor-pointer"
                                >
                                    <DynamicIcon
                                        name={section.formCard.submitButton.icon}
                                        className="text-xl"
                                    />
                                    {section.formCard.submitButton.text}
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Right Column: Exactly Stretches to Match Form Height */}
                    <motion.div 
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 flex flex-col justify-between gap-6"
                    >

                        {/* Banner Image Container: flex-1 ensures it fills all remaining vertical space */}
                        <div className="relative w-full flex-1 min-h-[380px] rounded-[32px] overflow-hidden shadow-sm">
                            <Image
                                src={section.banner.image.src}
                                alt={section.banner.image.alt}
                                fill
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                priority
                                className="object-cover"
                            />

                            {/* Cursive Slogan */}
                            <div className="absolute top-6 right-6 text-right select-none pointer-events-none rotate-[-4deg]">
                                <div
                                    className="text-[28px] sm:text-[34px] font-bold text-[#0c2f3a] leading-[1.05]"
                                    style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
                                >
                                    {section.banner.floatingSloganLine1}
                                </div>
                                <div
                                    className="text-[32px] sm:text-[38px] font-bold text-[#0c2f3a] leading-[1.05]"
                                    style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
                                >
                                    {section.banner.floatingSloganLine2}
                                </div>
                                <div className="relative inline-block">
                                    <span
                                        className="text-[32px] sm:text-[38px] font-bold text-[#0c2f3a] leading-[1.05]"
                                        style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
                                    >
                                        {section.banner.floatingSloganLine3}
                                    </span>
                                    <span className="block h-[3.5px] w-full bg-[#f59e0b] rounded-full mt-0.5 shadow-xs" />
                                </div>
                            </div>

                            {/* White Overlay Box with Features */}
                            <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-white/80 space-y-3 max-w-[240px] w-full">
                                {section.banner.features.map((feat: FeaturePoint) => (
                                    <div key={feat.id} className="flex items-center gap-2.5">
                                        <div className="w-6 h-6 rounded-full bg-[#00bcd4] text-white flex items-center justify-center text-xs shrink-0 shadow-xs">
                                            <DynamicIcon name={feat.icon} />
                                        </div>
                                        <span className="text-[13px] sm:text-[13.5px] font-bold text-[#083c48] leading-tight">
                                            {feat.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Need Help Card: Anchored cleanly at the bottom */}
                        <div className="bg-[#e9f7fb] flex flex-col items-start text-left rounded-[28px] p-6 border border-cyan-100/80 space-y-4 shrink-0">
                            <div className="flex items-center gap-3.5">
                                <div className="w-13 h-13 rounded-full bg-[#007b8b] text-white flex items-center justify-center text-2xl shrink-0 shadow-xs">
                                    <DynamicIcon name={section.helpSection.icon} />
                                </div>
                                <div>
                                    <h4 className="text-[17px] sm:text-[18px] font-extrabold text-[#083c48]">
                                        {section.helpSection.title}
                                    </h4>
                                    <p className="text-[13px] text-[#5a7184]">
                                        {section.helpSection.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Contact Items Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-cyan-200/50">
                                {section.helpSection.contacts.map((contact: ContactInfoItem) => (
                                    <a
                                        key={contact.id}
                                        href={contact.href}
                                        className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-white/80 transition-colors group"
                                    >
                                        <div className="w-9 h-9 rounded-xl bg-white text-[#00bcd4] flex items-center justify-center text-lg shrink-0 shadow-xs group-hover:bg-[#007b8b] group-hover:text-white transition-colors">
                                            <DynamicIcon name={contact.icon} />
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <span className="text-[13px] font-bold text-[#083c48] truncate">
                                                {contact.title}
                                            </span>
                                            <span className="text-[11.5px] text-[#718797]">
                                                {contact.subtitle}
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}