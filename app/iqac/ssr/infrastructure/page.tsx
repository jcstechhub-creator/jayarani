import React from 'react';
import { 
  Building2, 
  Wifi, 
  Wind, 
  Droplets, 
  Zap, 
  ShieldAlert, 
  Coffee, 
  Library,
  Camera
} from 'lucide-react';
import PageHeader from '@/app/components/PageHeader';
import { pageImages } from '@/data/image';

const InfrastructurePage = () => {
  const facilities = [
    {
      title: "Smart Classrooms",
      icon: <Wifi className="text-blue-600" />,
      desc: "ICT-enabled learning spaces with high-speed internet and digital projection systems."
    },
    {
      title: "Science & Computer Labs",
      icon: <Zap className="text-amber-600" />,
      desc: "State-of-the-art laboratories equipped for research promotions and IPR initiatives."
    },
    {
      title: "Rainwater Harvesting",
      icon: <Droplets className="text-cyan-600" />,
      desc: "Advanced systems ensuring 100% water conservation as part of our Green Audit commitment."
    },
    {
      title: "Surveillance Network",
      icon: <Camera className="text-red-600" />,
      desc: "State-of-the-art CCTV monitoring strategic areas for 24/7 campus security."
    }
  ];

  return (
    <div className="bg-white min-h-screen text-gray-900">
      {/* Hero Section */}
      <PageHeader 
  title="Campus Infrastructure"
  subtitle="Sustainable, Secure, and Advanced: A physical environment engineered for academic excellence, innovation, and holistic development."
  breadcrumb="Home / Campus / Infrastructure"
  // Using an image that highlights modern, green, and ICT-enabled campus architecture
  // image="/newgirlimages/image-62.jpeg"
  // image="/banner/banner4.jpeg"
  
                  image={pageImages.adminSecretary} 
/>
      {/* <div className="relative h-[60vh] bg-gray-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('/newgirlimages/image-78.jpeg')] bg-cover bg-center"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase">
            Campus Infrastructure
          </h1>
          <p className="text-blue-200 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Sustainable. Secure. Advanced. A physical environment engineered for academic excellence.
          </p>
        </div>
      </div> */}

      <main className="max-w-7xl mx-auto py-20 px-6">
        {/* Core Infrastructure Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {facilities.map((f, i) => (
            <div key={i} className="group p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-blue-100">
              <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-32">
          
          {/* Sustainability & Environment */}
          <section className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center space-x-2 text-green-600 mb-4">
                <Wind className="w-5 h-5" />
                <span className="font-bold uppercase tracking-widest text-sm">Environmental Commitment</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800 tracking-tight">Eco-Friendly Campus Ecosystem</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Jayarani College integrates environmental sustainability into its architecture. From 
                <strong> Rainwater Harvesting </strong> systems that replenish groundwater to our 
                meticulously maintained <strong> Green Zones </strong>, the campus serves as a 
                living example of climate change mitigation.
              </p>
              <ul className="space-y-4">
                {['Energy Efficient Lighting', 'Composting Organic Waste', 'Single-use Plastic Free Zone'].map((item) => (
                  <li key={item} className="flex items-center font-semibold text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 bg-gray-100 h-96 rounded-[3rem] overflow-hidden shadow-inner">
               <img src="/newgirlimages/image-79.jpeg" alt="Sustainable Campus" className="w-full h-full object-cover" />
            </div>
          </section>

          {/* Safety & Security */}
          <section className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gray-100 h-96 rounded-[3rem] overflow-hidden shadow-inner">
               <img src="/newgirlimages/image-80.jpeg" alt="Security Systems" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center space-x-2 text-red-600 mb-4">
                <ShieldAlert className="w-5 h-5" />
                <span className="font-bold uppercase tracking-widest text-sm">Campus Safety</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800 tracking-tight">Advanced Security Infrastructure</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our safety framework is built on a "Zero Tolerance" policy. The infrastructure includes 
                <strong> Secure Hostel Premises </strong> for girls with 24/7 wardens, dedicated 
                <strong> Women's Helpdesks</strong>, and high-definition CCTV surveillance across 
                all strategic transit points.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-red-600 pl-4">
                  <span className="block text-2xl font-bold">24/7</span>
                  <span className="text-xs text-gray-500 uppercase">Monitoring</span>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <span className="block text-2xl font-bold">SOS</span>
                  <span className="text-xs text-gray-500 uppercase">Emergency Lines</span>
                </div>
              </div>
            </div>
          </section>

          {/* Residential & Lifestyle */}
          <section className="bg-blue-900 rounded-[4rem] p-12 lg:p-20 text-white overflow-hidden relative">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Hostel & Living Spaces</h2>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  The residential facilities are designed to be a home away from home. 
                  Strict visitor regulations and regular hygiene drives ensure that our 
                  students live in a healthy, focused environment.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-blue-800 px-4 py-2 rounded-full text-sm">Secure Entry</span>
                  <span className="bg-blue-800 px-4 py-2 rounded-full text-sm">Hygienic Cafeteria</span>
                  <span className="bg-blue-800 px-4 py-2 rounded-full text-sm">Medical Room</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-40 bg-blue-800 rounded-3xl"></div>
                <div className="h-40 bg-blue-700 rounded-3xl mt-8"></div>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-800 rounded-full blur-3xl opacity-50"></div>
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