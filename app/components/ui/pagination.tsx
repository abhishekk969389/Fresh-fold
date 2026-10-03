"use client";

import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const generatePagination = () => {
    const items = [];
    
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(i);
      }
    } else {
      if (currentPage <= 3) {
        items.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        items.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        items.push(1, '...', currentPage, '...', totalPages);
      }
    }
    return items;
  };
  
  const paginationItems = generatePagination();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center gap-2 mt-6"
    >
      <button 
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-10 h-10 rounded-full flex items-center justify-center bg-[#e6f7f9] text-[#00bcd4] hover:bg-[#00bcd4] hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FiChevronLeft size={22} />
      </button>
      
      {paginationItems.map((item, index) => {
        if (item === '...') {
          return (
            <span key={`dots-${index}`} className="w-10 h-10 flex items-center justify-center text-[#0b2d4a] font-bold">
              ...
            </span>
          );
        }
        
        const pageNumber = item as number;
        const isActive = pageNumber === currentPage;
        
        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all text-[15px] ${
              isActive 
                ? "bg-[#00bcd4] text-white" 
                : "bg-[#e6f7f9] text-[#0b2d4a] hover:bg-[#00bcd4] hover:text-white"
            }`}
          >
            {pageNumber}
          </button>
        );
      })}
      
      <button 
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-10 h-10 rounded-full flex items-center justify-center bg-[#e6f7f9] text-[#00bcd4] hover:bg-[#00bcd4] hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FiChevronRight size={22} />
      </button>
    </motion.div>
  );
}
