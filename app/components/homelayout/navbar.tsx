"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FiClock, FiPhone, FiMapPin, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsCalendarCheck } from "react-icons/bs";

import { data } from "@/app/data";
import type { TopBarInfoItem, SocialLink, NavLink, NavbarData } from "@/app/data";
import { MdOutlineMail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";


const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MdOutlineMail,
  FiPhone,
  FiMapPin,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  BsCalendarCheck,
};

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}


const navbarData = (data as { navbar: NavbarData }).navbar;
    

function TopBarInfo({ item }: { item: TopBarInfoItem }) {
  return (
    <div className="flex items-center gap-2 xl:gap-3">
      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-teal-dark text-[18px] shrink-0">
        <DynamicIcon name={item.icon} />
      </span>
      <div className="flex flex-col leading-tight">
        <span className="text-[13px] xl:text-[14px] font-bold text-white whitespace-nowrap">{item.primary}</span>
        <span className="text-[11px] xl:text-[12px] text-white/80 whitespace-nowrap">{item.secondary}</span>
      </div>
    </div>
  );
}

function SocialButton({ social }: { social: SocialLink }) {
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className="flex items-center justify-center w-[34px] h-[34px] rounded-full bg-white text-teal-dark text-[15px] transition-transform hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
    >
      <DynamicIcon name={social.icon} />
    </a>
  );
}

