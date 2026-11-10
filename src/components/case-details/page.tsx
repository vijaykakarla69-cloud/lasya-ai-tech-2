"use client"
import CaseStudyContent from "./CaseStudyContent"

import ContactCta from "../common/ContactCta"
export default function CaseDetailsContent({ caseStudyData }: any) {	
	return (
		<>
            <CaseStudyContent caseStudyData={caseStudyData} />	
			<ContactCta /> 
		</>
	)
}