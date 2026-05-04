import React from 'react';
import { 
  Building2, 
  Wifi, 
  Wind, 
  Droplets, 
  Zap, 
  ShieldAlert, 
  Library,
  Camera,
  // Wheelchair,
  Microscope,
  Monitor
} from 'lucide-react';
import PageHeader from '@/app/components/PageHeader';
import { pageImages } from '@/data/image';
import { FaWheelchair } from 'react-icons/fa';

const InfrastructurePage = () => {
  // Categorized Infrastructure for better scannability
  const infrastructureCategories = [
    {
      title: "Physical Infrastructure",
      icon: <Building2 className="text-blue-600" />,
      desc: "Spacious, well-ventilated administrative blocks and academic wings designed for a conducive learning atmosphere."
    },
    {
      title: "Learning Resources",
      icon: <Library className="text-emerald-600" />,
      desc: "Fully automated library with e-resources, journals, and a vast collection of academic textbooks."
    },
    {
      title: "IT Infrastructure",
      icon: <Monitor className="text-indigo-600" />,
      desc: "Campus-wide Wi-Fi, high-end computer labs, and ICT-enabled smart classrooms for digital pedagogy."
    },
    {
      title: "Research Resources",
      icon: <Microscope className="text-rose-600" />,
      desc: "Advanced labs equipped for IPR initiatives, research promotions, and scientific exploration."
    }
  ];

  return (
    <div className="bg-white min-h-screen text-gray-900">
      <PageHeader 
        title="Campus Infrastructure"
        subtitle="Sustainable, Secure, and Advanced: A physical environment engineered for academic excellence and inclusivity."
        breadcrumb="Home / Campus / Infrastructure"
        image={pageImages.adminSecretary} 
      />

      <main className="max-w-7xl mx-auto py-20 px-6">
        
        {/* Core Infrastructure Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {infrastructureCategories.map((item, i) => (
            <div key={i} className="group p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-blue-100">
              <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="space-y-32">
          
          {/* Divyangjan Friendly Facilities (Special Needs) */}
          <section className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-blue-50 p-8 lg:p-12 rounded-[3rem] border border-blue-100">
              <div className="flex items-center space-x-2 text-blue-700 mb-4">
                <FaWheelchair className="w-6 h-6" />
                <span className="font-bold uppercase tracking-widest text-sm">Inclusive Campus</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800 tracking-tight">Divyangjan Friendly Facilities</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We are committed to providing an accessible environment for students and staff with disabilities. 
                Our infrastructure is designed to ensure independent movement and ease of access across all campus levels.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Ramps & Tactile Paths', 
                  'Disabled-friendly Toilets', 
                  'Elevators with Braille', 
                  'Scribe Support Services'
                ].map((feature) => (
                  <div key={feature} className="flex items-center text-sm font-semibold text-blue-900 bg-white p-3 rounded-xl">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div>
               <img src="/newgirlimages/image-80.jpeg" alt="Accessible Facilities" className="w-full h-96 object-cover rounded-[3rem] shadow-lg" />
            </div>
          </section>

          {/* Research & IT Resources */}
          <section className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1 bg-gray-100 h-96 rounded-[3rem] overflow-hidden shadow-inner">
               <img src="/newgirlimages/image-79.jpeg" alt="Research Labs" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-2 text-rose-600 mb-4">
                <Zap className="w-5 h-5" />
                <span className="font-bold uppercase tracking-widest text-sm">Innovation Hub</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800 tracking-tight">Research & IT Ecosystem</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                To foster a spirit of inquiry, our IT and Research infrastructure supports 
                high-performance computing and specialized labs for various disciplines.
              </p>
              <ul className="space-y-4">
                {[
                  'High-Speed 100Mbps Lease Line Wi-Fi', 
                  'Cloud-based Learning Management System', 
                  'IPR & Patent Support Cell',
                  'Centralized Computing Resource Center'
                ].map((item) => (
                  <li key={item} className="flex items-center font-semibold text-gray-700">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Environment & Green Audit */}
          <section className="bg-emerald-900 rounded-[4rem] p-12 lg:p-20 text-white overflow-hidden relative">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Sustainable Learning Environment</h2>
                <p className="text-emerald-100 mb-8 leading-relaxed text-lg">
                  Jayarani College integrates environmental sustainability into its core infrastructure through 
                  Rainwater Harvesting, Solar Power, and rigorous Green Audits.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-emerald-800 border border-emerald-700 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                    <Droplets className="w-4 h-4" /> 100% Water Conservation
                  </span>
                  <span className="bg-emerald-800 border border-emerald-700 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                    <Wind className="w-4 h-4" /> Plastic-Free Campus
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-48 bg-emerald-800 rounded-3xl flex items-center justify-center border border-emerald-700">
                    <div className="text-center">
                        <span className="text-3xl font-bold block">A+</span>
                        <span className="text-xs uppercase opacity-60">Green Rating</span>
                    </div>
                </div>
                <div className="h-48 bg-emerald-700 rounded-3xl mt-8 flex items-center justify-center border border-emerald-600">
                    <div className="text-center">
                        <span className="text-3xl font-bold block">100%</span>
                        <span className="text-xs uppercase opacity-60">Solar Powered</span>
                    </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-800 rounded-full blur-3xl opacity-30"></div>
          </section>
        </div>
      </main>

      <footer className="py-20 border-t border-gray-100 text-center">
        <Building2 className="w-10 h-10 text-gray-200 mx-auto mb-4" />
        <p className="text-gray-400 text-sm uppercase tracking-widest">Jayarani College | Campus Infrastructure 2026</p>
      </footer>
    </div>
  );
};

export default InfrastructurePage;