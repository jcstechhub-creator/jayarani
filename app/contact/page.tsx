"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";

export default function ContactPage() {
  const contactDetails = [
    {
      title: "Our Location",
      value: "Nethimedu, Salem - 636002, Tamilnadu, India",
      icon: MapPin,
      subText: "Visit our campus for a guided tour."
    },
    {
      title: "Phone Numbers",
      value: "91500 99240, 0427-2220800",
      icon: Phone,
      subText: "Available during office hours."
    },
    {
      title: "Email Address",
      value: "info@jcs.edu.in",
      icon: Mail,
      subText: "We typically respond within 24 hours."
    },
    {
      title: "Office Hours",
      value: "Mon - Sat: 9:00 AM - 5:00 PM",
      icon: Clock,
      subText: "Closed on All Public Holidays."
    },
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with Jayarani College. We are here to assist you with your journey."
        breadcrumb="Home / Contact"
        image={pageImages.aboutAcademicCouncil}
      />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          {/* --- LEFT SIDE: ENHANCED INFO CARDS --- */}
          <div className="flex flex-col justify-center">
            <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Connect With Us</span>
            <h2 className="text-4xl font-serif font-bold text-[#1A2E5A] mb-10 leading-tight">
              Reach Out for <br />
              <span className="text-[#2F4A8A]/50 italic font-light">Academic Support</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactDetails.map((item, idx) => (
                <div key={idx} className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1A2E5A] transition-colors">
                    <item.icon className="w-6 h-6 text-[#1A2E5A] group-hover:text-yellow-400" />
                  </div>
                  <h4 className="font-bold text-[#1A2E5A] mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-2">
                    {item.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                    {item.subText}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: FULL HEIGHT MAP --- */}
          <div className="relative min-h-[500px] lg:min-h-full rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white group">
            <iframe
              title="College Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.671044436855!2d78.1326442758364!3d11.646849442544256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf038f6158d6b%3A0xc0c8f1585817c152!2sJayarani%20Arts%20and%20Science%20College%20for%20Women!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
            ></iframe>

            {/* Floating Action Button for Map */}
            <a
              href="https://maps.app.goo.gl/3XnB6W6Y5C6S8D9E7" // Replace with actual Google Maps link
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-8 right-8 bg-white text-[#1A2E5A] px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest shadow-xl flex items-center gap-2 hover:bg-yellow-400 transition-all"
            >
              Get Directions
              <ExternalLink size={14} />
            </a>
          </div>

        </div>
      </section>

      {/* Optional: Simple Footer-like CTA */}
      <section className="py-12 bg-slate-50 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-xs font-medium uppercase tracking-[0.3em]">
          Jayarani College of Arts & Science • Salem, Tamil Nadu
        </p>
      </section>
    </main>
  );
}