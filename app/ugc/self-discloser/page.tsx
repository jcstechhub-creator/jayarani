"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import Link from "next/link";
import { 
  Info, ShieldCheck, GraduationCap, UserPlus, 
  Search, HeartHandshake, Users, Globe, 
  Image as ImageIcon, Phone, ExternalLink,
  ChevronRight, FileText, Landmark, Scale
} from "lucide-react";

export default function UGCDisclosurePage() {
  const disclosureCategories = [
    {
      title: "a) About HEI",
      icon: Info,
      links: [
        { label: "About us: Overview", path: "/about/about-us" },
        { label: "Vision & Mission", path: "/about/vision-mission" },
        { label: "College History", path: "/about/history" },
        { label: "Accreditation/Ranking (AISHE)", path: "/aishe" },
        { label: "Annual Reports", path: "/about/annual-report" },
      ]
    },
    {
      title: "b) Administration",
      icon: ShieldCheck,
      links: [
        { label: "Chairman & Secretary", path: "/admin/chairman" },
        { label: "Internal Complaint Committee (ICC)", path: "/admin/icc" },
        { label: "Board of Trustees", path: "/admin/trustees" },
        { label: "Organogram", path: "/admin/organogram" },
        { label: "College Committee", path: "/admin/committee" },
      ]
    },
    {
      title: "c) Academics",
      icon: GraduationCap,
      links: [
        { label: "Details of Academic Programs", path: "/admission/programs" },
        { label: "Academic Calendar", path: "/academics/calendar" },
        { label: "Departments", path: "/academics/departments" },
        { label: "Faculty Details", path: "/academics/faculty" },
        { label: "IQAC Cell", path: "/iqac/about" },
      ]
    },
    {
      title: "d) Admissions & Fee",
      icon: UserPlus,
      links: [
        { label: "College Prospectus", path: "/admission/prospectus" },
        { label: "Admission Guidelines", path: "/admission/procedure" },
        { label: "Fee Refund Policy", path: "/admission/refund-policy" },
      ]
    },
    {
      title: "e) Research",
      icon: Search,
      links: [
        { label: "IPR Cell", path: "/innovation/ipr" },
        { label: "Incubation Centre", path: "/innovation/incubation" },
        { label: "R&D Initiatives", path: "/iqac/ssr/research-innovation" },
      ]
    },
    {
      title: "f) Student Life",
      icon: HeartHandshake,
      links: [
        { label: "Anti-Ragging Cell", path: "/students/anti-ragging" },
        { label: "Grievance Redressal Cell", path: "/students/grievance" },
        { label: "Scholarships", path: "/students/scholarship" },
        { label: "Placement Cell", path: "/students/placement" },
        { label: "Hostel Facilities", path: "/admission/hostel" },
      ]
    },
    {
      title: "g) Alumni",
      icon: Users,
      links: [
        { label: "Alumni Association", path: "/alumni/register" },
      ]
    },
    {
      title: "h) Information Corner",
      icon: Globe,
      links: [
        { label: "ABC Banner & Video", path: "/ugc" },
        { label: "AISHE Certifications", path: "/aishe" },
        { label: "Institutional Policies", path: "/iqac/policies" },
      ]
    },
    {
      title: "i) Picture Gallery",
      icon: ImageIcon,
      links: [
        { label: "Campus Gallery", path: "/gallery" },
      ]
    },
    {
      title: "j) Contact",
      icon: Phone,
      links: [
        { label: "Contact Details", path: "/contact" },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="UGC Public Self Disclosure"
        subtitle="Transparent institutional data and statutory disclosures as per University Grants Commission mandates."
        breadcrumb="Home / Statutory / UGC Disclosure"
        // image="/newgirlimages/image-90.jpeg"
        image="/banner/banner4.jpeg"
      />

      {/* --- INTRO SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#2F4A8A] rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            <Scale size={14} /> Statutory Compliance
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A2E5A] mb-6">
            Public Disclosure <span className="text-[#2F4A8A]/50 italic font-light">Portal</span>
          </h2>
          <p className="text-slate-500 font-light leading-relaxed">
            In compliance with the UGC (Mandatory Assessment and Accreditation of Higher Educational Institutions) 
            Regulations, Jayarani Arts & Science College for Women provides the following information 
            for public viewing. We are committed to maintaining the highest standards of transparency 
            in governance and academic administration.
          </p>
        </div>
      </section>

      {/* --- DISCLOSURE GRID --- */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {disclosureCategories.map((cat, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col group">
              <div className="p-8 border-b border-slate-50 bg-slate-50/50 flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#2F4A8A] shadow-sm group-hover:bg-[#1A2E5A] group-hover:text-white transition-colors duration-500">
                  <cat.icon size={24} />
                </div>
                <h3 className="font-bold text-[#1A2E5A] tracking-tight">{cat.title}</h3>
              </div>
              
              <div className="p-8 space-y-3 flex-1">
                {cat.links.map((link, j) => (
                  <Link 
                    key={j} 
                    href={link.path}
                    className="flex items-center justify-between group/link p-2 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    <span className="text-sm text-slate-600 group-hover/link:text-[#2F4A8A] group-hover/link:font-bold transition-all">
                      {link.label}
                    </span>
                    <ChevronRight size={14} className="text-slate-300 group-hover/link:translate-x-1 group-hover/link:text-[#2F4A8A] transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- STATUTORY CONTACT SECTION --- */}
      <section className="py-24 bg-[#1A2E5A] text-white relative overflow-hidden">
        <Landmark className="absolute -bottom-10 -right-10 text-white/5" size={300} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FileText className="mx-auto text-yellow-400 mb-6" size={48} />
          <h3 className="text-2xl font-bold mb-4">Nodal Officer for Public Disclosure</h3>
          <p className="text-blue-100/70 font-light mb-10">
            For any queries related to statutory disclosures or further documentation, 
            please contact the Office of the Principal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-yellow-400 text-[#1A2E5A] px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-yellow-500 transition-all">
              Email Nodal Officer
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-all flex items-center gap-2">
              <ExternalLink size={14} /> Visit UGC Portal
            </button>
          </div>
        </div>
      </section>

      {/* Footer Branded */}
      {/* <footer className="py-12 text-center text-slate-400 text-[10px] uppercase tracking-[0.3em]">
        <p>© 2026 Jayarani Arts & Science College for Women. Salem - 636002</p>
        <p className="mt-2 text-slate-300">Statutory Public Disclosure Portal</p>
      </footer> */}
    </main>
  );
}