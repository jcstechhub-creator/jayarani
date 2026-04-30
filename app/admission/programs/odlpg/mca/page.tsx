import CoursePage from '@/app/components/CoursePage'
import React from 'react'
import { pageImages } from '@/data/image'
export default function MCAPage() {
  return (
    <CoursePage
      title="M.C.A."
      code="Master of Computer Applications"
      duration="2 Years"
      seats="60"
      eligibility="BCA/B.Sc CS or any degree with Maths at +2 level"
      
                              image={pageImages.adminSecretary}
      content={{
        objectives: [
          "Mastering advanced software architecture and Cloud computing.",
          "Developing high-impact mobile and web applications for global markets.",
          "Gaining expertise in Big Data Analytics and Artificial Intelligence.",
          "Preparing for senior roles in Software Engineering and DevOps."
        ],
        features: [
          "Full-Stack Development Lab (MERN, MEAN, and Python).",
          "Cloud Computing Center with AWS/Azure environments.",
          "Security Operations Center (SOC) for Cyber Defense training.",
          "GitHub Collaborative Room for Open Source contributions."
        ],
        blendedLearning: "We follow Agile methodologies. Students participate in 24-hour Hackathons and earn industry certifications from AWS and Google as part of their curriculum.",
        activities: [
          "Grand Hackathons and App-Building Challenges.",
          "Guest Lectures by Senior Architects from top-tier IT companies.",
          "Tech-Summit: Inter-collegiate technical symposium."
        ],
        addOnCourses: ["Cloud Architect Certification", "AI & Deep Learning", "Blockchain Tech"],
        benefits: [
          "Architectural Skill: Ability to design massive software systems.",
          "High-Value Placement: Ready for Tier-1 companies like Google and Amazon.",
          "Tech Leadership: Capability to lead R&D and engineering teams."
        ],
        empowerment: [
          "Future Scope: Specialized Research in AI or entry into Tech-Leadership roles.",
          "Career Paths: Software Architect, Cloud Engineer, Full-Stack Lead, or CTO.",
          "Digital Independence: Capability to run a private software consultancy."
        ]
      }}
    />
  )
}