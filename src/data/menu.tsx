import { servicesData } from "@/data/services";

interface SubMenuItem {
  label: string;
  slug: string;
  link?: string;
  image?: string;
  description?: string;
  subMenuItems?: SubMenuItem[];
  id: number;
}

interface MenuItem {
  id: number;
  title: string;
  link?: string; // link is optional for items with submenus
  subMenuItems?: SubMenuItem[]; // Optional sub-menu items
  isActive?: boolean; // Optional active state for the menu item
}

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

interface SocialMediaLink {
  id: number;
  href: string;
  label: string;
  iconClass: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About Us",
    link: "/about",
  },
  {
    id: 3,
    title: "Services",
    isActive: true,
    link: "/services",
    subMenuItems: servicesData.map((service) => ({
      id: service.id,
      label: service.title,
      slug: service.slug || "",
      image: service.icon,
      description: service.text,
      link: service.slug ? `/services/${service.slug}` : undefined,
    })),
  },
  {
    id: 4,
    title: "Portfolio",
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Contact Us",
    link: "/contact",
  },
];

// Contact Information
export const contactInfo: ContactInfo = {
  address: "House-01 Road-06, Dhaka 1216",
  phone: "+8801690274952",
  email: "info@devionex.com",
};

// Social Media Links
export const socialMediaLinks: SocialMediaLink[] = [
  {
    id: 1,
    href: "https://www.linkedin.com/company/devionex",
    label: "LinkedIn",
    iconClass: "fab fa-linkedin",
  },
  {
    id: 2,
    href: "https://facebook.com/devionexcom",
    label: "Facebook",
    iconClass: "fab fa-facebook",
  },
  {
    id: 3,
    href: "https://www.instagram.com/devionex_/",
    label: "Instagram",
    iconClass: "fab fa-instagram",
  },
  {
    id: 4,
    href: "https://www.behance.net/devionex",
    label: "Behance",
    iconClass: "fab fa-behance",
  },
];
