import React from "react";
import Subbanner from "@/app/components/ui/subbanner";
import Testimonial from "../components/homelayout/testimonial";
import MissionSec from "../components/layout/mission/missionsec";

export default function MissionPage() {
  return (
    <>
      <Subbanner pageKey="mission" />
      <MissionSec/>
      <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14">
      <Testimonial/>
      </div>
    </>
  );
}



