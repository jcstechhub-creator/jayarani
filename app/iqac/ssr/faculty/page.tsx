"use client";

import React, { useState } from 'react';
import { Mail, GraduationCap, Award, BookOpen, Search } from 'lucide-react';
import PageHeader from '@/app/components/PageHeader';

const FacultyPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const facultyData = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      designation: "Head of Department - Arts",
      qualification: "Ph.D. in Literature",
      experience: "12 Years",
      specialization: "Ethics & Moral Philosophy",
      email: "sarah.j@jayaranicollege.edu",
      image: "/newgirlimages/image-75.jpeg"
    },
    {
      id: 2,
      name: "Prof. Robert Smith",
      designation: "Assistant Professor",
      qualification: "M.Phil, NET",
      experience: "8 Years",
      specialization: "Environmental Sustainability",
      email: "robert.s@jayaranicollege.edu",
      image: "/newgirlimages/image-76.jpeg"
    },
    {
      id: 3,
      name: "Dr. Maria Garcia",
      designation: "Assistant Professor",
      qualification: "Ph.D. in Computer Science",
      experience: "10 Years",
      specialization: "Cybersecurity & Data Privacy",
      email: "m.garcia@jayaranicollege.edu",
      image: "/newgirlimages/image-77.jpeg"
    }
  ];

  const filteredFaculty = facultyData.filter(f => 
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen">
    <PageHeader
  title="Our Distinguished Faculty"
  subtitle="Dedicated educators fostering an environment of academic excellence, innovation, and moral integrity, aligned with NAAC Attribute 02 standards for faculty resources."
  breadcrumb="Home / About / Faculty"
  // Using an image that reflects professional academic mentorship and collaboration
  // image="/newgirlimages/image-41.jpeg"
  image="/banner/banner4.jpeg" 
/>

      {/* Search Bar */}
      <div className="max-w-6xl mx-auto -mt-8 px-6">
        <div className="relative bg-white rounded-xl shadow-lg p-4 flex items-center">
          <Search className="text-gray-400 ml-2" />
          <input 
            type="text" 
            placeholder="Search by name or specialization (e.g., Ethics, Sustainability)..."
            className="w-full p-2 ml-4 outline-none text-gray-700"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Faculty List */}
      <main className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFaculty.map((faculty) => (
            <div key={faculty.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="h-32 bg-gradient-to-r from-blue-800 to-indigo-900"></div>
              <div className="px-6 pb-6">
                <div className="relative -mt-16 mb-4">
                  <img 
                    src={faculty.image} 
                    alt={faculty.name}
                    className="w-32 h-32 rounded-2xl object-cover border-4 border-white shadow-md mx-auto"
                  />
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{faculty.name}</h3>
                  <p className="text-blue-600 font-medium text-sm uppercase tracking-wide">{faculty.designation}</p>
                </div>

                <div className="space-y-3 border-t border-gray-100 pt-6">
                  <div className="flex items-center text-gray-600 text-sm">
                    <GraduationCap className="w-4 h-4 mr-3 text-gray-400" />
                    <span>{faculty.qualification}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Award className="w-4 h-4 mr-3 text-gray-400" />
                    <span>{faculty.experience} Experience</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <BookOpen className="w-4 h-4 mr-3 text-gray-400" />
                    <span>Specialization: <strong>{faculty.specialization}</strong></span>
                  </div>
                </div>

                <a 
                  href={`mailto:${faculty.email}`}
                  className="mt-8 flex items-center justify-center w-full py-3 bg-gray-50 text-blue-900 rounded-xl font-semibold hover:bg-blue-900 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Faculty
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Standards Section */}
        <section className="mt-20 p-10 bg-white rounded-3xl border border-blue-100 shadow-sm">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Faculty Excellence & Ethics</h2>
              <p className="text-gray-600 leading-relaxed italic">
                "Our faculty members actively participate in Academic Audits and Faculty Development 
                Programmes (FDPs) to ensure the highest teaching-learning standards. They are 
                pioneers in research and community initiatives like the Honesty Shop and Environmental Audits."
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-xl text-center">
                <span className="block text-2xl font-bold text-blue-900 italic">IPR</span>
                <span className="text-xs text-blue-600 uppercase">Research Focused</span>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl text-center">
                <span className="block text-2xl font-bold text-blue-900 italic">NAAC</span>
                <span className="text-xs text-blue-600 uppercase">Quality Driven</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center text-gray-400 text-sm">
        © 2026 Jayarani College | IQAC Faculty Repository
      </footer>
    </div>
  );
};

export default FacultyPage;