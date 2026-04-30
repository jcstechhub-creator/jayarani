import CoursePage from '@/app/components/CoursePage'
import React from 'react'
import { pageImages } from '@/data/image'
export default function DiplomaFinance() {
  return (
    <CoursePage
      title="Diploma in Financial Planning"
      code="Certification in Wealth & Investment Management"
      duration="1 Year"
      seats="40"
      eligibility="10+2 or Any Degree (Commerce preferred)"
      
                              image={pageImages.adminSecretary}
      content={{
        objectives: [
          "Mastering the art of Personal Wealth Management and Investment.",
          "Understanding Stock Markets, Mutual Funds, and Insurance products.",
          "Developing expertise in Tax Planning and Retirement strategies.",
          "Learning to create comprehensive financial plans for clients."
        ],
        features: [
          "Trading Terminal: Practice with live stock market simulations.",
          "Tax Planning Suite: Practical training in individual tax filing.",
          "Investment Corner: Analyzing real-time mutual fund performance.",
          "Client Counseling Hub: Role-playing financial advisory sessions."
        ],
        blendedLearning: "We utilize financial simulation software and digital wealth management apps to teach modern, paperless financial planning.",
        activities: [
          "Mock Trading Competitions and Portfolio Management contests.",
          "Workshops on Estate Planning and Risk Assessment.",
          "Guest Lectures from Certified Financial Planners (CFP)."
        ],
        addOnCourses: ["Stock Market Basics", "Insurance Sales & Advisory"],
        benefits: [
          "Financial Independence: Expert knowledge to manage your own money.",
          "Certified Path: Strong foundation for the CFP (Certified Financial Planner) exam."
        ],
        empowerment: [
          "Future Scope: Path to becoming a registered Investment Advisor.",
          "Career Paths: Financial Planner, Wealth Manager, or Insurance Consultant.",
          "Professional Edge: High demand in Banks and Wealth Management firms."
        ]
      }}
    />
  )
}