import React from "react";
import Image from "next/image";
import Link from "next/link";
import { data } from "@/app/data";
import type { SubbannerData } from "@/app/data";

interface SubbannerProps {
  pageKey?: string;
  customTitle?: string;
  customBreadcrumbs?: { label: string; href: string }[];
  customBgImage?: string;
}

export default function Subbanner({ pageKey, customTitle, customBreadcrumbs, customBgImage }: SubbannerProps) {
  const allSubbanners = (data as any).subbanners as Record<string, SubbannerData>;
  
  // Try to get data from pageKey, or provide a default fallback
  const bannerData = (pageKey && allSubbanners[pageKey]) || { 
    bgImage: "/banner2.png", // Assuming a generic banner exists
    title: "", 
    breadcrumbs: [] 
  };

  const titleToDisplay = customTitle || bannerData.title;
  const breadcrumbsToDisplay = customBreadcrumbs || bannerData.breadcrumbs;

  return (
    <div className="relative w-full h-[180px] sm:h-[220px] lg:h-[250px] xl:h-[280px] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={customBgImage || bannerData.bgImage}
          alt={titleToDisplay}
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <style>{`
        @keyframes float-up {
          0% {
            transform: translateY(100px) scale(0.5);
            opacity: 0;
          }
          10% {
            opacity: 0.9;
          }
          90% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(-400px) scale(1.1);
            opacity: 0;
          }
        }
        .bubble-anim {
          animation: float-up linear infinite;
        }
        .realistic-bubble {
          border-radius: 50%;
          background: 
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.3) 30%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(120, 120, 120, 0.15) 0%, transparent 40%),
            rgba(255, 255, 255, 0.1);
          box-shadow: 
            inset 5px 5px 12px rgba(255, 255, 255, 1), 
            inset -6px -6px 15px rgba(130, 130, 130, 0.35),
            inset 0 0 10px rgba(255, 255, 255, 0.6),
            0 4px 10px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(2px);
        }
      `}</style>

      {/* Animated Bubbles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[
          { size: 45, left: 15, delay: 0, duration: 3.2 },
          { size: 60, left: 25, delay: 1.5, duration: 3.5 },
          { size: 35, left: 45, delay: 0.5, duration: 2.8 },
          { size: 70, left: 35, delay: 2.0, duration: 4.0 },
          { size: 50, left: 55, delay: 1.0, duration: 3.0 },
          { size: 40, left: 5, delay: 2.5, duration: 3.3 },
          { size: 55, left: 50, delay: 0.2, duration: 3.7 },
        ].map((bubble, i) => (
          <div
            key={i}
            className="bubble-anim realistic-bubble absolute bottom-[-50px]"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.left}%`,
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${bubble.delay}s`,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-30 w-full max-w-[1360px] mx-auto h-full px-6 xl:px-12 flex flex-col justify-center">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[#0b2d4a] font-bold text-[13px] sm:text-[14px] lg:text-[15px] mb-4">
          {breadcrumbsToDisplay.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <Link href={crumb.href} className="hover:text-[#0b2d4a]/80 transition-colors">
                {crumb.label}
              </Link>
              {idx < breadcrumbsToDisplay.length - 1 && (
                <span className="text-[#0b2d4a] mx-1">/</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-[36px] sm:text-[42px] lg:text-[50px] xl:text-[56px] font-bold text-[#073c47] leading-tight tracking-tight drop-shadow-sm">
          {titleToDisplay}
        </h1>

      </div>
    </div>
  );
}
