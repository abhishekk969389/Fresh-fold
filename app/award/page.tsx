
import Subbanner from "@/app/components/ui/subbanner";
import RecognitionSection from "../components/layout/award/awardsec";
import CertificationsSection from "../components/layout/award/certificatesec";
import CTA from "../components/ui/cta";


export default function AwardPage() {
  return (
    <>
      <Subbanner pageKey="award" />
      <CertificationsSection/>
      <RecognitionSection/>
      <CTA/>
    </>
  );
}
