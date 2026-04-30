import CoursePage from '@/app/components/CoursePage'
import React from 'react'

export default function MAEnglish() {
  return (
    <CoursePage
      title="M.A. English"
      code="Master of Arts in Literature & Theory"
      duration="2 Years"
      seats="40"
      eligibility="B.A. English Literature"
      image="/newgirlimages/image-60.jpeg"
      content={{
        objectives: [
          "Exploring Post-colonialism, Feminism, and Contemporary Theory.",
          "Mastering English Language Teaching (ELT) and Pedagogy.",
          "Developing professional translation skills for global media.",
          "Gaining expertise in Academic Writing and Thesis Documentation."
        ],
        features: [
          "Advanced ELT Lab for curriculum design and phonetics.",
          "Digital Humanities Cell: Integrating tech with literary studies.",
          "Publishing Cell: Student-run journal for research and reviews.",
          "Global Literature Archive: Access to rare journals and archives."
        ],
        blendedLearning: "Usage of LMS for collaborative peer-reviewing, virtual drama workshops, and digital archives from the British Council.",
        activities: [
          "National Level Paper Presentations and Seminars.",
          "Critical Screenings of World Cinema and Adaptation Studies.",
          "Workshops on Content Strategy and Creative Copyediting."
        ],
        addOnCourses: ["Copyediting & Publishing", "Film Studies", "Technical Writing"],
        benefits: [
          "Intellectual Depth: Sophisticated understanding of global cultures.",
          "Global Fluency: Readiness for international corporate environments.",
          "Creative Mastery: Excellence in writing, editing, and professional speech."
        ],
        empowerment: [
          "Future Scope: NET/SET/Ph.D. pathways and academic professorship.",
          "Career Paths: Senior Editor, Content Strategist, or Translator.",
          "Media Success: Careers in Journalism, Scriptwriting, and PR."
        ]
      }}
    />
  )
}