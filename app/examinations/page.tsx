import React from 'react';
import {
  ClipboardCheck,
  Clock,
  AlertTriangle,
  FileText,
  Users,
  HelpCircle,
  FileSignature
} from 'lucide-react';

const ExaminationRules = () => {
  const examRules = [
    {
      id: 1,
      text: "Students should enter the exam hall at the stroke of first bell. No entry allowed 30 minutes after the commencement.",
      icon: <Clock className="w-5 h-5 text-blue-600" />
    },
    {
      id: 2,
      text: "No student will be allowed to leave the examination hall within two hours after the commencement.",
      icon: <AlertTriangle className="w-5 h-5 text-amber-600" />
    },
    {
      id: 3,
      text: "Prohibited items: Books, manuscripts, or any paper matter. Communication with others results in severe punishment.",
      icon: <AlertTriangle className="w-5 h-5 text-red-600" />
    },
    {
      id: 4,
      text: "Only the question paper may be taken out of the hall; no other paper is permitted.",
      icon: <FileText className="w-5 h-5 text-blue-600" />
    },
    {
      id: 5,
      text: "Malpractice will be dealt with as per State Government and Periyar University directives.",
      icon: <ClipboardCheck className="w-5 h-5 text-red-700" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight uppercase border-b-4 border-blue-600 inline-block pb-2">
            Examination Rules & Regulations
          </h1>
          <p className="mt-4 text-gray-600">Please read the following guidelines carefully to ensure a smooth examination process.</p>
        </div>

        {/* Core Exam Rules Grid */}
        <div className="grid gap-4 md:grid-cols-1 mb-12">
          {examRules.map((rule) => (
            <div key={rule.id} className="flex items-start p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg mr-4">
                {rule.icon}
              </div>
              <div>
                <span className="text-sm font-bold text-gray-400 mr-2">0{rule.id}</span>
                <p className="text-gray-700 font-medium leading-relaxed">{rule.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8">

          {/* Arrears & Internal Assessments */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <FileSignature className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide">Arrears & Internal Assessment</h2>
            </div>
            <ul className="space-y-3 text-gray-600 list-disc ml-6">
              <li>Course lists for arrears are published 2-3 weeks prior to application deadlines.</li>
              <li>Students <strong>must</strong> sign Continuous Internal Assessment (C.I.A.) mark sheets; no corrections are allowed after signing.</li>
              <li>Applications must be submitted to the college office on time after paying prescribed fees. Late applications will not be accepted.</li>
            </ul>
          </section>

          {/* Mark Sheets & Results */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <ClipboardCheck className="w-6 h-6 text-green-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide">Mark Sheets Distribution</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="font-bold text-blue-800 mb-1">Semesters I - V</p>
                <p className="text-sm text-blue-700">Distributed to Parents during the Parents-Teachers’ Meet on notified dates.</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-bold text-green-800 mb-1">Semester VI</p>
                <p className="text-sm text-green-700">Distributed to students within one month of result publication by the University.</p>
              </div>
            </div>
          </section>

          {/* Contact & Support */}
          <section className="bg-gray-800 text-gray-100 p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold mb-2 flex items-center">
                <HelpCircle className="mr-2" /> Need Clarification?
              </h2>
              <p className="text-gray-300">Parents and students are welcome to meet the concerned authorities for any grievances.</p>
            </div>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-bold transition-colors">
              Contact Office
            </button>
          </section>

        </div>

        {/* Footer info */}
        <footer className="mt-12 text-center text-sm text-gray-400">
          <p>© 2026 Examination Cell | Periyar University Regulations Applied</p>
        </footer>
      </div>
    </div>
  );
};

export default ExaminationRules;