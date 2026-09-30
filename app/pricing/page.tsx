import Subbanner from "@/app/components/ui/subbanner";
import PricingSection from "../components/layout/pricing/pricesec";
import CTA from "../components/ui/cta";



export default function TeamPage() {
  return (
    <>
      <Subbanner pageKey="pricing" />
      <PricingSection/>
      <CTA/>
    </>
  );
}



