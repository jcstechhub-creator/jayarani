"use client";

import React from "react";
import { Book, Info, Search, Library, Hash, GraduationCap, Users, Cpu, Award, Globe, UserCheck, ExternalLink, BookOpen } from "lucide-react";
import PageHeader from "@/app/components/PageHeader";
import { contentImages, pageImages } from "@/data/image";

const PublicationsBooks = () => {
  const assets = {
    libraryHero: pageImages.adminSecretary,
    iotBookFull: contentImages?.bookImage, 
  };

  // Full list of all 8 books
  const allBooks = [
    {
      title: "Revolution in Block Chain Management System",
      link: "https://www.amazon.in/dp/8195534090/ref=cm_sw_r_awdo_navT_g_13HZSTSBNNT8FDG0GNWJ",
      platform: "Amazon"
    },
    {
      title: "Introduction to Artificial Intelligence",
      link: "https://www.amazon.in/dp/8195534058/ref=cm_sw_r_apan_glt_i_GDC6BFVYP5GYH9GQQN3F",
      platform: "Amazon"
    },
    {
      title: "Introduction to Deep Learning",
      link: "https://www.amazon.in/dp/9394339213/ref=cm_sw_r_apan_i_9FR8Q728M31CFP26Y3EJ",
      platform: "Amazon"
    },
    {
      title: "Cyber Security Awareness, Challenges and Issues",
      link: "https://www.flipkart.com/cyber-security-awareness-challenges-issues/p/itm496c0c6f3f247?pid=9789356254589",
      platform: "Flipkart"
    },
    {
      title: "Fundamental of Data Science",
      link: "https://www.flipkart.com/fundamentals-data-science/p/itm5ecbf8d204a7f?pid=9789357570008",
      platform: "Flipkart"
    },
    {
      title: "ML Model adopt IoT & Blockchain",
      link: "https://www.flipkart.com/product/p/itme?pid=9789357574907",
      platform: "Flipkart"
    },
    {
      title: "Introduction to Machine Learning Algorithms",
      link: "https://www.flipkart.com/introduction-machine-learning-algorithms/p/itm986d0b0e48c9a",
      platform: "Flipkart"
    },
    {
      title: "Internet of Things (IoT) and Embedded Systems",
      link: "https://www.google.co.in/books/edition/Internet_of_Things_IoT_and_Embedded_Syst/OSuBEQAAQBAJ?hl=en&gbpv=0",
      platform: "Google/Flipkart"
    }
  ];

  const libraryRules = [
    { text: "Students can borrow up to three books using their ID card.", icon: <Users size={18} /> },
    { text: "Faculty members are permitted to borrow up to five books.", icon: <GraduationCap size={18} /> },
    { text: "Standard loan period is two weeks with options for renewal.", icon: <Search size={18} /> },
    { text: "An overdue fine of ₹1 per day is charged for late returns.", icon: <Info size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-24">
      <PageHeader
        title="Institutional Publications"
        subtitle="Showcasing the global research impact and scholarly works of our faculty."
        breadcrumb="Home / Publication / Books"
        image={assets.libraryHero}
      />

      <div className="max-w-7xl mx-auto px-6 mt-16 space-y-32">

        {/* SECTION 1: FEATURED SPOTLIGHT */}
        <section className="relative">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-7 group">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 bg-white p-4">
                <img
                  src={assets.iotBookFull}
                  alt="Internet of Things and Embedded Systems"
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute top-8 right-8">
                  <span className="bg-[#0d2a21] text-white px-4 py-2 rounded-xl text-[10px] font-black tracking-widest shadow-xl">
                    LATEST RELEASE
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 sticky top-24">
              <span className="text-orange-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Author Spotlight</span>
              <h2 className="text-5xl font-serif text-slate-900 leading-tight mb-8">
                Internet of Things (IoT) and <br />
                <span className="italic text-[#0d2a21]">Embedded Systems</span>
              </h2>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                  <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-4 uppercase tracking-tighter">
                    <UserCheck size={18} className="text-orange-600" /> Dr. D. Arul Pon Daniel
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Deputy Principal and Assistant Professor in the Department of Computer Science (AI & DS) 
                    at Jayarani Arts & Science College for Women.
                  </p>
                  <div className="flex gap-4 border-t border-slate-50 pt-4">
                    <div className="text-center">
                      <p className="text-lg font-bold text-slate-900">8</p>
                      <p className="text-[9px] font-black text-slate-400 uppercase">Books</p>
                    </div>
                    <div className="w-px h-8 bg-slate-100 mx-2 self-center" />
                    <div className="text-center">
                      <p className="text-lg font-bold text-slate-900">25+</p>
                      <p className="text-[9px] font-black text-slate-400 uppercase">Journals</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-slate-900 rounded-3xl text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Hash size={14} className="text-orange-400" />
                    <span className="text-xs font-mono">ISBN: 978-93-6492-724-6</span>
                  </div>
                  <p className="text-xs text-slate-400">Published by SK Research Group of Companies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ALL 8 PUBLICATIONS GRID */}
        <section className="pt-20 border-t border-slate-100">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-orange-600 p-3 rounded-2xl shadow-lg">
              <BookOpen className="text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Full Publication List</h2>
              <p className="text-slate-500 text-sm">A collection of 8 key academic titles by our faculty.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allBooks.map((book, idx) => (
              <div key={idx} className="group bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                      <Book className="text-slate-400 group-hover:text-orange-600" size={20} />
                    </div>
                    <span className="text-[10px] font-bold text-slate-300">0{idx + 1}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm leading-snug mb-2 min-h-[40px]">
                    {book.title}
                  </h3>
                </div>
                
                <a 
                  href={book.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 py-2.5 bg-slate-900 text-white rounded-xl text-[11px] font-bold hover:bg-orange-600 transition-all shadow-md"
                >
                  View on {book.platform.split('/')[0]} <ExternalLink size={12} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: LIBRARY REGS */}
        <section className="pt-20 border-t border-slate-100">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="bg-[#2F4A8A] p-3 rounded-2xl shadow-xl">
                <Library className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Library Regulations</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {libraryRules.map((rule, idx) => (
              <div key={idx} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group border-b-4 border-b-slate-50 hover:border-b-[#2F4A8A]">
                <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-[#2F4A8A] group-hover:text-white transition-colors">
                  {rule.icon}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{rule.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: CARE OF MATERIALS */}
        <div className="bg-[#1C1917] rounded-[3.5rem] p-12 lg:p-20 text-white relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
             <div>
                <h3 className="text-4xl font-serif mb-6">Preserving <span className="italic text-slate-400">Knowledge</span></h3>
                <p className="text-slate-400 leading-relaxed text-lg mb-8">
                  Borrowers are liable for markings or damage. 
                  Maintaining library materials is the personal responsibility of every student.
                </p>
                <div className="inline-block px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    <p className="text-white font-bold text-sm uppercase">Reference Section: 09:30 - 04:30</p>
                </div>
             </div>
             <div className="flex flex-col gap-6">
                <div className="p-8 bg-red-900/20 rounded-[2rem] border border-red-900/30">
                   <p className="text-red-200 text-lg font-serif italic italic">"Return books a week before the semester ends."</p>
                </div>
             </div>
          </div>
          <Book className="absolute -right-10 -bottom-10 w-96 h-96 text-white/5 -rotate-12" />
        </div>

      </div>
    </div>
  );
};

export default PublicationsBooks;