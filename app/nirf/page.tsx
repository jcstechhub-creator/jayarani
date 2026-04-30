"use client";

import { FileText, ExternalLink } from "lucide-react";

export default function Page() {
  return (
    <div className="p-10 min-h-screen bg-slate-50">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-[#2F4A8A] mb-8">
        NIRF Documents
      </h1>

      {/* Card */}
      <div className="max-w-xl bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 transition">
          
          {/* Left */}
          <div className="flex items-center gap-4">
            <FileText className="text-slate-400" size={22} />
            <div>
              <p className="text-md font-semibold text-slate-800">
                NIRF Report
              </p>
              <p className="text-xs text-slate-400 uppercase tracking-widest">
                View / Download
              </p>
            </div>
          </div>

          {/* Link Button */}
          <a
            href="https://drive.google.com/file/d/1vN2GyzeFsYhZVpCDu17QBfw1YWNg6GvF/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm text-[#2F4A8A] hover:bg-[#2F4A8A] hover:text-white transition text-sm font-semibold"
          >
            <ExternalLink size={16} />
            Open
          </a>
        </div>
      </div>
    </div>
  );
}