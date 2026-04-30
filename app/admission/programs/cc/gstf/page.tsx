import CoursePage from '@/app/components/CoursePage'
import React from 'react'
import { pageImages } from '@/data/image'
export default function GSTFilingPage() {
  return (
    <CoursePage
      title="GST Filing"
      code="Certificate in Indirect Tax Compliance"
      duration="3 Months (Fast Track)"
      seats="60"
      eligibility="B.Com/M.Com or Accounts Professionals"
      
                              image={pageImages.adminSecretary}
      content={{
        objectives: [
          "Mastering the GST Portal for Registration and Cancellation.",
          "Developing expertise in filing GSTR-1, GSTR-3B, and Annual Returns.",
          "Learning to handle E-Way Bills and E-Invoicing for businesses.",
          "Resolving GST notices and mastering tax reconciliation logic."
        ],
        features: [
          "Live GST Portal Lab: Real-time filing on dummy/practice portals.",
          "Notice Resolution Cell: Learning to respond to GST department letters.",
          "Excel for GST: Advanced formulas to clean data for error-free filing.",
          "Reconciliation Wing: Matching GSTR-2B with Purchase Books."
        ],
        blendedLearning: "100% portal-based training. Students use digital signatures and learn the security protocols of tax filing.",
        activities: [
          "Return Filing Marathons: Completing filing sets under time pressure.",
          "Workshops on the latest GST Council amendments.",
          "Interaction with Tax Advocates and GST Practitioners."
        ],
        addOnCourses: ["Income Tax E-Filing", "Professional Audit Tools"],
        benefits: [
          "Immediate Practice: Capability to start your own GST consultancy.",
          "Income Source: High demand for part-time GST filing experts."
        ],
        empowerment: [
          "Future Scope: Essential skill for every professional Accountant.",
          "Career Paths: GST Consultant, Tax Assistant, or Senior Accountant.",
          "Consultancy Ready: Fully equipped to manage GST compliance for multiple clients."
        ]
      }}
    />
  )
}