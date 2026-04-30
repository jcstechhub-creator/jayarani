import CoursePage from '@/app/components/CoursePage'
import React from 'react'

export default function DiplomaSocialWelfare() {
  return (
    <CoursePage
      title="Diploma in Social Welfare Administration"
      code="Professional Certification in Social Governance"
      duration="1 Year"
      seats="40"
      eligibility="10+2 or Any Degree"
      image="/newgirlimages/image-58.jpeg"
      content={{
        objectives: [
          "Understanding the legal framework of social welfare in India.",
          "Mastering the administration of government welfare schemes.",
          "Developing skills in community organization and social defense.",
          "Learning to manage social welfare institutions and shelters."
        ],
        features: [
          "Field Visits to Government Social Defense departments.",
          "Case Study modules on successful social interventions.",
          "Workshops on Human Rights and Constitutional Law.",
          "Training in Social Audit and Impact Assessment."
        ],
        blendedLearning: "We combine classroom lectures with active field-work simulations and digital record-keeping training for social case management.",
        activities: [
          "Awareness Campaigns for local community health and education.",
          "Interaction with Social Welfare Officers and Policy Makers.",
          "Observation visits to Juvenile homes and Rehabilitation centers."
        ],
        addOnCourses: ["First Aid & Crisis Management", "Basic Legal Literacy"],
        benefits: [
          "Job Readiness: Direct entry into government-aided social projects.",
          "Social Impact: Capability to drive change at the grassroots level."
        ],
        empowerment: [
          "Future Scope: Foundation for BSW/MSW or Government Social Work roles.",
          "Career Paths: Welfare Officer, Community Organizer, or Program Assistant.",
          "Government Edge: Valuable certification for HR&CE and Social Defense exams."
        ]
      }}
    />
  )
}