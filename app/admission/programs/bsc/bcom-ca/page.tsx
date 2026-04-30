import CoursePage from '@/app/components/CoursePage'
import React from 'react'

function page() {
  return (
    <>
      <CoursePage
        title="B.Com (Computer Applications)"
        code="Bachelor of Commerce with IT Integration"
        duration="3 Years"
        seats="60"
        eligibility="10+2 Pass (Commerce/Accountancy with Computer Science preferred)"
        image="/newgirlimages/image-19.jpeg"
        content={{
          objectives: [
            "Integrating core accounting principles with advanced computer programming.",
            "Mastering E-Commerce, Database Management, and Digital Accounting.",
            "Developing software-driven solutions for complex business problems.",
            "Equipping students for the FinTech (Financial Technology) industry."
          ],
          vision: "",
          mission: [],
          features: [
            "Exclusive High-End Computer Lab: Equipped with the latest accounting and coding software.",
            "E-Commerce Training Center: Learning to build and manage online business portals.",
            "Software Development for Business: Training in Python, C++, and Java for financial apps.",
            "Digital Taxation Suite: Practice with online IT filing and GST portals.",
            "Data Analytics Corner: Introduction to Business Intelligence tools and Big Data."
          ],
          blendedLearning: "We bridge the gap between the ledger and the laptop. Students perform cloud-based accounting, use automated audit tools, and engage in virtual coding bootcamps specifically designed for financial systems.",
          activities: [
            "Tech-Biz Expo: Showcasing innovative business software developed by students.",
            "Cyber-Security Workshops: Learning to protect financial data from digital threats.",
            "Web Designing Contests for E-Business models.",
            "Industrial visits to IT Parks and Fintech companies."
          ],
          addOnCourses: [
            "Python for Data Analytics",
            "Web Development (HTML, CSS, JS)",
            "Cyber Security in Banking",
            "Digital Auditing Tools"
          ],
          benefits: [
            "Double Expertise: Strong foundation in both Commerce and Information Technology.",
            "High Employability: Ready for roles in IT-enabled services (ITES) and Banking.",
            "Modern Edge: Superior skills compared to traditional commerce graduates in the digital age.",
            "Adaptability: Capability to pivot between Finance roles and IT roles."
          ],
          empowerment: [
            "What can you do? Become an E-Commerce Manager, Systems Auditor, Data Analyst, or Financial Programmer.",
            "Future Scope: Path to MCA, M.Com (CA), MBA (Systems), or Data Science certifications.",
            "Digital Entrepreneurship: Fully capable of launching and managing an online startup/e-shop.",
            "Corporate Placement: Direct entry into IT companies like TCS, Infosys, and Wipro for financial back-end roles."
          ]
        }}
      />
    </>
  )
}

export default page