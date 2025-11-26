"use client";

export interface ServiceData {
  id: number;
  title: string;
  description: string;
  cName: string;
  designation: string;
  stars: number; // just a number
  review: string;
  clientImage: string;
  iconImage: string[];
  platform: string; // 👈 image path (PNG, SVG, JPG)
}

export const caseStudiesData: ServiceData[] = [
  {
    id: 1,
    title: "Product Alpha",
    description:
      "Product Alpha completely streamlined our daily operations. Efficiency has never been higher!",
    cName: "Mahfuzur Rahman",
    designation: "Founder & CEO",
    stars: 4.5,
    review:
      "Product Alpha completely streamlined our daily operations. Efficiency has never been higher!",
    clientImage: "/assets/img/team/Founder.webp",
    platform: "/assets/img/brand/fiverr.svg", // ✔ use IMAGE instead of icon
    iconImage: ["/assets/img/service/webapp.webp"],
  },
  {
    id: 2,
    title: "Product Beta",
    description: "Product Beta improved productivity by 50% in just one month!",
    cName: "John Doe",
    designation: "CTO",
    stars: 4.5,
    review: "Product Beta improved productivity by 50% in just one month!",
    clientImage: "/assets/img/team/Founder.webp",
    platform: "/assets/img/brand/fiverr.svg", // ✔ use IMAGE
    iconImage: ["/assets/img/service/uiux.webp"],
  },
];
