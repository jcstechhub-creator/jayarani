import CoursePage from '@/app/components/CoursePage'
import React from 'react'

export default function MAEconomics() {
  return (
    <CoursePage
      title="M.A. Economics"
      code="Master of Arts (English & Tamil Medium)"
      duration="2 Years"
      seats="40"
      eligibility="Any Graduate (Economics preferred)"
      image="/newgirlimages/image-59.jpeg"
      content={{
        objectives: [
          "Developing expertise in Micro, Macro, and Econometric modeling.",
          "Analyzing fiscal policies and their impact on global development.",
          "Mastering data-driven forecasting for the banking and corporate sectors.",
          "Evaluating socio-economic schemes and rural development progress."
        ],
        features: [
          "Economic Research Cell for local market trend analysis.",
          "Statistical Lab with training in SPSS and R-Programming.",
          "Policy Discussion Forum reviewing Union and State Budgets.",
          "Data Analytics Wing for corporate financial forecasting."
        ],
        blendedLearning: "Integration of real-time financial dashboards and international economic databases (World Bank/IMF) to bridge the gap between theory and markets.",
        activities: [
          "Socio-Economic Field Surveys and Rural Income studies.",
          "Stock Market Simulations and Fiscal Policy Debates.",
          "Guest Lectures by Planning Commission experts and Lead Bank Managers."
        ],
        addOnCourses: ["Financial Risk Management", "Data Analytics", "Applied Econometrics"],
        benefits: [
          "Professional Capability: Expertise in financial trends in two languages.",
          "Strategic Mindset: Ability to predict market and policy shifts.",
          "Financial Literacy: Expertise in wealth management and macro-planning."
        ],
        empowerment: [
          "Future Scope: Path to IES (Indian Economic Service) or RBI Officer roles.",
          "Career Paths: Policy Analyst, Economic Consultant, or Financial Auditor.",
          "Global Impact: Opportunities in International NGOs and Development Agencies."
        ]
      }}
    />
  )
}