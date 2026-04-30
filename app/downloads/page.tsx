"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages, downloadFiles } from "@/data/image";
import { Download, FileText, ArrowDownToLine, FolderArchive } from "lucide-react";

export default function DownloadsPage() {
    return (
        <main className="min-h-screen bg-[#FDFDFD]">
            <PageHeader
                title="Student Downloads"
                subtitle="Access essential forms, templates, and applications quickly."
                breadcrumb="Home / Downloads"
                image={pageImages.genericPage}
            />

            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto">

                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-[#2F4A8A] mb-6">
                            <FolderArchive size={32} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A2E5A] mb-4">
                            Document Repository
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Download standard formats and forms required for your academic and administrative needs at Jayarani College.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {downloadFiles.map((file, idx) => (
                            <div
                                key={idx}
                                className="group flex items-center justify-between p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-red-500 group-hover:bg-red-50 group-hover:scale-110 transition-all duration-300">
                                        <FileText size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-[#1A2E5A] font-bold text-lg leading-tight mb-1">{file.name}</h3>
                                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">PDF Document</p>
                                    </div>
                                </div>

                                <a
                                    href={file.path}
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-[#2F4A8A] hover:bg-[#2F4A8A] hover:text-white transition-colors duration-300"
                                    aria-label={`Download ${file.name}`}
                                >
                                    <ArrowDownToLine size={20} />
                                </a>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </main>
    );
}