"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { db } from "../firebase";
import {
  collection,
  getDocs,
  query,
  limit,
  orderBy,
  startAfter,
} from "firebase/firestore";

export default function NewsPage() {
  const [news, setNews] = useState<any[]>([]);

  console.log(news, "think ")

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [limitValue, setLimitValue] = useState(10);

  const [lastDoc, setLastDoc] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]); // for prev pages

  // 🔥 Fetch Data
  const fetchNews = async (direction = "next") => {
    setLoading(true);

    try {
      let q;

      if (direction === "next") {
        if (lastDoc) {
          q = query(
            collection(db, "news"),
            orderBy("createdAt", "desc"),
            startAfter(lastDoc),
            limit(limitValue)
          );
        } else {
          q = query(
            collection(db, "news"),
            orderBy("createdAt", "desc"),
            limit(limitValue)
          );
        }
      } else {
        // 🔙 Prev logic (simple reset)
        const prevStack = [...history];
        prevStack.pop();
        const prevLast = prevStack[prevStack.length - 1] || null;

        if (prevLast) {
          q = query(
            collection(db, "news"),
            orderBy("createdAt", "desc"),
            startAfter(prevLast),
            limit(limitValue)
          );
        } else {
          q = query(
            collection(db, "news"),
            orderBy("createdAt", "desc"),
            limit(limitValue)
          );
        }

        setHistory(prevStack);
      }

      const snap = await getDocs(q);

      const data = snap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));


      setNews(data);

      // 🔥 store last doc for next page
      const lastVisible = snap.docs[snap.docs.length - 1];
      if (lastVisible) {
        setLastDoc(lastVisible);
        if (direction === "next") {
          setHistory((prev) => [...prev, lastVisible]);
        }
      }

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  // 🔹 Initial load
  useEffect(() => {
    fetchNews();
  }, [limitValue]);

  return (
    <section className="py-16 bg-gray-50">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold">
          Explore Our <span className="text-red-900">News & Services</span>
        </h1>
      </div>

      {/* LIMIT SELECT */}
      <div className="max-w-7xl mx-auto px-6 flex justify-end mb-6">
        <select
          value={limitValue}
          onChange={(e) => {
            setLimitValue(Number(e.target.value));
            setLastDoc(null);
            setHistory([]);
            setPage(1);
          }}
          className="border px-3 py-2 rounded"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <p>Loading...</p>
        ) : (
          news.map((item) => (
            <Link
              key={item.id}
              href={`/news/${encodeURIComponent(item.id)}`}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl"
            >
              <img
                src={item.image}
                className="w-full h-48 object-cover"
                alt={item.title}
              />

              <div className="p-5">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-gray-600">
                  {item.subheading}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center gap-4 mt-10">

        <button
          onClick={() => {
            setPage((p) => Math.max(1, p - 1));
            fetchNews("prev");
          }}
          disabled={page === 1}
          className="px-4 py-2 border rounded"
        >
          Prev
        </button>

        <span>{page}</span>

        <button
          onClick={() => {
            setPage((p) => p + 1);
            fetchNews("next");
          }}
          className="px-4 py-2 border rounded"
        >
          Next
        </button>

      </div>

    </section>
  );
}