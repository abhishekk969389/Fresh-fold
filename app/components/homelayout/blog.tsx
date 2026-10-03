"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { data } from "@/app/data";
import type { BlogData } from "@/app/data";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";

import Pagination from "@/app/components/ui/pagination";

interface BlogProps {
  isPage?: boolean;
}

export default function Blog({ isPage = false }: BlogProps = {}) {
  const blogData = (data as any).blog as BlogData;
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 6;

  const totalPages = isPage ? Math.ceil(blogData.posts.length / itemsPerPage) : 0;

  // Use all posts for carousel mode to allow scrolling
  const displayedPosts = isPage
    ? blogData.posts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : blogData.posts;

  const scrollCard = (direction: 'left' | 'right') => {
    if (carouselRef.current && carouselRef.current.children[0]) {
      const card = carouselRef.current.children[0] as HTMLElement;
      const gap = window.innerWidth >= 1280 ? 24 : 20;
      const scrollAmount = card.offsetWidth + gap;
      carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const handlePrev = () => scrollCard('left');
  const handleNext = () => scrollCard('right');

  const handleDotClick = (idx: number) => {
    setActiveIndex(idx);
    if (carouselRef.current && carouselRef.current.children[idx]) {
      const child = carouselRef.current.children[idx] as HTMLElement;
      carouselRef.current.scrollTo({
        left: child.offsetLeft - carouselRef.current.offsetLeft - 16,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current && carouselRef.current.children[0]) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const card = carouselRef.current.children[0] as HTMLElement;
      const gap = window.innerWidth >= 1280 ? 24 : 20;
      const cardWidth = card.offsetWidth + gap;
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < displayedPosts.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <section className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="max-w-[1360px] mx-auto px-6 xl:px-12 relative">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center text-center mb-0 sm:mb-2"
        >
          <div className="flex items-center gap-4 mb-2">
            <span className="w-12 h-[2px] bg-[#fbbf24]"></span>
            <span className="text-[#00bcd4] font-bold tracking-widest text-[12px] uppercase">{blogData.tag}</span>
            <span className="w-12 h-[2px] bg-[#fbbf24]"></span>
          </div>

          <h2 className="text-[36px] sm:text-[42px] lg:text-[46px] font-extrabold text-[#0b2d4a] leading-[0.9] mb-2">
            {blogData.titleLine1} <span className="text-[#00bcd4]">{blogData.titleLine2}</span>
          </h2>

          <p className="text-[#5a7184] text-[16px] max-w-[600px] leading-relaxed mb-2 lg:mb-0">
            {blogData.subtitle}
          </p>

          {/* Absolute Button for Desktop (Aligned to the right) */}
          {!isPage && (
            <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 lg:right-16 xl:right-12 2xl:right-8">
              <Link
                href={blogData.ctaLink}
                className="bg-[#073c47] text-white px-8 py-3 rounded-full font-bold text-[15px] shadow-lg hover:bg-[#00bcd4] transition-colors flex items-center gap-2"
              >
                {blogData.ctaText}
                <GoArrowRight className="text-[16px] xl:text-[18px] mr-1" />
              </Link>
            </div>
          )}
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full group">
          {/* Navigation Arrows */}
          {!isPage && (
            <>
              <button
                onClick={handlePrev}
                className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-0 xl:-left-6 2xl:-left-12 w-12 h-12 xl:w-14 xl:h-14 bg-white rounded-full shadow-[0_5px_20px_rgba(0,0,0,0.12)] items-center justify-center text-[#073c47] hover:bg-[#00bcd4] hover:text-white transition-colors z-20"
              >
                <FaChevronLeft className="text-[16px] xl:text-[18px] mr-1" />
              </button>
              <button
                onClick={handleNext}
                className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-0 xl:-right-6 2xl:-right-12 w-12 h-12 xl:w-14 xl:h-14 bg-white rounded-full shadow-[0_5px_20px_rgba(0,0,0,0.12)] items-center justify-center text-[#073c47] hover:bg-[#00bcd4] hover:text-white transition-colors z-20"
              >
                <FaChevronRight className="text-[16px] xl:text-[18px] ml-1" />
              </button>
            </>
          )}

          {/* Cards Grid/Flex Wrapper to hide edge overflow */}
          <div className={!isPage ? "lg:px-16 xl:px-12 2xl:px-8 w-full" : "w-full"}>
            <div 
              ref={carouselRef}
              onScroll={!isPage ? handleScroll : undefined}
              className={
              isPage
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-4 px-4 sm:px-0 mx-auto w-full"
                : "flex gap-5 xl:gap-6 overflow-x-auto pb-8 pt-4 lg:px-0 snap-x snap-mandatory hide-scrollbar scroll-smooth"
            }>
            {displayedPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: isPage ? idx * 0.15 : (idx < 3 ? idx * 0.15 : 0) }}
                className={`shrink-0 w-full sm:w-[340px] ${!isPage ? 'lg:w-[calc((100%-2.5rem)/3)] xl:w-[calc((100%-3rem)/3)]' : 'lg:w-auto'} snap-center flex flex-col h-full`}
              >
                <Link
                  href={`/blogdetails/${post.id}`}
                  className="bg-white rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100/50 flex flex-col h-full cursor-pointer hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all duration-300"
                >
                  {/* Image Section */}
                  <div className="relative w-full h-[200px] xl:h-[220px] shrink-0">
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>

                    {/* Date Badge */}
                    <div className="absolute top-4 left-4 xl:top-5 xl:left-5 bg-[#073c47] text-white rounded-[14px] px-3 py-2 flex flex-col items-center justify-center min-w-[50px] shadow-lg">
                      <span className="text-[18px] xl:text-[20px] font-extrabold leading-none">{post.date.day}</span>
                      <span className="text-[11px] font-bold mt-1 tracking-wider">{post.date.month}</span>
                      <span className="text-[9px] xl:text-[10px] opacity-80 mt-0.5">{post.date.year}</span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4 xl:bottom-5 xl:left-5 bg-[#00bcd4] text-white px-4 py-1.5 rounded-full text-[10px] xl:text-[11px] font-bold tracking-widest uppercase shadow-md z-10">
                      {post.category}
                    </div>
                  </div>

                  {/* Body Section */}
                  <div className="px-5 xl:px-7 pt-4 xl:pt-5 pb-5 xl:pb-6 flex-1 flex flex-col bg-white">
                    <h4 className="text-[17px] xl:text-[19px] font-bold text-[#0b2d4a] leading-snug mb-2.5 group-hover:text-[#00bcd4] transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-[#5a7184] text-[13px] xl:text-[14px] leading-relaxed line-clamp-3 mb-4 flex-1">
                      {post.description}
                    </p>

                    {/* Footer (Author & Read More) */}
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-100">
                          <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[12px] xl:text-[13px] text-[#5a7184] truncate">
                            By <span className="font-bold text-[#0b2d4a]">{post.author.name}</span>
                          </span>
                          <span className="text-[11px] text-gray-400 mt-0.5">{post.readTime}</span>
                        </div>
                      </div>

                      <span className="text-[#00bcd4] font-bold text-[13px] flex items-center gap-1 group-hover:text-[#073c47] transition-colors whitespace-nowrap">
                        Read More <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        {!isPage && (
          <div className="hidden md:flex items-center justify-center gap-2">
            {displayedPosts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === activeIndex ? 'bg-[#00bcd4]' : 'bg-[#e2e8f0] hover:bg-[#cbd5e1]'
                  }`}
              />
            ))}
          </div>
        )}

        {/* Pagination (Page Mode) */}
        {isPage && totalPages > 1 && (
          <div className="mt-6">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}

      </div>
    </section>
  );
}
