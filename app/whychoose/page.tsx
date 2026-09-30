import React from "react";
import Subbanner from "../components/ui/subbanner";
import WhyChoose from "../components/homelayout/whychoose";
import Works from "../components/homelayout/works";
import Testimonial from "../components/homelayout/testimonial";
import Counting from "../components/homelayout/counting";

export default function WhyChoosePage() {
  return (
    <>
      <Subbanner pageKey="whychoose" />
      <WhyChoose theme="light" />
      <Works/>
      <Testimonial/>
      <Counting/>
    </>
  );
}
