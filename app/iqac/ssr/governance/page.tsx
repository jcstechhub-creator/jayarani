import React from 'react';
import { 
  Gavel, 
  Users, 
  ShieldCheck, 
  BarChart4, 
  Globe, 
  ChevronRight,
  Database,
  HeartHandshake,
  Scale,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import PageHeader from '@/app/components/PageHeader';
import { pageImages } from '@/data/image';

const GovernancePage = () => {
  const councils = [
    { title: "Governing Body", role: "Strategic decision-making, financial oversight, and policy approval." },
    { title: "Academic Council", role: "Maintenance of standards in instruction, education, and examination protocols." },
    { title: "IQAC Committee", role: "Quality assurance system management and catalytic institutional improvement." },
    { title: "Planning & Development", role: "Drafting and monitoring the Institutional Development Plan (IDP)." }
  ];

  const audits = ["Academic & Administrative", "Gender Audit", "Energy Audit", "Green Audit", "Environment Audit"];

  const welfareSchemes = [
    { type: "Student Welfare", items: ["Scholarships & Freeships", "Health Insurance", "Counseling Services", "Skill Enhancement"] },
    { type: "Employee Welfare", items: ["Provident Fund (EPF)", "Maternity Leave", "FDP Sponsorships", "Gratuity & Allowances"] }
  ];

  return (
    <div className="bg-neutral-50 min-h-screen text-slate-800">
      <PageHeader
        title="Administrative Framework"
        subtitle="Advocating innovation through decentralized leadership, strategic planning, and a robust quality assurance system."
        breadcrumb="Home / Administration / Governance"
        image={pageImages.adminSecretary}
      />

      <main className="max-w-7xl mx-auto py-16 px-6">
        
        {/* TOP SECTION: LEADERSHIP & IDP */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="lg:col-span-2 bg-white p-10 rounded-[2.5rem] shadow-sm border border-neutral-100 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 text-blue-900 mb-6">
                <Compass className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Institutional Development Plan (IDP)</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                Our <strong>Effective Leadership</strong> is guided by a long-term IDP that focuses on 
                sustainable growth, infrastructure modernization, and academic excellence. This 
                decentralized model ensures that every department contributes to the institutional vision.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Strategic Vision", "Participative Management", "Resource Optimization"].map(item => (
                  <span key={item} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-bold border border-blue-100 flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-2" /> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900 to-indigo-950 p-10 rounded-[2.5rem] text-white flex flex-col justify-center">
            <Scale className="w-12 h-12 text-amber-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Grievance Redressal</h3>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              A transparent, time-bound mechanism for handling student and staff grievances via 
              the Internal Complaint Committee and Online Grievance Portal.
            </p>
            <button className="bg-amber-500 text-blue-950 font-bold py-3 rounded-xl text-sm hover:bg-amber-400 transition-colors">
              Access Grievance Portal
            </button>
          </div>
        </div>

        {/* MIDDLE SECTION: COUNCILS & WELFARE */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <Users className="mr-3 text-blue-900" />
              Administrative Councils
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {councils.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-snug">{item.role}</p>
                </div>
              ))}
            </div>

            {/* WELFARE SCHEMES */}
            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              {welfareSchemes.map((scheme, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <HeartHandshake className="text-rose-500 w-6 h-6" />
                    <h3 className="font-bold text-slate-800">{scheme.type}</h3>
                  </div>
                  <ul className="space-y-3">
                    {scheme.items.map(item => (
                      <li key={item} className="flex items-center text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR: AUDITS & E-GOV */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center text-blue-900">
                <BarChart4 className="mr-3 text-blue-600" />
                Quality Assurance
              </h3>
              <ul className="space-y-4">
                {audits.map((audit) => (
                  <li key={audit} className="flex items-center text-sm group cursor-default">
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    <span className="text-slate-600 font-medium">{audit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-900 rounded-[2rem] p-8 text-white relative overflow-hidden">
              <Database className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">E-Governance</h3>
              <p className="text-amber-100 text-xs leading-relaxed mb-6">
                Systemic automation in Finance, Administration, and Examination to ensure error-free quality management.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {['ERP Portal', 'Digital Finance', 'HRMS', 'Online Exam'].map(item => (
                  <span key={item} className="bg-white/10 text-[10px] p-2 text-center rounded uppercase font-bold">{item}</span>
                ))}
              </div>
            </div>

            <div className="bg-neutral-800 rounded-[2rem] p-8 text-white">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="text-green-500" /> Ethics & Conduct
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Institutional integrity is maintained through a strict Code of Conduct and the 
                "Honesty Shop" pedagogical model for stakeholders.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-16 text-center border-t border-neutral-200 pt-12">
          <p className="text-slate-400 italic text-sm max-w-2xl mx-auto">
            "Governance is not just about leadership; it is about building a Quality Assurance System that 
            empowers every individual through decentralized excellence."
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