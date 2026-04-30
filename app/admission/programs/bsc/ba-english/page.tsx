import CoursePage from '@/app/components/CoursePage'
import { contentImages } from '@/data/image'
import React from 'react'
import { pageImages } from '@/data/image'
function page() {
  return (
    <>
      <CoursePage
        title="B.A. English Literature"
        code="Professional Communication & Literary Studies"
        duration="3 Years"
        seats="60"
        eligibility="10+2 Pass (Any Stream)"
        // image="/newgirlimages/image-43.jpeg"
        
                        image={pageImages.adminSecretary}
        content={{
          objectives: [
            "Transforming students into expert communicators for the global market.",
            "Building high-level analytical skills to decode complex media and texts.",
            "Mastering professional writing for digital and corporate platforms.",
            "Preparing for leadership roles in education, media, and administration."
          ],
          // Vision and Mission omitted as requested
          vision: "", 
          mission: [],
          features: [
            "Advanced Language Lab: Specialized software for accent neutralization and phonetics.",
            "Digital Content Studio: Training for blogging, podcasting, and scriptwriting.",
            "Literary Library: Access to over 5,000+ titles including rare classics and modern journals.",
            "Expert Workshops: Monthly sessions with Journalists, Authors, and Copywriters.",
            "Theatrical Society: A dedicated platform for drama, stage presence, and public speaking."
          ],
          blendedLearning: "We move beyond books. Students use AI writing tools, participate in international webinars, and manage digital literary magazines to blend classic literature with 21st-century technology.",
          activities: [
            "Annual Literature Festival (LIT-FEST).",
            "International Film Screenings and Critical Analysis.",
            "Mock Press Conferences and News Reporting simulations.",
            "Poetry Slams and Creative Storytelling contests."
          ],
          addOnCourses: [
            "Technical & Content Writing (For IT/Corporate)",
            "Journalism & Mass Communication",
            "Public Relations & Corporate Branding",
            "English for Competitive Exams (UPSC/SSC/Banking)"
          ],
          benefits: [
            "Global Capability: Ability to work in any country with native-level English fluency.",
            "Critical Thinking: A mindset trained to see patterns and solve problems creatively.",
            "Versatile Career Path: Not restricted to one industry—English majors work everywhere.",
            "Personal Branding: Developing a sophisticated personality and high-impact communication."
          ],
          empowerment: [
            "What can you do? Become a Content Manager, Editor, PR Specialist, or Corporate Trainer.",
            "Future Scope: Direct pathway to M.A., MBA, Law, or International Relations.",
            "Government Jobs: High success rate in UPSC, TNPSC, and Bank PO exams due to strong verbal logic.",
            "Entrepreneurship: Capability to start your own Content Agency, Language School, or Freelance Studio."
          ]
        }}
      />
    </>
  )
}

export default page