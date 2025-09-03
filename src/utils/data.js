import externsclub from "../assets/images/externsclub.png";
import rentomojo from "../assets/images/rentomojo.png";
import celebal from "../assets/images/celebal.png";

const projects = [
  {
    id: 1,
    title: "Notes Application",
    name: "Jot It",
    description: [
      "Developed a responsive UI with core features including CRUD operations, pin-to-top, shareable links, and toast notifications.",
      "Configured secure authentication using JWT (Access/Refresh tokens), cookies, and protected/public routing.",
      "Implemented API abstraction with the repository pattern and state management using React Context and Local Storage.",
      "Optimized backend workflows through MongoDB pipelines and centralized async/error handling, ensuring reliable data operations.",
    ],
    skills: ["React", "Node.js", "Express.js", "MongoDB", "CSS3"],
    webapp_live_link: "https://jot-it-app.netlify.app",
    github_repo_link: "https://github.com/suryanalam/notes_app",
  },
  {
    id: 2,
    title: "Food Ordering Application",
    name: "Hunger Burners",
    description: [
      "Integrated a mock RESTful API, to fetch product catalog covering 2 different categories (veg and Non-veg).",
      "Utilized Localstorage for rersistent cart functionality to retain the cart data across sessions/refresh.",
      "Implemented Dynamic billing system to update total pricing based on items and quantities in the cart.",
      "Configured secure authentication using JWT access tokens, ensuring data protection and access control.",
    ],
    skills: ["React", "CSS3"],
    webapp_live_link: "https://hunger-burners.netlify.app",
    github_repo_link: "https://github.com/suryanalam/restaurant.git",
  },
  {
    id: 3,
    title: "Job Portal Application",
    name: "Job Hunt",
    description: [
      "Added 150+ jobs across 10+ categories and 50+ companies with advanced filters, bookmark, and search fucntionalities.",
      "Integrated robust subscription managment using Razorpay/Stripe to purchase and track subscriptions by recruiters and candidates.",
      "Enabled full control over content throughout the website for admins, ensuring better flexibility.",
      "Designed fully responsive layouts across different devices and secure authentication for seamless user experience.",
    ],
    skills: ["Laravel", "MySQL", "Bootstrap"],
    github_repo_link: "https://github.com/suryanalam/job_application_portal",
  },
  {
    id: 4,
    title: "DNS Tracking Application",
    name: "Track your Domain",
    description: [
      "Integrated real-time data fetching from AWS Route53, ensuring up-to-date display of DNS records within the dashboard.",
      "Enabled CRUD operations on HostedZones and DNS Records, allowing users to manage their Route53 configurations directly from the dashboard.",
      "Implemented secure authentication using JWT access tokens and protected/public routing.",
      "Designed a initiative and minimalist user interfcae using material UI for better user experience.",
    ],
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "CSS3",
      "Material UI",
      "AWS Route53",
    ],
    github_repo_link: "https://github.com/suryanalam/dnsapp",
  },
];

const experiences = [
  {
    id: 1,
    logo: rentomojo,
    name: "Rentomojo - Bengaluru, Karnataka (Remote)",
    role: "SDE1- Forntend",
    duration: "May'24 - Present",
    description: [
      "Developed the massage chair module, unlocking a new revenu stream and serving 50+ MAUs.",
      "Contributed to the customer reviews feature, boosting user engagement by 20%.",
      "Ensured code quality by building scalable, modular, and reusable components aligned with best practices.",
      "Translated Figma designs into pixel-perfect, responsive UIs, ensuring consistency across web and mobile platforms.",
      "Collaborated with 15+ team members across 4 cross-functional teams to deliver production-ready features within deadlines.",
    ],
  },
  {
    id: 2,
    logo: externsclub,
    name: "Externsclub - Bengaluru, Karnataka (On-site)",
    role: "Full Stack Developer Intern",
    duration: "Sept’23 - May’24",
    description: [
      "Engineered a CRM application to manage sales and employee data, improving organizational efficiency by 40%.",
      "Integrated Cashfree, Google Sheets, Recharts, and CSV import-export features into the CRM, increasing adoption among 25+ users.",
      "Built scalable frontend architecture using React with efficient state management and seamless integration with 15+ RESTful APIs.",
      "Redesigned the User Interface of the LMS portal powered by Edmingle, improving user experience by 30%.",
    ],
  },
  {
    id: 3,
    logo: celebal,
    name: "Celebal Technologies - Jaipur, Rajasthan (Remote)",
    role: "ReactJS Intern",
    duration: "May’23 - July’23",
    description: [
      "Engaged in industry mentor–led sessions, enhancing technical and professional skills.",
      "Built a food delivery app with mock API integration and Local Storage.",
      "Recognized with a Golden Badge for exceptional performance during the internship.",
    ],
  },
];

export { projects, experiences };
