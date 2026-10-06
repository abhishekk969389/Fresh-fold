import React from "react";
import Subbanner from "@/app/components/ui/subbanner";
import TeamMemberHero from "@/app/components/layout/teamdetails/team-member-hero";
import TeamMemberAbout from "@/app/components/layout/teamdetails/team-member-about";
import TeamMemberExperience from "@/app/components/layout/teamdetails/team-member-experience";
import CTA from "@/app/components/ui/cta";
import { data } from "@/app/data";
import type { AppData } from "@/app/data";
export default async function TeamDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const appData = data as AppData;
  const { slug } = await params;
  const teamDetailsData = appData.teamDetails[slug];

  return (
    <>
      <Subbanner pageKey="teamDetailssub" />
      {teamDetailsData ? (
        <>
          <TeamMemberHero data={teamDetailsData} />
          <TeamMemberAbout data={teamDetailsData} />
          <TeamMemberExperience data={teamDetailsData} />
        </>
      ) : null}
    </>
  );
}
