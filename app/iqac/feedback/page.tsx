"use client";

import React from "react";
import { ClipboardCheck, Users, GraduationCap, ExternalLink, MessageSquareQuote } from "lucide-react";
import PageHeader from "@/app/components/PageHeader";

const IQACFeedback = () => {
  const feedbackLinks = [
    {
      title: "Staff Assessment",
      desc: "An internal evaluation to maintain the high standards of our seasoned and passionate faculty.",
      url: "https://forms.gle/rzqZ47LTCqUCUGfn7",
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      tag: "Academic Excellence"
    },
    {
      title: "Exit Poll",
      desc: "Gathering insights from our graduating visionaries to enhance the holistic development of future batches.",
      url: "https://forms.gle/4EmZdnQPJE7F8C7s7",
      icon: <Users className="w-8 h-8 text-red-900" />,
      tag: "Institutional Growth"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <PageHeader
        title="IQAC Feedback"
        subtitle="Your voice shapes the future of Jayarani Arts and Science College."
        breadcrumb="Home / IQAC / Feedback"
        // image="/newgirlimages/image-100.jpeg"
        image="/banner/banner4.jpeg"
      />

      <div className="max-w-6xl mx-auto px-6 mt-16">
        {/* Introduction Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-900 text-xs font-bold tracking-widest uppercase mb-4">
            <ClipboardCheck size={14} /> Quality Assurance
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Continuous Quality Improvement</h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            In alignment with the directives of our Internal Quality Assurance Cell (IQAC),
            we value the feedback of every stakeholder to ensure our mission of
            delivering holistic education remains uncompromised.
          </p>
        </div>

        {/* Feedback Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {feedbackLinks.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-slate-50 rounded-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {item.desc}
                </p>
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#2F4A8A] text-white rounded-2xl font-bold hover:bg-slate-900 transition-colors shadow-lg shadow-blue-900/10"
              >
                Go to Feedback Form
                <ExternalLink size={18} />
              </a>
            </div>
          ))}
        </div>

        {/* Message from IQAC Coordinator */}
        <div className="mt-16 bg-white rounded-3xl p-10 border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center">
                <MessageSquareQuote size={40} className="text-red-900 opacity-20" />
              </div>
            </div>
            <div className="md:col-span-4">
              <p className="text-slate-600 italic leading-relaxed mb-4">
                "The IQAC is committed to fostering a culture of academic rigor and inclusivity.
                Your feedback is a transformative force that helps us prepare our students to
                emerge as visionary leaders."
              </p>
              <div className="flex flex-col">
                <span className="font-bold text-slate-900">Dr. D. Arul Pon Daniel</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest">Deputy Principal & IQAC Coordinator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IQACFeedback;  