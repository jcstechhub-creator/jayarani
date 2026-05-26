import React from 'react';
import { ExternalLink, ShieldCheck, HeartHandshake, FileText } from "lucide-react";

export default function NTFResourcesPage() {
  const directLink = "https://ntf.education.gov.in/";

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Block */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck size={14} /> Ministry of Education Initiative
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A2E5A] mb-4">
            National Task Force (NTF) Resources
          </h1>
          <p className="text-slate-600 leading-relaxed font-light text-lg">
            Appointed by the Hon'ble Supreme Court of India, the National Task Force works extensively 
            to address mental health concerns, alleviate academic pressure, and eliminate discrimination 
            within Higher Educational Institutions (HEIs).
          </p>
        </div>

        {/* Informational Core Content */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <HeartHandshake className="text-red-500 mb-4" size={28} />
            <h3 className="font-bold text-[#1A2E5A] text-base mb-2">Student Mental Health Mandates</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Access localized emergency help, framework guidelines, and updates structured to counter 
              sources of peer distress, caste-based or systemic discrimination, and severe mental health stigma.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <FileText className="text-blue-600 mb-4" size={28} />
            <h3 className="font-bold text-[#1A2E5A] text-base mb-2">Institutional Compliance</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Provides regulatory circulars, monitoring resources, and directives tracking the mandatory 
              placement of protective bodies and active on-campus counseling systems across Indian colleges.
            </p>
          </div>
        </div>

        {/* Action / Direct Link Redirection */}
        <div className="bg-slate-950 text-white rounded-[2rem] p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="text-lg font-bold mb-1">Official Support & Portal Frameworks</h4>
            <p className="text-xs text-slate-400">View official parameters, policy files, and national stakeholder metrics.</p>
          </div>
          <a 
            href={directLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shrink-0 shadow-lg shadow-blue-600/20 group"
          >
            Go to NTF Portal 
            <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </main>
  );
}