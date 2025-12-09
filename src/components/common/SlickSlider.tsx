"use client";

import React, { forwardRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button className="slick-next-custom" onClick={onClick}>
    <FaChevronRight />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button className="slick-prev-custom" onClick={onClick}>
    <FaChevronLeft />
  </button>
);

interface SlickSliderProps {
  children: React.ReactNode;
  settings?: Record<string, unknown>;
  className?: string;
}

const SlickSlider = forwardRef<Slider, SlickSliderProps>(
  ({ children, settings = {}, className = "" }, ref) => {
    const defaultSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      ...settings,
    };

    return (
      <div className={`slick-slider-wrapper ${className}`}>
        <Slider ref={ref} {...defaultSettings}>
          {children}
        </Slider>
      </div>
    );
  }
);

SlickSlider.displayName = "SlickSlider";

export default SlickSlider;
