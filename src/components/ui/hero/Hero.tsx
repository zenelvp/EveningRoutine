"use client";

import Button from "@/components/button/Button";
import Image from "next/image";
import { useRef, useState } from "react";
import { IoPlay } from "react-icons/io5";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false); // start paused

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative pt-2 flex flex-col items-center justify-start pb-12">
      {/* Background */}
      <Image
        className="absolute top-0 left-0 w-full h-[120px] sm:h-full -z-50 object-cover"
        src="/assets/img/bg/bg-hero.svg"
        width={1920}
        height={580}
        alt="Hero BG"
        priority
      />

      <div className="container mx-auto text-center flex flex-col items-center justify-center px-4">
        <div className="max-w-[900px] mt-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            The Ultimate <br className="sm:hidden" />
            <span className="text-h3 md:text-h1 p-1 bg-theme font-bold text-body">
              4-Week
            </span>{" "}
            Evening Routine For Men 35 Plus
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl font-body mt-4 hero-desc">
            Finally... A proven 4-week system that lowers evening cortisol so
            busy executives sleep 7+ hours straight without pills, meditation
            apps, or overhauling your entire life.
          </h2>
        </div>

        {/* VIDEO */}
        <div className="w-full flex justify-center mt-12 px-2">
          <div
            className="w-full max-w-[800px] aspect-video relative cursor-pointer"
            onClick={handleVideoClick}
          >
            <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-lg"
              src="/assets/video/hero.mp4"
              loop
              poster="/assets/img/thm.png"
            />

            {/* Play Icon when video is paused */}
            {!isPlaying && (
              <button className="absolute inset-0 flex items-center justify-center">
                <IoPlay
                  size={70}
                  className="text-white bg-black/40 rounded-full p-4 backdrop-blur-md"
                />
              </button>
            )}
          </div>
        </div>

        <Button
          label="START MY 4-WEEK TRANSFORMATION NOW"
          className="mt-12 px-6 py-3 text-sm sm:text-base md:text-lg"
        />

        <p className="mt-6 text-sm sm:text-base text-center">
          Instant Access · Trusted by over 2,000 professional men who got their
          edge back
        </p>
      </div>
    </section>
  );
}
