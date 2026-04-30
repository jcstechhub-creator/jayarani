"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { 
  LayoutDashboard, Calendar, Newspaper, 
  Link as LinkIcon, LogOut, Menu, X, UserCircle 
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) router.replace("/login");
      else setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  const navItems = [
    { name: "Overview", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
    { name: "Events", icon: <Calendar size={20} />, path: "/dashboard/events" },
    { name: "News Updates", icon: <Newspaper size={20} />, path: "/dashboard/news" },
    { name: "Quick Links", icon: <LinkIcon size={20} />, path: "/dashboard/links" },
  ];

  if (loading) return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-50 font-sans">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#1E3A8A]"></div>
      <p className="mt-4 text-gray-500 text-sm animate-pulse">Authenticating...</p>
    </div>
  );

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans text-slate-900">
      {/* SIDEBAR */}
      <aside className={`${isSidebarOpen ? "w-64" : "w-20"} bg-[#1E3A8A] text-white transition-all duration-300 ease-in-out flex flex-col z-50 shadow-xl`}>
        <div className="p-5 flex items-center justify-between border-b border-white/10">
          {isSidebarOpen && <span className="font-bold text-lg tracking-tight">JCS ADMIN</span>}
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-1.5 hover:bg-white/10 rounded-md transition-colors">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 mt-6 px-3 space-y-1.5">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <button
                key={item.name}
                onClick={() => router.push(item.path)}
                className={`w-full flex items-center p-3 rounded-xl transition-all duration-200 group ${
                  isActive ? "bg-[#F59E0B] text-white shadow-lg shadow-orange-900/20" : "hover:bg-white/5 text-blue-100/70 hover:text-white"
                }`}
              >
                <span className={`${isActive ? "scale-110" : "group-hover:scale-110"} transition-transform`}>
                  {item.icon}
                </span>
                {isSidebarOpen && <span className="ml-3 font-medium text-sm">{item.name}</span>}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button onClick={() => signOut(auth)} className="w-full flex items-center p-3 text-red-300 hover:bg-red-500/10 rounded-xl transition-colors">
            <LogOut size={20} />
            {isSidebarOpen && <span className="ml-3 text-sm font-medium">Log Out</span>}
          </button>
        </div>
      </aside>

      {/* MAIN VIEW */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-2">
             <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
               Dashboard / <span className="text-slate-800">{pathname.split('/').pop() || "Overview"}</span>
             </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-800 leading-none">College Admin</p>
              <p className="text-[10px] text-slate-400 mt-1 font-bold">JAYARANI INSTITUTIONS</p>
            </div>
            <div className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                <UserCircle size={24} className="text-slate-400" />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
          {children}
        </main>
      </div>
    </div>
  );
}