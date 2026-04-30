"use client";
import { useEffect, useState } from "react";
import { contentImages } from "@/data/image";

export default function PopupPoster() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 10);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-[100] p-4 transition-opacity duration-300 ease-out ${isAnimating ? "opacity-100" : "opacity-0"
        }`}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={handleClose} />

      <div
        className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 transform transition-all duration-500 ease-out ${isAnimating ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
          }`}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-30 bg-black/10 hover:bg-black/20 text-gray-800 w-10 h-10 flex items-center justify-center rounded-full transition-all backdrop-blur-sm"
        >
          ✕
        </button>

        {/* --- IMAGE SECTION --- */}
        <div className="flex items-center justify-center bg-gray-50 overflow-hidden h-[300px] md:h-auto">
          <img
            src={contentImages?.propspects}
            alt="Admission Poster"
            // 'object-contain' ensures the full image is shown
            // 'w-full h-full' makes it fill the grid cell
            className="w-[500px] h-[500px] object-cover md:object-contain"
          />
        </div>

        {/* --- CONTENT SECTION --- */}
        <div className="p-8 md:p-14 flex flex-col justify-center bg-white">
          <header className="hidden md:block" >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 bg-blue-50 rounded-lg">
              Admissions Open 2026
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-[1.1]">
              Shape Your <br />
              <span className="text-blue-900 italic">Future Today.</span>
            </h2>
          </header>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed hidden md:block">
            Join a community of thinkers, creators, and leaders. Secure your spot in the 2026 cohort.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="px-10 py-4 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-2xl shadow-2xl shadow-blue-200 transition-all active:scale-95 text-center">
              Apply Now
            </button>
            <button
              onClick={handleClose}
              className="px-10 py-4 hidden md:block border-2 border-gray-100 hover:bg-gray-50 text-gray-700 font-bold rounded-2xl transition-all text-center"
            >
              Learn More
            </button>
          </div>

          <div className="mt-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              Early Bird Deadline: 15th June 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}