"use client";

import React from "react";
import Image from "next/image";

import {
    AppAwardsData,
    RecognitionCardItem,
    RecognitionGroup,
} from "@/app/data";
import rawData from "@/app/data/data.json";

export default function AwardsSection() {
    const data: AppAwardsData = rawData as AppAwardsData;
    const section: RecognitionGroup = data.awardsSection;

    return (
        <section className="relative w-full  mt-8 mb-8 sm:mb-10 md:mb-12 lg:mb-14">
            {/* Decorative Glow */}
            <div className="absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-sky-100/40 blur-3xl pointer-events-none" />
            <div className="max-w-[1360px] mx-auto px-6 xl:px-12 relative z-10 text-center">

                {/* Header Section */}
                <div className="flex items-center justify-center gap-4 mb-2">
                    <span className="w-10 h-[1.5px] bg-[#00bcd4]"></span>
                    <span className="text-[#00bcd4] font-bold tracking-widest text-[14px] uppercase">{section.tag}</span>
                    <span className="w-10 h-[1.5px] bg-[#00bcd4]"></span>
                </div>

                <h2 className="text-[36px] sm:text-[44px] xl:text-[48px] font-extrabold leading-[0.9] mb-1 tracking-tight">
                    <span className="text-[#0b2d4a]">{section.titlePrefix} </span>
                    <span className="text-[#0092a3]">{section.titleHighlight}</span>
                    <div className="w-14 h-1 bg-yellow-400 mx-auto rounded-full mt-2"></div>
                </h2>


                 <p className="text-[#5a7184] text-[16px] sm:text-[17px] max-w-xl mx-auto mb-6">
                    {section.description}
                </p>


                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
                    {section.items.map((item: RecognitionCardItem) => (
                        <div
                            key={item.id}
                            className="group bg-white rounded-[24px] p-4.5 sm:p-5 border border-gray-100/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
                        >
                            <div className="relative w-full h-[165px] sm:h-[175px] rounded-[18px] overflow-hidden bg-[#fbfdff] border border-gray-100 flex items-center justify-center mb-4">
                                <Image
                                    src={item.image.src}
                                    alt={item.image.alt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <div className="space-y-1 w-full px-1">
                                <h4 className="text-[15px] sm:text-[15.5px] font-bold text-[#083c48] leading-snug">
                                    {item.title}
                                </h4>
                                <p className="text-[12px] sm:text-[12.5px] text-[#718797] leading-relaxed">
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}