"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

import {
  AppCertificationsData,
  RecognitionCardItem,
  RecognitionGroup,
} from "@/app/data";
import rawData from "@/app/data/data.json";
import Pagination from "@/app/components/ui/pagination";

export default function CertificationsSection() {
  const data: AppCertificationsData = rawData as AppCertificationsData;
  const section: RecognitionGroup = data.certificationsSection;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(section.items.length / itemsPerPage);
  const currentItems = section.items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIdx((prev) =>
      prev !== null ? (prev + 1) % section.items.length : null
    );
  }, [section.items.length]);

  const handlePrev = useCallback(() => {
    setSelectedIdx((prev) =>
      prev !== null
        ? (prev - 1 + section.items.length) % section.items.length
        : null
    );
  }, [section.items.length]);

  const handleClose = useCallback(() => {
    setSelectedIdx(null);
  }, []);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (selectedIdx === null) return;

    // Body scroll freeze jab modal open ho
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIdx, handleClose, handleNext, handlePrev]);

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      {/* Decorative Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 -left-20 w-80 h-80 rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

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
          <span className="text-[#00bcd4] font-bold tracking-widest text-[14px] uppercase">
            {section.tag}
          </span>
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

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {currentItems.map((item: RecognitionCardItem, idx: number) => {
            const actualGlobalIndex = (currentPage - 1) * itemsPerPage + idx;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedIdx(actualGlobalIndex)}
                className="group bg-white rounded-[24px] p-4.5 sm:p-5 border border-gray-100/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
              >
                <div className="relative w-full h-[165px] sm:h-[175px] rounded-[18px] overflow-hidden bg-[#fbfdff] border border-gray-100 flex items-center justify-center mb-4">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
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

      {/* Fullscreen Modal rendered through Portal over entire viewport & navbar */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedIdx !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 top-0 left-0 w-screen h-screen bg-[#222222] z-[999999] flex flex-col items-center justify-center select-none"
                onClick={handleClose}
              >
                {/* Close Button Top Right */}
                <button
                  onClick={handleClose}
                  className="fixed top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 flex items-center justify-center text-white/70 hover:text-white bg-black/30 hover:bg-black/60 rounded-md transition-all z-[1000000] cursor-pointer"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Left Arrow Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/75 text-white/80 hover:text-white transition-all z-[1000000] cursor-pointer"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Right Arrow Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/75 text-white/80 hover:text-white transition-all z-[1000000] cursor-pointer"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Main Large Image Display */}
                <div
                  className="relative w-[88vw] max-w-[1050px] h-[65vh] sm:h-[72vh] flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={section.items[selectedIdx].image.src}
                    alt={section.items[selectedIdx].image.alt}
                    fill
                    priority
                    className="object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Bottom Caption Pill Badge */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="fixed bottom-6 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-black/55 text-white/90 text-[13px] sm:text-[14px] font-normal tracking-wide shadow-lg pointer-events-none"
                >
                  {section.items[selectedIdx].title}
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}