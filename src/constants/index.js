import { vzen, accenture, wipro, Hexaware, Capgemini } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Full Stack Lead Developer",
        company_name: "Capgemini - RBC",
        icon: Capgemini,
        iconBg: "#accbe1",
        date: "Nov 2022 – Present",
        points: [
            "Led a team of 5 developers in the development of the front-end of a credit application for small businesses, utilizing ReactJS and Node.js.",
            "Efficiently managed global state using React Context API, eliminating prop drilling and reducing re-renders.",
            "Created reusable HOCs, improving code maintainability and reusability across multiple projects.",
            "Utilized advanced query optimization techniques to reduce server load by 40% and improve query speeds by up to 25%.",
            "Reduced unnecessary re-renders by 30% through intelligent use of React’s shouldComponentUpdate and memoization techniques.",
        ],
    },
    {
        title: "Tech Lead / Full Stack Developer",
        company_name: "Wipro Pvt Ltd – Citi Bank",
        icon: wipro,
        iconBg: "#fbc3bc",
        date: "June 2021 – Nov 2022",
        points: [
            "Achieved architectural consistency while leading development and quality initiatives such as maintainable test-driven development, code good practices, and holding code and design reviews.",
            "Played a major role in developing new CITI bank web and mobile application with various features.",
            "Developed 10+ custom React Hooks to abstract complex logic, enhancing code reusability.",
            "Implemented Redis caching layer, decreasing database read times by 60%.",
            "Developed AODA-compliant banking and healthcare management applications using TypeScript, React, and .NET C#.",
        ],
    },
    {
        title: "Senior Software Engineer",
        company_name: "Hexaware Technologies Ltd",
        icon: Hexaware,
        iconBg: "#b7e4c7",
        date: "February 2019 – June 2021",
        points: [
            "Created an enterprise application using Angular, ReactJS, and Node JS for a logistics company, enhancing business communications and transparency in transactions.",
            "Created a library of 50+ reusable components, accelerating development cycles by 40%.",
            "Utilized MongoDB’s geo-spatial capabilities for location-based services, enhancing user engagement by 20%.",
            "Utilized Jest, Selenium, and Karma to establish automated testing frameworks, achieving a 40% reduction in regression bugs.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Vzen Innovation Pvt Ltd",
        icon: vzen,
        iconBg: "#a2d2ff",
        date: "January 2018 – February 2019",
        points: [
            "Played a crucial part in tracking development activities and offering technical/process level assistance.",
            "Implemented effective indexing strategies that reduced disk I/O by 35% and improved query efficiency.",
            "Facilitated user authentication through Google, Facebook, Microsoft, and JSON web tokens (JWT).",
            "Integrated Firestore into applications for real-time data storage and synchronization, optimizing database schema for efficient reads/writes.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Accenture Pvt Ltd",
        icon: accenture,
        iconBg: "#accbe1",
        date: "June 2016 – September 2017",
        points: [
            "Built a responsive website using Agile methodologies, simplified complex concepts into user-friendly experiences.",
            "Developed, implemented, and maintained java-based components and interfaces for an IVR-based project.",
            "Used RESTful web services calls for POST, PUT, DELETE, and GET methods.",
            "Worked on cross-browser compatibility and fixed the bugs for several browsers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/vkrish1707',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/vamsi-krishna-mylavarapu/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/vkrish1707',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/vkrish1707',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/vkrish1707',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/vkrish1707',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/vkrish1707',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/vkrish1707',
    }
];