"use client";

import React, { useEffect, useState } from "react";
import { db } from "../firebase"; 
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { Star } from "lucide-react"; // Importing Star icon

export default function Marqueemoving() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const q = query(collection(db, "links"), orderBy("createdAt", "desc"));
        const snap = await getDocs(q);
        const fetchedItems = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setItems(fetchedItems);
      } catch (error) {
        console.error("Error fetching marquee links:", error);
      }
    };
    fetchLinks();
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="sticky top-0 z-[100] w-full bg-[#2F4A8A] border-b border-white/10">
      <div className="relative flex overflow-x-hidden py-2 items-center">
        
        {/* Track 1 */}
        <div className="flex animate-marquee-fast whitespace-nowrap">
          {items.map((item, idx) => (
            <a key={`a-${idx}`} href={item.link} target="_blank" rel="noopener noreferrer" className="mx-8 flex items-center gap-2 text-white text-sm font-medium hover:text-yellow-400 transition-colors">
              <Star size={14} className="text-yellow-400 fill-yellow-400" /> 
              {item.title}
            </a>
          ))}
        </div>

        {/* Track 2 - The 'Ghost' track that fills the gap */}
        <div className="absolute top-2 flex animate-marquee-fast-2 whitespace-nowrap">
          {items.map((item, idx) => (
            <a key={`b-${idx}`} href={item.link} target="_blank" rel="noopener noreferrer" className="mx-8 flex items-center gap-2 text-white text-sm font-medium hover:text-yellow-400 transition-colors">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              {item.title}
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-fast {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }

        @keyframes marquee-fast-2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }

        .animate-marquee-fast {
          /* Speed: Change 15s to 10s to go faster, or 20s to go slower */
          animation: marquee-fast 15s linear infinite;
        }

        .animate-marquee-fast-2 {
          animation: marquee-fast-2 15s linear infinite;
        }

        .relative:hover div {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}