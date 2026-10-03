"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";

import {
  LuLeaf,
  LuShirt,
  LuTruck,
  LuShieldCheck,
  LuSparkles,
  LuUsers,
  LuHeart,
  LuSmile,
  LuPlay,
  LuArrowRight,
} from "react-icons/lu";
import { FaLeaf } from "react-icons/fa";

import { data } from "@/app/data";
import type { BannerData, BannerIconItem } from "@/app/data";

const script = Dancing_Script({ subsets: ["latin"], weight: ["600", "700"] });

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaLeaf,
  LuLeaf,
  LuShirt,
  LuTruck,
  LuShieldCheck,
  LuSparkles,
  LuUsers,
  LuHeart,
  LuSmile,
};

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}

const bannerData = (data as { banner: BannerData }).banner;

function FeatureItem({ item }: { item: BannerIconItem }) {
  return (
    <li className="flex flex-col items-center text-center gap-1.5 sm:gap-2 px-1 sm:px-2 lg:gap-[calc(4*var(--u))] lg:px-[calc(4*var(--u))]">
      <span className="flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-teal-light/70 text-teal text-lg sm:text-xl md:text-2xl shadow-[0_4px_12px_rgba(10,75,86,0.1)] lg:w-[calc(40*var(--u))] lg:h-[calc(40*var(--u))] lg:text-[length:calc(20*var(--u))]">
        <DynamicIcon name={item.icon} />
      </span>
      <span className="text-[11px] sm:text-xs md:text-[13px] font-semibold leading-tight text-navy max-w-[85px] sm:max-w-[100px] lg:max-w-[calc(78*var(--u))] lg:text-[length:calc(10.5*var(--u))] lg:leading-[1.15]">
        {item.label}
      </span>
    </li>
  );
}

function HighlightItem({ item }: { item: BannerIconItem }) {
  return (
    <li className="flex items-center gap-[calc(14*var(--u))] py-[calc(12*var(--u))] border-b border-white/20 last:border-none">
      <span className="flex items-center justify-center w-[calc(28*var(--u))] h-[calc(28*var(--u))] text-white text-[length:calc(26*var(--u))] shrink-0">
        <DynamicIcon name={item.icon} />
      </span>
      <span className="max-w-[calc(70*var(--u))] text-[length:calc(9*var(--u))] font-medium uppercase leading-snug tracking-wide text-white">
        {item.label}
      </span>
    </li>
  );
}

