"use client";

import PageHeader from "@/app/components/PageHeader";
import { Users, Briefcase, ChevronRight } from "lucide-react";
export default function NATCellPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <PageHeader
        title="NAT Cell"
        subtitle="Empowering students through National Apprenticeship Training and industry integration."
        breadcrumb="Home / UGC / NAT Cell"
        // image="/newgirlimages/image-10.jpeg"
        image="/banner/banner4.jpeg"
      />

      <div className="max-w-4xl mx-auto px-6 mt-12">
        <div className="bg-[#2F4A8A] rounded-3xl p-10 text-white mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">National Apprenticeship Training</h2>
              <p className="text-blue-100 max-w-lg leading-relaxed">
                Empowering our students through industry-integrated learning and technical
                competence as per the vision of the Training and Placement committee[cite: 1581].
              </p>
            </div>
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md">
              <Briefcase size={40} className="text-blue-200" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200">
          <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl">
            <div className="flex items-center gap-4">
              <Users className="text-slate-400" />
              <span className="font-semibold text-slate-700">Apprenticeship Guidelines & Form</span>
            </div>
            <a
              href="https://drive.google.com/file/d/1sWF0JMEa3UFK8_xgDxw5TfCodeC7A-L9/view?usp=drive_link"
              target="_blank"
              className="p-2 bg-white rounded-lg shadow-sm text-[#2F4A8A] hover:bg-slate-100 transition"
            >
              <ChevronRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}