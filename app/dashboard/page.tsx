"use client";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Calendar, Newspaper, Link as LinkIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const [counts, setCounts] = useState({ events: 0, news: 0, links: 0 });

  useEffect(() => {
    const getCounts = async () => {
      const [e, n, l] = await Promise.all([
        getDocs(collection(db, "events")),
        getDocs(collection(db, "news")),
        getDocs(collection(db, "links"))
      ]);
      setCounts({ events: e.size, news: n.size, links: l.size });
    };
    getCounts();
  }, []);

  const stats = [
    { label: "Events", count: counts.events, icon: <Calendar />, color: "border-blue-500", path: "/dashboard/events" },
    { label: "News", count: counts.news, icon: <Newspaper />, color: "border-orange-500", path: "/dashboard/news" },
    { label: "Links", count: counts.links, icon: <LinkIcon />, color: "border-emerald-500", path: "/dashboard/links" },
  ];

  return (
    <div className="max-w-5xl">
      <h1 className="text-2xl font-bold text-slate-800 mb-2">Institutional Overview</h1>
      <p className="text-slate-500 mb-8">Manage the digital presence of Jayarani College.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div key={s.label} className={`bg-white p-6 rounded-2xl shadow-sm border-t-4 ${s.color}`}>
            <div className="flex justify-between items-center mb-4">
              <span className="p-2 bg-slate-50 rounded-lg text-slate-600">{s.icon}</span>
              <span className="text-3xl font-bold">{s.count}</span>
            </div>
            <p className="text-slate-500 text-sm font-semibold mb-4">{s.label}</p>
            <Link href={s.path} className="text-blue-600 text-xs font-bold flex items-center hover:underline">
              MANAGE <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}