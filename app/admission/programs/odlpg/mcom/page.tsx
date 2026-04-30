import CoursePage from '@/app/components/CoursePage'
import React from 'react'

export default function MComPage() {
  return (
    <CoursePage
      title="M.Com"
      code="Master of Commerce"
      duration="2 Years"
      seats="40"
      eligibility="B.Com or B.B.A. Graduate"
      image="/newgirlimages/image-65.jpeg"
      content={{
        objectives: [
          "Mastering advanced corporate accounting and IFRS standards.",
          "Developing expertise in Strategic Cost Management and Finance.",
          "Preparing for leadership in Auditing, Taxation, and Research.",
          "Analyzing global financial markets and investment strategies."
        ],
        features: [
          "Professional Tax Lab for corporate tax planning and e-filing.",
          "Investment Corner for portfolio management and derivative training.",
          "Case Study Wing analyzing real-world corporate mergers and failures.",
          "Advanced Tally Prime and SAP FICO integration."
        ],
        blendedLearning: "Students engage in live projects with local firms, use virtual fintech simulations, and analyze real-time financial dashboards.",
        activities: [
          "Commerce Research Colloquium and Paper Presentations.",
          "Management Games and Finance Hackathons.",
          "Live Auditing simulations with industry partners."
        ],
        addOnCourses: ["SAP FICO Training", "Investment Banking", "Corporate Secretarial Practice"],
        benefits: [
          "Executive Readiness: High-level financial decision-making skills.",
          "Professional Edge: Strong foundation for CA/CMA/CS final levels.",
          "MNC Careers: Eligible for roles in International Accounting firms."
        ],
        empowerment: [
          "Future Scope: Path to Ph.D. in Commerce or senior financial leadership.",
          "Career Paths: Finance Manager, Internal Auditor, or Tax Consultant.",
          "Academic Path: Qualified to become a Professor through NET/SET."
        ]
      }}
    />
  )
}