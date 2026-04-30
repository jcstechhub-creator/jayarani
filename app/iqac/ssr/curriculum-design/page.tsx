import PageHeader from '@/app/components/PageHeader';
import React from 'react';

const CurriculumDesign = () => {
  const objectives = [
    "Documentation of all curricular, co-curricular, and extracurricular activities.",
    "Promotion of awareness regarding global educational strategies.",
    "Examination of relevance and quality of current academic programs.",
    "Initiation of new courses and programs based on industry needs."
  ];

  return (
    <>
    
    <PageHeader
  title="Internal Quality Assurance Cell (IQAC)"
  subtitle="Catalyzing Improvement, Contributing to Excellence: Sustaining quality culture through innovation, inclusion, and holistic institutional growth since 2019."
  breadcrumb="Home / Quality / IQAC"
  // Using an image that reflects professional coordination and systemic quality management
  // image="/newgirlimages/image-49.jpeg" 
  image="/banner/banner4.jpeg"
/>
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-blue-900 uppercase tracking-wide">
          Internal Quality Assurance Cell (IQAC)
        </h1>
        <p className="mt-2 text-lg text-gray-600 italic">
          "Catalyzing Improvement, Contributing to Excellence"
        </p>
        <div className="mt-4 h-1 w-24 bg-blue-600 mx-auto"></div>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column: Vision & Mission */}
        <div className="md:col-span-1 space-y-6">
          <section className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
            <h2 className="text-xl font-semibold mb-3 text-blue-800">Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To develop a quality culture in the institution by promoting innovation, 
              advocating inclusion, and catalyzing holistic growth.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
            <h2 className="text-xl font-semibold mb-3 text-green-800">Mission</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
              <li>Sustain quality measures since 2019.</li>
              <li>Stimulate teaching-learning and research.</li>
              <li>Encourage self-evaluation and accountability.</li>
            </ul>
          </section>
        </div>

        {/* Right Column: Curriculum Design Content */}
        <div className="md:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
              Curriculum Design & Quality Objectives
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {objectives.map((obj, index) => (
                <div key={index} className="flex items-start p-4 bg-blue-50 rounded-md">
                  <span className="font-bold text-blue-600 mr-3">{index + 1}.</span>
                  <p className="text-gray-700 text-sm">{obj}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gray-100 rounded-md">
              <h3 className="font-semibold text-gray-800 mb-4">Quality Initiatives in Curriculum</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <li>• Academic & Administrative Audit</li>
                <li>• Feedback Mechanism</li>
                <li>• E-Governance Documentation</li>
                <li>• Faculty Development (FDP)</li>
                <li>• Collaborative Initiatives</li>
                <li>• Capacity Building</li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      {/* Footer Note */}
      <footer className="mt-12 text-center text-gray-500 text-sm border-t pt-6">
        © Jayarani College | IQAC Documentation Series 2026
      </footer>
    </div>
    </>
  );
};

export default CurriculumDesign;
