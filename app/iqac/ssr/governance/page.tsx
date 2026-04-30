import React from 'react';
import { 
  Gavel, 
  Users, 
  ShieldCheck, 
  Settings, 
  BarChart4, 
  Globe, 
  ChevronRight,
  Database
} from 'lucide-react';
import PageHeader from '@/app/components/PageHeader';
import { contentImages } from '@/data/image';

const GovernancePage = () => {
  const councils = [
    { title: "Governing Body", role: "Strategic decision-making and policy approval." },
    { title: "Academic Council", role: "Maintenance of standards in instruction, education, and exams." },
    { title: "IQAC Committee", role: "Catalytic improvement and quality sustenance management." },
    { title: "Women’s Safety Committee", role: "Empowering and ensuring security for female stakeholders." }
  ];

  const audits = ["Academic & Administrative", "Gender Audit", "Energy Audit", "Green Audit", "Environment Audit"];

  return (
    <div className="bg-neutral-50 min-h-screen text-slate-800">
      {/* Header */}
      <PageHeader
  title="Administrative Framework"
  subtitle="Advocating innovation and inclusion through a decentralized governance model, ensuring transparent leadership and systemic excellence across all institutional levels."
  breadcrumb="Home / Administration / Governance"
  // Using an image that reflects professional leadership, organizational structure, and strategic planning
  // image="/newgirlimages/image-64.jpeg" 
  // image="/banner/banner4.jpeg"
  
                  image= {contentImages?.bookImage}
/>
      {/* <div className="bg-blue-950 py-20 px-6 border-b-4 border-amber-500">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-3 mb-4">
            <Gavel className="text-amber-500 w-8 h-8" />
            <span className="text-amber-500 font-bold uppercase tracking-widest">Administrative Framework</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">College Governance</h1>
          <p className="text-blue-100 text-lg max-w-3xl leading-relaxed">
            Jayarani College operates on a decentralized governance model, ensuring that innovation 
            and inclusion are advocated at every level of our institutional hierarchy.
          </p>
        </div>
      </div> */}

      <main className="max-w-6xl mx-auto py-16 px-6">
        {/* Hierarchy Section */}
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left: Statutory Bodies */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <Users className="mr-3 text-blue-900" />
              Administrative Councils
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {councils.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-snug">{item.role}</p>
                </div>
              ))}
            </div>

            {/* E-Governance Section */}
            <section className="mt-12 bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <div className="flex items-center mb-6">
                <Database className="text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold">E-Governance Initiative</h2>
              </div>
              <p className="text-slate-600 mb-6">
                To promote transparency and accountability, the institution has implemented E-Governance 
                across all key administrative domains as part of the IQAC quality initiatives.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {['Administration', 'Finance', 'Student Support', 'Examinations'].map((tag) => (
                  <div key={tag} className="py-3 px-2 bg-blue-50 text-blue-800 rounded-lg font-bold text-xs uppercase tracking-tight">
                    {tag}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right: Accountability & Audits */}
          <div className="space-y-8">
            <div className="bg-blue-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <BarChart4 className="mr-3 text-amber-500" />
                Quality Audits
              </h3>
              <ul className="space-y-4">
                {audits.map((audit) => (
                  <li key={audit} className="flex items-center text-sm group cursor-default">
                    <ChevronRight className="w-4 h-4 mr-2 text-amber-500 group-hover:translate-x-1 transition-transform" />
                    <span className="text-blue-100">{audit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-blue-800">
                <div className="flex items-center text-xs text-blue-300 uppercase tracking-widest font-bold">
                  <Globe className="w-4 h-4 mr-2" />
                  Global Strategy Alignment
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
              <h3 className="font-bold text-amber-900 mb-4 flex items-center">
                <ShieldCheck className="mr-2 text-amber-600" />
                Code of Conduct
              </h3>
              <p className="text-xs text-amber-800 leading-relaxed mb-4">
                All stakeholders are expected to adhere to the institution's ethical guidelines, 
                mirroring the integrity promoted by the "Honesty Shop" model of character development.
              </p>
              <button className="text-amber-700 font-bold text-xs uppercase underline hover:text-amber-900">
                Download PDF Policy
              </button>
            </div>
          </div>
        </div>

        {/* Accountability Statement */}
        <div className="mt-16 text-center border-t border-neutral-200 pt-12">
          <p className="text-slate-400 italic text-sm max-w-2xl mx-auto">
            "We strive for excellence through collaboration with higher education stakeholders for 
            quality evaluation, promotion, and sustenance."
          </p>
        </div>
      </main>

      <footer className="bg-neutral-100 py-10 text-center text-slate-500 text-xs font-medium border-t border-neutral-200 uppercase tracking-[0.2em]">
        Jayarani College Governance Portal | IQAC Sustenance 2026
      </footer>
    </div>
  );
};

export default GovernancePage;