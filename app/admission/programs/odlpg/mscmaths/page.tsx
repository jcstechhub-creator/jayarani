import CoursePage from '@/app/components/CoursePage'
import React from 'react'

export default function MScMaths() {
  return (
    <CoursePage
      title="M.Sc. Mathematics"
      code="Master of Science (Advanced Analytics)"
      duration="2 Years"
      seats="40"
      eligibility="B.Sc. Mathematics"
      image="/newgirlimages/image-66.jpeg"
      content={{
        objectives: [
          "In-depth mastery of Topology, Abstract Algebra, and Analysis.",
          "Developing mathematical models for AI and Data Science.",
          "Building problem-solving skills for high-end research fellowships.",
          "Applying math to Cryptography and Digital Security."
        ],
        features: [
          "Computational Mathematics Lab (Python, MATLAB, and LaTeX).",
          "Cryptographic Research Cell for mathematical security logic.",
          "Olympiad Coaching Center for NET/SET/GATE/JAM prep.",
          "Math-Tech Hub integrating logic with Machine Learning."
        ],
        blendedLearning: "We use interactive 4D visualization software and collaborative research platforms (GitHub) to transform abstract math into usable code.",
        activities: [
          "Research Paper Publications in Peer-Reviewed Journals.",
          "National Level Math Symposiums and Guest Lectures by Scientists.",
          "Logic-Thon: Competitive programming for mathematical proofs."
        ],
        addOnCourses: ["Machine Learning Algorithms", "Actuarial Math", "Operations Research"],
        benefits: [
          "Supreme Logic: Ability to handle the most complex data structures.",
          "Career Versatility: Transition into Space Science, Fintech, or AI.",
          "Analytic Edge: Highly valued in the global corporate data market."
        ],
        empowerment: [
          "Future Scope: CSIR-NET success and PhD positions in IIT/IISc.",
          "Career Paths: Data Scientist, Cryptographer, or Senior Professor.",
          "Strategic Roles: Positions in ISRO, DRDO, and Defense Research Labs."
        ]
      }}
    />
  )
}