import {
  FaBoxes,
  FaChartBar,
  FaChartLine,
  FaCloud,
  FaCloudUploadAlt,
  FaCodeBranch,
  FaCreditCard,
  FaGlobe,
  FaLayerGroup,
  FaMobileAlt,
  FaPlug,
  FaRocket,
  FaServer,
  FaShieldAlt,
  FaShoppingCart,
  FaStore,
  FaTachometerAlt,
  FaTruck,
  FaUsers,
} from "react-icons/fa";
import {
  FaCode,
  FaFile,
  FaGaugeHigh,
  FaMobileScreen,
  FaPaintbrush,
  FaWordpress,
} from "react-icons/fa6";

export const valueProposition = {
  "ui-ux-design": [
    {
      heading: "Craft Human-Centered UI/UX That Converts",
      desc: "We design interfaces that balance aesthetics, usability, and business goals. From research to visual polish, we create digital experiences that delight users and drive measurable results.",
      buttonText: "Request a Free UI/UX Consultation",
      cards: [
        {
          title: "Website Design",
          desc: "Attract and convert visitors with modern, high-performing websites.",
          icon: <FaGlobe className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "Mobile App Design",
          desc: "Create smooth, user-friendly interfaces that boost engagement and retention.",
          icon: <FaMobileAlt className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "Landing Page Design",
          desc: "Capture leads and drive conversions with high-impact landing pages.",
          icon: <FaRocket className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "Wireframe & Prototyping",
          desc: "Visualize your product early with structured wireframes and interactive prototypes.",
          icon: <FaLayerGroup className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "E-commerce Design",
          desc: "Design seamless shopping experiences that encourage browsing and purchases.",
          icon: <FaShoppingCart className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "SaaS & Dashboard Design",
          desc: "Simplify complex workflows with clean, data-driven dashboards and interfaces.",
          icon: <FaChartLine className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
      ],
    },
  ],

  "ecommerce-development": [
    {
      heading: "Conversion-Focused E‑commerce That Scales",
      desc: "We craft blazing‑fast stores with optimized UX, flexible product management, secure checkout, and integrations that streamline your operations and increase average order value.",
      buttonText: "See E‑commerce Projects",
      cards: [
        {
          title: "Custom E-commerce Website",
          desc: "Create a store tailored to your brand and business goals.",
          icon: <FaStore className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "WooCommerce Development",
          desc: "Set up and optimize stores for smooth operations and better sales.",
          icon: <FaWordpress className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "Product & Inventory Management",
          desc: "Easily manage products, stock, and categories with an intuitive backend.",
          icon: <FaBoxes className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "Payment Gateway Integration",
          desc: "Offer seamless checkout with secure and trusted payment options.",
          icon: <FaCreditCard className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "Order & Shipping Automation",
          desc: "Save time by automating order confirmation, tracking, and shipping tasks.",
          icon: <FaTruck className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "Performance Optimization",
          desc: "Maximize sales with fast, SEO-friendly, and conversion-focused stores.",
          icon: <FaTachometerAlt className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
      ],
    },
  ],

  "website-development": [
    {
      heading: "Responsive, SEO-Friendly Websites Built to Scale",
      desc: "We build websites that perform beautifully — optimized for speed, SEO, and conversions using modern frameworks like React and Next.js.",
      buttonText: "View Website Projects",
      cards: [
        {
          title: "Custom Website Development",
          desc: "Get a fast, fully responsive website tailored to your business needs.",
          icon: <FaCode className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "WordPress Development",
          desc: "Manage your website easily with clean, customizable WordPress solutions.",
          icon: <FaWordpress className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "Website Redesign",
          desc: "Update outdated websites to modern designs that improve conversions.",
          icon: <FaPaintbrush className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "Landing Page Development",
          desc: "Boost leads with conversion-focused landing pages for campaigns and promotions.",
          icon: <FaFile className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "Responsive Development",
          desc: "Ensure your site works flawlessly on all devices, from mobile to desktop.",
          icon: <FaMobileScreen className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "Performance Optimization",
          desc: "Improve loading speed and smoothness to keep visitors engaged.",
          icon: <FaGaugeHigh className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
      ],
    },
  ],
  "saas-dashboard-development": [
    {
      heading: "Powerful SaaS Platforms & Data-Driven Dashboards",
      desc: "We build scalable SaaS solutions and intuitive dashboards that transform complex data into actionable insights and streamline business operations.",
      buttonText: "View SaaS Projects",
      cards: [
        {
          title: "SaaS Platform Development",
          desc: "Save time and boost efficiency with scalable, subscription-based platforms.",
          icon: <FaCloud className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "Custom Dashboard Development",
          desc: "Visualize your data clearly for faster, smarter decision-making.",
          icon: <FaChartBar className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "Analytics & Reporting",
          desc: "Track key metrics and generate actionable insights with ease.",
          icon: <FaChartLine className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "User Management & Access Control",
          desc: "Securely manage users, roles, and permissions in one place.",
          icon: <FaUsers className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "Real-Time Data & API Integrations",
          desc: "Connect live data sources and third-party tools for seamless automation.",
          icon: <FaPlug className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
      ],
    },
  ],
  "mobile-app-development": [
    {
      heading: "High-Performance Mobile Apps for iOS & Android",
      desc: "We create native and cross-platform mobile applications that deliver exceptional user experiences, drive engagement, and help your business grow.",
      buttonText: "View Mobile App Projects",
      cards: [
        {
          title: "iOS & Android App Development",
          desc: "Reach more users with fast, secure apps for both platforms.",
          icon: <FaMobileAlt className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "Cross-Platform Development",
          desc: "Save time and cost by deploying apps that work on multiple devices.",
          icon: <FaCodeBranch className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "User-Centered App Experience",
          desc: "Design smooth, intuitive app flows that keep users engaged.",
          icon: <FaMobileScreen className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "API & Third-Party Integrations",
          desc: "Connect your app with external services, databases, and payment systems.",
          icon: <FaServer className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "Performance & Security Optimization",
          desc: "Ensure apps run fast, stay secure, and remain stable under heavy usage.",
          icon: <FaShieldAlt className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
        {
          title: "Deployment & Support",
          desc: "We handle app store submission, optimization, and ongoing maintenance.",
          icon: <FaCloudUploadAlt className="text-2xl text-primary" />,
          iconPath: "/assets/img/icon/card.svg",
        },
      ],
    },
  ],
};
