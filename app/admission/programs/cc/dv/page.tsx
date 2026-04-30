import CoursePage from '@/app/components/CoursePage'
import React from 'react'
import { pageImages } from '@/data/image'
export default function DataVisPage() {
  return (
    <CoursePage
      title="Data Visualisation"
      code="Certificate in Analytics & Insights"
      duration="6 Months"
      seats="30"
      eligibility="Any Graduate with basic Computer Knowledge"
     
                             image={pageImages.adminSecretary}
      content={{
        objectives: [
          "Transforming raw data into high-impact visual stories and dashboards.",
          "Mastering industry tools like Tableau, Power BI, and Advanced Excel.",
          "Learning the principles of visual perception and design for data.",
          "Communicating complex business insights effectively to stakeholders."
        ],
        features: [
          "Analytics Lab: High-performance workstations with Power BI and Tableau.",
          "Visual Design Studio: Training in dashboard UI/UX and storytelling.",
          "Real-World Datasets: Working with live data from Finance and Healthcare.",
          "Portfolio Cell: Building a digital showcase of your visualisation projects."
        ],
        blendedLearning: "Project-driven approach. Students participate in 'Viz-Challenges' and use cloud platforms to publish interactive dashboards.",
        activities: [
          "Data-Storytelling Contests and Dashboard Hackathons.",
          "Guest Lectures by Data Analysts from top-tier tech firms.",
          "Workshops on Python-based visualization (Matplotlib, Seaborn)."
        ],
        addOnCourses: ["Storytelling with Data", "Advanced Excel Dashboards"],
        benefits: [
          "Elite Skill: Data viz is one of the highest-paying skills in 2026.",
          "Decision Power: Capability to influence business strategy via data."
        ],
        empowerment: [
          "Future Scope: Path to specialized roles in Business Intelligence (BI).",
          "Career Paths: Data Visualiser, BI Analyst, or Reporting Specialist.",
          "Freelance Edge: High demand for custom dashboard creators on global platforms."
        ]
      }}
    />
  )
}