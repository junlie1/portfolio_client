interface Link {
  label?: string;
  demo?: string;
  github?: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle?: string;
  heroImage: string;
  techStack: string[];
  overview: string;
  role: string;
  period: string;
  highlights: string[];
  links?: Link[];
  images?: string[];
}

export const projectsData: ProjectDetail[] = [
  {
    slug: "multi-store-app",
    title: "Multi Store App",
    subtitle:
      "Cross-platform e-commerce system with real-time inventory and secure payments.",
    heroImage: "/images/multi/admin/home.png",
    techStack: ["Node.js", "Flutter", "MongoDB", "Cloudinary", "Stripe"],
    overview:
      "A multi-store e-commerce application supporting real-time inventory tracking, cross-platform mobile apps, and secure payment processing using Stripe.",
    role: "Fullstack Developer",
    period: "09/2024 - 12/2024",
    highlights: [
      "Built a multi-store e-commerce system with real-time inventory management and Stripe-based payment integration.",
      "Led a small development team, managing schedules and coordinating task assignments.",
      "Developed cross-platform mobile features using Flutter, applying lifecycle concepts similar to React Native.",
      "Implemented backend services with Node.js and MongoDB, ensuring scalable data structures.",
      "Integrated Cloudinary for image and asset management, improving media handling performance.",
    ],

    links: [
      {
        label: "Backend Nodejs",
        github: "https://github.com/junlie1/Nhom3_DACN_backend_CNTT_VAA-FITVAA",
      },
      {
        label: "Admin Web Flutter",
        github:
          "https://github.com/junlie1/Nhom3_DACN_AdminWeb_CNTT_VAA-FITVAA",
      },
      {
        label: "Vendor App Flutter",
        github:
          "https://github.com/junlie1/Nhom3_DACN_VendorApp_CNTT_VAA-FITVAA",
      },
      {
        label: "Customer App Flutter",
        github: "https://github.com/junlie1/Nhom3_DACN_App_CNTT_VAA-FITVAA",
      },
    ],

    images: [
      //Customer images
      "/images/multi/customer/home.png",
      "/images/multi/customer/product_detail.png",
      "/images/multi/customer/add_to_cart.png",
      "/images/multi/customer/address.png",
      "/images/multi/customer/cart.png",
      "/images/multi/customer/category.png",
      "/images/multi/customer/logout.png",
      "/images/multi/customer/order_history.png",
      "/images/multi/customer/order_status.png",
      "/images/multi/customer/product_detail.png",
      "/images/multi/customer/product_review.png",
      "/images/multi/customer/profile.png",
      "/images/multi/customer/search.png",
      "/images/multi/customer/signin.png",
      "/images/multi/customer/stripe_payment.png",
      "/images/multi/customer/sub_category.png",

      //Vendor images
      "/images/multi/vendor/home.png",
      "/images/multi/vendor/add_product.png",
      "/images/multi/vendor/dashboard.png",
      "/images/multi/vendor/order_detail.png",
      "/images/multi/vendor/process.png",
      "/images/multi/vendor/cancle.png",
      "/images/multi/vendor/process.png",
      "/images/multi/vendor/process.png",
    ],
  },
  {
    slug: "dxdlabs-backend-api-system",
    title: "DxDLabs Backend API System (Internal Project)",
    subtitle: "TypeScript backend powering the digital contract workflow.",
    heroImage: "/images/dxdlab/home.png",
    techStack: ["TypeScript", "Node.js", "REST API", "Clean Architecture"],
    overview:
      "Backend service developed at DxDLabs to support an end-to-end digital contract ecosystem — including authentication, role management, wallet operations, contract signing workflow, secure storage, and activity tracking.",
    role: "Backend Developer (TypeScript)",
    period: "09/2025 - 12/2025",
    highlights: [
      "Implemented over 25+ REST API endpoints using TypeScript and Node.js to handle authentication, contract signing, profile management, and administrator functions.",
      "Designed secure authentication flows including Sign In, Sign Up, Reset Password, and 2FA Device Setup.",
      "Developed document-related APIs: Upload to Drive, Delete from Drive, Display Drive Content, and Priority Storage handling.",
      "Built user-facing contract APIs such as Display Contract List, Recent Contracts, Contract Details, Sign History, and Signature Chart statistics.",
      "Created wallet management and transaction APIs, including displaying balance, transaction history, and notification integration.",
      "Implemented admin-level features: Role Management API (assign roles, permissions) and Administrator API for system-level supervision.",
      "Integrated remaining-signature tracking, profile update, email update, and secure data validation middleware.",
      "Applied clean architecture principles—separating controllers, services, repositories, DTOs, and validation layers.",
      "Collaborated closely with PM, BA, and frontend teams to refine API contracts and support rapid iteration.",
    ],
    links: [],
    images: [],
  },

  {
    slug: "fullstack-developer-intern",
    title: "Fullstack Developer Intern (Internal Project)",
    subtitle: "Internal tools & dashboards for the company.",
    heroImage: "/images/titan/home.png",
    techStack: ["Next.js", "FastAPI", "MySQL"],
    overview:
      "Worked as a fullstack developer intern, building internal dashboards, reusable components, and backend services using Next.js, FastAPI, and MySQL.",
    role: "Fullstack Intern",
    period: "05/2025 - 08/2025",
    highlights: [
      "Built reusable UI components and structured layouts following component-based architecture.",
      "Designed and integrated REST API endpoints to support core user interactions and data operations.",
      "Modeled relational data structures and optimized SQL queries for efficient and consistent data access.",
      "Implemented authentication flows, validation, pagination, and routing logic across the system.",
      "Applied clean coding principles, modular design, and separation of concerns to maintain code quality.",
      "Gained hands-on experience with CI/CD workflows, Dockerized deployments, and microservices-aligned architecture.",
      "Collaborated with PM, BA, designers, and developers in Agile sprints—participating in standups and code reviews.",
    ],
    links: [],
    images: [],
  },
  {
    slug: "bus-ticket-booking-system",
    title: "Bus Ticket Booking System",
    subtitle: "Online ticket booking platform with chatbot support.",
    heroImage: "/images/bus/home.png",
    techStack: [
      "Flutter",
      "React.js",
      "Node.js",
      "Python (Django)",
      "Firebase Functions",
      "Firebase Storage",
      "Cloudinary",
    ],
    overview:
      "A bus ticket booking platform with mobile and web interfaces, supporting route search, schedules, seat selection, and chatbot-based assistance.",
    role: "Fullstack Developer",
    period: "01/2025 - 04/2025",
    highlights: [
      "Prototyped route, schedule, and seat-selection screens with responsive layouts.",
      "Implemented paginated, lazy-loaded lists with proper loading, empty, and error states.",
      "Built Python scripts to process chatbot training data and support AI model integration.",
      "Applied Firebase Functions to automate backend tasks and support chatbot workflows.",
      "Integrated Firebase Storage and Cloudinary to handle media and asset management.",
    ],
    links: [
      {
        label: "Frontend ReactJs",
        github: "https://github.com/junlie1/customer_tttn",
      },
      {
        label: "Backend NodeJs",
        github: "https://github.com/junlie1/backend_tttn",
      },
    ],
    images: [],
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectsData.find((p) => p.slug === slug);
}
