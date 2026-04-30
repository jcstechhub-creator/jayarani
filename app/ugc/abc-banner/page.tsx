"use client";

import PageHeader from "@/app/components/PageHeader";
import { Image as ImageIcon, Download } from "lucide-react";
// import PageHeader from "@/components/PageHeader";

export default function ABCBannerPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <PageHeader
        title="ABC Banner"
        subtitle="Academic Bank of Credits - Your digital repository for academic wealth."
        breadcrumb="Home / UGC / ABC Banner"
        image="/newgirlimages/image-50.jpeg"
      />

      <div className="max-w-4xl mx-auto px-6 mt-12">
        <div className="grid md:grid-cols-5 gap-8 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <div className="md:col-span-2 overflow-hidden rounded-2xl border border-slate-100">
            <img
              src="https://drive.google.com/thumbnail?id=1svNbF4Rcy9Y_dEbwlC8UfH98SGeM2crl&sz=w800"
              alt="ABC Banner Preview"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-3 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">Promotional Media</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Download the official ABC Banner for awareness regarding the digital storage of credits,
              managed through the college IT Wing and ERP systems[cite: 378, 1660].
            </p>
            <a
              href="https://drive.google.com/file/d/1svNbF4Rcy9Y_dEbwlC8UfH98SGeM2crl/view?usp=drive_link"
              target="_blank"
              className="flex items-center justify-center gap-2 w-full py-4 bg-[#2F4A8A] text-white rounded-2xl hover:opacity-90 transition font-bold"
            >
              <Download size={20} />
              Download High-Res Banner
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}