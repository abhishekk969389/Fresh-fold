"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

import * as FiIcons from "react-icons/fi";
import * as LuIcons from "react-icons/lu";
import * as FaIcons from "react-icons/fa";

import {
    AppGalleryData,
    GalleryCategoryTab,
    GalleryMediaItem,
    GalleryMediaTypeTab,
    GallerySectionData,
} from "@/app/data";
import rawData from "@/app/data/data.json";

const iconMap: Record<string, IconType> = {
    ...FiIcons,
    ...LuIcons,
    ...FaIcons,
};

interface DynamicIconProps {
    name: string;
    className?: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className }) => {
    const IconComponent: IconType = iconMap[name] || FiIcons.FiCamera;
    return <IconComponent className={className} />;
};

export default function GallerySection() {
    const data: AppGalleryData = rawData as AppGalleryData;
    const section: GallerySectionData = data.gallerySection;

    // State 1: Photos vs Videos toggle
    const [activeMediaType, setActiveMediaType] = useState<"photo" | "video">("photo");

    // State 2: Category filter chips
    const [activeCategory, setActiveCategory] = useState<string>("all");

    // State 3: Lightbox Modal
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleOpen = (index: number) => setSelectedIndex(index);
    const handleClose = () => setSelectedIndex(null);
    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % filteredItems.length);
        }
    };
    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length);
        }
    };

    // Filtering Logic
    const filteredItems: GalleryMediaItem[] = section.items.filter((item: GalleryMediaItem) => {
        const matchesType = item.type === activeMediaType;
        const matchesCategory =
            activeCategory === "all" ? true : item.categoryId === activeCategory;
        return matchesType && matchesCategory;
    });

    return (
        <section className="relative w-full  mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-8 sm:mb-10 md:mb-12 lg:mb-14">
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

                {/* Top Media Type Toggle Buttons (Photos Gallery vs Videos Gallery) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-center justify-center gap-3 mb-8"
                >
                    {section.mediaTypeTabs.map((tab: GalleryMediaTypeTab) => {
                        const isActive = activeMediaType === tab.id;
                        return (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => {
                                    setActiveMediaType(tab.id);
                                    setActiveCategory("all"); // Reset category on type switch
                                }}
                                className={`flex items-center gap-2.5 px-6 py-2.5 rounded-xl font-bold text-[13.5px] sm:text-[14px] transition-all duration-200 cursor-pointer shadow-xs ${isActive
                                        ? "bg-[#007b8b] text-white shadow-sm"
                                        : "bg-[#eef8fb] text-[#083c48] hover:bg-[#e0f3f8]"
                                    }`}
                            >
                                <DynamicIcon name={tab.icon} className="text-lg" />
                                <span>
                                    {tab.label}
                                </span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* Category Filter Chips Bar */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none no-scrollbar"
                >
                    {section.categories.map((cat: GalleryCategoryTab) => {
                        const isActive = activeCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                type="button"
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-4 py-2 rounded-xl text-[12.5px] sm:text-[13px] font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer border ${isActive
                                        ? "bg-[#007b8b] text-white border-[#007b8b] shadow-xs"
                                        : "bg-white text-[#5a7184] border-gray-100 hover:border-cyan-200 hover:text-[#083c48]"
                                    }`}
                            >
                                {cat.name}
                            </button>
                        );
                    })}
                </motion.div>

                {/* Media Grid: 4 Columns */}
                {filteredItems.length === 0 ? (
                    <div className="text-center py-16 text-[#5a7184] text-sm">
                        No items available in this category for {activeMediaType === "photo" ? "Photos" : "Videos"}.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                        {filteredItems.map((item: GalleryMediaItem, index: number) => (
                            <motion.div
                                key={item.id}
                                onClick={() => handleOpen(index)}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative h-[180px] sm:h-[190px] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 bg-gray-50 border border-gray-100 cursor-pointer"
                            >
                                <Image
                                    src={item.image.src}
                                    alt={item.image.alt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Subtle Hover Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3.5">
                                    <span className="text-white text-[12px] font-semibold tracking-wide drop-shadow-sm">
                                        {item.title}
                                    </span>
                                </div>

                                {/* Video Play Badge for Video Items */}
                                {item.type === "video" && (
                                    <>
                                        <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                                            <div className="w-12 h-12 rounded-full bg-white/90 text-[#007b8b] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                                <FiIcons.FiPlay className="text-xl ml-0.5" />
                                            </div>
                                        </div>
                                        {item.duration && (
                                            <span className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-xs text-white text-[11px] font-bold px-2 py-0.5 rounded-md">
                                                {item.duration}
                                            </span>
                                        )}
                                    </>
                                )}
                            </motion.div>
                        ))}
                    </div>
                )}

            </div>

            {/* Lightbox Modal via Portal */}
            {isMounted && selectedIndex !== null && createPortal(
                <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#292726] bg-opacity-95" onClick={handleClose}>
                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-6 right-6 w-10 h-10 bg-[#1c1c1c] text-white flex items-center justify-center rounded-md hover:bg-black transition-colors"
                    >
                        <FiIcons.FiX className="text-xl" />
                    </button>

                    {/* Prev Arrow */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-6 w-12 h-12 bg-[#1c1c1c] text-white flex items-center justify-center rounded-full hover:bg-black transition-colors"
                    >
                        <FiIcons.FiChevronLeft className="text-2xl" />
                    </button>

                    {/* Next Arrow */}
                    <button
                        onClick={handleNext}
                        className="absolute right-6 w-12 h-12 bg-[#1c1c1c] text-white flex items-center justify-center rounded-full hover:bg-black transition-colors"
                    >
                        <FiIcons.FiChevronRight className="text-2xl" />
                    </button>

                    {/* Image Content */}
                    <div className="relative w-full max-w-4xl h-[70vh]" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={filteredItems[selectedIndex].image.src}
                            alt={filteredItems[selectedIndex].image.alt || filteredItems[selectedIndex].title}
                            fill
                            className="object-contain"
                        />
                        {/* Play overlay for videos inside lightbox */}
                        {filteredItems[selectedIndex].type === "video" && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-16 h-16 rounded-full bg-black/60 text-white flex items-center justify-center">
                                    <FiIcons.FiPlay className="text-3xl ml-1" />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Title Pill */}
                    <div className="absolute bottom-10 px-6 py-2.5 bg-[#4a3f38] text-white text-[13.5px] font-bold rounded-full shadow-md pointer-events-none">
                        {filteredItems[selectedIndex].title}
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
}