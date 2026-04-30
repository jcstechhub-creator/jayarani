import CoursePage from '@/app/components/CoursePage'
import React from 'react'

export default function EIAPage() {
  return (
    <CoursePage
      title="Environmental Impact Assessment"
      code="Certificate in Sustainable Development"
      duration="6 Months"
      seats="30"
      eligibility="B.Sc (Science/Environment) or Engineering"
      image="/newgirlimages/image-49.jpeg"
      content={{
        objectives: [
          "Evaluating the environmental consequences of industrial projects.",
          "Mastering the legal policies of the Ministry of Environment (MoEF).",
          "Learning to prepare Environmental Management Plans (EMP).",
          "Developing skills in biodiversity mapping and pollution control."
        ],
        features: [
          "GIS & Remote Sensing Lab: Training in mapping land use changes.",
          "Pollution Monitoring Suite: Hands-on with air and water quality tools.",
          "Legal Repository: Access to latest environmental laws and case studies.",
          "Field Audit Training: Visiting project sites for mock impact studies."
        ],
        blendedLearning: "Integration of satellite imagery tools (Google Earth Engine) and digital templates for environmental reporting.",
        activities: [
          "Mock Public Hearings for industrial project approvals.",
          "Biodiversity documentation and Tree Census projects.",
          "Workshops on Climate Change Mitigation and Carbon Credits."
        ],
        addOnCourses: ["Waste Management Laws", "Renewable Energy Audit"],
        benefits: [
          "Compliance Expert: Essential role in corporate and construction sectors.",
          "Planet Positive: Ability to balance economic growth with nature."
        ],
        empowerment: [
          "Future Scope: Essential for pursuing M.Sc. or Ph.D. in Environment.",
          "Career Paths: EIA Consultant, Environment Officer, or Sustainability Lead.",
          "Consultancy Ready: Capability to work with environmental firms."
        ]
      }}
    />
  )
}