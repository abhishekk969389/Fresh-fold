import React from "react";
import Subbanner from "@/app/components/ui/subbanner";
import FaqSection from "../components/layout/faq/faqsection";
import CTA from "../components/ui/cta";


export default function MissionPage() {
  return (
    <>
      <Subbanner pageKey="faq" />
      <FaqSection/>
      <CTA/>
    </>
  );
}



