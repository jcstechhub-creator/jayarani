import React from 'react';
import { ShieldCheck, Leaf, Heart, BookOpen, Users, Lock } from 'lucide-react';
import PageHeader from '@/app/components/PageHeader';
import { contentImages } from '@/data/image';

const ExtendedCurricular = () => {
  const initiatives = [
    {
      title: "Honesty Shop",
      icon: <ShieldCheck className="w-8 h-8 text-amber-600" />,
      description: "A self-service retail concept promoting integrity where students purchase items and deposit money without supervision.",
      category: "Ethics"
    },
    {
      title: "Inter-Religious Harmony",
      icon: <Heart className="w-8 h-8 text-red-600" />,
      description: "Daily 9:00 AM multi-faith prayer sessions fostering spiritual well-being and campus-wide inclusivity.",
      category: "Value Education"
    },
    {
      title: "Green Campus",
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      description: "Hands-on participation in Rainwater Harvesting, Green Audits, and afforestation programs.",
      category: "Sustainability"
    },
    {
      title: "Cyber Security",
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      description: "Workshops on online safety, protecting sensitive data, and responsible digital behavior.",
      category: "Skill Building"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Header */}
      {/* <div className="bg-blue-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Extended-Curricular Programs</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Beyond the classroom: Cultivating moral integrity, social harmony, and professional skills through IQAC-driven initiatives.
          </p>
        </div>
      </div> */}
      <PageHeader
  title="Extended-Curricular Programs"
  subtitle="Beyond the classroom: Cultivating moral integrity, social harmony, and professional skills through IQAC-driven initiatives and institutional best practices."
  breadcrumb="Home / Academics / Extended-Curricular"
  // Using an image that reflects community service, value education, and diverse student activity
  // image="/newgirlimages/image-9.jpeg" 
  // image="/banner/banner4.jpeg"
  
                  image= {contentImages?.bookImage}
/>

      <main className="max-w-6xl mx-auto py-12 px-6">
        {/* Core Philosophy Section */}
        <section className="mb-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Holistic Development Strategy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Since 2019, Jayarani College has integrated extended-curricular activities to ensure students 
              excel not just academically, but as responsible citizens. These programs are monitored 
              by the IQAC to maintain global educational standards.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-gray-50 rounded-lg border-t-4 border-blue-500">
                <h4 className="font-bold text-gray-800">10+</h4>
                <p className="text-xs text-gray-500 uppercase">Annual Workshops</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border-t-4 border-green-500">
                <h4 className="font-bold text-gray-800">100%</h4>
                <p className="text-xs text-gray-500 uppercase">Student Participation</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Key Focus Areas</h3>
            <ul className="space-y-4">
              {[
                "Environmental Sustainability",
                "IPR & Research Promotion",
                "Gender & Social Sensitization",
                "Capacity Building & Skill Enhancement"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Feature Grid */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10 italic">Institutional Best Practices</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((item, index) => (
            <div key={index} className="group p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="mb-4 bg-gray-50 w-16 h-16 flex items-center justify-center rounded-lg group-hover:bg-blue-50 transition-colors">
                {item.icon}
              </div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{item.category}</span>
              <h3 className="text-lg font-bold mt-2 text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 bg-gray-900 rounded-3xl p-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">IQAC Quality Sustenance</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            All programs are periodically assessed through Academic and Administrative Audits 
            to ensure they meet the criteria for NAAC Accreditation.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition-colors">
            View SSR Documentation
          </button>
        </div>
      </main>

      <footer className="bg-gray-50 py-8 border-t border-gray-200">
        <p className="text-center text-gray-500 text-sm">
          © 2026 Jayarani College - Internal Quality Assurance Cell (IQAC)
        </p>
      </footer>
    </div>
  );
};

export default ExtendedCurricular;