export default function Banner() {
  const {
    image,
    eyebrow,
    titleLine1,
    titleLine2,
    description,
    features,
    primaryCta,
    secondaryCta,
    highlights,
    tagText,
    bottomFeatures,
    tagline,
  } = bannerData;

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="@container w-full max-w-[1920px] mx-auto overflow-hidden" aria-label="Welcome banner">
      <div className="hero-banner relative w-full">
        {/* Background image */}
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          className="object-cover object-[70%_center] lg:object-bottom"
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-white/95 via-white/85 to-white/40 lg:from-white/10 lg:via-transparent lg:to-transparent"
          aria-hidden="true"
        />

        {/* ── Left content ── */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-5 sm:px-8 md:px-12 pt-10 sm:pt-14 md:pt-16 pb-12 sm:pb-16 md:pb-20 max-w-xl md:max-w-2xl lg:max-w-none lg:absolute lg:left-[max(1.5rem,calc(50%-680px+1.5rem))] xl:left-[max(3rem,calc(50%-680px+3rem))] lg:bottom-[calc(75*var(--s))] lg:w-[46%] lg:p-0"
        >
          {/* Eyebrow */}
          <p className="inline-flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs md:text-[13px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-navy lg:gap-[calc(12*var(--u))] lg:text-[length:calc(9.5*var(--u))] lg:tracking-[0.28em]">
            <span className="block w-5 sm:w-7 md:w-8 h-px bg-navy/70 shrink-0 lg:w-[calc(22*var(--u))]" aria-hidden="true" />
            {eyebrow}
            <span className="block w-5 sm:w-7 md:w-8 h-px bg-navy/70 shrink-0 lg:w-[calc(22*var(--u))]" aria-hidden="true" />
          </p>

          {/* Heading */}
          <h1 className="mt-2.5 sm:mt-3 md:mt-4 text-[32px] sm:text-[42px] md:text-[50px] font-extrabold leading-[1.05] tracking-[-0.01em] lg:mt-[calc(6*var(--u))] lg:text-[length:calc(53*var(--u))] lg:leading-[0.95]">
            <span className="block text-navy">{titleLine1}</span>
            <span className="block text-teal">{titleLine2}</span>
          </h1>

          {/* Description */}
          <p className="mt-3 sm:mt-4 md:mt-5 text-[13px] sm:text-[15px] md:text-[16px] leading-relaxed text-navy/85 max-w-lg lg:mt-[calc(10*var(--u))] lg:max-w-[calc(340*var(--u))] lg:text-[length:calc(13.5*var(--u))] lg:leading-[1.45]">
            {description}
          </p>

          {/* 4 Features */}
          <ul className="mt-5 sm:mt-6 md:mt-7 grid grid-cols-4 max-w-md sm:max-w-lg md:max-w-xl list-none [&>li+li]:border-l [&>li+li]:border-navy/15 lg:mt-[calc(8*var(--u))] lg:max-w-[calc(390*var(--u))]">
            {features.map((item) => (
              <FeatureItem key={item.id} item={item} />
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="mt-6 sm:mt-8 md:mt-9 flex flex-wrap items-center gap-4 sm:gap-6 lg:mt-[calc(16*var(--u))] lg:gap-[calc(18*var(--u))]">
            <Link
              href={primaryCta.href}
              className="group flex items-center gap-2.5 sm:gap-3 px-5 sm:px-6 h-11 sm:h-12 bg-gold text-navy text-xs sm:text-sm md:text-[15px] font-bold rounded-full shadow-[0_4px_14px_rgba(251,192,45,0.35)] transition-[transform,filter] hover:-translate-y-0.5 hover:brightness-95 lg:gap-[calc(14*var(--u))] lg:px-[calc(20*var(--u))] lg:h-[calc(36*var(--u))] lg:text-[length:calc(12.5*var(--u))]"
            >
              {primaryCta.label}
              <LuArrowRight className="text-sm sm:text-base transition-transform group-hover:translate-x-1 lg:text-[length:calc(15*var(--u))]" />
            </Link>

            <button
              onClick={(e) => {
                e.preventDefault();
                setIsVideoOpen(true);
              }}
              className="group flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-[14px] font-medium text-navy cursor-pointer lg:gap-[calc(10*var(--u))] lg:text-[length:calc(10.5*var(--u))]"
            >
              <span className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-teal bg-white text-navy text-xs sm:text-sm transition-colors group-hover:bg-teal group-hover:text-white lg:w-[calc(32*var(--u))] lg:h-[calc(32*var(--u))] lg:text-[length:calc(12*var(--u))]">
                <LuPlay className="ml-0.5 fill-current" />
              </span>
              <span className="pb-0.5 border-b border-teal/60">{secondaryCta.label}</span>
            </button>
          </div>
        </motion.div>

        {/* ── Right teal panel highlights (Desktop only untouched) ── */}
        <ul className="hidden lg:flex absolute z-10 left-[87.6%] right-[1.5%] top-[calc(20*var(--u))] flex-col list-none">
          {highlights.map((item) => (
            <HighlightItem key={item.id} item={item} />
          ))}
        </ul>

        {/* ── Text on the hanging tag in the image (Desktop only untouched) ── */}
        <div className="hidden lg:flex absolute z-10 left-[85.4%] bottom-[calc(80*var(--s))] w-[5.4%] h-[calc(65*var(--s))] flex-col items-center justify-center gap-[calc(4*var(--s))] text-center text-navy">
          <span className="font-serif italic text-[length:calc(8.5*var(--s))] leading-tight">{tagText}</span>
          <LuHeart className="text-teal fill-current text-[length:calc(8*var(--s))]" />
        </div>

        {/* ── Bottom wave strip ── */}
        <ul className="relative z-10 grid grid-cols-3 bg-teal-dark px-3 py-4 list-none lg:flex lg:items-center lg:absolute lg:left-[max(1.25rem,calc(50%-680px+1.25rem))] lg:bottom-[calc(18*var(--s))] lg:bg-transparent lg:p-0">
          {bottomFeatures.map((item, idx) => (
            <li key={item.id} className="flex items-center justify-center">
              <span className="flex flex-col lg:flex-row items-center gap-1.5 lg:gap-[calc(10*var(--s))] px-2 lg:px-[calc(20*var(--s))] text-center text-white text-[12px] sm:text-sm lg:text-[length:calc(10.5*var(--s))] font-medium lg:whitespace-nowrap">
                <DynamicIcon name={item.icon} className="text-[18px] sm:text-xl lg:text-[length:calc(18*var(--s))] text-white/90" />
                {item.label}
              </span>
              {idx < bottomFeatures.length - 1 && (
                <span className="hidden lg:block w-px h-[calc(22*var(--s))] bg-white/25" aria-hidden="true" />
              )}
            </li>
          ))}
        </ul>

        {/* ── Script tagline (Desktop only untouched) ── */}
        <p
          className={`${script.className} hidden lg:block absolute z-10 right-[2.2%] bottom-[calc(14*var(--s))] -rotate-[8deg] text-right text-white text-[length:calc(18*var(--s))] leading-[1.05]`}
        >
          {tagline.split(" ").slice(0, 2).join(" ")}
          <br />
          {tagline.split(" ").slice(2).join(" ")}
          <svg
            viewBox="0 0 100 10"
            className="block ml-auto mt-[calc(2*var(--s))] w-[calc(80*var(--s))] h-[calc(7*var(--s))] text-gold"
            aria-hidden="true"
          >
            <path d="M2 8 Q 50 0 98 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </p>
      </div>

      {/* Video Modal via Portal */}
      {isMounted && isVideoOpen && createPortal(
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#292726] bg-opacity-95" onClick={() => setIsVideoOpen(false)}>
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 bg-[#1c1c1c] text-white flex items-center justify-center rounded-md hover:bg-black transition-colors"
          >
            <FiX className="text-xl" />
          </button>
          <div className="relative w-full max-w-4xl aspect-video px-4 sm:px-0" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={secondaryCta.videoUrl}
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