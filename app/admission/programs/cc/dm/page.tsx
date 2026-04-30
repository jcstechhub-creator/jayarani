import CoursePage from '@/app/components/CoursePage'
import { pageImages } from '@/data/image'
import React from 'react'
export default function DisasterManagementPage() {
  return (
    <CoursePage
      title="Disaster Management"
      code="Certificate in Emergency Response & Safety"
      duration="6 Months"
      seats="40"
      eligibility="10+2 or Any Degree"
     
                             image={pageImages.adminSecretary}
      content={{
        objectives: [
          "Mastering risk assessment for natural and man-made disasters.",
          "Developing rapid response and rescue operation strategies.",
          "Learning the logistics of relief distribution and rehabilitation.",
          "Understanding the role of technology (Drones/GIS) in emergencies."
        ],
        features: [
          "Rescue Simulation Lab: Training in first-aid and emergency rescue.",
          "GIS Mapping Wing: Tracking disaster-prone areas and flood zones.",
          "Fire Safety Suite: Hands-on with fire control and building safety.",
          "Emergency Comm-Cell: Training in HAM radio and satellite phones."
        ],
        blendedLearning: "Virtual Reality (VR) simulations for disaster scenarios and digital training on the NDMA (National Disaster Management Authority) guidelines.",
        activities: [
          "Mock Drills for Earthquake and Fire safety in the campus.",
          "First-Aid and CPR certification workshops with Red Cross.",
          "Interactions with Fire Department and NDRF personnel."
        ],
        addOnCourses: ["Occupational Health & Safety (OHSAS)", "First Aid Certification"],
        benefits: [
          "Life-Saving Skills: Capability to act calmly during critical crises.",
          "Corporate Value: High demand for Safety Officers in factories and malls."
        ],
        empowerment: [
          "Future Scope: Path to specialized roles in Global Disaster relief.",
          "Career Paths: Safety Officer, Emergency Coordinator, or NGO Manager.",
          "Government Role: Critical skill for District Administration and Police aspirers."
        ]
      }}
    />
  )
}