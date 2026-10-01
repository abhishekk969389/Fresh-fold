import React from "react";
import { notFound } from "next/navigation";
import { data } from "@/app/data";
import Navbar from "@/app/components/homelayout/navbar";
import Subbanner from "@/app/components/ui/subbanner";
import Footer from "@/app/components/homelayout/footer";
import ServiceSidebar from "@/app/components/layout/servicedetails/service-sidebar";
import ServiceContent from "@/app/components/layout/servicedetails/service-content";
import Cta from "@/app/components/ui/cta";
import type { ServiceDetailsData } from "@/app/data";

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const details = (data as any).serviceDetails?.[slug] as ServiceDetailsData;

  if (!details) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-[32px] font-bold text-[#0b2d4a] mb-4">Service Not Found</h1>
        <a href="/#services" className="text-[#00bcd4] hover:underline">Return to Services</a>
      </main>
    );
  }

  return (
    <main className="">
      <Subbanner 
        customTitle={details.subbanner.title} 
        customBreadcrumbs={details.subbanner.breadcrumbs}
        customBgImage={details.subbanner.bgImage}
      />

      <section className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 ">
        <div className="max-w-[1360px] mx-auto px-6 xl:px-12 flex flex-col-reverse lg:flex-row gap-8 xl:gap-10">
          <ServiceSidebar servicesTabs={data.services.tabs} currentService={details.id} contactInfo={data.footer.contactInfo} />
          <ServiceContent details={details} />
        </div>
        
        <Cta className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-8 sm:mb-10 md:mb-12 lg:mb-14" />
      </section>
    </main>
  );
}
