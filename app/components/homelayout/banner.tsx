import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";

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
    <li className="flex flex-col items-center text-center gap-[calc(4*var(--u))] px-[calc(4*var(--u))]">
      <span className="flex items-center justify-center w-[calc(40*var(--u))] h-[calc(40*var(--u))] rounded-full bg-teal-light/70 text-teal text-[length:calc(20*var(--u))] shadow-[0_4px_12px_rgba(10,75,86,0.1)]">
        <DynamicIcon name={item.icon} />
      </span>
      <span className="max-w-[calc(78*var(--u))] text-[length:calc(10.5*var(--u))] font-semibold leading-[1.15] text-navy">
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
          className="absolute inset-0 bg-linear-to-r from-white/95 via-white/80 to-white/40 lg:from-white/10 lg:via-transparent lg:to-transparent"
          aria-hidden="true"
        />

        {/* ── Left content ── */}
        <div className="relative z-10 px-[calc(28*var(--u))] pt-[calc(48*var(--u))] pb-[calc(56*var(--u))] lg:absolute lg:left-[max(1.5rem,calc(50%-680px+1.5rem))] xl:left-[max(3rem,calc(50%-680px+3rem))] lg:bottom-[calc(75*var(--s))] lg:w-[46%] lg:p-0">
          <p className="inline-flex items-center gap-[calc(12*var(--u))] text-[length:calc(9.5*var(--u))] font-semibold uppercase tracking-[0.28em] text-navy">
            <span className="block w-[calc(22*var(--u))] h-px bg-navy/70 shrink-0" aria-hidden="true" />
            {eyebrow}
            <span className="block w-[calc(22*var(--u))] h-px bg-navy/70 shrink-0" aria-hidden="true" />
          </p>

          <h1 className="mt-[calc(6*var(--u))] text-[length:calc(53*var(--u))] font-extrabold leading-[0.95] tracking-[-0.01em]">
            <span className="block text-navy">{titleLine1}</span>
            <span className="block text-teal">{titleLine2}</span>
          </h1>

          <p className="mt-[calc(10*var(--u))] max-w-[calc(340*var(--u))] text-[length:calc(13.5*var(--u))] leading-[1.45] text-navy/85">
            {description}
          </p>

          <ul className="mt-[calc(8*var(--u))] grid grid-cols-4 max-w-[calc(390*var(--u))] list-none [&>li+li]:border-l [&>li+li]:border-navy/15">
            {features.map((item) => (
              <FeatureItem key={item.id} item={item} />
            ))}
          </ul>

          <div className="mt-[calc(16*var(--u))] flex flex-wrap items-center gap-[calc(18*var(--u))]">
            <Link
              href={primaryCta.href}
              className="group flex items-center gap-[calc(14*var(--u))] px-[calc(20*var(--u))] h-[calc(36*var(--u))] bg-gold text-navy text-[length:calc(12.5*var(--u))] font-bold rounded-full shadow-[0_4px_14px_rgba(251,192,45,0.35)] transition-[transform,filter] hover:-translate-y-0.5 hover:brightness-95"
            >
              {primaryCta.label}
              <LuArrowRight className="text-[length:calc(15*var(--u))] transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href={secondaryCta.href}
              className="group flex items-center gap-[calc(10*var(--u))] text-[length:calc(10.5*var(--u))] font-medium text-navy"
            >
              <span className="flex items-center justify-center w-[calc(32*var(--u))] h-[calc(32*var(--u))] rounded-full border-2 border-teal bg-white text-navy text-[length:calc(12*var(--u))] transition-colors group-hover:bg-teal group-hover:text-white">
                <LuPlay className="ml-[calc(2*var(--u))] fill-current" />
              </span>
              <span className="pb-[calc(3*var(--u))] border-b border-teal/60">{secondaryCta.label}</span>
            </Link>
          </div>
        </div>

        {/* ── Right teal panel highlights ── */}
        <ul className="hidden lg:flex absolute z-10 left-[87.6%] right-[1.5%] top-[calc(20*var(--u))] flex-col list-none">
          {highlights.map((item) => (
            <HighlightItem key={item.id} item={item} />
          ))}
        </ul>

        {/* ── Text on the hanging tag in the image ── */}
        <div className="hidden lg:flex absolute z-10 left-[85.4%] bottom-[calc(80*var(--s))] w-[5.4%] h-[calc(65*var(--s))] flex-col items-center justify-center gap-[calc(4*var(--s))] text-center text-navy">
          <span className="font-serif italic text-[length:calc(8.5*var(--s))] leading-tight">{tagText}</span>
          <LuHeart className="text-teal fill-current text-[length:calc(8*var(--s))]" />
        </div>

        {/* ── Bottom wave strip ── */}
        <ul className="relative z-10 grid grid-cols-3 bg-teal-dark px-3 py-4 list-none lg:flex lg:items-center lg:absolute lg:left-[max(1.25rem,calc(50%-680px+1.25rem))] lg:bottom-[calc(18*var(--s))] lg:bg-transparent lg:p-0">
          {bottomFeatures.map((item, idx) => (
            <li key={item.id} className="flex items-center justify-center">
              <span className="flex flex-col lg:flex-row items-center gap-1.5 lg:gap-[calc(10*var(--s))] px-2 lg:px-[calc(20*var(--s))] text-center text-white text-[12px] lg:text-[length:calc(10.5*var(--s))] font-medium lg:whitespace-nowrap">
                <DynamicIcon name={item.icon} className="text-[18px] lg:text-[length:calc(18*var(--s))] text-white/90" />
                {item.label}
              </span>
              {idx < bottomFeatures.length - 1 && (
                <span className="hidden lg:block w-px h-[calc(22*var(--s))] bg-white/25" aria-hidden="true" />
              )}
            </li>
          ))}
        </ul>

        {/* ── Script tagline ── */}
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
    </section>
  );
}
