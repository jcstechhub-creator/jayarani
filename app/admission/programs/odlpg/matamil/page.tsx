import CoursePage from '@/app/components/CoursePage'
import React from 'react'
import { pageImages } from '@/data/image'
function page() {
  return (
    <>
      <CoursePage
        title="B.A. Tamil Literature"
        code="Bachelor of Arts in Classical & Applied Tamil"
        duration="3 Years"
        seats="60"
        eligibility="10+2 Pass (Tamil as a Language Subject)"
       
                               image={pageImages.adminSecretary}
        content={{
          objectives: [
            "Mastering Sangam Literature and its relevance to modern ethics.",
            "Developing advanced proficiency in Tamil creative writing and translation.",
            "Exploring the evolution of Tamil grammar and linguistic structures.",
            "Equipping students with professional skills for Tamil media and journalism."
          ],
          vision: "",
          mission: [],
          features: [
            "Digital Tamil Lab: Training in Tamil computing, typing (Unicode), and e-publishing.",
            "Classical Library: Access to palm-leaf manuscript replicas and rare 'Sangam' texts.",
            "Creative Writing Wing: A dedicated space for poetry (Kavithai) and scriptwriting.",
            "Archeology Corner: Introduction to epigraphy and ancient Tamil inscriptions.",
            "Public Speaking Club: Training in 'Pattimandram' and 'Oratory' styles."
          ],
          blendedLearning: "We bridge ancient wisdom with modern tech. Students use digital archives of the Tamil Virtual University, contribute to Tamil Wikipedia, and participate in international webinars on Dravidian linguistics.",
          activities: [
            "Tamil Mandram: Monthly literary festivals and cultural competitions.",
            "Journalism Workshop: Hands-on training in news reporting for Tamil dailies.",
            "Poetry Slams: Platforms for modern 'Puthu-kavithai' and 'Haiku' writing.",
            "Field Trips: Visits to historical sites in Madurai, Tanjore, and Keezhadi excavations."
          ],
          addOnCourses: [
            "Tamil for Media & Journalism",
            "Epigraphy & Manuscriptology",
            "Translation Studies (English to Tamil)",
            "Tamil Computing & Web Content Creation"
          ],
          benefits: [
            "Cultural Authority: Deep knowledge of the world's oldest living classical language.",
            "Media Ready: Specialized skills for the booming Tamil satellite TV and Digital Media industry.",
            "Academic Excellence: A strong base for high-level research and professor roles.",
            "Administrative Edge: Significant advantage in TNPSC and state government communications."
          ],
          empowerment: [
            "What can you do? Become a Journalist, Scriptwriter, Content Creator, or Tamil Teacher.",
            "Future Scope: Path to M.A. Tamil, B.Ed, or specialized research in Archeology and Epigraphy.",
            "Government Sector: High success rate in TNPSC Group I & II (Tamil Optional) and HR&CE roles.",
            "Global Reach: Opportunities in International Universities with Tamil Departments (Singapore, Malaysia, USA)."
          ]
        }}
      />
    </>
  )
}

export default page