import React from "react";
import Subbanner from "@/app/components/ui/subbanner";
import About from "../components/homelayout/about";
import Works from "../components/homelayout/works";
import WhyChoose from "../components/homelayout/whychoose";
import CTA from "../components/ui/cta";

export default function AboutPage() {
  return (
    <>
      <Subbanner pageKey="about" />
      <About showButton={false} />
      <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12">
      <Works/>
      </div>
      <WhyChoose/>
      <CTA/>
    </>
  );
}
