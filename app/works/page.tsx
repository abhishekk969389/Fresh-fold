import Subbanner from "@/app/components/ui/subbanner";
import WorksSec from "@/app/components/layout/works/workssec";
import CTA from "@/app/components/ui/cta";

export default function WorksPage() {
  return (
    <>
      <Subbanner pageKey="works" />
      <WorksSec />
      <CTA/>
    </>
  );
}
