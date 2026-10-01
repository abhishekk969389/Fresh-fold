import React from 'react';
import Link from 'next/link';
import { GoArrowRight } from "react-icons/go";
import type { ServicesTab, FooterContactItem } from '@/app/data';
import { MdLocalLaundryService, MdIron, MdLocationOn, MdAccessTime, MdEmail, MdPhone } from "react-icons/md";
import { GiHanger, GiRunningShoe, GiWindow, GiRedCarpet, GiBriefcase, GiSparkles } from "react-icons/gi";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MdLocalLaundryService,
  GiHanger,
  MdIron,
  GiRunningShoe,
  GiWindow,
  GiRedCarpet,
  GiBriefcase,
  GiSparkles
};

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}

interface Props {
  servicesTabs: ServicesTab[];
  currentService: string;
  contactInfo: FooterContactItem[];
}

export default function ServiceSidebar({ servicesTabs, currentService, contactInfo }: Props) {
  // We can map footer contact info to sidebar specifically
  const location = contactInfo.find(c => c.id === 'location');
  const hours = contactInfo.find(c => c.id === 'hours');
  const email = contactInfo.find(c => c.id === 'email');
  const phone = contactInfo.find(c => c.id === 'phone');

  return (
    <aside className="w-full lg:w-[340px] xl:w-[360px] shrink-0 flex flex-col gap-8">
      
      {/* Our Services */}
      <div className="flex flex-col border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white">
        <div className="bg-[#073c47] py-5 px-7">
          <h3 className="text-[20px] font-extrabold text-white">Our Services</h3>
        </div>
        <div className="p-3">
          <ul className="flex flex-col">
            {servicesTabs.map((tab, index) => {
              const isActive = currentService === tab.id;
              return (
                <li key={tab.id} className="flex flex-col">
                  <Link 
                    href={`/servicedetails/${tab.id}`}
                    className={`flex items-center justify-between px-5 py-4 rounded-xl font-bold text-[15px] transition-all ${
                      isActive 
                        ? 'bg-[#e0f7fa] text-[#073c47]' 
                        : 'bg-transparent text-[#0b2d4a] hover:bg-[#e0f7fa] hover:text-[#073c47]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-[22px]">
                        <DynamicIcon name={tab.icon} />
                      </div>
                      <span>{tab.label}</span>
                    </div>
                    <GoArrowRight className="text-[18px]" />
                  </Link>
                  {/* Border line between items */}
                  {index < servicesTabs.length - 1 && (
                    <div className="w-[85%] mx-auto h-[1px] bg-gray-100 my-1"></div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-[#e4eff1] rounded-2xl p-7 xl:p-8 flex flex-col">
        <h3 className="text-[20px] font-extrabold text-[#0b2d4a] mb-6">Contact Information</h3>
        
        <ul className="flex flex-col gap-6 mb-8">
          {location && (
            <li className="flex items-start gap-4">
              <div className="text-[#073c47] text-[22px] mt-1 shrink-0"><MdLocationOn /></div>
              <div className="flex flex-col text-[#5a7184] text-[14px] leading-[1.6]">
                {location.lines.map((l, i) => <span key={i}>{l}</span>)}
              </div>
            </li>
          )}
          {hours && (
            <li className="flex items-start gap-4">
              <div className="text-[#073c47] text-[22px] mt-1 shrink-0"><MdAccessTime /></div>
              <div className="flex flex-col text-[#5a7184] text-[14px] leading-[1.6]">
                {hours.lines.map((l, i) => <span key={i}>{l}</span>)}
              </div>
            </li>
          )}
          {email && (
            <li className="flex items-start gap-4">
              <div className="text-[#073c47] text-[22px] mt-1 shrink-0"><MdEmail /></div>
              <div className="flex flex-col text-[#5a7184] text-[14px] leading-[1.6]">
                {email.lines.map((l, i) => <span key={i}>{l}</span>)}
              </div>
            </li>
          )}
          {phone && (
            <li className="flex items-start gap-4">
              <div className="text-[#073c47] text-[22px] mt-1 shrink-0"><MdPhone /></div>
              <div className="flex flex-col text-[#5a7184] text-[14px] leading-[1.6]">
                {phone.lines.map((l, i) => <span key={i}>{l}</span>)}
              </div>
            </li>
          )}
        </ul>

        <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-[#073c47] text-white py-4 rounded-xl font-bold text-[15px] hover:bg-[#00bcd4] transition-colors shadow-sm">
          <span>Schedule a Pickup</span>
          <GoArrowRight className="text-[20px]" />
        </Link>
      </div>

    </aside>
  );
}
