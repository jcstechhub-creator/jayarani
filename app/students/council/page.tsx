import React from 'react';
import { 
  Users, 
  Calendar, 
  CheckCircle, 
  Award, 
  ShieldCheck, 
  FileText, 
  Vote,
  ClipboardList,
  AlertTriangle,
  Star
} from 'lucide-react';
import PageHeader from '@/app/components/PageHeader';
import { pageImages } from '@/data/image';
// import { PageHeader } from '@/components/PageHeader'; // Assuming standard project structure

export default function StudentCouncilPage() {
  const roles = [
    { title: "President", responsibility: "Presiding over Council meetings, preparing agendas with Secretaries, and holding the casting vote. Represents the Council with College management." },
    { title: "Vice President", responsibility: "Assisting the President and assuming their role in their absence." },
    { title: "Cultural Secretary", responsibility: "Supervising College Cultural & Fine Arts and inter-collegiate competitions under the Dean's direction." },
    { title: "Sports Secretary", responsibility: "Supervising intra-college and inter-collegiate games as communicated by the Physical Director." },
    { title: "Department Secretaries", responsibility: "Keeping records of meetings (minutes) and acting as a primary contact for class representatives." },
    { title: "Class Representatives", responsibility: "Managing class actions and maintaining contact with Mentors and the President regarding student issues." }
  ];

  const eligibility = [
    { post: "President & VP", attendance: "90%", marks: "60%", other: "No arrears, highly recommended by HOD" },
    { post: "Secretaries", attendance: "90%", marks: "55%", other: "No disciplinary actions, recommendation by HOD" },
    { post: "Class Reps", attendance: "N/A", marks: "N/A", other: "No arrears, no disciplinary history, recommendation by Mentor" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* ✅ Corrected Academic PageHeader */}
      <PageHeader
        title="Student Council"
        subtitle="Empowering student leadership and democratic participation to safeguard rights and uphold academic integrity."
        breadcrumb="Home / Students / Council"
        image={pageImages.studentsCouncil}
      />

      {/* Quick Notice Banner */}
      <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl p-6 border-l-8 border-[#F59E0B] flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
              <h3 className="font-bold text-[#1A2E5A] uppercase tracking-wider text-sm">
                Election Day: 16-07-2025
              </h3>
            </div>
            <p className="text-sm text-slate-600 font-medium">Nomination filing starts on 07-07-2025 at 10.00 am</p>
          </div>
          <button className="bg-[#1A2E5A] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-900 transition-all shadow-lg active:scale-95">
            View Final Nominee List
          </button>
        </div>
      </div>

      {/* Main Objectives */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-black text-[#1A2E5A] mb-2 flex items-center gap-3">
              <ShieldCheck className="text-[#F59E0B] w-8 h-8" /> OUR MISSION
            </h2>
            <p className="text-slate-500 font-medium">As part of the NAAC Attribute 06 (Extended Curricular Engagements)</p>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 items-start bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-100 transition-colors">
              <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
              <p className="font-medium text-slate-700 leading-relaxed">To safeguard the rights of every student in the College.</p>
            </div>
            <div className="flex gap-4 items-start bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-100 transition-colors">
              <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
              <p className="font-medium text-slate-700 leading-relaxed">To uphold discipline in academic, cultural, and social conduct.</p>
            </div>
            <div className="flex gap-4 items-start bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-100 transition-colors">
              <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
              <p className="font-medium text-slate-700 leading-relaxed">To act as a bridge between the management and the student community.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1A2E5A] text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2 border-b border-white/10 pb-4">
              <Calendar className="text-[#F59E0B]" /> Important Dates (2025)
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center group">
                <span className="text-blue-200 group-hover:text-white transition-colors">Issue of Applications</span>
                <span className="font-bold text-[#F59E0B]">07-07-2025</span>
              </div>
              <div className="flex justify-between items-center group">
                <span className="text-blue-200 group-hover:text-white transition-colors">Last Date for Nomination</span>
                <span className="font-bold text-[#F59E0B]">14-07-2025</span>
              </div>
              <div className="flex justify-between items-center group">
                <span className="text-blue-200 group-hover:text-white transition-colors">Last Date for Withdrawal</span>
                <span className="font-bold text-[#F59E0B]">15-07-2025</span>
              </div>
              <div className="flex justify-between items-center group bg-white/5 p-3 rounded-xl">
                <span className="text-blue-100 font-bold">Election Day (e-polling)</span>
                <span className="font-bold text-yellow-400">16-07-2025</span>
              </div>
            </div>
          </div>
          <Vote className="absolute right-[-20px] bottom-[-20px] w-48 h-48 text-white/5 rotate-12" />
        </div>
      </div>

      {/* Roles Grid */}
      <div className="bg-slate-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1A2E5A] mb-4">COUNCIL ROLES</h2>
            <div className="h-1.5 w-24 bg-[#F59E0B] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-[#F59E0B] hover:shadow-2xl transition-all duration-300 group">
                <h4 className="font-bold text-xl text-[#1A2E5A] mb-4 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
                  {role.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {role.responsibility}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Eligibility Table */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black text-[#1A2E5A] mb-10 flex items-center gap-3">
          <ClipboardList className="text-[#F59E0B] w-8 h-8" /> NOMINATION ELIGIBILITY
        </h2>
        <div className="overflow-hidden bg-white rounded-[2rem] shadow-xl border border-slate-200">
          <table className="w-full text-left">
            <thead className="bg-[#1A2E5A] text-white">
              <tr>
                <th className="px-8 py-5 font-bold text-xs uppercase tracking-widest">Post</th>
                <th className="px-8 py-5 font-bold text-xs uppercase tracking-widest">Attendance</th>
                <th className="px-8 py-5 font-bold text-xs uppercase tracking-widest">Min. Marks</th>
                <th className="px-8 py-5 font-bold text-xs uppercase tracking-widest">Requirements</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {eligibility.map((item, idx) => (
                <tr key={idx} className="hover:bg-blue-50/30 transition-colors group">
                  <td className="px-8 py-6 font-bold text-[#1A2E5A] group-hover:text-blue-700">{item.post}</td>
                  <td className="px-8 py-6 text-sm font-semibold text-slate-600">{item.attendance}</td>
                  <td className="px-8 py-6 text-sm font-semibold text-slate-600">{item.marks}</td>
                  <td className="px-8 py-6 text-xs italic text-slate-500 font-medium">{item.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pledge Section */}
      <div className="bg-[#1A2E5A] text-white py-20 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Award className="w-16 h-16 text-[#F59E0B] mx-auto mb-8 animate-pulse" />
          <h2 className="text-4xl font-black mb-8 italic tracking-tight">The Student Pledge</h2>
          <p className="text-xl leading-relaxed text-blue-100 font-medium">
            "I pledge to strive for excellence in the pursuit of wisdom, to acknowledge the College's foundation on a faith in God while respecting the faith traditions of all individuals, and to be of service to others in accordance with the ideals set forth in the Student Commitment."
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)]"></div>
      </div>

      {/* Footer Branded */}
      <footer className="py-16 bg-white text-center border-t border-slate-100">
        <p className="text-slate-400 text-xs font-bold tracking-[0.4em] uppercase mb-8">
          © 2025 Jayarani College | Student Council Commission
        </p>
        <div className="flex justify-center gap-8">
          <button className="flex items-center gap-2 text-xs font-black text-[#1A2E5A] hover:text-[#F59E0B] transition-colors uppercase tracking-widest border-b-2 border-slate-100 pb-1">
            <FileText className="w-4 h-4" /> Nomination Form
          </button>
          <button className="flex items-center gap-2 text-xs font-black text-[#1A2E5A] hover:text-[#F59E0B] transition-colors uppercase tracking-widest border-b-2 border-slate-100 pb-1">
            <FileText className="w-4 h-4" /> Withdrawal Form
          </button>
        </div>
      </footer>
    </div>
  );
}