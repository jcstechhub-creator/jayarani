"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// ✅ Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import { heroSection } from "../../data/image";

const slides = [
  {
    image: heroSection[0],
    title: "Experience the Next Level of Women Education at JCS",
    subtitle: `"Educate a woman and you educate a generation." — Brigham Young`,
  },
  {
    image:  heroSection[1],
    title: "Women Education is Transformative at JCS",
    subtitle: `"When you educate a woman, you set her free. When you educate a girl, you change the world." — Oprah Winfrey`,
  },
  {
    image:  heroSection[2],
    title: "Women’s Bright Future Starts at JCS",
    subtitle: `"The future belongs to those who believe in the beauty of their dreams." — Eleanor Roosevelt`,
  },
  {
    image:  heroSection[3],
    title: "Knowledge Meets Women Empowerment at JCS",
    subtitle: `"Education is the most powerful weapon which you can use to change the world." — Nelson Mandela`,
  },
];

const HeroCarousel = () => {
  return (
    <section className="relative h-screen min-h-[500px] overflow-hidden w-full">

      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">

              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* LEFT SIDE CONTENT */}
              <div className="absolute inset-0 flex items-center z-10">
                <div className="max-w-4xl pl-6 md:pl-16 lg:pl-24 pr-6 text-white">

                  {/* Title */}
                  <h2 className="text-3xl md:text-5xl   lg:text-7xl font-bold mb-4 leading-normal">
                    {slide.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="text-lg md:text-3xl italic text-white/90 mb-8">
                    {slide.subtitle}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <a
                      href="/allcourse/ba-english"
                      className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:opacity-90 transition"
                    >
                      Explore Courses
                    </a>

                    <a
                      href="/placement/drives"
                      className="px-6 py-3 border border-white rounded-lg hover:bg-white/10 transition"
                    >
                      Placements
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default HeroCarousel;