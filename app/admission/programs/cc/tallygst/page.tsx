import CoursePage from '@/app/components/CoursePage'
import React from 'react'

export default function TallyGSTPage() {
  return (
    <CoursePage
      title="Tally with GST"
      code="Certificate in Digital Accounting"
      duration="6 Months"
      seats="60"
      eligibility="10+2 or Degree (Commerce preferred)"
      image="/newgirlimages/image-54.jpeg"
      content={{
        objectives: [
          "Mastering Tally Prime for inventory and financial accounting.",
          "Developing expertise in GST invoicing, input tax credit, and returns.",
          "Learning to manage payroll, TDS, and banking reconciliation digitally.",
          "Generating professional financial reports (Balance Sheets, P&L)."
        ],
        features: [
          "Tally Simulation Lab: Practice with actual business transaction sets.",
          "GST Compliance Wing: Live training on the GST portal for filing.",
          "Payroll Studio: Managing employee salary, PF, and ESI in Tally.",
          "Multi-Currency Training: Handling international trade accounts."
        ],
        blendedLearning: "Students work on 'Live Client Vouchers' and use Tally's cloud-based features to learn remote accounting practices.",
        activities: [
          "Accounting Speed-Tests and Error-Detection challenges.",
          "Mock GST Filing sessions for various business types.",
          "Industrial visits to CA firms to observe real auditing."
        ],
        addOnCourses: ["Advanced Excel for Accountants", "Income Tax Filing"],
        benefits: [
          "Immediate Jobs: Every small and large business needs a Tally expert.",
          "Accuracy: High capability in maintaining error-free digital books."
        ],
        empowerment: [
          "Future Scope: Essential foundation for B.Com and M.Com students.",
          "Career Paths: Accounts Assistant, Tally Operator, or GST Consultant.",
          "Self-Employment: Capability to handle accounting for local businesses."
        ]
      }}
    />
  )
}