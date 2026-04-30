import React from 'react';
import { 
  BookOpen, 
  Monitor, 
  MessageSquare, 
  Calculator, 
  Heart, 
  Award,
  ChevronRight,
  Target,
  Star,
  Zap,
  ShieldCheck
} from 'lucide-react'; // Assuming standard project structure
import PageHeader from '@/app/components/PageHeader';
import { pageImages } from '@/data/image';

export default function LifeSkillTrainingPage() {
  const content = [
    {
      year: "I Year",
      description: "Foundational Communication and Values",
      courses: [
        { code: "25LEC01", name: "English Communication - Basic", topics: "Daily routine, Small talk, Storytelling, Writing film reviews" },
        { code: "25LEC02", name: "Module I - Vocabulary", topics: "Fauna & Flora, Hypermarket terminology, Homophones, Action words" },
        { code: "25LEC03", name: "Module II - Grammar", topics: "Parts of speech, Tenses, Tongue twisters, Rhymes" },
        { code: "25LEC04", name: "Module III - Reading Comprehension", topics: "Poetry analysis, Short stories, Famous speeches, Composition" },
        { code: "25LEC05", name: "Module IV - Sentence Formation", topics: "Sentence structure, Punctuation, Joining sentences, Group debates" },
        { code: "25LES01", name: "Ethics (Soft Skills)", topics: "Personality development, Individual discipline, Life & Education values" }
      ]
    },
    {
      year: "II Year",
      description: "Digital Literacy and Advanced Quantitative Skills",
      courses: [
        { code: "25LEC06", name: "English Communication - Advanced", topics: "Just a minute, Group discussion, Public speaking, Stage performance" },
        { code: "25LCL01", name: "Computer Literacy", topics: "Office Automation (MS Office/Libre Office), Internet, E-mail" },
        { code: "25LCM01", name: "Competitive Mathematics - I", topics: "Numbers, H.C.F/L.C.M, Square roots, Percentages, Proportions" },
        { code: "25LCM02", name: "Competitive Mathematics - II", topics: "Time and Work, Trains/Boats, Logarithms, Calendar, Clocks" }
      ]
    },
    {
      year: "III Year",
      description: "Professional Readiness and Analytical Reasoning",
      courses: [
        { code: "25LSS01", name: "Soft Skills", topics: "Resume writing, Interview skills, Self-management, Personal effectiveness" },
        { code: "25LCM03", name: "Competitive Mathematics - III", topics: "Verbal Reasoning, Coding-Decoding, Logical puzzles, Hierarchy" },
        { code: "25LCM04", name: "Competitive Mathematics - IV", topics: "Non-Verbal & Analytical Reasoning, Statement & Logic, Conclusions" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* ✅ Corrected Academic PageHeader */}
      <PageHeader
        title="Life Skill Training"
        subtitle="Empowering women through a three-year progressive journey of communication, digital literacy, and professional ethics."
        breadcrumb="Home / Students / Life-Skill"
        image={pageImages.studentsLifeSkills}
      />

      {/* Main Objectives: NAAC Attribute 06 & 05 */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 grid md:grid-cols-3 gap-8 border border-slate-100">
          <div className="flex gap-5 group">
            <div className="bg-blue-50 p-4 rounded-2xl h-fit text-[#1A2E5A] group-hover:bg-[#1A2E5A] group-hover:text-white transition-all duration-300">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-[#1A2E5A] text-lg mb-2">Communication</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">Training students to speak fluently and effectively for global readiness.</p>
            </div>
          </div>
          <div className="flex gap-5 group">
            <div className="bg-orange-50 p-4 rounded-2xl h-fit text-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-white transition-all duration-300">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-[#1A2E5A] text-lg mb-2">Holistic Growth</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">Focusing on personal effectiveness and deeply rooted moral values.</p>
            </div>
          </div>
          <div className="flex gap-5 group">
            <div className="bg-emerald-50 p-4 rounded-2xl h-fit text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
              <Monitor className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-[#1A2E5A] text-lg mb-2">Digital Literacy</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">Mastering automation and modern tools for Industry 4.0 standards.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Schedule */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#1A2E5A] mb-4 uppercase tracking-tight">Curriculum Overview</h2>
          <div className="h-1.5 w-24 bg-[#F59E0B] mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-24">
          {content.map((section, idx) => (
            <div key={idx} className="relative">
              <div className="flex items-center gap-6 mb-10">
                <span className="bg-[#1A2E5A] text-white px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs shadow-lg">
                  {section.year}
                </span>
                <div className="h-px bg-slate-200 flex-grow"></div>
                <h3 className="text-[#F59E0B] font-bold italic text-sm uppercase tracking-wider">{section.description}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.courses.map((course, cIdx) => (
                  <div key={cIdx} className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-[#F59E0B]/30 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 bg-slate-50 text-[10px] font-mono font-bold text-slate-300 group-hover:text-[#F59E0B] transition-colors">
                      {course.code}
                    </div>
                    <div className="mb-6">
                       <Zap className="w-6 h-6 text-blue-100 group-hover:text-[#F59E0B] transition-colors mb-4" />
                       <h4 className="font-bold text-xl text-[#1A2E5A] leading-tight mb-3 group-hover:translate-x-1 transition-transform">
                        {course.name}
                      </h4>
                    </div>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed group-hover:text-slate-600 transition-colors">
                      {course.topics}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ethics & Values Section: Attribute 07 Best Practices */}
      <div className="bg-slate-100 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-slate-200 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10">
                <Heart className="text-red-500 w-8 h-8 fill-red-500" />
                <h2 className="text-3xl font-black text-[#1A2E5A] uppercase tracking-tight">
                  Core Values & Ethics <span className="text-slate-300 font-medium lowercase">(வாழ்க்கைக் கல்வி)</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="border-l-4 border-red-500 pl-6 group">
                  <h5 className="font-black text-[#1A2E5A] mb-3 group-hover:text-red-500 transition-colors uppercase text-sm">Love & Mercy <br /><span className="text-slate-400 font-bold lowercase">(அன்பு)</span></h5>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed italic">Compassion, equality, and kindness towards all living beings.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6 group">
                  <h5 className="font-black text-[#1A2E5A] mb-3 group-hover:text-blue-500 transition-colors uppercase text-sm">Humanity <br /><span className="text-slate-400 font-bold lowercase">(மனிதநேயம்)</span></h5>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed italic">Societal unity with a dedicated focus on women empowerment.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6 group">
                  <h5 className="font-black text-[#1A2E5A] mb-3 group-hover:text-[#F59E0B] transition-colors uppercase text-sm">Life & Work <br /><span className="text-slate-400 font-bold lowercase">(வாழ்க்கை)</span></h5>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed italic">Solving societal problems through labor and continuous education.</p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-6 group">
                  <h5 className="font-black text-[#1A2E5A] mb-3 group-hover:text-emerald-500 transition-colors uppercase text-sm">Dharma <br /><span className="text-slate-400 font-bold lowercase">(அறம்)</span></h5>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed italic">Understanding the greatness and necessity of ethical principles.</p>
                </div>
              </div>
            </div>
            {/* Decorative background logo */}
            <Star className="absolute right-[-20px] bottom-[-20px] w-64 h-64 text-slate-50 opacity-50" />
          </div>
        </div>
      </div>
      
      {/* Footer Branding */}
      <footer className="py-20 bg-white text-center border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-slate-400 text-xs font-black tracking-[0.4em] uppercase mb-8">
            © 2025 Jayarani College | Quality Sustenance 2026
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-[#1A2E5A]">
             <span className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">Self Discovery</span>
             <span className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">Goal Setting</span>
             <span className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">Holistic Development</span>
          </div>
        </div>
      </footer>
    </div>
  );
}