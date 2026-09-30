import React from "react";
import Subbanner from "@/app/components/ui/subbanner";
import Team from "../components/layout/team/teamsec";
import CTA from "../components/ui/cta";


export default function TeamPage() {
  return (
    <>
      <Subbanner pageKey="team" />
      <Team/>
      <CTA/>
    </>
  );
}



