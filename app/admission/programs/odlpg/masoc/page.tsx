import CoursePage from '@/app/components/CoursePage'
import React from 'react'

export default function MASociology() {
  return (
    <CoursePage
      title="M.A. Sociology"
      code="Master of Arts (English & Tamil Medium)"
      duration="2 Years"
      seats="40"
      eligibility="Any Graduate"
      image="/newgirlimages/image-109.jpeg"
      content={{
        objectives: [
          "Analyzing complex social structures and urban/rural transitions.",
          "Mastering research techniques to address community challenges.",
          "Developing strategies for social welfare and gender equality.",
          "Decoding the impact of globalization on local cultures."
        ],
        features: [
          "Community Outreach Wing collaborating with local NGOs.",
          "Sociometry Lab for analyzing group dynamics and relationships.",
          "Human Rights Cell focusing on legal and constitutional protections.",
          "Counseling Suite for family and industrial sociology training."
        ],
        blendedLearning: "Students utilize digital ethnographic tools and participate in global webinars focused on UN Sustainable Development Goals (SDGs).",
        activities: [
          "Field Research Projects on tribal welfare and urban migration.",
          "Street Theatre and Awareness Campaigns for social change.",
          "Workshops on Criminology and Social Defense."
        ],
        addOnCourses: ["NGO Management", "Social Work & Counseling", "Criminology"],
        benefits: [
          "Social Intelligence: High capability to lead diverse groups.",
          "Strategic Vision: Understanding trends before they become mainstream.",
          "Human-Centric Design: Mastery in people management and social ethics."
        ],
        empowerment: [
          "Future Scope: High eligibility for UNICEF, UNESCO, and Govt Welfare depts.",
          "Career Paths: Social Welfare Officer, NGO Director, or HR/CSR Manager.",
          "Public Leadership: Foundation for leadership in public policy and activism."
        ]
      }}
    />
  )
}