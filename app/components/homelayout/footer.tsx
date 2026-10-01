"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin, FiClock, FiArrowUp } from "react-icons/fi";
import { data } from "@/app/data";
import type { FooterData } from "@/app/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
};

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}

const footerData = (data as any).footer as FooterData;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#033342] text-white pt-10 sm:pt-12 md:pt-14 lg:pt-16 overflow-hidden shrink-0">
      {/* Side Image bound to 1920px max width like the banner */}
      <div className="absolute inset-0 max-w-[1920px] mx-auto pointer-events-none z-0">
        <div className="absolute right-0 bottom-0 hidden lg:block opacity-95">
          <Image 
            src={footerData.sideImage.src} 
            alt={footerData.sideImage.alt} 
            width={footerData.sideImage.width} 
            height={footerData.sideImage.height} 
            className="object-contain object-right-bottom w-[160px] lg:w-[200px] xl:w-[240px] h-auto"
          />
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-6 xl:px-12 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-4 xl:gap-8 pb-16 lg:pr-[180px] xl:pr-[220px] relative z-10">
          
          {/* Logo & About */}
          <div className="lg:col-span-3 max-w-sm">
            <Link href="/" className="inline-block mb-2">
              <Image
                src={footerData.logo.src}
                alt={footerData.logo.alt}
                width={270}
                height={120}
                className="object-contain w-[210px] xl:w-[270px] h-auto max-h-[120px]"
              />
            </Link>
            <p className="text-white/80 text-[15px] leading-relaxed mb-8 pr-2">
              {footerData.description}
            </p>
            <div className="flex items-center gap-3">
              {footerData.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/90 hover:bg-white hover:text-[#073c47] transition-colors"
                >
                  <DynamicIcon name={social.icon} className="text-[16px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-[16px] font-bold uppercase tracking-wider mb-6 text-white whitespace-nowrap after:content-[''] after:block after:w-8 after:h-0.5 after:bg-gold after:mt-3">Quick Links</h3>
            <ul className="flex flex-col gap-3.5 list-none">
              {footerData.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-[15px] text-white/80 hover:text-gold transition-colors whitespace-nowrap">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-2">
            <h3 className="text-[16px] font-bold uppercase tracking-wider mb-6 text-white whitespace-nowrap after:content-[''] after:block after:w-8 after:h-0.5 after:bg-gold after:mt-3">Our Services</h3>
            <ul className="flex flex-col gap-3.5 list-none">
              {footerData.ourServices.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-[15px] text-white/80 hover:text-gold transition-colors whitespace-nowrap">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Support */}
          <div className="lg:col-span-2">
            <h3 className="text-[16px] font-bold uppercase tracking-wider mb-6 text-white whitespace-nowrap after:content-[''] after:block after:w-8 after:h-0.5 after:bg-gold after:mt-3">Help & Support</h3>
            <ul className="flex flex-col gap-3.5 list-none">
              {footerData.helpSupport.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-[15px] text-white/80 hover:text-gold transition-colors whitespace-nowrap">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-[16px] font-bold uppercase tracking-wider mb-6 text-white whitespace-nowrap after:content-[''] after:block after:w-8 after:h-0.5 after:bg-gold after:mt-3">Contact Info</h3>
            <ul className="flex flex-col gap-5 list-none">
              {footerData.contactInfo.map((info) => (
                <li key={info.id} className="flex items-start gap-4 relative z-10">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00bcd4] text-white shrink-0 mt-0.5">
                    <DynamicIcon name={info.icon} className="text-[18px]" />
                  </span>
                  <div className="flex flex-col pt-1">
                    {info.lines.map((line, idx) => (
                      <span key={idx} className="text-[15px] text-white/90 leading-relaxed drop-shadow-sm whitespace-nowrap">{line}</span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 bg-[#033342] py-3 border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-6 xl:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[14px] text-white/70">{footerData.bottomText}</p>
          
          <div className="flex items-center gap-4 text-[14px] text-white/70">
            {footerData.bottomLinks.map((link, idx) => (
              <React.Fragment key={idx}>
                <Link href={link.href} className="hover:text-gold transition-colors">{link.label}</Link>
                {idx < footerData.bottomLinks.length - 1 && <span className="text-white/30">|</span>}
              </React.Fragment>
            ))}
            
            <button 
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="ml-6 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-[#00bcd4] hover:text-white transition-colors"
            >
              <FiArrowUp className="text-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
