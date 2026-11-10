'use client';

import { useEffect, useState } from "react"
import HeroJsSada from "./HeroJsSada";
import FeaturesJs from "./FeaturesJs";
import IntegrateWithTeam from "./integrateWithTeam";
import TeamHire from "./team-hire";
import JsEngagementModel from "./JsEngagementModel";
import JsProgrammers from "./jsProgrammers";
import JsDoubts from "./jsDoubts";
import JsFinestProduct from "./jsFinestProduct";
import JsPartnerWith from "./jsPartnerUp";
import QualitiesSkills from "./QualitiesSkills";


export default function HireJsDevelopers({ data }: { data: any }) {
    if (!data) {   
        return null;
    }

    return (
        <>
            <HeroJsSada data={data.hero} />
            <FeaturesJs data={data.quick_placement} />
            <TeamHire data={data.hire} />
            <IntegrateWithTeam data={data.integrtaed_team} />
            <JsEngagementModel data={data.engagement} />
            <JsPartnerWith data={data.partner} />
            {/* <JsDoubts data={data.still_have_doubts} /> */}
            <JsProgrammers data={data.programmers} />
            <JsFinestProduct data={data.finest_product} />
            <QualitiesSkills data={data.qualities} />
        </>
    )
}
