import CoursePage from '@/app/components/CoursePage'
import React from 'react'
import { pageImages } from '@/data/image'
export default function DiplomaNGO() {
  return (
    <CoursePage
      title="Diploma in NGO Management"
      code="Certification in Non-Profit Leadership"
      duration="1 Year"
      seats="40"
      eligibility="10+2 or Any Degree"
     
                             image={pageImages.adminSecretary}
      content={{
        objectives: [
          "Learning the legalities of NGO registration and FCRA compliance.",
          "Mastering Fundraising strategies and Grant writing for global donors.",
          "Developing Project Management skills for social development goals.",
          "Building transparency through social accounting and auditing."
        ],
        features: [
          "Fundraising Lab: Training in digital crowdfunding and CSR pitching.",
          "Documentation Cell: Mastering 12A, 80G, and NITI Aayog registration.",
          "CSR Connect: Interactions with corporate social responsibility heads.",
          "Digital NGO Suite: Training in managing non-profit social media."
        ],
        blendedLearning: "Practical focus on filling actual government forms, using project management software (like Trello/Asana), and virtual networking with global NGOs.",
        activities: [
          "Mock Proposal Pitching to 'Corporate Donors'.",
          "Workshops on Project Proposal writing and Budgeting.",
          "Internships with leading National and International NGOs."
        ],
        addOnCourses: ["CSR Policy & Planning", "Public Relations for NGOs"],
        benefits: [
          "Leadership Skills: Capability to start and lead your own Non-Profit.",
          "Global Career: Demand for NGO managers in international agencies."
        ],
        empowerment: [
          "Future Scope: Advanced certification for social entrepreneurs.",
          "Career Paths: Project Coordinator, Fundraiser, or NGO Consultant.",
          "Social Entrepreneurship: Fully equipped to launch your own social startup."
        ]
      }}
    />
  )
}