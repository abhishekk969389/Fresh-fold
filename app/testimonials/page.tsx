import Subbanner from "@/app/components/ui/subbanner";
import TestimonialsSection from "../components/layout/testimonials/testimonialssec";
import CTA from "../components/ui/cta";



export default function TestimonialsPage() {
  return (
    <>
      <Subbanner pageKey="testimonials" />
      <TestimonialsSection/>
      <CTA/>
    </>
  );
}



