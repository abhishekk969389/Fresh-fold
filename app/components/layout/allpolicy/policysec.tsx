"use client";

import Link from "next/link";
import { PolicyDocument, PolicySectionItem } from "@/app/data";

interface PolicyLayoutProps {
    policy: PolicyDocument;
}

export default function PolicyLayout({ policy }: PolicyLayoutProps) {
    return (
        <section className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 pb-8 sm:pb-10 md:pb-12 lg:pb-14">
            <div className="max-w-[1360px] mx-auto px-6 xl:px-12 relative z-10 text-center">

                {/* Sections List */}
                <div className="space-y-4">
                    {policy.sections.map((sec: PolicySectionItem) => (
                        <div
                            key={sec.id}
                            className="pb-4 border-b border-[#e6f4f8] last:border-b-0"
                        >
                            {/* Numbered Heading */}
                            <h2 className="text-left text-[17px] sm:text-[18px] md:text-[24px] font-extrabold text-[#083c48] tracking-tight leading-snug">
                                {sec.orderNumber}. {sec.title}
                            </h2>

                            {/* Body Text */}
                            <p className="text-left text-[13.5px] sm:text-[14px] md:text-[18px] text-[#5a7184] leading-[1.65] mt-1.5 font-normal">
                                {sec.content}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Last Updated Ice-Blue Banner Box */}
                <div className="bg-[#eaf7fb] rounded-xl px-4 py-3 text-left">
                    <p className="text-[16px] text-[#083c48] font-bold text-left">
                        Last Updated:{" "}
                        <span className="font-semibold text-[16px] text-[#5a7184]">
                            {policy.lastUpdated}
                        </span>
                    </p>
                </div>

                {/* Footer Contact Note */}
                <p className="mt-2 ttext-[13.5px] sm:text-[14px] md:text-[16px] text-[#5a7184] leading-relaxed text-left">
                    {policy.contactNote}{" "}
                    <Link
                        href={policy.contactLinkHref}
                        className="text-[#00bcd4] text-[13.5px] sm:text-[14px] md:text-[16px] font-semibold hover:underline"
                    >
                        {policy.contactLinkText}
                    </Link>
                </p>

            </div>
        </section>
    );
}