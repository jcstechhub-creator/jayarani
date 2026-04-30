"use client";

import React from "react";
// Assuming PageHeader is in your components folder
// import PageHeader from "@/components/PageHeader"; 
import { FileText, AlertCircle, ShieldCheck, Clock } from "lucide-react";
import PageHeader from "@/app/components/PageHeader";

const AdmissionsRules = () => {
    // Mapping the image from your existing pageImages configuration
    const pageImages = {
        aboutAboutUs: "/newgirlimages/image-30.jpeg", // Example path
    };

    const admissionRules = [
        {
            id: 1,
            icon: <FileText className="w-6 h-6 text-red-900" />,
            title: "Application Process",
            text: "Application for admission to the degree courses must be made in the prescribed form.",
            cite: "605"
        },
        {
            id: 2,
            icon: <Clock className="w-6 h-6 text-red-900" />,
            title: "Age Requirement",
            text: "Applicants should have completed 17 years and 6 months on the 15th day of July of the current year.",
            cite: "606"
        },
        {
            id: 3,
            icon: <AlertCircle className="w-6 h-6 text-red-900" />,
            title: "Form Submission",
            text: "Incomplete application forms will be rejected.",
            cite: "607"
        },
        {
            id: 4,
            icon: <ShieldCheck className="w-6 h-6 text-red-900" />,
            title: "University Approval",
            text: "All admissions are provisional and subject to the approval of the University.",
            cite: "607"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Page Header Component */}
            <PageHeader
                title="Admission Rules"
                subtitle="Guidelines and eligibility criteria for aspiring students."
                breadcrumb="Home / Admissions / Rules"
                image={pageImages.aboutAboutUs}
            />

            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {admissionRules.map((rule) => (
                            <div
                                key={rule.id}
                                className="p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="mb-4 p-3 inline-block rounded-xl bg-white shadow-sm group-hover:scale-110 transition-transform">
                                    {rule.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{rule.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {rule.text} <span className="text-xs text-gray-400 font-mono"></span>
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Principal's Authority Section */}
                    <div className="mt-12 p-8 rounded-2xl bg-red-50 border-l-4 border-red-900">
                        <div className="flex items-start gap-4">
                            <div className="mt-1">
                                <AlertCircle className="w-6 h-6 text-red-900" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-red-900 mb-2">Administrative Authority</h4>
                                <p className="text-red-800/80 leading-relaxed">
                                    The Principal reserves the right to cancel the admission of the provisionally selected applicants at any time without assigning any reason. <span className="text-xs font-mono"></span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Note to Applicants */}
                    <div className="mt-16 text-center">
                        <p className="text-gray-500 italic">
                            * Please ensure all documents are verified before submission.
                            Admissions are conducted in accordance with the regulations of Periyar University. <span className="text-xs font-mono"></span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdmissionsRules;