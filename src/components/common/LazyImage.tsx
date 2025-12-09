"use client";

import Image from "next/image";
import { useState } from "react";

interface LazyImageProps {
 src: string;
 alt: string;
 width: number;
 height: number;
 className?: string;
 priority?: boolean;
 placeholder?: "blur" | "empty";
 blurDataURL?: string;
}

export default function LazyImage({
 src,
 alt,
 width,
 height,
 className = "",
 priority = false,
 placeholder = "blur",
 blurDataURL,
}: LazyImageProps) {
 const [isLoaded, setIsLoaded] = useState(false);

 const defaultBlurDataURL =
 "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";

 return (
 <div className={`relative overflow-hidden ${className}`}>
 <Image
 src={src}
 alt={alt}
 width={width}
 height={height}
 priority={priority}
 loading={priority ? "eager" : "lazy"}
 placeholder={placeholder}
 blurDataURL={blurDataURL || defaultBlurDataURL}
 onLoad={() => setIsLoaded(true)}
 className={`transition-opacity duration-300 ${
  isLoaded ? "opacity-100" : "opacity-0"
 }`}
 />
 {!isLoaded && (
 <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
  <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
 </div>
 )}
 </div>
 );
}
