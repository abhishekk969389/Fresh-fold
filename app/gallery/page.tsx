import React from "react";
import Subbanner from "@/app/components/ui/subbanner";
import GallerySection from "../components/layout/gallery/gallerysec";
import CTA from "../components/ui/cta";

export default function MissionPage() {
  return (
    <>
      <Subbanner pageKey="gallery" />
      <GallerySection/>
      <CTA/>
      
    </>
  );
}



