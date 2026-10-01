import React from 'react';
import Image from 'next/image';
import { Great_Vibes } from 'next/font/google';
import type { ServiceDetailsData } from '@/app/data';
import { FaLeaf, FaShieldAlt, FaMagic, FaClock, FaCheckCircle } from "react-icons/fa";
import { MdLocalLaundryService } from "react-icons/md";
import { GiPoloShirt } from "react-icons/gi";

const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'] });

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaLeaf,
  FaShieldAlt,
  FaMagic,
  FaClock,
  MdLocalLaundryService,
  GiPoloShirt
};

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}

export default function ServiceContent({ details }: { details: ServiceDetailsData }) {
  return (
    <article className="w-full flex flex-col">

      {/* Top Banner Section */}
      <div className="w-full flex flex-col lg:flex-row bg-[#e4eff1] rounded-3xl mb-14 relative overflow-hidden">

        {/* Left Content */}
        <div className="w-full lg:w-[52%] p-6 sm:p-8 xl:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-6 h-px bg-[#00bcd4]"></span>
            <span className="text-[#00bcd4] font-bold tracking-widest text-[13px] uppercase">{details.tag}</span>
          </div>

          <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold text-[#0b2d4a] leading-[1.1] mb-5 tracking-tight">
            {details.title.split(',')[0]},<br />
            <span className="text-[#00bcd4]">{details.title.split(',')[1]}</span>
          </h2>

          <p className="text-[#5a7184] text-[15px] sm:text-[16px] leading-[1.8] mb-10 max-w-[500px]">
            {details.description}
          </p>

          {/* 4 Circular Features */}
          <div className="flex items-start justify-between w-full max-w-[500px]">
            {details.features.map((feat, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#e0f7fa] text-[#00bcd4] flex items-center justify-center text-[18px] lg:text-[20px]">
                    <DynamicIcon name={feat.icon} />
                  </div>
                  <div className="flex flex-col mt-1">
                    <span className="text-[#0b2d4a] font-bold text-[10px] lg:text-[11px] leading-tight">{feat.label}</span>
                    <span className="text-[#0b2d4a] font-bold text-[10px] lg:text-[11px] leading-tight">{feat.subLabel}</span>
                  </div>
                </div>
                {idx < details.features.length - 1 && (
                  <div className="w-px h-8 bg-gray-300 mt-3 mx-1"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[48%] h-[350px] sm:h-[450px] lg:h-auto relative shrink-0 bg-[#0092a3]">
          <Image
            src={details.image.src}
            alt={details.image.alt}
            fill
            className="object-cover rounded-tl-[60px] lg:rounded-tl-[80px] rounded-br-[60px] lg:rounded-br-[80px]"
          />

          {/* Quality Badge Overlay */}
          <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 bg-white rounded-2xl shadow-lg p-3 px-4 lg:p-4 lg:px-6 flex items-center gap-3 lg:gap-4 z-20 border border-gray-100">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-[#073c47] text-white flex items-center justify-center text-[20px] lg:text-[24px] shrink-0">
              <DynamicIcon name={details.badge.icon} />
            </div>
            <div className="flex flex-col">
              <span className="text-[#0b2d4a] font-extrabold text-[12px] lg:text-[14px] leading-tight">{details.badge.textLine1}</span>
              <span className="text-[#5a7184] font-medium text-[11px] lg:text-[13px]">{details.badge.textLine2}</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="flex items-center gap-4 mb-4">
        <span className="w-8 h-px bg-[#00bcd4]"></span>
        <span className="text-[#00bcd4] font-bold tracking-widest text-[14px] uppercase">ABOUT OUR SERVICE</span>
      </div>

      <h3 className="text-[28px] sm:text-[32px] font-extrabold text-[#0b2d4a] leading-[1.2] mb-4 max-w-[600px]">
        {details.about.title}
      </h3>

      <p className="text-[#5a7184] text-[16px] leading-[1.8] mb-8 max-w-[800px]">
        {details.about.description}
      </p>

      {/* Checklist and Circular Badge side by side */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 w-full md:w-[70%]">
          {details.about.list.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <FaCheckCircle className="text-[#22c55e] text-[18px] shrink-0" />
              <span className="text-[#5a7184] text-[15px]">{item}</span>
            </div>
          ))}
        </div>

        {/* Right side circular graphic */}
        <div className="relative shrink-0 flex items-center justify-center mt-8 md:mt-0 lg:ml-auto">
          <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full bg-[#f2f9fa] flex flex-col items-center justify-center relative overflow-hidden">

            {/* Square Icon Background */}
            <div className="w-[70px] h-[80px] sm:w-[85px] sm:h-[100px] bg-[#aae0e8] rounded-xl flex items-center justify-center text-white mb-[-20px] sm:mb-[-30px] z-0 opacity-90">
              <div className="text-[45px] sm:text-[60px]">
                <DynamicIcon name={details.about.circularIcon} />
              </div>
            </div>

            {/* Cursive Text */}
            <div className="flex flex-col items-center transform -rotate-[12deg] z-10 relative">
              <span className={`${greatVibes.className} text-[#0b2d4a] text-[30px] leading-[1.1] text-center max-w-[150px] sm:max-w-[200px]`}>
                {details.about.circularText}
              </span>

              {/* Yellow straight underline */}
              <div className="w-[80px] sm:w-[100px] h-[3px] sm:h-[4px] bg-[#ffb000] mt-1 sm:mt-2 rounded-full"></div>
            </div>

          </div>
        </div>
      </div>

    </article>
  );
}
