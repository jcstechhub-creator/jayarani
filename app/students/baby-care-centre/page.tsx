"use client";

import React from "react";
import { 
  Heart, 
  Clock, 
  ShieldCheck, 
  Users, 
  Baby, 
  Coffee, 
  CheckCircle2, 
  Info,
  CalendarDays
} from "lucide-react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";

const BabyCareCentre = () => {
  const facilities = [
    {
      title: "Safe Play Area",
      description: "A padded, secure environment equipped with age-appropriate educational toys and learning materials.",
      icon: <Baby className="text-pink-500" size={24} />
    },
    {
      title: "Quiet Nursing Room",
      description: "Private, comfortable stations for breastfeeding mothers and specialized areas for bottle feeding.",
      icon: <Heart className="text-red-500" size={24} />
    },
    {
      title: "Resting Zone",
      description: "Cradles and small cots for infants to nap comfortably under constant supervision.",
      icon: <Clock className="text-blue-500" size={24} />
    },
    {
      title: "Hygienic Pantry",
      description: "Equipped with bottle sterilizers, refrigerators for milk storage, and a microwave for baby food.",
      icon: <Coffee className="text-orange-500" size={24} />
    }
  ];

  const guidelines = [
    "Available for children aged 6 months to 3 years.",
    "Prior registration at the Student Support Office is mandatory.",
    "Parents must provide basic necessities (diapers, extra clothes, food).",
    "A 'Sign-in/Sign-out' register must be maintained for security.",
    "Children with contagious illnesses are not permitted for safety reasons."
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-24">
      <PageHeader
        title="Baby Care Centre"
        subtitle="Empowering student-parents by providing a safe, nurturing, and professional environment for their little ones."
        breadcrumb="Home / Student Support / Baby Care"
        image={pageImages.adminSecretary} // Replace with a warm campus/interior image
      />

      <div className="max-w-7xl mx-auto px-6 mt-16 space-y-24">
        
        {/* SECTION 1: MISSION & OVERVIEW */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-rose-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Inclusive Campus Support</span>
            <h2 className="text-4xl font-serif text-slate-900 leading-tight mb-6">
              A Home Away From Home for <br />
              <span className="italic text-rose-500">Your Little Ones</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The Institutional Baby Care Centre is designed to support our student-parents and faculty members, ensuring their academic and professional journey continues seamlessly while their children are in safe hands.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-green-600 shrink-0" size={20} />
                <p className="text-sm font-bold text-slate-700">CCTV Monitored Environment</p>
              </div>
              <div className="flex items-start gap-3">
                <Users className="text-blue-600 shrink-0" size={20} />
                <p className="text-sm font-bold text-slate-700">Trained Caretakers</p>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="/api/placeholder/600/450" 
                  alt="Baby Care Centre Interior" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
                <p className="text-3xl font-bold text-rose-500">09:00 - 04:30</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Operating Hours</p>
             </div>
          </div>
        </section>

        {/* SECTION 2: FACILITIES GRID */}
        <section className="pt-20 border-t border-slate-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">World-Class Facilities</h2>
            <p className="text-slate-500 max-w-2xl mx-auto italic">We prioritize hygiene, safety, and comfort to give parents peace of mind.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((item, idx) => (
              <div key={idx} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
                <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: GUIDELINES & REGISTRATION */}
        <div className="bg-slate-900 rounded-[3.5rem] p-12 lg:p-20 text-white relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-start">
             <div>
                <div className="flex items-center gap-3 mb-6">
                  <Info className="text-rose-400" size={28} />
                  <h3 className="text-3xl font-serif">Usage Guidelines</h3>
                </div>
                <ul className="space-y-4">
                  {guidelines.map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-rose-400 shrink-0 mt-1" size={18} />
                      <span className="text-slate-300 text-sm leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
             </div>
             
             <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/10">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <CalendarDays className="text-rose-400" /> Registration Process
                </h4>
                <div className="space-y-6">
                   <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-xs font-bold">1</div>
                      <div>
                        <p className="font-bold text-sm">Download Form</p>
                        <p className="text-xs text-slate-400">Available on the student portal</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-xs font-bold">2</div>
                      <div>
                        <p className="font-bold text-sm">Medical Certificate</p>
                        <p className="text-xs text-slate-400">Submit latest immunization records</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-xs font-bold">3</div>
                      <div>
                        <p className="font-bold text-sm">Approval</p>
                        <p className="text-xs text-slate-400">Visit the Centre Head for orientation</p>
                      </div>
                   </div>
                </div>
                <button className="w-full mt-10 py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl font-bold transition-all shadow-lg shadow-rose-500/20">
                  Enquire Now
                </button>
             </div>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <section className="text-center bg-rose-50 p-10 rounded-[2.5rem] border border-rose-100">
          <p className="text-rose-800 font-medium italic">
            "Education is for everyone. We ensure that motherhood is never a barrier to your academic success."
          </p>
        </section>

      </div>    
    </div>
  );
};

export default BabyCareCentre;