"use client";

import Image from "next/image";
import Slider from "react-slick";

interface Props {
  images: string[];
  height?: number;
}

export default function BrandMarquee({ images }: Props) {
  const settings = {
    infinite: true,
    slidesToShow: 5, // number of logos visible
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000, // scroll speed
    autoplaySpeed: 0, // continuous scroll
    cssEase: "linear",
    arrows: false,
    draggable: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {images.map((src, i) => (
        <div key={i}>
          <Image
            src={src}
            alt={`brand-${i}`}
            objectFit="contain"
            className="h-[35px]"
            width={150}
            height={75}
          />
        </div>
      ))}
    </Slider>
  );
}
