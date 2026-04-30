import CoursePage from '@/app/components/CoursePage'
import React from 'react'
import { pageImages } from '@/data/image'
export default function MAHistory() {
  return (
    <CoursePage
      title="M.A. History"
      code="Master of Arts (English & Tamil Medium)"
      duration="2 Years"
      seats="40"
      eligibility="Any Graduate"
     
                             image={pageImages.adminSecretary}
      content={{
        objectives: [
          "Mastering historiography and advanced research methodologies.",
          "Analyzing India's socio-political evolution with a focus on Tamil Heritage.",
          "Building professional expertise for Archives, Museums, and Archaeology.",
          "Decoding ancient scripts and their relevance to modern history."
        ],
        features: [
          "Archeological Field Training at active excavation sites.",
          "Manuscriptology Lab for preserving ancient palm-leaf scripts.",
          "Civil Service Focus: History modules tailored for UPSC/TNPSC.",
          "Heritage Digitization: Learning to archive history via digital tools."
        ],
        blendedLearning: "We combine field visits with digital mapping (GIS) of historical sites and access to international research archives for a global historical perspective.",
        activities: [
          "Numismatics (Coin study) and Epigraphy workshops.",
          "Guided Heritage Walks to temple architectures and inscriptions.",
          "Historical Debates on contemporary global geopolitical shifts."
        ],
        addOnCourses: ["Epigraphy & Inscriptions", "Tourism Management", "Journalism"],
        benefits: [
          "Bilingual Authority: Ability to research in both English and Tamil.",
          "Critical Reasoning: Understanding the deep roots of human society.",
          "Career Versatility: Eligible for roles from Archaeology to Intelligence."
        ],
        empowerment: [
          "Future Scope: Direct path to Ph.D., NET/SET, and University Professorship.",
          "Career Paths: Archeologist, Museum Curator, Archivist, or Historian.",
          "Civil Services: Strong foundation for the highest administrative roles in India."
        ]
      }}
    />
  )
}