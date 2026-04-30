"use client";

import React from "react";
// import PageHeader from "@/components/PageHeader";
import { BookText, FileSignature, Landmark, Newspaper, BookmarkCheck, Hash } from "lucide-react";
import PageHeader from "@/app/components/PageHeader";

const ConferenceProceedings = () => {
  // Mapping to your image assets
  const pageImages = {
    proceedingsHero: "/newgirlimages/image-50.jpeg", // A3I themed image
  };

  const researchPapers = [
    { no: 1, title: "Monitoring and Observing Malignant Cell Growth using Eight Neighbourhood Detection Analysis Technique", authors: "New Begin M, Thomas Robinson, Chanti S & Arul Pon Daniel D", page: "10" },
    { no: 2, title: "Liver Cancer Detection Using Hyperfusion of CNN and XGBoost in Machine Learning", authors: "Kalaiselvi. N, Sasikala. R", page: "11" },
    { no: 3, title: "A Novel Hybrid Model for ATM Security using Face Recognition and OTP Authentication", authors: "M. Jannet Emimal, M. Jayanthi, Dr. S. Santhi", page: "12" },
    { no: 4, title: "Dreaming a Transhuman Mind: Speculative Texts and the Potential of the AI-Machines", authors: "Prasanth Arokia Samy D, Dr. Paul Pragash. S", page: "13" },
    { no: 5, title: "FemGuard: A Standalone GSM-Based Wearable Security Device for Women's Safety", authors: "D. Ganga devi, Harishma M", page: "14" },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      <PageHeader
        title="Conference Proceedings"
        subtitle="A comprehensive repository of groundbreaking research from A3I 2025."
        breadcrumb="Home / Publication / Proceedings"
        image={pageImages.proceedingsHero}
      />

      <div className="max-w-7xl mx-auto px-6 mt-16 space-y-20">

        {/* Publication Metadata */}
        <section className="bg-gray-900 rounded-3xl p-8 text-white flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white/10 rounded-2xl">
              <BookText className="text-yellow-400 w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold italic">AI, Analytics & Articulation: The Future of Business & Communication</h3>
              <p className="text-gray-400 text-sm">National Conference Edition 2025 </p>
            </div>
          </div>
          <div className="flex items-center gap-3 border-l border-white/20 pl-6">
            <Hash className="text-yellow-400" size={20} />
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400">Official ISBN</p>
              <p className="text-lg font-mono font-bold tracking-tighter">978-93-342-2982-0</p>
            </div>
          </div>
        </section>

        {/* Messages Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Secretary Message */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-red-900">
              <Landmark size={24} />
              <h2 className="text-2xl font-bold uppercase tracking-tight">Secretary's Message</h2>
            </div>
            <p className="text-gray-600 leading-relaxed italic">
              "The Conference Proceedings serve as a comprehensive repository of the groundbreaking research,
              innovative ideas, and thought-provoking discussions that transpired. Within this proceedings
              lie the collective wisdom of scholars, researchers, and practitioners ."
            </p>
            <p className="font-bold text-gray-900">— Rev. Dr. Jothi Mary FIHM </p>
          </div>

          {/* Principal Message */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-red-900">
              <FileSignature size={24} />
              <h2 className="text-2xl font-bold uppercase tracking-tight">Principal's Insights</h2>
            </div>
            <p className="text-gray-600 leading-relaxed italic">
              "In this age of rapid technological improvement, collaboration among researchers is essential to our survival.
              This proceedings is a terrific way for academic staff and researchers to collaborate, network, and learn."
            </p>
            <p className="font-bold text-gray-900">— Dr. R. Suganthi </p>
          </div>
        </div>

        {/* Proceedings Index Table */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="text-red-900" />
            <h2 className="text-3xl font-bold text-gray-900 uppercase">Research Index</h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 text-gray-900">
                <tr>
                  <th className="p-5 text-sm font-bold border-b">S.No </th>
                  <th className="p-5 text-sm font-bold border-b">Title of the Paper & Author(s) </th>
                  <th className="p-5 text-sm font-bold border-b text-center">Page No </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {researchPapers.map((paper) => (
                  <tr key={paper.no} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-5 text-sm text-gray-500 font-mono">{paper.no}</td>
                    <td className="p-5">
                      <p className="text-gray-900 font-semibold mb-1">{paper.title}</p>
                      <p className="text-xs text-red-900 font-medium uppercase tracking-wide">{paper.authors}</p>
                    </td>
                    <td className="p-5 text-center">
                      <span className="inline-flex items-center gap-1 bg-red-50 text-red-900 px-3 py-1 rounded-full text-xs font-bold">
                        <BookmarkCheck size={12} /> {paper.page}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-gray-400 italic">
            * All rights reserved. No part of this book may be reproduced without prior written permission of the publishers.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ConferenceProceedings;