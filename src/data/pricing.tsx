export type PricingPlan = {
  id: number;
  slug?: string;
  name: string;
  subtitle?: string;
  price?: number;
  currency?: string;
  period?: string;
  priceLabel?: string;
  monthlyPrice?: number;
  monthlyPriceLabel?: string;
  features: string[];
  cta?: string;
  badgeColor?: string;
  serviceTitle?: string;
  serviceDescription?: string;
  timeline?: string;
  tier?: "starter" | "accelerate" | "scale";
};

export type ServicePricing = {
  Monthly: PricingPlan[];
  ProjectBased: {
    Starter: PricingPlan[];
    Accelerate: PricingPlan[];
    Scale: PricingPlan[];
  };
  serviceTitle?: string;
  serviceDescription?: string;
};

export const pricingPlans: Record<string, ServicePricing> = {
  "ui-ux-design": {
    serviceTitle: "UI/UX Design Services",
    serviceDescription:
      "Transform your ideas into beautiful, user-friendly interfaces that engage and convert.",
    Monthly: [
      {
        id: 1,
        slug: "ui-ux-monthly-starter",
        name: "Design Support Plan",
        subtitle: "Ideal for brands needing ongoing design support",
        monthlyPrice: 1200,
        monthlyPriceLabel: "$1,200",
        currency: "$",
        period: "month",
        features: [
          "Ongoing design support",
          "Framer or custom development",
          "Clear timelines & milestones",
          "Flexible monthly scope",
          "Weekly updates from the project manager",
          "Fast turnaround on key tasks",
        ],
        cta: "Start your retainer",
      },
    ],
    ProjectBased: {
      Starter: [
        {
          id: 1,
          slug: "ui-ux-starter",
          name: "Starter",
          subtitle: "Best for small projects",
          price: 2499,
          currency: "$",
          period: "project",
          priceLabel: "$2,499",
          tier: "starter",
          features: [
            "Complete UX research & strategy",
            "Up to 10 page designs",
            "Basic design system",
            "Interactive prototypes",
            "Design handoff",
          ],
          cta: "Start Professional Design",
          timeline: "3-4 weeks",
        },
      ],
      Accelerate: [
        {
          id: 2,
          slug: "ui-ux-accelerate",
          name: "Accelerate",
          subtitle: "Best for growing businesses",
          price: 4999,
          currency: "$",
          period: "project",
          priceLabel: "$4,999",
          tier: "accelerate",
          features: [
            "Full UX audit & strategy",
            "Up to 25 page designs",
            "Comprehensive design system",
            "Interactive prototypes",
            "Usability testing",
            "Design system documentation",
          ],
          cta: "Start Accelerate Plan",
          timeline: "5-6 weeks",
        },
      ],
      Scale: [
        {
          id: 3,
          slug: "ui-ux-scale",
          name: "Scale",
          subtitle: "Custom design solutions",
          price: 8999,
          currency: "$",
          period: "project",
          priceLabel: "$8,999+",
          tier: "scale",
          features: [
            "Full UX audit & strategy",
            "Unlimited page designs",
            "Advanced design system",
            "User testing & validation",
            "Dedicated project manager",
            "Ongoing design support",
          ],
          cta: "Request Custom Quote",
          timeline: "8-10 weeks",
        },
      ],
    },
  },

  "website-development": {
    serviceTitle: "Website Development",
    serviceDescription:
      "Build fast, responsive websites that convert visitors into customers with modern technology.",
    Monthly: [
      {
        id: 1,
        slug: "website-monthly-starter",
        name: "Website Support Plan",
        subtitle: "Ideal for brands needing ongoing website support",
        monthlyPrice: 1500,
        monthlyPriceLabel: "$1,500",
        currency: "$",
        period: "month",
        features: [
          "Ongoing development support",
          "Website updates & maintenance",
          "Clear timelines & milestones",
          "Flexible monthly scope",
          "Weekly updates from the project manager",
          "Fast turnaround on key tasks",
        ],
        cta: "Start your retainer",
      },
    ],
    ProjectBased: {
      Starter: [
        {
          id: 1,
          slug: "website-starter",
          name: "Starter",
          subtitle: "Best for small businesses",
          price: 2999,
          currency: "$",
          period: "project",
          priceLabel: "$2,999",
          tier: "starter",
          features: [
            "Up to 10 pages",
            "Blog & CMS integration",
            "Basic SEO optimization",
            "Responsive design",
            "Performance optimization",
          ],
          cta: "Start Professional Website",
          timeline: "4-5 weeks",
        },
      ],
      Accelerate: [
        {
          id: 2,
          slug: "website-accelerate",
          name: "Accelerate",
          subtitle: "Best for growing businesses",
          price: 5999,
          currency: "$",
          period: "project",
          priceLabel: "$5,999",
          tier: "accelerate",
          features: [
            "Up to 25 pages",
            "Blog & CMS integration",
            "Advanced SEO optimization",
            "E-commerce functionality",
            "Performance optimization",
            "Custom integrations",
          ],
          cta: "Start Accelerate Plan",
          timeline: "6-8 weeks",
        },
      ],
      Scale: [
        {
          id: 3,
          slug: "website-scale",
          name: "Scale",
          subtitle: "Custom web solutions",
          price: 9999,
          currency: "$",
          period: "project",
          priceLabel: "$9,999+",
          tier: "scale",
          features: [
            "Unlimited pages",
            "Custom functionality",
            "Advanced integrations",
            "Multi-language support",
            "Dedicated project manager",
            "Ongoing support",
          ],
          cta: "Request Custom Quote",
          timeline: "10-12 weeks",
        },
      ],
    },
  },

  "ecommerce-development": {
    serviceTitle: "E‑commerce Development",
    serviceDescription:
      "Fast, secure, and scalable e‑commerce sites focused on conversions and growth.",
    Monthly: [
      {
        id: 1,
        slug: "ecom-monthly-starter",
        name: "E-commerce Support Plan",
        subtitle: "Ideal for brands needing ongoing store support",
        monthlyPrice: 2000,
        monthlyPriceLabel: "$2,000",
        currency: "$",
        period: "month",
        features: [
          "Ongoing store support",
          "Product management",
          "Clear timelines & milestones",
          "Flexible monthly scope",
          "Weekly updates from the project manager",
          "Fast turnaround on key tasks",
        ],
        cta: "Start your retainer",
      },
    ],
    ProjectBased: {
      Starter: [
        {
          id: 1,
          slug: "ecom-starter",
          name: "Starter",
          subtitle: "Launch a polished store",
          price: 3999,
          currency: "$",
          period: "project",
          priceLabel: "$3,999",
          tier: "starter",
          features: [
            "Up to 50 products",
            "Conversion‑optimized storefront",
            "Stripe/PayPal checkout",
            "Basic promotions & coupons",
            "Analytics & SEO setup",
          ],
          cta: "Launch Store",
          timeline: "4-5 weeks",
        },
      ],
      Accelerate: [
        {
          id: 2,
          slug: "ecom-accelerate",
          name: "Accelerate",
          subtitle: "Scale operations & AOV",
          price: 7999,
          currency: "$",
          period: "project",
          priceLabel: "$7,999",
          tier: "accelerate",
          features: [
            "Up to 200 products",
            "Advanced promotions & bundling",
            "Subscriptions & wallets",
            "ERP/PIM integrations",
            "Internationalization (tax/shipping)",
            "Advanced analytics",
          ],
          cta: "Start Accelerate Plan",
          timeline: "7-9 weeks",
        },
      ],
      Scale: [
        {
          id: 3,
          slug: "ecom-scale",
          name: "Scale",
          subtitle: "Enterprise e-commerce",
          price: 14999,
          currency: "$",
          period: "project",
          priceLabel: "$14,999+",
          tier: "scale",
          features: [
            "Unlimited products",
            "Advanced promotions & bundling",
            "Subscriptions & wallets",
            "ERP/PIM integrations",
            "Internationalization (tax/shipping)",
            "Dedicated project manager",
          ],
          cta: "Request Custom Quote",
          timeline: "10-12 weeks",
        },
      ],
    },
  },

  "saas-dashboard-development": {
    serviceTitle: "SaaS & Dashboard Development",
    serviceDescription:
      "Build scalable, secure SaaS platforms and dashboards that grow with your business using modern tech stacks.",
    Monthly: [
      {
        id: 1,
        slug: "saas-monthly-starter",
        name: "SaaS Support Plan",
        subtitle: "Ideal for brands needing ongoing SaaS support",
        monthlyPrice: 4500,
        monthlyPriceLabel: "$4,500",
        currency: "$",
        period: "month",
        features: [
          "Ongoing development support",
          "Feature updates & maintenance",
          "Clear timelines & milestones",
          "Flexible monthly scope",
          "Weekly updates from the project manager",
          "Fast turnaround on key tasks",
        ],
        cta: "Start your retainer",
      },
    ],
    ProjectBased: {
      Starter: [
        {
          id: 1,
          slug: "saas-starter",
          name: "Starter",
          subtitle: "For scaling applications",
          price: 8999,
          currency: "$",
          period: "project",
          priceLabel: "$8,999",
          tier: "starter",
          features: [
            "Basic features & integrations",
            "Payment gateway integration",
            "Admin dashboard",
            "Cloud hosting setup",
            "Performance optimization",
          ],
          cta: "Start Growth App",
          timeline: "10-12 weeks",
        },
      ],
      Accelerate: [
        {
          id: 2,
          slug: "saas-accelerate",
          name: "Accelerate",
          subtitle: "Advanced SaaS platform",
          price: 15999,
          currency: "$",
          period: "project",
          priceLabel: "$15,999",
          tier: "accelerate",
          features: [
            "Advanced features & integrations",
            "Payment gateway integration",
            "Custom dashboards & analytics",
            "Cloud hosting setup",
            "Performance optimization",
            "API integrations",
          ],
          cta: "Start Accelerate Plan",
          timeline: "14-16 weeks",
        },
      ],
      Scale: [
        {
          id: 3,
          slug: "saas-scale",
          name: "Scale",
          subtitle: "Custom enterprise solutions",
          price: 24999,
          currency: "$",
          period: "project",
          priceLabel: "$24,999+",
          tier: "scale",
          features: [
            "Complex architecture",
            "Microservices implementation",
            "Advanced security features",
            "Custom dashboards & analytics",
            "Dedicated development team",
            "Ongoing support",
          ],
          cta: "Request Enterprise Quote",
          timeline: "18-24 weeks",
        },
      ],
    },
  },

  "mobile-app-development": {
    serviceTitle: "Mobile App Development",
    serviceDescription:
      "Create high-performance mobile apps that engage users and grow your business on iOS and Android.",
    Monthly: [
      {
        id: 1,
        slug: "mobile-monthly-starter",
        name: "Mobile App Support Plan",
        subtitle: "Ideal for brands needing ongoing app support",
        monthlyPrice: 3000,
        monthlyPriceLabel: "$3,000",
        currency: "$",
        period: "month",
        features: [
          "Ongoing app support",
          "Feature updates & maintenance",
          "Clear timelines & milestones",
          "Flexible monthly scope",
          "Weekly updates from the project manager",
          "Fast turnaround on key tasks",
        ],
        cta: "Start your retainer",
      },
    ],
    ProjectBased: {
      Starter: [
        {
          id: 1,
          slug: "mobile-starter",
          name: "Starter",
          subtitle: "Launch your mobile app",
          price: 5999,
          currency: "$",
          period: "project",
          priceLabel: "$5,999",
          tier: "starter",
          features: [
            "iOS & Android app development",
            "Basic features & integrations",
            "App store submission",
            "Basic UI/UX design",
            "3 months support",
          ],
          cta: "Start Mobile App",
          timeline: "8-10 weeks",
        },
      ],
      Accelerate: [
        {
          id: 2,
          slug: "mobile-accelerate",
          name: "Accelerate",
          subtitle: "Advanced mobile solutions",
          price: 12999,
          currency: "$",
          period: "project",
          priceLabel: "$12,999",
          tier: "accelerate",
          features: [
            "Native iOS & Android apps",
            "Advanced features & integrations",
            "Cross-platform development",
            "Custom UI/UX design",
            "App store optimization",
            "6 months support",
          ],
          cta: "Start Accelerate Plan",
          timeline: "12-14 weeks",
        },
      ],
      Scale: [
        {
          id: 3,
          slug: "mobile-scale",
          name: "Scale",
          subtitle: "Enterprise mobile solutions",
          price: 19999,
          currency: "$",
          period: "project",
          priceLabel: "$19,999+",
          tier: "scale",
          features: [
            "Native iOS & Android apps",
            "Advanced features & integrations",
            "Cross-platform development",
            "Custom UI/UX design",
            "Performance & security optimization",
            "12 months support & maintenance",
          ],
          cta: "Request Custom Quote",
          timeline: "16-20 weeks",
        },
      ],
    },
  },
};

export default pricingPlans;
