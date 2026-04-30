"use client";

import React from "react";
import {
  BookOpen,
  ExternalLink,
  Library,
  GraduationCap,
  Globe,
  Baby,
  Search,
  BookMarked
} from "lucide-react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";

const resources = [
  {
    category: "Academic & Research",
    icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
    links: [
      {
        name: "Shodh Ganga",
        description: "A reservoir of Indian Theses and research papers.",
        url: "https://shodhganga.inflibnet.ac.in/",
      },
      {
        name: "NDLI",
        description: "National Digital Library of India - a virtual repository of learning resources.",
        url: "https://www.ndl.gov.in/",
      },
    ],
  },
  {
    category: "Public Domain & Classics",
    icon: <Library className="w-6 h-6 text-emerald-600" />,
    links: [
      {
        name: "Project Gutenberg",
        description: "An online library of more than 75,000 free eBooks.",
        url: "https://www.gutenberg.org/",
      },
      {
        name: "Open Library",
        description: "An open, editable library catalog, building towards a web page for every book.",
        url: "https://openlibrary.org/",
      },
      {
        name: "Library of Congress",
        description: "Classic books and historical documents from the US national library.",
        url: "https://www.read.gov/",
      },
    ],
  },
  {
    category: "General Reading & Multimedia",
    icon: <BookOpen className="w-6 h-6 text-purple-600" />,
    links: [
      {
        name: "BookBub",
        description: "A free service that helps you discover limited-time ebook deals.",
        url: "https://www.bookbub.com/",
      },
      {
        name: "Hoopla",
        description: "Digital media service offering movies, music, and audiobooks.",
        url: "https://www.hoopladigital.com/",
      },
      {
        name: "Read Any Book",
        description: "Extensive online library for reading various genres online.",
        url: "https://lib.readanybook.com/en/",
      },
    ],
  },
  {
    category: "Specialized Collections",
    icon: <Globe className="w-6 h-6 text-orange-600" />,
    links: [
      {
        name: "Open Culture",
        description: "The best free cultural & educational media on the web.",
        url: "https://www.openculture.com/",
      },
      {
        name: "Children's Digital Library",
        description: "International collection of books for children in multiple languages.",
        url: "http://www.childrenslibrary.org/",
      },
    ],
  },
];

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-100">
      <PageHeader
        title="Digital Library"
        subtitle="Access a world of knowledge through our curated selection of global e-resources and digital archives."
        breadcrumb="Home / Resources / Library"
        image={pageImages.genericPage}
      />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Intro Section */}
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 border-b border-slate-200 pb-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A2E5A] mb-4">
                Gateway to <span className="text-blue-600 italic">E-Learning</span>
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We empower our students with 24/7 access to international repositories.
                Whether you are conducting deep research or looking for leisure reading,
                these digital gateways provide millions of titles at your fingertips.
              </p>
            </div>
            <div className="hidden lg:block">
              <BookMarked className="w-24 h-24 text-slate-200" />
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {resources.map((group, idx) => (
              <div key={idx} className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100">
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1A2E5A] tracking-tight">
                    {group.category}
                  </h3>
                </div>

                <div className="grid gap-4">
                  {group.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-5 bg-white border border-slate-200 rounded-2xl hover:border-blue-400 hover:shadow-md transition-all duration-300"
                    >
                      <div className="pr-4">
                        <h4 className="font-bold text-[#1A2E5A] group-hover:text-blue-600 transition-colors">
                          {link.name}
                        </h4>
                        <p className="text-sm text-slate-500 mt-1 line-clamp-1">
                          {link.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 bg-slate-50 p-2 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Practical Note */}
          <div className="mt-20 p-8 rounded-3xl bg-[#1A2E5A] text-white overflow-hidden relative">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Need assistance with Research?</h3>
                <p className="text-blue-100 opacity-80">Our campus librarians are available to help you navigate these platforms.</p>
              </div>
              <button className="px-8 py-3 bg-white text-[#1A2E5A] font-bold rounded-full hover:bg-amber-400 transition-colors">
                Contact Librarian
              </button>
            </div>
            {/* Background Decorative Circle */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>

        </div>
      </section>
    </main>
  );
}