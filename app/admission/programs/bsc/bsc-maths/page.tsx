import CoursePage from '@/app/components/CoursePage'
import { pageImages } from '@/data/image'
import React from 'react'

function page() {
  return (
    <>
      <CoursePage
        title="B.Sc. Mathematics"
        code="Bachelor of Science in Mathematical Sciences & Analytics"
        duration="3 Years"
        seats="60"
        eligibility="10+2 Pass (Mathematics as a Core Subject)"
       
                               image={pageImages.adminSecretary}
        content={{
          objectives: [
            "Developing advanced logical reasoning and abstract thinking capabilities.",
            "Mastering the mathematical foundations of Data Science and Cryptography.",
            "Applying statistical models to solve real-world economic and industrial problems.",
            "Preparing students for high-level competitive exams and research fellowships."
          ],
          vision: "",
          mission: [],
          features: [
            "Mathematical Computing Lab: Practice with MATLAB, Mathematica, and Maple software.",
            "Statistical Analysis Wing: Dedicated training in R-Programming and SPSS.",
            "Ramanujan Library: A specialized collection of advanced journals and Olympiad prep books.",
            "Problem-Solving Hub: Daily brain-teasers and mathematical logic challenges.",
            "Math-Tech Integration: Lessons on how calculus and algebra power Modern AI."
          ],
          blendedLearning: "We transform abstract concepts into visual reality. Students use 3D graphing tools (GeoGebra), participate in virtual math symposiums, and access digital modules for advanced competitive coaching like IIT-JAM.",
          activities: [
            "Math-Magica: Annual celebration of National Mathematics Day with exhibitions.",
            "Logic-Quest: Inter-departmental Sudoku and Rubik's Cube championships.",
            "Modeling Workshops: Building physical and digital models of geometric structures.",
            "Seminar Series: Sessions on the 'Golden Ratio' in nature, art, and architecture."
          ],
          addOnCourses: [
            "Data Analytics with R-Programming",
            "Operations Research & Optimization",
            "Quantitative Aptitude for Competitive Exams",
            "Actuarial Science Foundation"
          ],
          benefits: [
            "Mental Agility: Unmatched ability to solve complex problems under pressure.",
            "Versatile Foundation: A degree that allows entry into IT, Finance, or Space Science.",
            "Analytical Edge: Recruiters value math majors for their superior data-handling skills.",
            "Research Readiness: Strong base for pursuing specialized research in pure or applied math."
          ],
          empowerment: [
            "What can you do? Become a Data Analyst, Cryptographer, Statistician, or Operations Manager.",
            "Future Scope: Path to M.Sc. Maths, MCA, MBA, or specialized M.Sc. in Data Science/Actuarial Science.",
            "Government Success: The highest success rate in UPSC (Maths optional), SSC, and Banking exams.",
            "Teaching & Research: Path to becoming a Professor or Scientist at organizations like ISRO and DRDO."
          ]
        }}
      />
    </>
  )
}

export default page