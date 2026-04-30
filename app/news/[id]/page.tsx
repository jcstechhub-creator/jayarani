"use client";

import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";

export default function NewsDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  const [news, setNews] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  console.log("ID from URL:", id);

  useEffect(() => {
    if (!id) return; // ✅ important

    const fetchNews = async () => {
      try {
        const docRef = doc(db, "news", id); // ✅ USE id (not params.id)
        const snap = await getDoc(docRef);

        console.log("EXISTS:", snap.exists());

        if (snap.exists()) {
          setNews({ id: snap.id, ...snap.data() });
        } else {
          setNews(null);
        }

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]); // ✅ depend on id

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!news) {
    return (
      <p className="text-center mt-10 text-red-500">
        News not found
      </p>
    );
  }

  return (
    <>
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Explore Our <span className="text-red-900">News & Services</span>
        </h1>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">

        {/* IMAGE */}
        <img
          src={news.image}
          className="w-full h-80 object-cover rounded mb-4"
          alt={news.title}
        />

        {/* TITLE */}
        <h1 className="text-3xl font-bold">{news.title}</h1>

        {/* SUBHEADING */}
        <h3 className="text-gray-600 mt-2">
          {news.subheading}
        </h3>

        {/* DESCRIPTION */}
        <div
          className="mt-4 text-base"
          dangerouslySetInnerHTML={{ __html: news.description }}
        />

      </div>
    </>
  );
}