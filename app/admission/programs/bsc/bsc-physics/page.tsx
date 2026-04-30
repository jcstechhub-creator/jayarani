import CoursePage from '@/app/components/CoursePage'
import React from 'react'

function page() {
  return (
    <>
      <CoursePage
        title="B.Sc. Physics"
        code="Bachelor of Science in Physical Sciences & Electronics"
        duration="3 Years"
        seats="50"
        eligibility="10+2 Pass (Physics & Mathematics stream)"
        image="/newgirlimages/image-46.jpeg"
        content={{
          objectives: [
            "Mastering the fundamental laws of the universe, from quantum mechanics to astrophysics.",
            "Developing advanced skills in experimental design and precision measurement.",
            "Applying physical principles to modern technology like Semiconductors and Renewable Energy.",
            "Building analytical and computational models to solve complex scientific challenges."
          ],
          vision: "",
          mission: [],
          features: [
            "Advanced Optics Lab: Specialized darkroom for laser experiments and fiber optics.",
            "Digital Electronics Suite: Practice with Microprocessors, Arduino, and circuit design.",
            "Observatory Wing: Equipped with telescopes for celestial observation and astrophotography.",
            "Material Science Hub: Study of crystalline structures and nanotechnology.",
            "Simulation Cell: Computational physics training using Python and Virtual Labs."
          ],
          blendedLearning: "We bring the lab to the laptop. Students utilize PhET Interactive Simulations, participate in virtual observatory sessions, and engage with global research databases like CERN and NASA Open Data.",
          activities: [
            "Phy-Quest: Annual science exhibition featuring working prototypes and robots.",
            "Sky-Watch Nights: Monthly stargazing events for students and local schools.",
            "Circuit-Debugging Contests: Speed challenges in electronic circuit assembly.",
            "Industrial visits to Power Plants, ISRO facilities, and Research Centers."
          ],
          addOnCourses: [
            "Renewable Energy & Solar Panel Technology",
            "Embedded Systems & Robotics",
            "Medical Physics & Radiology",
            "C Programming for Scientific Applications"
          ],
          benefits: [
            "Scientific Rigor: Developing a highly disciplined and logical approach to problems.",
            "Tech-Savvy Background: Excellent understanding of the hardware behind modern gadgets.",
            "Global Research Opportunities: A foundation recognized by top universities worldwide.",
            "Career Flexibility: Transition easily into Engineering, Data Science, or Geophysics."
          ],
          empowerment: [
            "What can you do? Become a Lab Scientist, Electronics Designer, Energy Auditor, or Data Analyst.",
            "Future Scope: Path to M.Sc. Physics, M.Tech (Nanotechnology), or Ph.D. Research.",
            "Strategic Sectors: Preparation for elite roles in BARC, ISRO, DRDO, and the Atomic Energy Commission.",
            "Technical Leadership: Capability to lead R&D teams in the private electronics and energy sectors."
          ]
        }}
      />
    </>
  )
}

export default page