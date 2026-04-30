"use client";

import React from "react";
// import PageHeader from "@/components/PageHeader";
import { Bus, MapPin, ShieldAlert, Clock, Info } from "lucide-react";
import PageHeader from "../components/PageHeader";

const TransportationPage = () => {
    const pageImages = {
        transportHero: "/newgirlimages/image-10.jpeg", // Replace with actual transport-related image
    };

    const routes = [
        {
            no: "1",
            destination: "Tharamangalam",
            via: "Omalur",
            to: "JCS College",
        },
        {
            no: "2",
            destination: "Agrahara Nattamangalam",
            via: "Ayothiyapattinam",
            to: "JCS College",
        }
    ];

    const guidelines = [
        {
            title: "Punctuality",
            desc: "Students must be at the bus stop at least ten minutes before the scheduled arrival. Buses will not wait for latecomers [cite: 693-694].",
            icon: <Clock className="w-5 h-5 text-red-900" />
        },
        {
            title: "Safety First",
            desc: "Do not approach the entry/exit door until the bus comes to a complete halt. Occupy allotted seats immediately [cite: 697-698].",
            icon: <ShieldAlert className="w-5 h-5 text-red-900" />
        },
        {
            title: "Identification",
            desc: "Students must wear their College ID card at the entry to board the bus.",
            icon: <Info className="w-5 h-5 text-red-900" />
        }
    ];

    return (
        <div className="min-h-screen bg-white pb-20">
            <PageHeader
                title="Transportation Services"
                subtitle="Safe, reliable, and comprehensive transport for the JCS community."
                breadcrumb="Home / Services / Transportation"
                image={pageImages.transportHero}
            />

            <div className="max-w-7xl mx-auto px-6 mt-16">
                {/* Intro Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Connecting Salem to Excellence</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            JCS provides a dedicated fleet of buses serving students and staff across Salem District and its surrounding areas.
                            Our transport network supports daily commutes, field trips, and industrial visits[cite: 228, 543].
                        </p>
                        <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-900">
                            <p className="text-blue-900 font-medium">
                                "Flexible Routes: Bus stops and routes are reviewed and extended based on new student admissions to ensure maximum coverage."
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {guidelines.map((item, idx) => (
                            <div key={idx} className="flex gap-4 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
                                <div className="mt-1">{item.icon}</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bus Routes Table */}
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <Bus className="text-red-900" /> Active Bus Routes
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="p-5 text-sm font-bold text-gray-900 border-b">Bus No.</th>
                                <th className="p-5 text-sm font-bold text-gray-900 border-b">Route Start</th>
                                <th className="p-5 text-sm font-bold text-gray-900 border-b">Via</th>
                                <th className="p-5 text-sm font-bold text-gray-900 border-b">Destination</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {routes.map((route) => (
                                <tr key={route.no} className="hover:bg-gray-50 transition">
                                    <td className="p-5">
                                        <span className="bg-red-100 text-red-900 font-bold px-3 py-1 rounded-full text-xs">
                                            {route.no}
                                        </span>
                                    </td>
                                    <td className="p-5 font-semibold text-gray-800">{route.destination}</td>
                                    <td className="p-5 text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <MapPin size={14} className="text-gray-400" />
                                            {route.via}
                                        </div>
                                    </td>
                                    <td className="p-5 text-gray-900 font-medium">{route.to}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Disciplinary Note */}
                <div className="mt-12 p-8 rounded-2xl bg-gray-900 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h4 className="text-xl font-bold mb-4">Important Notice</h4>
                        <ul className="text-gray-300 text-sm space-y-2 list-disc pl-5">
                            <li>One-way transport facility is not provided[cite: 707].</li>
                            <li>Consumption of edibles is strictly prohibited inside the bus[cite: 706].</li>
                            <li>The college retains the right to deny the facility for indiscipline or non-payment of fees[cite: 711, 713].</li>
                            <li>Changes to allotted bus stops require prior permission from the Vice-Principal (Administration)[cite: 696].</li>
                        </ul>
                    </div>
                    <Bus className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5 rotate-12" />
                </div>
            </div>
        </div>
    );
};

export default TransportationPage;