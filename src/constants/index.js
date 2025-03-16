import {
  mobile,
  backend,
  
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
 
  retool,
  PostgreSQL,
  hwood,
 
  RealEstate,
  putuk,
  twitter,
  brainwave,
  pingpanda,
  movie,

 
  
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: " Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Retool Developer",
    icon: retool,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
 
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "retool",
      icon: retool,
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQL,
  }
 
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Hwood Group",
    icon: hwood,
    iconBg: "#383E56",
    date: "August 2024 - March 2025",
    points: [
      "Building dynamic and interactive user interfaces using React.js and modern frontend technologies.",
      "Optimizing performance through code-splitting, lazy loading, and efficient state management with Redux or Context API.",
      "Ensuring seamless user experiences with responsive design and cross-browser compatibility.",
      "Writing clean, modular, and reusable components while adhering to best coding practices.",
    ],
  },
  {
    title: "Next.js Developer",
    company_name: "Hwood Group",
    icon: hwood,
    iconBg: "#E6DEDD",
    date: "August 2024 - March 2025",
    points: [
      "Developing high-performance server-rendered applications with Next.js and React.",
      "Implementing static site generation (SSG) and server-side rendering (SSR) for improved SEO and performance.",
      "Integrating APIs and databases to build dynamic web applications with seamless user experiences.",
      "Enhancing application security and scalability through Next.js middleware and edge functions.",
    ],
  },
  {
    title: "SQL Developer",
    company_name: "Hwood Group",
    icon: hwood,
    iconBg: "#383E56",
    date: "August 2024 - March 2025",
    points: [
      "Designing, optimizing, and maintaining SQL databases for web applications.",
      "Writing complex SQL queries, stored procedures, and triggers to handle large datasets efficiently.",
      "Ensuring database integrity and performance through indexing, normalization, and query optimization.",
      "Collaborating with backend developers to integrate databases with APIs and microservices.",
    ],
  },
  {
    title: "Retool Developer",
    company_name: "Hwood Group",
    icon: hwood,
    iconBg: "#E6DEDD",
    date: "August 2024 - March 2025",
    points: [
      "Building internal tools and dashboards using Retool to streamline business workflows.",
      "Connecting and integrating Retool with PostgreSQL, Airtable, and other data sources.",
      "Implementing role-based access control and authentication within Retool applications.",
      "Optimizing queries and components for efficient data retrieval and user interactions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Youssef proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Youssef does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Real Estate",
    description:
     "A full-featured real estate platform built with Next.js and TypeScript, enabling users to browse, list, and manage properties. The platform supports user authentication, property details with images, locations, and features. Users can subscribe to different plans, manage their listings, and contact property owners directly. Styled with Material-UI, it provides a seamless and professional experience.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "postgrs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:RealEstate,
    source_code_link: "https://github.com/Youssef-Atef257/RealEstate_clone_NextJS",
  },
  {
    name: "Putuk",
    description:
      "Putuk is a modern outdoor adventure platform designed to help explorers navigate remote camping and hiking locations with ease. Built with React, it features offline maps, real-time adventure tracking, and seamless trip planning. With Hilink, users can discover new hiking trails, receive location-based insights, and stay connected even in areas with no internet access. The intuitive UI ensures a smooth experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: putuk,
    source_code_link: "https://github.com/Youssef-Atef257/Travel-website-reactjs",
  },
  {
    name: "Pigpanda",
    description:
      "PingPanda is a real-time SaaS monitoring platform built with Next.js, providing instant event notifications directly to Discord. It enables businesses to track critical events such as sales, new user sign-ups, and revenue milestones with seamless integration. Users can set up alerts, track events, and analyze insights effortlessly. With a clean and modern UI, PingPanda ensures intuitive monitoring.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pingpanda,
    source_code_link: "https://github.com/Youssef-Atef257/Event_Monitoring_SaaS",
  },

  {
    name: "Twitter Clone",
    description:
   "This simple Next.js Twitter clone replicates core Twitter features, allowing users to post tweets, like them, and browse recent activity. It includes a sleek sidebar navigation with links to Home, Profile, and Logout options. The homepage features a tweet input box for posting updates, with a Tweet button for submission. Users can switch between Recent and Following tabs to filter their feed. Each tweet displays the user's profile info.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: twitter,
    source_code_link: "https://github.com/Youssef-Atef257/NextJs-twitter-Clone",
  },

  {
    name: "BrainWave",
    description:
"Brainwave is an AI-powered chat assistant built with React, offering seamless collaboration and smart automation for creators. With advanced AI models, Brainwave enables users to generate content, edit media, and interact naturally with an intuitive chatbot. Designed with a futuristic dark UI, the platform supports AI-driven workflows, voice recognition, and API integrations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
     
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: brainwave,
    source_code_link: "https://github.com/Youssef-Atef257/BrainWave-ReactJs",
  },

  {
    name: "Movies",
    description:
     "This React movie app lets users search for films and manage their watchlist. Each movie displays its title, release year, and poster, with buttons to add it to a Watchlist or mark it as Watched. The clean UI makes navigation easy, with quick access to different movie categories. Built with React, it updates dynamically and can be expanded with more features like persistent storage or API integration for richer movie details.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/Youssef-Atef257/Movie-App-ReactJS",
  },
];

export { services, technologies, experiences, testimonials, projects };
