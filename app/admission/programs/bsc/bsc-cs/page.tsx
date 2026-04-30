import CoursePage from '@/app/components/CoursePage'
import React from 'react'
import { pageImages } from '@/data/image'
function page() {
  return (
    <>
      <CoursePage
        title="B.Sc. Computer Science"
        code="Bachelor of Science in Software Engineering & AI"
        duration="3 Years"
        seats="50"
        eligibility="10+2 Pass (Mathematics / Computer Science Stream)"
       
                               image={pageImages.adminSecretary}
        content={{
          objectives: [
            "Mastering full-stack development, from database logic to front-end interfaces.",
            "Developing problem-solving expertise through Algorithms and Data Structures.",
            "Gaining hands-on experience in Artificial Intelligence and Machine Learning.",
            "Building industry-standard software applications using modern frameworks."
          ],
          vision: "",
          mission: [],
          features: [
            "Smart Tech Lab: High-speed workstations equipped with the latest IDEs and Cloud tools.",
            "IoT Innovation Hub: A dedicated space for hardware-software integration projects.",
            "Open Source Community: Student-led groups for contributing to global projects like GitHub.",
            "Coding Arena: Weekly hackathons and competitive programming challenges.",
            "24/7 Digital Library: Access to IEEE journals, research papers, and premium coding tutorials."
          ],
          blendedLearning: "We follow a 'Code-First' approach. Beyond lectures, students use platforms like HackerRank for assessments, participate in virtual collaborative coding via Git, and attend bootcamps led by Silicon Valley experts.",
          activities: [
            "Tech-Nexus: The flagship annual Inter-collegiate Technical Symposium.",
            "Debug-Thon: Real-world troubleshooting and code optimization contests.",
            "App Development Showcases: Pitching mobile and web apps to industry juries.",
            "Guest Lectures on Cyber Security, Blockchain, and Quantum Computing."
          ],
          addOnCourses: [
            "Full-Stack Web Development (MERN Stack)",
            "Mobile App Development (Flutter/React Native)",
            "AI & Data Science with Python",
            "Cloud Computing (AWS/Azure Foundation)"
          ],
          benefits: [
            "Future-Proof Skills: Expertise in the fastest-growing job market globally.",
            "Logical Mastery: Advanced analytical skills applicable in every business sector.",
            "High Earning Potential: Entry-level roles with premium salary packages.",
            "Innovation Power: The capability to build your own tech products from scratch."
          ],
          empowerment: [
            "What can you do? Become a Software Developer, UI/UX Designer, Data Scientist, or Systems Analyst.",
            "Future Scope: Direct path to M.Sc. CS, MCA, MS in Data Science (Abroad), or MBA (Tech Management).",
            "Startup Ready: Gain the technical foundation to launch your own SaaS or Tech Startup.",
            "Corporate Placement: Rigorous training for placements in Tier-1 companies like Google, Microsoft, and Amazon."
          ]
        }}
      />
    </>
  )
}

export default page