import React from 'react';
import Image from 'next/image';
import type { TeamDetailsData } from '@/app/data';
import { FaQuoteLeft } from 'react-icons/fa';

interface Props {
  data: TeamDetailsData;
}

export default function TeamMemberHero({ data }: Props) {
  const { member } = data;
  return (
    <section className="w-full  mt-8 sm:mt-10 md:mt-12 lg:mt-14  relative">
      <div className="max-w-[1360px] mx-auto px-6 xl:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="w-10 h-[1.5px] bg-[#00bcd4]"></span>
            <span className="text-[#00bcd4] font-bold tracking-widest text-[14px] uppercase">{data.subheading}</span>
            <span className="w-10 h-[1.5px] bg-[#00bcd4]"></span>
          </div>
          
          <h2 className="text-[36px] sm:text-[44px] xl:text-[48px] font-extrabold leading-[0.9] mb-3 tracking-tight">
            <span className="text-[#0b2d4a]">{data.titleLine1} </span>
            <span className="text-[#0092a3]">{data.titleLine2}</span>
          </h2>
          
          <p className="text-[#5a7184] text-[15px] sm:text-[16px] max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-stretch">
          {/* Left side Image */}
          <div className="w-full lg:w-[45%] relative rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(11,45,74,0.1)] min-h-[500px] lg:min-h-[auto]">
            <Image
              src={member.image.src}
              alt={member.image.alt}
              fill
              className="object-cover"
            />
            {/* Overlay Quote */}
            <div className="absolute bottom-0 left-0 w-[85%] sm:w-[75%] bg-gradient-to-tr from-[#015865]/90 via-[#015865]/60 to-[#015865]/10 backdrop-blur-[2px] p-6 md:p-8 rounded-tr-[32px] rounded-br-[100px]">
              <FaQuoteLeft className="text-[#fbbf24] text-[28px] mb-3" />
              <p className="text-white text-[20px] md:text-[24px] font-medium leading-[1.3] tracking-wide">
                {member.imageQuote}
              </p>
              <div className="w-12 h-1 bg-[#fbbf24] mt-5"></div>
            </div>
          </div>

          {/* Right side Info */}
          <div className="w-full lg:w-[55%] flex flex-col">
            <h3 className="text-[36px] md:text-[42px] font-extrabold text-[#0b2d4a] mb-2">{member.name}</h3>
            <div className="w-12 h-[3px] bg-[#fbbf24] mb-4"></div>
            <h4 className="text-[20px] md:text-[24px] font-bold text-[#00bcd4] mb-6">{member.role}</h4>
            <p className="text-[16px] text-[#64748b] leading-[1.8] mb-10">
              {member.bio}
            </p>

            {/* Stats Row */}
            <div className="flex flex-row items-center justify-between gap-4 p-6 md:p-8 bg-[#e8f8f9] rounded-2xl mb-12">
              {member.stats.map((stat, idx) => (
                <div key={idx} className={`flex flex-col flex-1 ${idx !== 0 ? 'border-l-2 border-[#00bcd4]/30 pl-4 md:pl-8' : ''}`}>
                  <span className="text-[14px] md:text-[15px] text-[#5a7184] mb-1.5">{stat.label}</span>
                  <span className="text-[16px] md:text-[18px] font-extrabold text-[#0b2d4a]">{stat.value}</span>
                </div>
              ))}
            </div>

            {/* Core Skills */}
            <div>
              <h4 className="text-[28px] font-extrabold text-[#0b2d4a] mb-2">{member.skillsTitle || "Core Skills"}</h4>
              <div className="w-12 h-[3px] bg-[#fbbf24] mb-8"></div>
              
              <div className="flex flex-col gap-6">
                {member.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <span className="w-[220px] text-[15px] md:text-[16px] font-bold text-[#0b2d4a] shrink-0 whitespace-nowrap">{skill.name}</span>
                    <div className="flex-1 h-[14px] bg-[#00bcd4]/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#00bcd4] rounded-full relative" 
                        style={{ width: `${skill.percentage}%` }}
                      >
                      </div>
                    </div>
                    <span className="text-[15px] md:text-[16px] font-bold text-[#0b2d4a] shrink-0 w-10 text-right">{skill.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
