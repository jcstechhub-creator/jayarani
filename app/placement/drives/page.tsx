"use client";

import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import {
  CheckCircle,
  Building,
  Code,
  Database,
  Shield,
  BarChart,
  Briefcase,
  Brain,
} from "lucide-react";

export default function Page() {
  return (
    <>
      {/* Header */}
      <PageHeader
        title="Placements & Career Opportunities"
        subtitle="Empowering students with industry connections and career paths"
        breadcrumb="Home / Placements"
        image={pageImages.placementDrives}
      />

      {/* Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-red-900 mb-4">
              Training & Placement Cell
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At Jayarani College, the Training and Placement Cell bridges academic learning with professional employment through structured ON and OFF Campus Drives.
            </p>

            <div className="mt-4 space-y-2">
              {[
                "ON-Campus Drives – Direct recruiter interaction",
                "OFF-Campus Drives – Wider opportunities",
                "Hybrid Drives – Virtual + offline hiring",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="text-green-600" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <img
            src="/newgirlimages/image-85.jpeg"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Collaborators */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-red-900 mb-6">
            Collaborators & Industry Partners
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We collaborate with leading companies and organizations to ensure our students are industry-ready and equipped for modern workplace challenges.
          </p>
        </div>
      </section>

      {/* Recruiters */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-red-900 text-center mb-10">
            Top Recruiters
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "IT: Microsoft, Google, Infosys, TCS, Wipro, IBM",
              "MNCs: Amazon, Accenture, JPMorgan",
              "Consulting: Deloitte, PwC, EY",
              "Banking: HDFC, ICICI",
              "Healthcare & Services",
              "Startups & Tech Firms",
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-red-900 text-white w-12 h-12 flex items-center justify-center rounded-md mx-auto mb-3">
                  <Building />
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CS Careers */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-red-900 text-center">
            B.Sc Computer Science Careers
          </h2>

          {[
            {
              title: "Software Developer",
              icon: Code,
              desc: "Develop and maintain software applications.",
            },
            {
              title: "Data Analyst / Scientist",
              icon: BarChart,
              desc: "Analyze data and support decision-making.",
            },
            {
              title: "Cybersecurity Analyst",
              icon: Shield,
              desc: "Protect systems from cyber threats.",
            },
            {
              title: "System Administrator",
              icon: Briefcase,
              desc: "Manage IT infrastructure and networks.",
            },
            {
              title: "Web Developer",
              icon: Code,
              desc: "Build and maintain websites.",
            },
            {
              title: "AI & ML Engineer",
              icon: Brain,
              desc: "Develop intelligent systems and models.",
            },
            {
              title: "Database Administrator",
              icon: Database,
              desc: "Manage and secure databases.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 bg-white p-6 rounded-xl shadow-md">
              <div className="bg-red-900 text-white p-3 rounded-md">
                <item.icon />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI & DS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/newgirlimages/image-86.jpeg"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold text-red-900 mb-4">
              AI & Data Science Careers
            </h2>

            {[
              "AI Developer & ML Engineer",
              "Data Scientist & Analyst",
              "BI Developer & NLP Engineer",
              "Data Engineer & Product Manager",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 mb-2">
                <CheckCircle className="text-green-600" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commerce + Arts */}
      {/* <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            "Finance, CA, Banking, Investment",
            "IT-enabled Accounting & Fintech",
            "Mathematics Careers (Data Science, Teaching)",
            "English Careers (Media, PR, Publishing)",
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-red-900 text-white w-12 h-12 flex items-center justify-center rounded-md mx-auto mb-3">
                <Briefcase />
              </div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section> */}



      {/* B.Sc Maths */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          <img
            src="/newgirlimages/image-87.jpeg"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold text-red-900 mb-4">
              B.Sc Mathematics Careers
            </h2>

            <div className="space-y-3 text-gray-700">
              <p><b>Data Science & Analytics:</b> Data Scientist, Statistical Analyst</p>
              <p><b>Research & Development:</b> Applied mathematics research roles</p>
              <p><b>Teaching:</b> Lecturer, Academic Tutor</p>
              <p><b>IT & Software:</b> Algorithm Developer, Software Developer</p>
              <p><b>Banking & Finance:</b> Actuarial Scientist, Quantitative Analyst</p>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Top Recruiters</h4>
              <div className="flex flex-wrap gap-2">
                {["IBM", "Oracle", "HCL", "ISI", "Capgemini", "Mu Sigma"].map((r) => (
                  <span key={r} className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B.Com */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h2 className="text-3xl font-bold text-red-900 mb-4">
              B.Com Careers
            </h2>

            <div className="space-y-3 text-gray-700">
              <p><b>Finance & Accounting:</b> CA, Financial Analyst</p>
              <p><b>Banking:</b> Relationship Manager, Investment Banker</p>
              <p><b>Taxation:</b> Tax Consultant, GST Practitioner</p>
              <p><b>Corporate Roles:</b> Business Analyst, Auditor</p>
              <p><b>Entrepreneurship:</b> Start your own business</p>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Top Recruiters</h4>
              <div className="flex flex-wrap gap-2">
                {["Deloitte", "EY", "HDFC", "ICICI", "PwC", "SBI Life"].map((r) => (
                  <span key={r} className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <img
            src="/newgirlimages/image-88.jpeg"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* B.Com CA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          <img
            src="/newgirlimages/image-89.jpeg"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold text-red-900 mb-4">
              B.Com CA Careers
            </h2>

            <div className="space-y-3 text-gray-700">
              <p><b>IT-enabled Accounting:</b> ERP Specialist, Software Consultant</p>
              <p><b>E-Commerce:</b> Data Analyst, E-Commerce Manager</p>
              <p><b>Corporate IT:</b> MIS Executive, Business Analyst</p>
              <p><b>FinTech:</b> System Analyst, Fintech Consultant</p>
              <p><b>Government Jobs:</b> Public sector opportunities</p>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Top Recruiters</h4>
              <div className="flex flex-wrap gap-2">
                {["Wipro", "Infosys", "Zoho", "TCS", "Accenture", "Flipkart"].map((r) => (
                  <span key={r} className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B.A English */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h2 className="text-3xl font-bold text-red-900 mb-4">
              B.A English Careers
            </h2>

            <div className="space-y-3 text-gray-700">
              <p><b>Content & Media:</b> Writer, Editor, Copywriter</p>
              <p><b>Teaching:</b> English Teacher, Trainer</p>
              <p><b>Public Relations:</b> PR Specialist, Communication Manager</p>
              <p><b>Publishing:</b> Editor, Literary Agent</p>
              <p><b>Civil Services:</b> UPSC & Government Exams</p>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Top Recruiters</h4>
              <div className="flex flex-wrap gap-2">
                {["The Hindu", "Penguin", "NDTV", "McKinsey", "Cognizant", "TOI"].map((r) => (
                  <span key={r} className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <img
            src="/newgirlimages/image-90.jpeg"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>


      {/* Final CTA */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-blue-900 text-white p-10 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Build Your Career with Confidence
            </h2>
            <p>
              Our structured placement process ensures high success rates and strong career growth opportunities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}