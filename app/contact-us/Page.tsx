"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages } from "@/data/image";
// import { pageImages } from "@/data/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        title="Contact Us"
        subtitle="We are here to help you. Reach out to us for any academic or admission inquiries."
        breadcrumb="Home / Contact"
        image={pageImages.aboutAcademicCouncil} // Ensure this path exists in your data
      />

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* --- CONTACT INFORMATION --- */}
          <div>
            <span className="text-[#2F4A8A] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Get In Touch</span>
            <h2 className="text-4xl font-serif font-bold text-[#1A2E5A] mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#1A2E5A] transition-colors">
                  <MapPin className="w-6 h-6 text-[#1A2E5A] group-hover:text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A2E5A] mb-1">Our Location</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Nethimedu, Salem - 636002,<br /> 
                    Tamilnadu, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#1A2E5A] transition-colors">
                  <Phone className="w-6 h-6 text-[#1A2E5A] group-hover:text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A2E5A] mb-1">Phone Numbers</h4>
                  <p className="text-slate-600">9150099240, 0427-2220800</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#1A2E5A] transition-colors">
                  <Mail className="w-6 h-6 text-[#1A2E5A] group-hover:text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A2E5A] mb-1">Email Address</h4>
                  <p className="text-slate-600">info@jcs.edu.in</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#1A2E5A] transition-colors">
                  <Clock className="w-6 h-6 text-[#1A2E5A] group-hover:text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A2E5A] mb-1">Office Hours</h4>
                  <p className="text-slate-600">Mon - Sat: 9:00 AM - 4:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- GOOGLE MAP & FORM --- */}
          <div className="space-y-8">
            <div className="w-full h-[350px] rounded-[2rem] overflow-hidden shadow-lg border-4 border-white">
              <iframe
                title="College Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.6472251390453!2d78.1328458!3d11.6485542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf038f972b22b%3A0xc391b15104646875!2sJayarani%20Arts%20and%20Science%20College%20for%20Women!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <h3 className="text-xl font-bold text-[#1A2E5A] mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2F4A8A]"
                />
                <input 
                  type="email" 
                  placeholder="Email ID" 
                  className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2F4A8A]"
                />
                <textarea 
                  rows={3} 
                  placeholder="How can we help?" 
                  className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2F4A8A]"
                ></textarea>
                <button className="w-full bg-[#1A2E5A] text-white py-4 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#2F4A8A] transition-all">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}