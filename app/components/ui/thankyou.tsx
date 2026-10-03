"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export default function ThankYouSec() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-[#063c4a] px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-transparent p-10 md:p-16 text-center"
      >
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-[#00bcd4]/10 rounded-full flex items-center justify-center relative">
            <div className="absolute inset-0 bg-[#00bcd4]/20 rounded-full animate-ping opacity-30"></div>
            <FiCheckCircle className="w-12 h-12 text-[#00bcd4] relative z-10" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Thank You!
        </h1>
        
        <p className="text-gray-200 text-lg md:text-xl mb-10 leading-relaxed max-w-lg mx-auto">
          Your request has been successfully received. Our team will review it and get back to you shortly. We appreciate you choosing <span className="font-bold text-[#ffc107]">FreshFold!</span>
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center gap-2 bg-[#ffc107] hover:bg-[#ffca28] text-[#063c4a] font-bold text-lg py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto"
          >
            Back to Home
            <FiArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            href="/services" 
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#00bcd4] text-[#00bcd4] hover:bg-[#00bcd4] hover:text-[#063c4a] font-bold text-lg py-3 px-8 rounded-full transition-all duration-300 w-full sm:w-auto"
          >
            Our Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
