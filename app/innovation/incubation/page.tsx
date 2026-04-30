"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
import { 
  Lightbulb, 
  Target, 
  Settings, 
  Sprout, 
  FlaskConical, 
  Globe2,  
  Users, 
  Layers, 
  Droplets,
  Hammer,
  ClipboardList,
  CheckCircle2
} from "lucide-react";

export default function IncubationCentrePage() {
  const incubationServices = [
    "Access to modern product innovation centre with internet facilitated laboratory.",
    "Assistance for preparing business plan.",
    "Training to develop business skills.",
    "Helping to promote the products.",
    "Helping to get financial support.",
    "Networking with other entrepreneurs, customers and support agencies."
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader 
        title="Infant Incubation Centre"
        subtitle="Bridging research, innovation, and societal development since 2017."
        breadcrumb="Home / Innovation / Incubation"
        image={pageImages.innovationIncubation}
      />

      {/* --- INTRODUCTION & VISION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Established 2017</span>
            <h2 className="text-4xl font-serif font-bold text-[#1A2E5A] mb-8 leading-tight">
              Nurturing Ideas <br />
              <span className="text-[#2F4A8A]/50 italic font-light">for Social Impact</span>
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed font-light text-lg">
              <p>
                Incubation Centre of Jayarani Arts and Science College for Women was established in 2017 to bring the outcome of Research and Education to the society. Incubation of Innovative ideas will be inciuded in the Academic Programme of the College.
              </p>
              <p>
                The Students, Faculty Members and the Researchers of Jayarani Arts and Science College for Women will get guidance. Additionally, local residents, particularly farmers and villagers, will register through this centre. They will get appropriate intensive training and mentoring, networking opportunities and assistance to apply for funding will be launched.
              </p>
            </div>
          </div>

          <div className="bg-[#1A2E5A] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
            <Target className="absolute -bottom-10 -right-10 text-white/5" size={240} />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Globe2 className="text-yellow-400" /> Vision
              </h3>
              <p className="text-blue-100/80 leading-relaxed mb-10 italic">
                "To provide support and training for Faculty members, Students, Researchers and people who are involved to connect Academic Community of the College with the Local community through social development are interested in converting their ideas which directly contribute to societal development."
              </p>
              
              <h3 className="text-xl font-bold mb-4">Objectives</h3>
              <ul className="space-y-4">
                {[
                  "To inculcate and nurture the culture of innovation at campus.",
                  "To help in developing Innovative Ideas to take care of Societal needs.",
                  "To find solutions for real life problems by providing correct mentoring.",
                  "To Translate Ideas about Products and a platform for easy commercialisation with minimal commercial values."
                ].map((obj, i) => (
                  <li key={i} className="flex gap-3 text-sm font-light">
                    <CheckCircle2 size={18} className="text-yellow-400 shrink-0" /> {obj}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#1A2E5A]">Types of Services</h3>
            <div className="h-1 w-12 bg-yellow-400 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {incubationServices.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <Settings className="text-[#2F4A8A] mb-4 group-hover:rotate-90 transition-transform" />
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VERMICOMPOST UNIT --- */}
      {/* <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-green-50/50 rounded-[4rem] p-12 md:p-20 border border-green-100">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h3 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
                  <Sprout className="text-green-600" /> Vermicompost Unit
                </h3>
                <div className="space-y-6 text-slate-600 leading-relaxed font-light">
                  <p>
                    Vermicompost is an Organic manure made up of Earthworm excreta that is high in humus and nutrients, making it an excellent source of manure for growing crops. It improves the texture, aeration, and water retention capacity of the soil and also avoiding erosion.
                  </p>
                  <p className="text-sm italic">
                    Among other things, it contains Vitamins, Enzymes, and Hormones such as Auxin Gibberellins. It aids in the decomposition of organic compounds in the soil. Pests and diseases are reduced as a result.
                  </p>
                  <div className="p-6 bg-white rounded-2xl border border-green-200">
                    <h4 className="font-bold text-green-800 mb-3 text-sm uppercase tracking-widest">Objectives</h4>
                    <ul className="space-y-3 text-xs">
                      <li>• Increasing public and student knowledge of the advantages of Organic Farming.</li>
                      <li>• Vermicompost propagation among Farmers to increase agricultural yields.</li>
                      <li>• To encourage students and society to pursue Training, Skill Development, and Teamwork.</li>
                      <li>• Encourage students and learners to design their own unit.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-green-100">
                   <h4 className="font-bold text-[#1A2E5A] mb-4 flex items-center gap-2">
                     <Layers className="text-green-600" /> Pit Method (Four Squares)
                   </h4>
                   <p className="text-xs text-slate-500 mb-6">Excellent system for preparing organic manure which replaces artificial fertilizers.</p>
                   <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-slate-50 rounded-xl">
                        <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Materials</span>
                        <p className="text-[10px] leading-tight text-slate-600">Cow dung, Biomass, Waste, Earthworms, Brick, Cement, Sand, Grass/Leaves.</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl">
                        <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Yield</span>
                        <p className="text-[10px] leading-tight text-slate-600">One chamber produces around 5–6 quintals of compost.</p>
                      </div>
                   </div>
                   <div className="space-y-3">
                      <p className="text-[11px] font-bold text-green-700 uppercase tracking-tighter">Construction & Process:</p>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        Brick walls built under shade creating four chambers. Ventilation holes included. Moisture maintained at 60–75%. Turned after 15 days, then every 30 days. Ready within 3-4 months.
                      </p>
                   </div>
                </div>
                
                <div className="p-6 bg-[#1A2E5A] rounded-3xl text-white">
                   <h4 className="font-bold mb-4 text-sm uppercase tracking-widest">Recent Activities</h4>
                   <ul className="space-y-2 text-xs font-light">
                      <li className="flex gap-2"><span>•</span> Sold at Agriculture Department's herbal fairs.</li>
                      <li className="flex gap-2"><span>•</span> Unit established at Deviyakurichi (2020-2021).</li>
                      <li className="flex gap-2"><span>•</span> Seminars/Workshops supported by Sree Kumaran Seeds, Attur.</li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* --- AZOLLA BIOFERTILIZER TANK --- */}
      {/* <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-blue-100">
                <h3 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                  <Droplets className="text-blue-500" /> Azolla Biofertilizer Tank
                </h3>
                <p className="text-slate-600 leading-relaxed font-light mb-6">
                  Azolla is an aquatic heterosporous fern which contains an endophytic cyanobacterium, <strong>Anabaena azollae</strong>, in its leaf cavity. Its high nitrogen content makes it an ideal biofertilizer for plant growth.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h5 className="font-bold text-[10px] uppercase text-blue-400 mb-2">Advantages</h5>
                    <ul className="text-[10px] space-y-2 text-slate-500">
                      <li>• Grows easily in wild and controlled conditions.</li>
                      <li>• Fixes atmospheric CO2 and nitrogen.</li>
                      <li>• Solubulises Zn, Fe and Mn for rice crops.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-[10px] uppercase text-blue-400 mb-2">Objectives</h5>
                    <ul className="text-[10px] space-y-2 text-slate-500">
                      <li>• Raising awareness of organic farming.</li>
                      <li>• Propagation among farmers for crop yield.</li>
                      <li>• Encouraging unit design among students.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-blue-900 rounded-[2.5rem] text-white">
                 <h4 className="font-bold mb-6 flex items-center gap-2 italic">
                   <ClipboardList className="text-yellow-400" /> Activities & Impact
                 </h4>
                 <div className="space-y-4 text-xs font-light opacity-90">
                    <p>• Established at Bharathiyar College, Deviyakurichi (2020-2021).</p>
                    <p>• Sold at Agriculture Department's numerous herbal fairs.</p>
                    <p>• Grants received from Sree Kumaran Seeds, Attur.</p>
                 </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-200">
               <h4 className="text-xl font-bold text-[#1A2E5A] mb-8 flex items-center gap-2">
                 <Hammer className="text-blue-600" /> Construction & Inoculation
               </h4>
               <div className="space-y-6">
                  <div className="p-5 bg-blue-50 rounded-2xl">
                    <h5 className="font-bold text-xs text-blue-700 mb-2">Tank Dimensions & Materials</h5>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Concrete tanks (2m L, 1m W, 0.5m D) built under greenhouse using brick and cement. Soil layer depth about 10 cm. Arrangements for water made by pipe and tap.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl">
                    <h5 className="font-bold text-xs text-slate-700 mb-2">Inoculation Process</h5>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      1.5kg mother culture spread over bed. Add 1 to 1.5g cow dung and Single Super Phosphate (SSP) weekly. Spread 200g fresh inoculums over water. Mat forms in 2 weeks.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 p-4 border border-yellow-200 bg-yellow-50 rounded-2xl">
                    <Users className="text-yellow-600 shrink-0" size={24} />
                    <p className="text-[10px] text-yellow-800 font-medium italic leading-relaxed">
                      "To promote training, skill development, and teamwork among students and society."
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* --- FOOTER NOTE --- */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <FlaskConical className="mx-auto text-slate-200 mb-8" size={64} />
          <h3 className="text-2xl font-bold text-[#1A2E5A] mb-4">Translating Ideas to Reality</h3>
          <p className="text-slate-500 font-light leading-relaxed mb-10">
            Jayarani College continues to nurture the culture of innovation through Vermi Technology 
            and Azolla propagation, providing a platform for easy commercialisation of sustainable solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#1A2E5A] text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#2F4A8A] transition-all">
              Register for Training
            </button>
            <button className="border border-slate-200 text-slate-700 px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">
              Download Resource Booklet
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}