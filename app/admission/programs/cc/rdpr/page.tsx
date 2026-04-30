import CoursePage from '@/app/components/CoursePage'
import React from 'react'
import { pageImages } from '@/data/image'
export default function RDPRPage() {
  return (
    <CoursePage
      title="Rural Development & Panchayat Raj"
      code="Certificate in Grassroots Governance"
      duration="6 Months"
      seats="50"
      eligibility="10+2 or Any Degree"
     
                             image={pageImages.adminSecretary}
      content={{
        objectives: [
          "Understanding the 3-tier Panchayat Raj system and rural administration.",
          "Learning to implement and audit Government rural schemes (MGNREGA, etc.).",
          "Developing leadership skills for village-level social transformation.",
          "Mastering the documentation and digital portals of local bodies."
        ],
        features: [
          "Grama Sabha Simulations: Practical training in village meeting protocols.",
          "E-Panchayat Lab: Training in government digital administration portals.",
          "Field Visits to award-winning Model Villages (Adarsh Gram).",
          "Documentation Wing: Mastering project proposal writing for rural grants."
        ],
        blendedLearning: "We use digital case studies of successful rural innovations and virtual interactions with active Panchayat Presidents and Block Development Officers.",
        activities: [
          "Rural Survey Projects on sanitation and digital literacy.",
          "Workshops on Sustainable Development Goals (SDGs) for villages.",
          "Awareness rallies on social welfare and health schemes."
        ],
        addOnCourses: ["GIS for Rural Planning", "Basic Law for Panchayats"],
        benefits: [
          "Social Impact: Capability to directly improve village livelihoods.",
          "Career Edge: High demand in NGOs and Govt Rural Development agencies."
        ],
        empowerment: [
          "Future Scope: Foundation for higher studies in Social Work (MSW).",
          "Career Paths: Panchayat Secretary, Rural Consultant, or NGO Coordinator.",
          "Political Capability: Excellent training for those aspiring for local leadership."
        ]
      }}
    />
  )
}