"use client";

import React from "react";
import { IconType } from "react-icons";

// React Icons
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";

import {
  AppContactData,
  ContactDetailItem,
  FormFieldItem,
  ContactSectionData,
  ContactSocialLink,
} from "@/app/data";
import rawData from "@/app/data/data.json";

const iconMap: Record<string, IconType> = {
  ...FiIcons,
  ...FaIcons,
  ...IoIcons,
};

interface DynamicIconProps {
  name: string;
  className?: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className }) => {
  const IconComponent: IconType = iconMap[name] || FiIcons.FiHelpCircle;
  return <IconComponent className={className} />;
};

export default function ContactSection() {
  const data: AppContactData = rawData as AppContactData;
  const section: ContactSectionData = data.contactSection;

  return (
    <section className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-8 sm:mb-10 md:mb-12 lg:mb-14">
      {/* Google Cursive font for handwritten accents */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
      `}</style>

      {/* Top Main Contact Area */}
      <div className="max-w-[1360px] mx-auto px-6 xl:px-12 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Heading, Info & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pt-2">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-[2.5px] bg-[#f59e0b]"></span>
                <span className="text-[13px] font-bold text-[#00bcd4] uppercase tracking-wider">
                  {section.tag}
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#083c48] leading-[1.06] tracking-tight">
                {section.titleLine1} <br />
                <span className="text-[#00acc1]">{section.titleLine2}</span>
              </h2>

              <p className="text-[15px] sm:text-[16px] text-[#5a7184] leading-relaxed max-w-[480px]">
                {section.description}
              </p>
            </div>

            {/* Handwritten Slogan Accent */}
            <div className="pt-2">
              <div
                className="text-[32px] sm:text-[36px] font-bold text-[#083c48] leading-tight rotate-[-4deg] select-none"
                style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
              >
                <span>{section.sloganLine1}</span>
                <br />
                <span>{section.sloganLine2}</span>
                <span className="block h-[3.5px] w-40 bg-[#f59e0b] rounded-full mt-1.5" />
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3.5">
              {section.socials.map((soc: ContactSocialLink) => (
                <a
                  key={soc.id}
                  href={soc.href}
                  aria-label={soc.name}
                  className="w-11 h-11 rounded-full bg-[#084b59] text-white flex items-center justify-center text-base transition-all duration-200 hover:bg-[#00bcd4] hover:scale-110 shadow-xs"
                >
                  <DynamicIcon name={soc.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Expanded Form Card */}
          <div className="lg:col-span-7 bg-[#d9f5fa]/75 rounded-[32px] p-6 sm:p-10 border border-cyan-100/90 shadow-xs flex flex-col justify-between">
            
            {/* Form Header with Bigger Title and Note */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <div className="w-8 h-[2.5px] bg-[#f59e0b] mb-2" />
                <h3 className="text-3xl sm:text-[34px] font-extrabold text-[#083c48] leading-tight">
                  {section.form.titlePrefix}{" "}
                  <span className="text-[#00acc1]">
                    {section.form.titleHighlight}
                  </span>
                </h3>
                <p className="text-[14px] sm:text-[15px] text-[#5a7184] mt-1.5 font-normal">
                  {section.form.description}
                </p>
              </div>

              {/* Top-Right Decorative Cursive Note + Bigger Icon */}
              <div className="flex items-center gap-2.5 select-none pointer-events-none rotate-[6deg] text-right shrink-0">
                <FiIcons.FiSend className="text-[#00bcd4] text-3xl" />
                <div
                  className="text-[20px] sm:text-[23px] font-bold text-[#083c48] leading-tight"
                  style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
                >
                  <span className="whitespace-pre-line">
                    {section.form.badgeText}
                  </span>
                  <span className="block h-[2.5px] w-full bg-[#f59e0b] rounded-full mt-0.5" />
                </div>
              </div>
            </div>

            {/* Inputs Grid */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {section.form.fields
                  .filter((f: FormFieldItem) => f.type !== "textarea")
                  .map((field: FormFieldItem) => (
                    <div key={field.id} className="relative">
                      {field.type === "select" ? (
                        <>
                          <select
                            id={field.id}
                            name={field.name}
                            defaultValue=""
                            className="w-full appearance-none rounded-xl border border-transparent bg-white px-4 py-3.5 pl-12 text-[14px] sm:text-[15px] text-[#083c48] placeholder-gray-400 focus:outline-none focus:border-[#00bcd4] focus:ring-2 focus:ring-[#00bcd4]/20 cursor-pointer shadow-2xs"
                          >
                            <option value="" disabled>
                              {field.placeholder}
                            </option>
                            {field.options?.map((opt: string, i: number) => (
                              <option key={i} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                          <FiIcons.FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-lg" />
                        </>
                      ) : (
                        <input
                          type={field.type}
                          id={field.id}
                          name={field.name}
                          placeholder={field.placeholder}
                          className="w-full rounded-xl border border-transparent bg-white px-4 py-3.5 pl-12 text-[14px] sm:text-[15px] text-[#083c48] placeholder-gray-400 focus:outline-none focus:border-[#00bcd4] focus:ring-2 focus:ring-[#00bcd4]/20 shadow-2xs"
                        />
                      )}
                      <DynamicIcon
                        name={field.icon}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"
                      />
                    </div>
                  ))}
              </div>

              {/* Textarea */}
              {section.form.fields
                .filter((f: FormFieldItem) => f.type === "textarea")
                .map((field: FormFieldItem) => (
                  <div key={field.id} className="relative">
                    <textarea
                      id={field.id}
                      name={field.name}
                      rows={4}
                      placeholder={field.placeholder}
                      className="w-full rounded-xl border border-transparent bg-white px-4 py-3.5 pl-12 text-[14px] sm:text-[15px] text-[#083c48] placeholder-gray-400 focus:outline-none focus:border-[#00bcd4] focus:ring-2 focus:ring-[#00bcd4]/20 resize-none shadow-2xs"
                    />
                    <DynamicIcon
                      name={field.icon}
                      className="absolute left-4 top-4 text-gray-400 text-lg"
                    />
                  </div>
                ))}

              {/* Submit Button & Safe Guarantee */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#084b59] hover:bg-[#063b46] text-white pl-8 pr-3 py-3 rounded-full font-bold text-[14px] flex items-center justify-center gap-3.5 transition-all duration-200 shadow-sm cursor-pointer"
                >
                  <span className="tracking-wide">{section.form.submitButtonText}</span>
                  <div className="w-9 h-9 rounded-full bg-[#f59e0b] text-[#084b59] flex items-center justify-center text-base shrink-0">
                    <FiIcons.FiArrowRight strokeWidth={2.5} />
                  </div>
                </button>

                <div className="flex items-center gap-2 text-[13px] sm:text-[13.5px] text-[#486b77] font-medium">
                  <DynamicIcon
                    name={section.form.securityIcon}
                    className="text-[#00bcd4] text-lg shrink-0"
                  />
                  <span>{section.form.securityText}</span>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>

      {/* 4 Contact Info Highlights (Attached directly above the map) */}
      <div className="w-full border-t border-gray-100 bg-[#fbfdff] py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1340px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-cyan-100/70">
          {section.contactDetails.map((card: ContactDetailItem) => (
            <div
              key={card.id}
              className="flex flex-col items-center text-center px-4 py-2 space-y-2.5"
            >
              {/* Circular Big Icon Badge */}
              <div className="w-14 h-14 rounded-full bg-[#d8f4f9] text-[#074b59] flex items-center justify-center text-2xl shrink-0 shadow-2xs mb-1">
                <DynamicIcon name={card.icon} />
              </div>

              {/* Title */}
              <h4 className="text-[17px] sm:text-[18px] font-extrabold text-[#083c48]">
                {card.title}
              </h4>

              {/* Subtitle / Addresses */}
              <div className="text-[13.5px] sm:text-[14px] md:text-[16px] text-[#5a7184] leading-relaxed">
                <p>{card.line1}</p>
                <p>{card.line2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Width Google Map with Floating 'Find Us on Map' Card */}
      <div className="relative w-full h-[450px] sm:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.85923192592!2d77.23701088488971!3d28.522404036526275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1786345160037!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="w-full h-full"
        />

        {/* Floating Card On Map */}
        <div className="absolute top-22 left-4 sm:left-12 max-w-[290px] sm:max-w-[330px] bg-[#084b59]/95 backdrop-blur-md text-white rounded-[22px] p-5 sm:p-6 shadow-2xl space-y-3.5 border border-white/10 z-10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-amber-400 text-[#084b59] flex items-center justify-center text-2xl shrink-0">
              <DynamicIcon name={section.mapCard.icon} />
            </div>
            <h5 className="text-[17px] sm:text-[18px] font-extrabold leading-tight">
              {section.mapCard.title}
            </h5>
          </div>

          <p className="text-[12.5px] sm:text-[13px] text-cyan-50/85 leading-relaxed font-normal">
            {section.mapCard.description}
          </p>

          <a
            href={section.mapCard.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#d7f7fc] text-[#084b59] hover:bg-white px-4 py-2.5 rounded-xl text-[12px] font-extrabold transition-colors duration-200 tracking-wider shadow-xs"
          >
            <span>{section.mapCard.buttonText}</span>
            <FiIcons.FiArrowRight className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
}