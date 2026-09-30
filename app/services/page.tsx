
import Subbanner from "@/app/components/ui/subbanner";
import ServicesList from "../components/layout/services/servicesec";
import CTA from "../components/ui/cta";

export default function ServicePage() {
  return (
    <>
      <Subbanner pageKey="services" />
      <ServicesList/>
      <CTA/>
    </>
  );
}



