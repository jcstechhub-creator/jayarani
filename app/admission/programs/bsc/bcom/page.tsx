import CoursePage from '@/app/components/CoursePage'
import React from 'react'

function page() {
  return (
    <>
      <CoursePage
        title="B.Com (General)"
        code="Bachelor of Commerce - Professional Stream"
        duration="3 Years"
        seats="70"
        eligibility="10+2 Pass (Commerce/Accountancy Stream Preferred)"
        image="/newgirlimages/image-1.jpeg"
        content={{
          objectives: [
            "Mastering the principles of Modern Accounting and Financial Management.",
            "Becoming proficient in GST, Income Tax filing, and Auditing procedures.",
            "Developing expertise in Banking, Insurance, and Corporate Law.",
            "Building data-driven decision-making skills for business growth."
          ],
          // Vision and Mission omitted to focus on capabilities
          vision: "",
          mission: [],
          features: [
            "Tally ERP & Prime Lab: Hands-on training with industry-standard accounting software.",
            "Live GST Workshops: Real-time sessions on tax registration and filing.",
            "Commerce Lab: A practical space to learn about banking forms, stock market charts, and trade documents.",
            "Industrial Visits: Regular tours to Manufacturing Hubs, Stock Exchanges, and Banks.",
            "Entrepreneurship Cell: Incubation support for students starting their own business ventures."
          ],
          blendedLearning: "We bridge the gap between classroom theory and industry practice. Students use cloud-based accounting tools, virtual trading platforms for the stock market, and digital modules from professional bodies like ICAI.",
          activities: [
            "Com-Trade Expo: A student-led business and trade fair.",
            "Mock Budget Sessions: Analysis and debating on the National Union Budget.",
            "Business Plan Competitions and Shark Tank-style pitching events.",
            "Guest Lectures by Chartered Accountants (CAs) and Company Secretaries (CS)."
          ],
          addOnCourses: [
            "Tally Prime with GST Certification",
            "Advanced Excel for Financial Analysis",
            "Digital Marketing for Business",
            "Insurance & Risk Management"
          ],
          benefits: [
            "Professional Versatility: High demand in every sector from Retail to Tech.",
            "Financial Literacy: Personal and professional expertise in wealth management.",
            "High Salary Potential: Strong starting packages for skilled accountants.",
            "Ethical Leadership: Training in corporate governance and business ethics."
          ],
          empowerment: [
            "What can you do? Start as an Accountant, Financial Analyst, Tax Consultant, or Bank Officer.",
            "Future Scope: Path to professional certifications like CA, CMA, CS, or an MBA in Finance.",
            "Government Jobs: Excellent foundation for UPSC, Banking (IBPS), and LIC AAO exams.",
            "Business Capability: Fully equipped to manage the finances and operations of your own startup."
          ]
        }}
      />
    </>
  )
}

export default page