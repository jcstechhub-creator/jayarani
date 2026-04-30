"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { useEffect, useState } from "react";
import Link from "next/link";

import { db } from "../firebase";
import { query, collection, getDocs, limit, orderBy } from "firebase/firestore";

const News = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch from Firebase
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const q = query(
  collection(db, "news"),
  orderBy("createdAt", "desc"), // 🔥 latest first
  limit(5)
);
const snap = await getDocs(q);
        const data = snap.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));

        setEvents(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // 🔹 Show only 5
  const visibleNews = events.slice(0, 5);
  const hasMore = events.length > 5;

  return (
    <section className="py-16 bg-gray-50">

      {/* 🔥 Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Explore Our{" "}
          <span className="text-red-900">News & Services</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
          Stay updated and explore everything
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

          {/* 🔄 Loading */}
          {loading ? (
            <SwiperSlide>
              <div className="flex justify-center items-center h-48 w-full">
                <div className="w-10 h-10 border-4 border-red-900 border-t-transparent rounded-full animate-spin"></div>
              </div>
            </SwiperSlide>
          ) : visibleNews.length > 0 ? (

            <>
              {/* 🔥 News Cards */}
              {visibleNews.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link
                    href={`/news/${encodeURIComponent(item.title)}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
                  >

                    {/* Image */}
                    <div className="overflow-hidden">
                      <img
                        src={item.image || "/placeholder.jpg"}
                        className="w-full h-48 object-cover group-hover:scale-105 transition"
                        alt={item.title}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-red-900 transition">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-600 mb-4">
                        {item.subheading}
                      </p>

                      <span className="text-red-900 font-semibold text-sm">
                        Read More →
                      </span>
                    </div>

                  </Link>
                </SwiperSlide>
              ))}

              {/* 🔥 SEE MORE CARD */}
              {hasMore && (
                <SwiperSlide>
                  <Link
                    href="/news"
                    className="flex flex-col items-center justify-center h-48 bg-gradient-to-r from-red-800 to-red-900 text-white rounded-2xl shadow-md hover:shadow-xl transition p-6"
                  >
                    <h3 className="text-xl font-bold mb-2">See More</h3>
                    <p className="text-sm opacity-80">View all news</p>
                  </Link>
                </SwiperSlide>
              )}
            </>

          ) : (
            <SwiperSlide>
              <p className="text-center text-gray-500 w-full py-10">
                No news available at the moment.
              </p>
            </SwiperSlide>
          )}

        </Swiper>
      </div>

      {/* 🔗 Bottom Link */}
      <div className="max-w-7xl mx-auto px-6 mt-10 flex justify-end">
        <Link href="/news" className="text-red-900 font-semibold text-sm">
          More News →
        </Link>
      </div>

    </section>
  );
};

export default News;