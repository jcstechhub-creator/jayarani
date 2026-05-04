"use client";

import React, { useState } from 'react';
import { Mail, GraduationCap, Award, BookOpen, Search, Users, TrendingUp, Heart, Wallet, Globe } from 'lucide-react';
import PageHeader from '@/app/components/PageHeader';
import { pageImages } from '@/data/image';

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
        subtitle="Dedicated educators fostering an environment of academic excellence and moral integrity."
        breadcrumb="Home / About / Faculty"
        image={pageImages.adminSecretary} 
      />

      {/* Search Bar */}
      <div className="max-w-6xl mx-auto -mt-8 px-6">
        <div className="relative bg-white rounded-xl shadow-lg p-4 flex items-center">
          <Search className="text-gray-400 ml-2" />
          <input 
            type="text" 
            placeholder="Search by name or specialization..."
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

        {/* --- NEW SECTION: INSTITUTIONAL STANDARDS --- */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Faculty Empowerment & Standards</h2>
            <p className="text-gray-500 mt-2">Our commitment to professional growth and institutional quality.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Diversity */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Globe className="w-8 h-8 text-indigo-600 mb-4" />
              <h4 className="font-bold text-lg mb-2">Faculty Diversity</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                We pride ourselves on a diverse talent pool representing various cultural and academic backgrounds across India.
              </p>
            </div>

            {/* Pay and Allowances */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Wallet className="w-8 h-8 text-green-600 mb-4" />
              <h4 className="font-bold text-lg mb-2">Pay & Allowances</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Competitive salary structures as per institutional norms, including PF, insurance, and performance-based incentives.
              </p>
            </div>

            {/* FDP */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <TrendingUp className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="font-bold text-lg mb-2">Faculty Development</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ongoing FDPs and Research grants to ensure our educators stay at the forefront of pedagogical innovation.
              </p>
            </div>

            {/* Retention */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Heart className="w-8 h-8 text-red-600 mb-4" />
              <h4 className="font-bold text-lg mb-2">Faculty Retention</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                With a 90% retention rate, we offer a supportive work culture that fosters long-term career stability and growth.
              </p>
            </div>

            {/* Ratio */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 lg:col-span-2 flex items-center gap-6">
              <div className="bg-blue-900 p-6 rounded-xl text-white">
                <Users className="w-10 h-10" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Faculty-Student Ratio</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We maintain an optimal <strong>1:20 ratio</strong> to ensure personalized mentorship and academic guidance for every student.
                </p>
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