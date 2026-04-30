import CoursePage from '@/app/components/CoursePage'
import React from 'react'

export default function SocialEntrepreneurshipPage() {
  return (
    <CoursePage
      title="Social Entrepreneurship"
      code="Certificate in Impact-Driven Business"
      duration="6 Months"
      seats="40"
      eligibility="Any Degree or Aspiring Founders"
      image="/newgirlimages/image-53.jpeg"
      content={{
        objectives: [
          "Building business models that solve critical social and environmental problems.",
          "Mastering the 'Triple Bottom Line': People, Planet, and Profit.",
          "Developing skills in impact measurement and ethical fundraising.",
          "Learning to scale social innovations for maximum community reach."
        ],
        features: [
          "Impact Incubation: Mentorship to turn a social idea into a startup.",
          "Ethical Branding Wing: Training in storytelling for social causes.",
          "Networking Hub: Connecting with successful social founders and investors.",
          "B-Plan Lab: Creating investor-ready pitches for social ventures."
        ],
        blendedLearning: "Focus on the Lean Startup methodology. Students use digital canvases to design models and engage in virtual global social-innovation challenges.",
        activities: [
          "Social Shark Tank: Pitching social startup ideas to a panel of experts.",
          "Field Visits to Social Enterprises (Eco-friendly units, SHGs).",
          "Workshops on Crowdfunding and Impact Investing."
        ],
        addOnCourses: ["CSR Strategy", "Sustainable Supply Chain"],
        benefits: [
          "Independence: Capability to build your own mission-driven career.",
          "Professional Aura: Highly valued by global CSR departments and NGOs."
        ],
        empowerment: [
          "Future Scope: Entry into the global ecosystem of impact accelerators.",
          "Career Paths: Social Founder, CSR Manager, or Impact Analyst.",
          "Startup Ready: Fully equipped to launch and manage a self-sustaining social venture."
        ]
      }}
    />
  )
}