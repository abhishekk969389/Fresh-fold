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
      <About/>
      <Works/>
      <WhyChoose/>
      <CTA/>
    </>
  );
}
