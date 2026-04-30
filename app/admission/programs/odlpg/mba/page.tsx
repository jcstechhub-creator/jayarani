import CoursePage from '@/app/components/CoursePage'
import React from 'react'
import { pageImages } from '@/data/image'
export default function MBAPage() {
  return (
    <CoursePage
      title="M.B.A."
      code="Master of Business Administration"
      duration="2 Years"
      seats="60"
      eligibility="Any Graduate with 50% marks"
    
                            image={pageImages.adminSecretary}
      content={{
        objectives: [
          "Developing a global mindset for organizational leadership.",
          "Mastering expertise in HR, Finance, Marketing, and Operations.",
          "Fostering entrepreneurship to build and scale modern startups.",
          "Building executive communication and strategic negotiation skills."
        ],
        features: [
          "Corporate Incubation Center for student-led business ideas.",
          "Boardroom Simulation Suite for high-stakes leadership practice.",
          "Dual Specialization options in high-demand industry sectors.",
          "Weekly Corporate-Connect sessions with industry CEOs."
        ],
        blendedLearning: "We utilize Harvard Business Review case studies, AI-driven business analytics, and virtual leadership summits to provide a 360-degree corporate perspective.",
        activities: [
          "CEO-Connect and Management Fests.",
          "Mock Stock Trading and Ad-Zap Competitions.",
          "International Industrial Visits and Corporate Internships."
        ],
        addOnCourses: ["Digital Marketing & SEO", "HR Analytics", "Project Management (PMP)"],
        benefits: [
          "Global Executive Network: Access to a powerful alumni community.",
          "Leadership Persona: Complete transformation of professional personality.",
          "High Salary Potential: Entry into senior management roles."
        ],
        empowerment: [
          "Future Scope: Path to Ph.D. in Management or Global Executive roles (VP/CXO).",
          "Career Paths: Brand Manager, HR Director, Operations Head, or Startup Founder.",
          "Entrepreneurship: Full support to launch your own business venture."
        ]
      }}
    />
  )
}