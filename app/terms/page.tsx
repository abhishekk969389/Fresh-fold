import Subbanner from "@/app/components/ui/subbanner";
import { AppLegalData } from "@/app/data";
import rawData from "@/app/data/data.json";
import PolicyLayout from "../components/layout/allpolicy/policysec";

export default function TermsPage() {
  const data: AppLegalData = rawData as AppLegalData;

  return (
    <>
      <Subbanner pageKey="terms" />
      <PolicyLayout policy={data.legalPolicies.termsAndConditions} />
    </>
  );
}