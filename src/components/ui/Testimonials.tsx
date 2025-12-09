/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { testimonialData } from "@/data/testimonials";
import Image from "next/image";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Swiper Imports
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const ArrowButton = ({ onClick, children }: any) => (
  <button
    onClick={onClick}
    className="w-12 h-12 rounded-full bg-secondary/80 hover:bg-secondary text-body flex items-center justify-center cursor-pointer"
  >
    {children}
  </button>
);

export default function Testimonials() {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <section className="space bg-bg py-16">
      <div className="container mx-auto px-4">
        {/* Title + Arrows */}
        <div className="flex justify-between flex-wrap gap-8 items-center mb-10">
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            Testimonials
          </h2>

          <div className="flex gap-3">
            <ArrowButton onClick={() => swiperRef.current?.slidePrev()}>
              <FaChevronLeft />
            </ArrowButton>
            <ArrowButton onClick={() => swiperRef.current?.slideNext()}>
              <FaChevronRight />
            </ArrowButton>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {testimonialData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-theme p-6 rounded-xl shadow-lg h-full flex flex-col items-start">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-12 h-12 rounded-full mb-6 object-cover"
                />
                <p className="text-body/90 text-[18px] mb-4">{item.text}</p>
                <h5 className="text-body font-semibold">{item.name}</h5>
                <p className="text-body/70 text-sm">{item.designation}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h5 className="text-theme mb-4 font-semibold">
              BUILT ON PROVEN SCIENCE, NOT GUESSWORK
            </h5>
            <p>
              This system combines research from Stanford Sleep Medicine,
              Harvard Medical School, and leading neuroscience journals. Every
              technique targets the root cause elevated evening cortisol that
              keeps professional men wired when they should be winding down.
            </p>
          </div>

          <div>
            <h5 className="text-theme mb-4 font-semibold">
              OVER 2,000 MEN HAVE USED THIS EXACT SYSTEM
            </h5>
            <p>
              From Fortune 500 executives to business owners to busy fathers men
              just like you have cracked the code on consistent, restorative
              sleep without changing their entire lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
