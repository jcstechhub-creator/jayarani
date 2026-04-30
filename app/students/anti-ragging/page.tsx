"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { 
  ShieldAlert, 
  Gavel, 
  Cctv, 
  Users, 
  Scale, 
  PhoneCall, 
  ExternalLink,
  Info,
  AlertTriangle,
  FileWarning,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";

export default function AntiRaggingCell() {
  const primaryMeasures = [
    {
      title: "CCTV Surveillance",
      desc: "The campus is equipped with CCTV cameras at vital points to curb the menace of ragging.",
      icon: Cctv
    },
    {
      title: "Surprise Inspections",
      desc: "Regular inspections at hostels, canteens, and bus stands by the anti-ragging committee.",
      icon: ShieldAlert
    },
    {
      title: "Legal Sensitization",
      desc: "Annual awareness meetings with police officials (DSP rank) to brief students on legal measures.",
      icon: Gavel
    },
    {
      title: "Online Undertakings",
      desc: "Mandatory annual online undertaking submission by every student and parent as per UGC norms.",
      icon: FileWarning
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="Anti-Ragging Cell"
        subtitle="Zero tolerance towards ragging. Ensuring a safe, respectful, and protected campus environment."
        breadcrumb="Home / Student Support / Anti-Ragging"
        image={pageImages.studentsAntiRagging}
      />

      {/* --- WARNING BANNER --- */}
      <section className="bg-red-600 text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="animate-pulse" />
            <span className="font-bold tracking-widest text-sm uppercase">Ragging is a Cognizable Offence</span>
          </div>
          <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-tighter">
            <span>UGC Regulation 2009</span>
            <span className="w-1 h-1 bg-white rounded-full opacity-50" />
            <span>TN Anti-Ragging Act</span>
          </div>
        </div>
      </section>

      {/* --- DEFINITION SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <span className="text-red-600 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Institutional Safety</span>
            <h2 className="text-4xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
              Zero Tolerance <br />
              <span className="text-red-600/60 italic font-light">Campus Environment</span>
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed font-light text-lg">
              <p>
                According to the Hon'ble Supreme Court of India, ragging includes disorderly behavior 
                or treatment that has the effect of teasing, handling with rudeness, or indulging 
                in rowdy activities causing physical or psychological harm.
              </p>
              <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-2xl italic text-base text-slate-700">
                "Any act of physical or mental abuse targeted at another student on grounds of color, 
                race, religion, caste, gender, sexual orientation, appearance, or nationality."
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#1A2E5A] mb-6 flex items-center gap-2">
                <ShieldCheck className="text-red-600" /> Preventative Measures
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {primaryMeasures.map((m, i) => (
                <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                  <m.icon className="text-[#2F4A8A] mb-4" size={24} />
                  <h4 className="font-bold text-[#1A2E5A] text-sm mb-2">{m.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>

            {/* HIGH CONTENT VOLUME SECTION: OBJECTIVES */}
            <div className="p-8 bg-slate-900 rounded-[2rem] text-white">
                <div className="flex items-center gap-3 mb-6">
                    <CheckCircle2 className="text-red-500" />
                    <h4 className="text-xl font-bold">Specific Objectives</h4>
                </div>
                <ul className="space-y-4 text-sm text-slate-300 font-light">
                    <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                    To absolutely prohibit ragging within or outside the college campus
To prevent the occurrence of ragging by following the provisions of Regulations in the institution
To provide punishment to those indulging in ragging as provided for in Regulations and the appropriate law in force
To sensitize students, to adopt measures that will prevent ragging
                    </li>
                    <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                  Ragging constitutes one or more of any of the following acts:
Any conduct by any student or students whether by words spoken or written or by an act which has the effect of teasing, treating or handling with rudeness a fresher or any other student;
Indulging in rowdy or undisciplined activities by any student or students which causes or is likely to cause annoyance, hardship, physical or psychological harm or to raise fear or apprehension thereof in any fresher or any other student;
                   </li>
                    <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                 Asking any student to do any act which such student will not in the ordinary course do and which has the effect of causing or generating a sense of shame, or torment or embarrassment so as to adversely affect the physique or psyche of such fresher or any other student;
Any act by a senior student that prevents, disrupts or disturbs the regular academic activity of any other student or a fresher;
Exploiting the services of a fresher or any other student for completing the academic tasks assigned to an individual or a group of students;
                   </li>
                    <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                     Any act of financial extortion or forceful expenditure burden put on a fresher or any other student by students;
                    </li>
                    <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                 Any act of physical abuse including all variants of it: sexual abuse, homosexual assaults, stripping, forcing obscene and lewd acts, gestures, causing bodily harm or any other danger to health or person;
                   </li>
                    <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                  Any act or abuse by spoken words, emails, post, public insults which would also include deriving perverted pleasure, vicarious or sadistic thrill from actively or passively participating in the discomfiture to fresher or any other student ;
                   </li>
                    <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                Any act that affects the mental health and self-confidence of a fresher or any other student with or without an intent to derive a sadistic pleasure or showing off power, authority or superiority by a student over any fresher or any other student
                     </li>
                    <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                     The anti ragging punishment will vary from:
                    </li>
                    <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                    Imprisonment
Permanent Expulsion from the institution
Suspension from the institution
Fine with a public apology
Fine
Withholding of any form of financial grant (scholarship etc)
Withholding of result of examination
Debarring from representation in college events
                    </li>



                    <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                 To uphold and comply with the directions of the Hon’ble Supreme Court and be vigilant on nay acts amounting to ragging;
                  </li>
                    <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                  To publicize to all students and prevalent directives and the actions that can be taken against those indulging in ragging; </li>
                    <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                  To consider the complaints received from the students and conduct enquiry and submit report to the Anti- Ragging Committee along with punishment recommended for the offenders;
Oversee the procedure of obtaining undertaking from the students in accordance with the provisions; </li>
                    <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
               Conduct workshops against ragging menace and orient the students;   </li>
                    <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                 
                 To provide students the information pertaining to contact address and telephone numbers of the person(s) identified to receive complaints/distress calls;
To offer services of counselling and create awareness to the students; </li>
                    <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                   
                   To take all necessary measures for prevention of Ragging inside the Campus.</li>
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- POWERS & FUNCTIONS (FULL WIDTH CONTENT ADAPTATION) --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-[#1A2E5A]">Powers and Functions</h3>
                <div className="w-20 h-1 bg-red-600 mx-auto mt-4" />
            </div>
            <div className="grid gap-4">
                {[
                    "Uphold and comply with directions of the Hon’ble Supreme Court and remain vigilant on any acts amounting to ragging.",
                    "Publicize directives and actions that can be taken against those indulging in ragging to all students.",
                    "Consider complaints, conduct enquiries, and submit reports along with punishment recommendations.",
                    "Oversee the procedure of obtaining mandatory undertakings from students in accordance with provisions.",
                    "Conduct workshops against the ragging menace and orient new students regularly.",
                    "Provide contact information and helpline numbers of personnel identified to receive distress calls.",
                    "Offer counseling services and create awareness regarding student rights and safety.",
                    "Take all necessary measures for prevention of Ragging inside the Campus environment."
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                            <span className="text-[#2F4A8A] font-bold text-xs">{i + 1}</span>
                        </div>
                        <p className="text-sm text-slate-600 font-light">{item}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- PUNISHMENTS SECTION --- */}
      <section className="py-24 bg-[#1A2E5A] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5">
            <Scale size={300} />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Anti-Ragging Punishments</h3>
            <p className="text-blue-200/60 font-light italic text-sm">Action varies based on the severity of the offense</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
               {[
                 "Imprisonment as per TN Anti-Ragging Act.",
                 "Permanent Expulsion from the institution.",
                 "Suspension from the institution and academic privileges.",
                 "Fine with a mandatory public apology.",
                 "Withholding of any form of financial grant (scholarships, etc.).",
                 "Withholding of examination results.",
                 "Debarring from representation in college events or tests.",
                 "Cancellation of admission and debarring from other institutions."
               ].map((item, i) => (
                 <div key={i} className="flex items-start gap-3 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                   <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center shrink-0 mt-0.5">
                     <AlertTriangle size={12} className="text-white" />
                   </div>
                   <span className="text-sm font-light text-blue-50">{item}</span>
                 </div>
               ))}
          </div>
        </div>
      </section>

      {/* --- REPORTING CHANNELS --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-2xl border border-slate-100 grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold text-[#1A2E5A] mb-6">Emergency Assistance</h3>
              <p className="text-slate-500 font-light leading-relaxed mb-8">
                If you are a victim of ragging or witness any such activity, report it immediately. 
                Jayarani College ensures a ragging-free campus through continuous vigilance.
              </p>
              <div className="space-y-4">
                <a href="https://www.antiragging.in" target="_blank" className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <Info className="text-[#2F4A8A]" />
                    <span className="text-sm font-bold text-slate-700">National Anti-Ragging Portal</span>
                  </div>
                  <ExternalLink size={16} className="text-slate-300 group-hover:text-[#2F4A8A]" />
                </a>
                <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                    <div className="flex items-center gap-6 text-red-700">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white shrink-0">
                         <PhoneCall size={24} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest opacity-70">24x7 National Helpline</p>
                        <p className="text-2xl font-black">1800-180-5522</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200">
               <Users className="text-[#2F4A8A] mb-6" size={32} />
               <h4 className="text-xl font-bold text-[#1A2E5A] mb-4">Nodal Officers</h4>
               <p className="text-sm text-slate-500 leading-relaxed font-light mb-6">
                 The committee is headed by the Principal and supported by hostel wardens and department heads. 
                 Committee member contact details are prominently displayed in all blocks.
               </p>
               <button className="w-full bg-[#1A2E5A] text-white py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#2F4A8A] transition-all shadow-lg shadow-blue-900/10">
                 View Anti-Ragging Committee
               </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}