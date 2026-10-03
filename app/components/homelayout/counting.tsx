"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { data } from "@/app/data";
import type { CountingData } from "@/app/data";
import { motion } from "framer-motion";
import { BsTrophy, BsClipboardCheck, BsPeople, BsClipboardData } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { FiX } from "react-icons/fi";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BsTrophy,
  BsClipboardCheck,
  BsPeople,
  BsClipboardData,
};

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}

// 0 se target number tak smoothly animate karne ke liye component
function CounterNumber({ value, isVisible }: { value: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  // Example: "500k+" -> target: 500, suffix: "k+"
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const prefix = match ? match[1] : "";
  const target = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : "";

  useEffect(() => {
    if (!isVisible || !target) return;

    let start = 0;
    const duration = 2000; // 2 seconds animation
    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutQuad = (t: number) => t * (2 - t);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuad(progress);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, target]);

  return (
    <span>
      {prefix}
      {isVisible ? count : 0}
      {suffix}
    </span>
  );
}

export default function Counting() {
  const countingData = (data as any).counting as CountingData;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Section visible hone par hi count trigger karega
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect(); // Ek hi baar animate ho
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 pb-10 xl:pb-14 z-10">
      {/* Dark background */}
      <div
        className="absolute left-0 w-full bg-[#113a45] -z-10
                      top-[80px] sm:top-[120px] lg:top-[150px] xl:top-[180px]
                      bottom-0"
      ></div>

      <div className="max-w-[1360px] mx-auto px-6 xl:px-12 relative">
        {/* Top Image / Video Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onClick={() => setIsVideoOpen(true)}
          className="relative w-full h-[240px] sm:h-[360px] lg:h-[450px] xl:h-[540px] mb-10 xl:mb-14 rounded-[20px] overflow-hidden shadow-2xl group cursor-pointer"
        >
          <Image
            src={countingData.videoImage}
            alt="Video Thumbnail"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>

          {/* Play Button & Ripples */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white animate-[ping_2s_ease-out_infinite]"></div>
            <div className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-white animate-[ping_2.5s_ease-out_infinite]"></div>
            <div className="absolute w-36 h-36 sm:w-40 sm:h-40 rounded-full border border-white animate-[ping_3s_ease-out_infinite]"></div>

            <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center text-[#0b2d4a] z-10 shadow-[0_0_20px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-300">
              <FaPlay className="text-[18px] sm:text-[20px] ml-1" />
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/10"
        >
          {countingData.stats.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex items-center justify-center lg:justify-start gap-4 xl:gap-5 ${
                idx > 0 ? "lg:pl-8 xl:pl-10" : "lg:pl-4 xl:pl-6"
              }`}
            >
              {/* Icon */}
              <div className="shrink-0 flex items-center justify-center">
                <DynamicIcon
                  name={stat.icon}
                  className="text-[44px] xl:text-[52px] text-white opacity-95"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-[32px] xl:text-[38px] leading-[1.1] mb-1 tracking-wide">
                  <CounterNumber value={stat.number} isVisible={hasAnimated} />
                </span>
                <span className="text-white/80 text-[13px] xl:text-[14px] font-medium tracking-wide">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      {isMounted &&
        isVideoOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#292726] bg-opacity-95"
            onClick={() => setIsVideoOpen(false)}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 bg-[#1c1c1c] text-white flex items-center justify-center rounded-md hover:bg-black transition-colors"
            >
              <FiX className="text-xl" />
            </button>
            <div
              className="relative w-full max-w-4xl aspect-video px-4 sm:px-0"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`${countingData.videoUrl}?autoplay=1`}
                title="Video"
                className="w-full h-full rounded-xl shadow-2xl border-4 border-white/10"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}