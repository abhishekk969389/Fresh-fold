import React from "react";
import Image from "next/image";
import { data } from "@/app/data";
import type { WhyChooseData } from "@/app/data";
import { FaShieldAlt, FaLeaf, FaStopwatch, FaUsers, FaCoins, FaHeadset, FaRegHeart } from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaShieldAlt,
  FaLeaf,
  FaStopwatch,
  FaUsers,
  FaCoins,
  FaHeadset,
  FaRegHeart
};

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}

interface WhyChooseProps {
  theme?: 'dark' | 'light';
}

export default function WhyChoose({ theme = 'dark' }: WhyChooseProps) {
  const whyChoose = (data as any).whyChoose as WhyChooseData;
  const isLight = theme === 'light';

  return (
    <section className={`relative w-full overflow-hidden font-sans ${isLight ? 'bg-transparent mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-10' : 'mt-8 sm:mt-10 md:mt-12 lg:mt-14 py-8 sm:py-10 md:py-12 lg:py-14 bg-[#06242c]'}`}>
      
      {/* Background Decor */}
      {isLight ? (
        <>
          <div className="absolute top-[10%] left-[-5%] w-64 h-64 rounded-full bg-[#00bcd4] opacity-10 blur-3xl -z-0"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-80 h-80 rounded-full bg-[#00bcd4] opacity-10 blur-3xl -z-0"></div>
          
          <div className="absolute top-1/4 left-[5%] w-24 h-24 rounded-full bg-gradient-to-tr from-white to-[#00bcd4]/10 border border-white shadow-sm backdrop-blur-sm -z-0"></div>
          <div className="absolute top-[15%] right-[10%] w-32 h-32 rounded-full bg-gradient-to-tr from-white to-[#00bcd4]/10 border border-white shadow-sm backdrop-blur-sm -z-0"></div>
          <div className="absolute bottom-1/4 left-[15%] w-16 h-16 rounded-full bg-gradient-to-tr from-white to-[#00bcd4]/10 border border-white shadow-sm backdrop-blur-sm -z-0"></div>
          <div className="absolute bottom-10 right-[20%] w-20 h-20 rounded-full bg-gradient-to-tr from-white to-[#00bcd4]/10 border border-white shadow-sm backdrop-blur-sm -z-0"></div>
        </>
      ) : (
        <>
          <div className="absolute top-[10%] left-[-5%] w-64 h-64 rounded-full bg-[#0a3540] opacity-50 blur-3xl -z-0"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-80 h-80 rounded-full bg-[#0a3540] opacity-50 blur-3xl -z-0"></div>
          
          <div className="absolute top-1/3 left-[5%] w-4 h-4 rounded-full bg-white/10 backdrop-blur-sm -z-0"></div>
          <div className="absolute top-[20%] right-[15%] w-6 h-6 rounded-full bg-white/10 backdrop-blur-sm -z-0"></div>
          <div className="absolute bottom-1/4 left-[15%] w-8 h-8 rounded-full bg-white/5 backdrop-blur-sm -z-0"></div>
        </>
      )}

      <div className="max-w-[1360px] mx-auto px-6 xl:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-4 mb-2">
            <span className={`w-8 h-px ${isLight ? 'bg-[#073c47]' : 'bg-[#fbbf24]'}`}></span>
            <span className={`${isLight ? 'text-[#073c47]' : 'text-[#fbbf24]'} font-bold tracking-widest text-[14px] uppercase`}>{whyChoose.tag}</span>
            <span className={`w-8 h-px ${isLight ? 'bg-[#073c47]' : 'bg-[#fbbf24]'}`}></span>
          </div>
          
          <h2 className={`text-[32px] sm:text-[44px] xl:text-[48px] font-extrabold leading-[0.9] mb-2 tracking-tight max-w-4xl mx-auto ${isLight ? 'text-[#073c47]' : 'text-white'}`}>
            <span className="block mb-2">{whyChoose.titleLine1}</span>
            <span className="text-[#00bcd4]">{whyChoose.titleLine2} </span>
            <span>{whyChoose.titleLine3} </span>
            <span className="text-[#fbbf24]">{whyChoose.titleLine4}</span>
          </h2>
          
          <p className={`${isLight ? 'text-gray-600' : 'text-gray-300'} text-[15px] sm:text-[16px] max-w-2xl mx-auto`}>
            {whyChoose.subtitle}
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(350px,400px)_1fr] gap-10 xl:gap-12 items-stretch">
          
          {/* Left Column (Features) */}
          <div className="flex flex-col gap-6 justify-between">
            {whyChoose.featuresLeft.map(feature => (
              <div key={feature.id} className={`${isLight ? 'bg-white border-[#00bcd4]/30 shadow-[0_4px_20px_rgba(0,188,212,0.1)] hover:border-[#00bcd4] hover:shadow-[0_8px_30px_rgba(0,188,212,0.2)]' : 'bg-[#092d36]/90 border-[#0d4a57] shadow-lg hover:border-[#00bcd4]/40'} backdrop-blur-sm border rounded-[24px] p-5 sm:p-6 flex items-center gap-5 sm:gap-6 group transition-all h-full`}>
                
                {/* Left: Icon & Number Badge Setup */}
                <div className={`relative shrink-0 w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] rounded-full flex items-center justify-center ${isLight ? 'bg-[#073c47]' : 'bg-[#073c47] border border-[#0d5966]'}`}>
                  {/* Number Badge */}
                  <div className={`absolute -top-4 -left-4 sm:-top-6 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#00bcd4] text-white flex items-center justify-center font-bold text-[13px] sm:text-[15px] ${isLight ? '' : 'shadow-[0_0_12px_rgba(0,188,212,0.5)]'}`}>
                    {feature.id}
                  </div>
                  
                  {/* Big Icon */}
                  <DynamicIcon name={feature.icon} className={`text-[32px] sm:text-[38px] text-white transition-transform group-hover:scale-110 ${isLight ? 'group-hover:text-white' : 'group-hover:text-[#fbbf24]'}`} />
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col pt-1">
                  <h4 className={`${isLight ? 'text-[#073c47]' : 'text-white'} font-bold text-[17px] sm:text-[19px] mb-2 tracking-wide`}>{feature.title}</h4>
                  <p className={`${isLight ? 'text-gray-600' : 'text-gray-300/90'} text-[13px] sm:text-[14px] leading-relaxed font-medium`}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column (Image) */}
          <div className="relative w-full h-[500px] lg:h-auto rounded-[24px] border-2 border-[#145a68] overflow-hidden shadow-[0_0_40px_rgba(0,188,212,0.1)]">
            <div className={`absolute inset-0 z-10 pointer-events-none ${isLight ? 'bg-transparent' : 'bg-[#06242c]/20'}`}></div>
            <Image src={whyChoose.centerImage.src} alt={whyChoose.centerImage.alt} fill className="object-cover" />
            
            {/* Cursive Sticker overlay */}
            <div className={`absolute top-[10%] right-[15%] transform -rotate-[12deg] flex flex-col items-start font-medium leading-[1.1] z-20 ${isLight ? 'text-[#073c47]' : 'text-white/90'}`} style={{ fontFamily: "'Brush Script MT', 'Comic Sans MS', cursive" }}>
              <span className="text-[34px] sm:text-[38px] drop-shadow-lg">{whyChoose.centerImage.stickerText[0]}</span>
              <span className="text-[34px] sm:text-[38px] drop-shadow-lg ml-3">{whyChoose.centerImage.stickerText[1]}</span>
              <span className="text-[34px] sm:text-[38px] drop-shadow-lg ml-6">{whyChoose.centerImage.stickerText[2]}</span>
              <span className="text-[34px] sm:text-[38px] drop-shadow-lg ml-9">{whyChoose.centerImage.stickerText[3]}</span>
              <FaRegHeart className="text-[24px] ml-16 mt-2" />
            </div>

            {/* Bottom Glassmorphic Badge */}
            <div className={`absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 w-max max-w-[95%] backdrop-blur-md rounded-full px-5 sm:px-8 py-3 sm:py-4 flex items-center gap-4 sm:gap-6 z-20 transition-transform hover:scale-105 ${isLight ? 'bg-[#073c47]/90 border-transparent shadow-[0_8px_32px_rgba(7,60,71,0.4)]' : 'bg-[#06242c]/70 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'}`}>
              
              {/* Left: Icon */}
              <DynamicIcon name={whyChoose.centerImage.badge.icon} className="text-white text-[36px] sm:text-[42px] shrink-0" />
              
              {/* Separator */}
              <div className="w-[1px] h-[36px] sm:h-[42px] bg-white/20 shrink-0"></div>
              
              {/* Right: Text & Line */}
              <div className="flex flex-col items-start justify-center pt-1">
                <span className="text-white text-[12px] sm:text-[14px] font-bold tracking-wider leading-snug">{whyChoose.centerImage.badge.line1}</span>
                <span className="text-white text-[12px] sm:text-[14px] font-bold tracking-wider leading-snug mb-[6px]">{whyChoose.centerImage.badge.line2}</span>
                <span className="w-16 sm:w-20 h-[3px] sm:h-[4px] bg-[#fbbf24] rounded-full"></span>
              </div>
            </div>
          </div>

          {/* Right Column (Features) */}
          <div className="flex flex-col gap-6 justify-between">
            {whyChoose.featuresRight.map(feature => (
              <div key={feature.id} className={`${isLight ? 'bg-white border-[#00bcd4]/30 shadow-[0_4px_20px_rgba(0,188,212,0.1)] hover:border-[#00bcd4] hover:shadow-[0_8px_30px_rgba(0,188,212,0.2)]' : 'bg-[#092d36]/90 border-[#0d4a57] shadow-lg hover:border-[#00bcd4]/40'} backdrop-blur-sm border rounded-[24px] p-5 sm:p-6 flex items-center gap-5 sm:gap-6 group transition-all h-full`}>
                
                {/* Left: Icon & Number Badge Setup */}
                <div className={`relative shrink-0 w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] rounded-full flex items-center justify-center ${isLight ? 'bg-[#073c47]' : 'bg-[#073c47] border border-[#0d5966]'}`}>
                  {/* Number Badge */}
                  <div className={`absolute -top-4 -left-4 sm:-top-6 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#00bcd4] text-white flex items-center justify-center font-bold text-[13px] sm:text-[15px] ${isLight ? '' : 'shadow-[0_0_12px_rgba(0,188,212,0.5)]'}`}>
                    {feature.id}
                  </div>
                  
                  {/* Big Icon */}
                  <DynamicIcon name={feature.icon} className={`text-[32px] sm:text-[38px] text-white transition-transform group-hover:scale-110 ${isLight ? 'group-hover:text-white' : 'group-hover:text-[#fbbf24]'}`} />
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col pt-1">
                  <h4 className={`${isLight ? 'text-[#073c47]' : 'text-white'} font-bold text-[17px] sm:text-[19px] mb-2 tracking-wide`}>{feature.title}</h4>
                  <p className={`${isLight ? 'text-gray-600' : 'text-gray-300/90'} text-[13px] sm:text-[14px] leading-relaxed font-medium`}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
