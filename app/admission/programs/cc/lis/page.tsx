import CoursePage from '@/app/components/CoursePage'
import React from 'react'
import { pageImages } from '@/data/image'
export default function LibrarySciencePage() {
  return (
    <CoursePage
      title="Library & Information Science"
      code="Certificate in Modern Information Systems"
      duration="6 Months"
      seats="40"
      eligibility="10+2 or Any Degree"
    
                            image={pageImages.adminSecretary}
      content={{
        objectives: [
          "Mastering library classification (DDC/CC) and cataloging systems.",
          "Learning to manage digital libraries and automated repository systems.",
          "Developing information retrieval skills for research and academia.",
          "Building expertise in book preservation and archival management."
        ],
        features: [
          "Digital Library Lab: Hands-on training in KOHA and DSpace software.",
          "E-Resource Wing: Learning to manage online journals and INFLIBNET.",
          "Preservation Studio: Practical training in book binding and repair.",
          "Information Literacy: Mastery of digital search and database management."
        ],
        blendedLearning: "Training focuses on 'Cloud Libraries.' Students manage virtual catalogs and learn to use AI-driven research assistant tools.",
        activities: [
          "Library Management Workshops and Book Exhibition planning.",
          "Visits to University and Public Libraries for field training.",
          "Seminars on Intellectual Property Rights (IPR) and Copyright."
        ],
        addOnCourses: ["Data Archiving", "Academic Content Management"],
        benefits: [
          "Technical Skill: Transition from traditional librarian to Information Manager.",
          "High Demand: Essential for all schools, colleges, and research firms."
        ],
        empowerment: [
          "Future Scope: Foundation for B.Lib.I.Sc or M.Lib.I.Sc degrees.",
          "Career Paths: School Librarian, Information Analyst, or Archivist.",
          "Academic Edge: Vital for institutions maintaining NAAC and NIRF records."
        ]
      }}
    />
  )
}