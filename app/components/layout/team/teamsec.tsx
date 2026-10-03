"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { data } from "@/app/data";
import type { TeamData } from "@/app/data";
import Pagination from "@/app/components/ui/pagination";

export default function Team() {
    const teamData = (data as any).team as TeamData;
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4; // Showing 4 items per page

    const generateSlug = (name: string) => {
        return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    };

    // Calculate pagination data
    const totalPages = Math.ceil(teamData.members.length / itemsPerPage);
    const currentMembers = teamData.members.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <section className="w-full  mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-8 sm:mb-10 md:mb-12 lg:mb-14 ">
            <div className="max-w-[1360px] mx-auto px-6 xl:px-12 relative z-10 text-center">

                {/* Header Section */}
                <div className="flex items-center justify-center gap-4 mb-2">
                    <span className="w-10 h-[1.5px] bg-[#00bcd4]"></span>
                    <span className="text-[#00bcd4] font-bold tracking-widest text-[14px] uppercase">{teamData.tag}</span>
                    <span className="w-10 h-[1.5px] bg-[#00bcd4]"></span>
                </div>

                <h2 className="text-[36px] sm:text-[44px] xl:text-[48px] font-extrabold leading-[0.9] mb-3 tracking-tight">
                    <span className="text-[#0b2d4a]">{teamData.titleLine1} </span>
                    <span className="text-[#0092a3]">{teamData.titleLine2}</span>
                </h2>


                <p className="text-[#5a7184] text-[15px] sm:text-[16px] max-w-2xl mx-auto mb-6">
                    {teamData.subtitle}
                </p>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
                    {currentMembers.map((member, index: number) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link
                                href={`/team/${generateSlug(member.name)}`}
                            className="bg-[#f2f8fc] rounded-[24px] overflow-hidden flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow duration-300 group block cursor-pointer"
                        >
                            {/* Full-width Image Container (No padding/spacing) */}
                            <div className="relative w-full h-[280px] sm:h-[300px] overflow-hidden">
                                <Image
                                    src={member.image.src}
                                    alt={member.image.alt}
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Member Details Section (Niche ka content) */}
                            <div className="p-5 flex flex-col items-center w-full bg-[#f2f8fc] ">
                                <h3 className="text-[20px] font-extrabold text-[#0b2d4a] mb-1">
                                    {member.name}
                                </h3>

                                {/* Yellow Accent Line */}
                                <span className="w-10 h-[2px] bg-[#fbbf24] "></span>

                                <p className="text-[#5a7184] text-[14px] font-medium">
                                    {member.role}
                                </p>
                            </div>
                        </Link>
                    </motion.div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-6">
                        <Pagination 
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}