function NavItem({ link, mobile = false, onClose }: { link: NavLink; mobile?: boolean; onClose?: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const isDropdownLink = link.hasDropdown;
  
  const isExactMatch = pathname === link.href;
  const isDropdownMatch = link.hasDropdown && link.dropdown?.some(item => pathname === item.href || pathname.startsWith(item.href + '/'));
  const isStartsWithMatch = link.href !== '/' && pathname.startsWith(link.href + '/');
  const isActive = isExactMatch || isDropdownMatch || isStartsWithMatch;

  const desktopClasses = `relative flex items-center gap-1 px-2.5 xl:px-3 py-2.5 text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-bold text-teal-dark transition-colors whitespace-nowrap group ${isDropdownLink ? 'cursor-default' : ''}`;
  const mobileClasses = `flex items-center justify-between w-full px-3.5 py-3 text-[15px] font-semibold text-teal-dark rounded-md transition-colors hover:bg-teal-light hover:text-teal-dark ${isDropdownLink ? 'cursor-default' : ''}`;
  
  const underline = (
    <span className={`absolute bottom-0.5 left-2 right-2 xl:left-3 xl:right-3 h-[2.5px] bg-teal-dark origin-center transition-transform duration-200 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
  );

  if (!link.hasDropdown) {
    return (
      <li ref={ref}>
        <Link 
          href={link.href} 
          className={mobile ? mobileClasses : desktopClasses}
          onClick={() => {
            if (mobile && onClose) onClose();
          }}
        >
          {link.label}
          {!mobile && underline}
        </Link>
      </li>
    );
  }

  return (
    <li ref={ref} className="relative group">
      <Link
        href={link.href}
        className={mobile ? mobileClasses : desktopClasses}
        onClick={(e) => {
          if (link.hasDropdown) {
            e.preventDefault();
          }
          if (mobile) {
            setOpen((v) => !v);
          }
        }}
        aria-expanded={mobile ? open : undefined}
      >
        {link.label}
        {!mobile && underline}
        <FiChevronDown className={`text-[16px] shrink-0 transition-transform ${mobile && open ? 'rotate-180' : 'group-hover:rotate-180'}`} />
      </Link>

      <div className={mobile 
        ? `list-none bg-teal-light rounded-md my-1 ml-3 overflow-hidden transition-all duration-300 ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 hidden'}`
        : `absolute top-full left-1/2 -translate-x-1/2 pt-2 min-w-[200px] z-50 transition-all duration-300 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0`
      }>
        <ul className={mobile ? "list-none" : "bg-white rounded-[10px] shadow-[0_8px_32px_rgba(10,75,86,0.12)] border border-teal-light overflow-hidden list-none"}>
          {link.dropdown?.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={mobile 
                  ? "block px-5 py-3 text-[14.5px] font-medium text-teal-dark border-b border-teal-light/50 last:border-none transition-all hover:bg-teal-light/80 hover:pl-6" 
                  : "block px-5 py-3 text-[14.5px] font-medium text-teal-dark border-b border-teal-light last:border-none transition-all hover:bg-teal-light hover:pl-[26px]"
                }
                onClick={() => {
                  setOpen(false);
                  if (mobile && onClose) onClose();
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

// ─── Main Navbar ───────────────────────────────────────────────────────────────

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { logo, topBar, navLinks, cta } = navbarData;

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] w-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)]">

      {/* ══════════════════════════════════════════════════════
          DESKTOP LAYOUT
      ══════════════════════════════════════════════════════ */}
      <div className="hidden lg:flex items-stretch w-full min-h-[126px] max-w-[1360px] mx-auto">

        {/* ── Logo column ── */}
        <div className="flex-[0_0_280px] xl:flex-[0_0_350px] w-[280px] xl:w-[350px] bg-white flex items-center justify-start pl-6 xl:pl-12 pr-4 relative z-10">
          <Link href="/" className="flex items-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              priority
              className="object-contain w-[240px] xl:w-[300px] h-auto max-h-[120px]"
            />
          </Link>
        </div>

        {/* ── Right column ── */}
        <div className="flex-1 flex flex-col min-w-0">

      {/* Top bar row */}
          <div className="flex items-stretch h-[56px] relative overflow-visible">
            
            {/* Dark teal center strip with dual S-curves */}
            <div className="relative flex-1 flex items-center justify-center bg-teal-dark px-6 z-20">
              
              {/* Left inverted curve transition (vertically flipped) */}
              <svg
                aria-hidden="true"
                viewBox="0 0 48 56"
                className="absolute right-[calc(100%-1px)] top-0 h-full w-[48px] text-teal-dark pointer-events-none fill-current"
                preserveAspectRatio="none"
              >
                <path d="M48,56 C20,56 28,0 0,0 L48,0 Z" />
              </svg>

              {/* Info Items */}
              <div className="flex items-center justify-center gap-6 xl:gap-[32px] w-full">
                {topBar.info.map((item, idx) => (
                  <React.Fragment key={item.id}>
                    <TopBarInfo item={item} />
                    {idx < topBar.info.length - 1 && (
                      <span className="block w-[1px] h-[30px] bg-white/20 shrink-0" aria-hidden="true" />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Right inverted curve transition (vertically flipped) */}
              <svg
                aria-hidden="true"
                viewBox="0 0 48 56"
                className="absolute left-[calc(100%-1px)] top-0 h-full w-[48px] text-teal-dark pointer-events-none fill-current"
                preserveAspectRatio="none"
              >
                <path d="M0,56 C28,56 20,0 48,0 L0,0 Z" />
              </svg>
            </div>

            {/* Right teal-light background with matching curve */}
            <div className="relative flex items-center bg-teal-light pl-14 pr-5 xl:pr-[30px] z-10">
              {/* Curve connecting teal-light to the dark bar (vertically flipped) */}
              <svg
                aria-hidden="true"
                viewBox="0 0 48 56"
                className="absolute right-[calc(100%-1px)] top-0 h-full w-[48px] text-teal-light pointer-events-none fill-current"
                preserveAspectRatio="none"
              >
                <path d="M48,56 C20,56 28,0 0,0 L48,0 Z" />
              </svg>

              <div className="flex items-center gap-2 relative z-10">
                {topBar.socials.map((social) => (
                  <SocialButton key={social.id} social={social} />
                ))}
              </div>
            </div>

          </div>

          {/* Main bar row */}
          <div className="flex items-center justify-between h-[70px] bg-white pr-5 xl:pr-10 pl-5">
            <nav className="flex-1" aria-label="Main navigation">
              <ul className="flex items-center justify-center gap-1 xl:gap-2 list-none">
                {navLinks.map((link) => (
                  <NavItem key={link.id} link={link} />
                ))}
              </ul>
            </nav>

            <Link href={cta.href} className="group flex items-center gap-2 px-5 xl:px-[26px] py-3 bg-gold text-teal-dark text-[15px] font-bold rounded-[50px] whitespace-nowrap shrink-0 shadow-[0_4px_14px_rgba(251,192,45,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(251,192,45,0.4)] hover:brightness-95">
              <DynamicIcon name={cta.icon} className="text-[18px] shrink-0" />
              <span>{cta.label}</span>
              <span className="text-[18px] transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

        </div>{/* /nb-right-col */}
      </div>{/* /nb-desktop */}

      {/* ══════════════════════════════════════════════════════
          MOBILE LAYOUT
      ══════════════════════════════════════════════════════ */}
      <div className="block lg:hidden">

        {/* Mobile top bar (teal strip) */}
        <div className="flex items-center justify-between h-[56px] bg-teal-dark px-4 gap-3">
          <div className="flex items-center gap-3">
             {/* Only show first info item on mobile */}
             {topBar.info.length > 0 && <TopBarInfo item={topBar.info[0]} />}
          </div>
          <div className="hidden sm:flex items-center gap-2">
            {topBar.socials.map((social) => (
              <SocialButton key={social.id} social={social} />
            ))}
          </div>
        </div>

        {/* Mobile main bar */}
        <div className="flex items-center justify-between h-[70px] bg-white px-3 sm:px-4 border-t border-teal-dark/5">
          <Link href="/" className="flex items-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={170}
              height={64}
              priority
              className="object-contain max-h-[64px] w-auto"
            />
          </Link>

          <button
            className="flex items-center justify-center p-2 rounded-md text-teal-dark transition-colors hover:bg-teal-light"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`overflow-hidden transition-[max-height,padding] duration-300 ease-out bg-white border-t border-teal-light px-4 ${mobileOpen ? "max-h-[600px] py-4" : "max-h-0 py-0 border-transparent"}`}>
          <ul className="flex flex-col gap-1 mb-4 list-none">
            {navLinks.map((link) => (
              <NavItem key={link.id} link={link} mobile onClose={() => setMobileOpen(false)} />
            ))}
          </ul>
          <Link
            href={cta.href}
            className="flex items-center justify-center gap-2 px-6 py-3 w-full bg-gold text-teal-dark text-[15px] font-bold rounded-full shadow-[0_4px_14px_rgba(251,192,45,0.3)]"
            onClick={() => setMobileOpen(false)}
          >
            <DynamicIcon name={cta.icon} className="text-[18px] shrink-0" />
            <span>{cta.label}</span>
            <span className="text-[18px]">→</span>
          </Link>
        </div>

      </div>{/* /nb-mobile */}

    </header>
  );
}
