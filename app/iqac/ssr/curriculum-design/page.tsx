import PageHeader from '@/app/components/PageHeader';
import { pageImages } from '@/data/image';
import { 
  BookOpen, GraduationCap, Laptop, Landmark, Target, 
  Code, Users, Heart, Trophy, Globe, Lightbulb 
} from 'lucide-react';
import React from 'react';

const CurriculumDesign = () => {
  const pillars = [
    {
      title: "Outcome-Based Curriculum",
      icon: <Target className="w-8 h-8 text-blue-600" />,
      description: "Moving beyond traditional rote learning to a system defined by measurable Program Outcomes (PO) and Course Outcomes (CO).",
      details: ["Competency-based evaluation", "Student-centric learning paths", "Continuous quality improvement"]
    },
    {
      title: "Practical & Industry Focus",
      icon: <Laptop className="w-8 h-8 text-green-600" />,
      description: "Bridging the gap between academia and the professional world through hands-on training and real-world application.",
      details: ["Industry-vetted syllabus", "Mandatory internships", "Project-based assessments"]
    },
    {
      title: "Indian Knowledge System (IKS)",
      icon: <Landmark className="w-8 h-8 text-red-600" />,
      description: "Integrating traditional wisdom with modern science, with a deep focus on Tamil Nadu's rich cultural and linguistic heritage.",
      details: ["Tamil Classical Literature", "Ethical Governance (Aram)", "Indigenous scientific methods"]
    }
  ];

  const holisticActivities = [
    {
      title: "Technical & Domain Clubs",
      icon: <Code className="text-blue-500" />,
      desc: "Subject-specific clubs organizing technical festivals, coding challenges, and domain seminars.",
      tags: ["Tech Fests", "Coding Clubs", "Domain Seminars"]
    },
    {
      title: "Innovation & Ideation",
      icon: <Lightbulb className="text-amber-500" />,
      desc: "Hackathons and Ideation workshops to foster a startup culture and problem-solving mindset.",
      tags: ["Hackathons", "Design Thinking", "IPR Workshops"]
    },
    {
      title: "Cultural & Creative Arts",
      icon: <Users className="text-purple-500" />,
      desc: "Preserving heritage through cultural festivals, fine arts clubs, and performance platforms.",
      tags: ["Heritage Fests", "Fine Arts", "Music & Dance"]
    },
    {
      title: "Mental Health & Wellbeing",
      icon: <Heart className="text-rose-500" />,
      desc: "Dedicated clubs for mindfulness, peer counseling, and emotional intelligence workshops.",
      tags: ["Wellness Hub", "Counseling", "Yoga"]
    },
    {
      title: "Sports & Athletics",
      icon: <Trophy className="text-orange-500" />,
      desc: "Inter-collegiate tournaments and specialized coaching for various indoor and outdoor sports teams.",
      tags: ["Team Sports", "Athletics", "Annual Sports Meet"]
    },
    {
      title: "Community & UBA",
      icon: <Globe className="text-emerald-500" />,
      desc: "Social responsibility via Unnat Bharat Abhiyan (UBA) and rural development initiatives.",
      tags: ["UBA Projects", "Village Adoption", "NSS/YRC"]
    }
  ];

  return (
    <>
      <PageHeader
        title="Curriculum Design & Development"
        subtitle="Empowering students through Outcome-Based Education, industry readiness, and cultural rootedness."
        breadcrumb="Home / Academics / Curriculum"
        image={pageImages.adminSecretary}
      />

      <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen mb-20">
        
        {/* Core Philosophy Section */}
        <section className="mt-12 text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Our Academic Philosophy</h2>
          <p className="text-gray-600 leading-relaxed">
            At Jayarani College, our curriculum is designed to be a dynamic roadmap. We blend 
            modern employability standards with the profound values of the Indian Knowledge System 
            to produce graduates who are globally competitive and culturally grounded.
          </p>
        </section>

        {/* The Three Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="mb-6 bg-gray-50 w-fit p-4 rounded-2xl">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {pillar.description}
              </p>
              <ul className="space-y-3">
                {pillar.details.map((item, i) => (
                  <li key={i} className="flex items-center text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* NEW SECTION: HOLISTIC ECOSYSTEM */}
        <section className="mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Beyond the Classroom</h2>
              <p className="text-gray-500">Holistic development through clubs, innovation, and community engagement.</p>
            </div>
            <div className="h-1 w-24 bg-blue-600 rounded-full hidden md:block mb-3"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {holisticActivities.map((act, index) => (
              <div key={index} className="bg-white p-6 rounded-3xl border border-gray-100 hover:border-blue-100 transition-colors shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    {React.cloneElement(act.icon, { size: 24 })}
                  </div>
                  <h4 className="font-bold text-gray-800">{act.title}</h4>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{act.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {act.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-gray-400 border border-gray-100 px-2 py-1 rounded-md uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Regional Heritage & IKS Section */}
        <section className="mt-32 bg-blue-900 rounded-[2.5rem] p-10 text-white overflow-hidden relative">
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Regional Heritage & IKS</h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Consistent with the National Education Policy, we prioritize the 
                <strong> Indian Knowledge System</strong>, specifically highlighting the contributions 
                of Tamil culture, Sangam literature, and the ethical frameworks provided by 
                classical Tamil scholars.
              </p>
              <div className="flex gap-4">
                <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/5">
                  <p className="text-sm font-bold">Tamil Heritage</p>
                  <p className="text-xs text-blue-200 mt-1">Integrated Literature & History</p>
                </div>
                <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/5">
                  <p className="text-sm font-bold">Ethical Living</p>
                  <p className="text-xs text-blue-200 mt-1">Virtue-based Curriculum</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <GraduationCap className="w-64 h-64 text-white/10 absolute -right-10 -bottom-10" />
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] shadow-2xl">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-300" /> Curricular Highlights
                </h4>
                <ul className="space-y-4 text-sm text-blue-50">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0" />
                    Industry-Integrated Vocational Courses
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0" />
                    Value-added courses on Traditional Ethics
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0" />
                    Skill-based workshops for Tamil Arts
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0" />
                    Community-driven practical projects (UBA)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <footer className="mt-24 text-center text-gray-400 text-xs uppercase tracking-[0.2em]">
          Jayarani College | Academic Excellence Series 2026
        </footer>
      </div>
    </>
  );
};

export default CurriculumDesign;