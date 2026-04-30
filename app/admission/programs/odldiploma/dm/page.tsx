import CoursePage from '@/app/components/CoursePage'
import React from 'react'
import { pageImages } from '@/data/image'
export default function DiplomaDigitalMarketing() {
  return (
    <CoursePage
      title="Diploma in Digital Marketing"
      code="Professional Certification in Online Branding"
      duration="1 Year"
      seats="50"
      eligibility="10+2 or Any Degree"
     
                             image={pageImages.adminSecretary}
      content={{
        objectives: [
          "Mastering SEO (Search Engine Optimization) and Content Strategy.",
          "Developing expertise in Social Media Marketing and Paid Ad Campaigns.",
          "Understanding Data Analytics to track consumer behavior.",
          "Learning Email Marketing and Affiliate Marketing techniques."
        ],
        features: [
          "Live Ad-Spend Lab: Practicing with real-time digital advertising.",
          "Content Studio: Training in Canva, Video Editing, and Copywriting.",
          "Analytics Wing: Mastering Google Analytics and Meta Business Suite.",
          "E-Commerce Suite: Setting up and managing online storefronts."
        ],
        blendedLearning: "100% project-based learning. Students manage live social media accounts, run mock SEO audits, and build their own professional portfolios.",
        activities: [
          "Digital Branding Contests and Viral Marketing challenges.",
          "Guest Lectures from Digital Agency Founders and Influencers.",
          "Workshops on AI tools for marketing (ChatGPT, Midjourney)."
        ],
        addOnCourses: ["AI in Marketing", "Video Production for Reels/TikTok"],
        benefits: [
          "Instant Income: High potential for freelancing and remote work.",
          "Industry Demand: Every business today requires a digital marketer."
        ],
        empowerment: [
          "Future Scope: Path to specialized roles in Performance Marketing.",
          "Career Paths: Social Media Manager, SEO Specialist, or Digital Strategist.",
          "Freelance Mastery: Capability to run your own Digital Marketing Agency."
        ]
      }}
    />
  )
}