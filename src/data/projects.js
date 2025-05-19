// src/data/data.js

import Arcsailer from '../assets/arcsailer-screenshot.png';
import Reenergi from '..//assets/reenergi-landingpage-screenshot.png';
import MarketSqureInsights from '../assets/market-squre-insights-screenshot.png';
import RectProjectOne from '../assets/react-project-one.png';
import RectProjectTwo from '../assets/react-project-two.png';
import RectProjectThree from '../assets/react-project-three.png';
import RectProjectFour from '../assets/react-project-four.png';
import RectProjectFive from '../assets/react-project-five-myportfolio.png';


const projects = [
  {
    id: 1,
    slug: "arcsailer",
    title: "ArcSailer",
    image: Arcsailer,
    alt: "ArcSailer Preview",
    category: "E-commerce",
    description: "Independently developed a complete eCommerce clothing website on Shopify using the Dawn theme. Customized pages from scratch to match client requirements, ensuring a modern and user-friendly shopping experience. Integrated Razorpay as the payment gateway for secure transactions and successfully linked a Hostinger domain to the Shopify store. This end-to-end project was managed and executed entirely by me as a freelance assignment.",
    liveLink: "https://www.arcsailer.com",

    // 👇 Key Details
    platform: "Shopify",
    client: "Arcsailer Pvt. Ltd.",
    duration: "20 Jan, 2025 - 15 April, 2025",
    techStack: ["Shopify", "Razorpay", "Hostinger"],
    role: "Web Developer",
    teamSize: "Indivisual",
  },
  {
    id: 2,
    slug: "reenergi",
    title: "Re-Energi",
    image: Reenergi,
    alt: "Re-Energi Preview",
    category: "E-commerce",
    description: "Converted an Adobe XD landing page design into a fully dynamic WordPress page for Reenergi's Hot Water Systems landing page.",
    liveLink: "https://reenergi.com",

    // 👇 Key Details
    platform: "WordPress",
    client: "Re-Energi Pvt. Ltd.",
    duration: "20 Nov, 2024 - 22 Dec, 2024",
    techStack: ["WordPress", "ACF", "Contact Form 7", "Owl Carosuel"],
    role: "Web Developer",
    teamSize: "Indivisual",
  },
  {
    id: 3,
    slug: "marketsqureinsights",
    title: "Market Square Insights",
    image: MarketSqureInsights,
    alt: "Market Square Insights Preview",
    category: "Market Research",
    description: "Developed a professional website for Market Square Insights, a market research and consulting firm, to showcase services and expertise.",
    liveLink: "https://yourportfolio.com/project-x",

    // 👇 Key Details
    platform: "WordPress",
    client: "Market Square Insights Pvt. Ltd.",
    duration: "20 Jan, 2025",
    techStack: ["WordPress", "PHP", "HTML", "CSS", "Javascript", "Divi Theme", "ACF"],
    role: "Frontend Developer",
    teamSize: 3,
  },
  {
    id: 4,
    slug: "react-project-one",
    title: "React Project One",
    image: RectProjectOne,
    alt: "React Project One",
    category: "Project",
    description: "This is a React.js learning project",
    liveLink: "https://uttamkumar-gh.github.io/react-portfolio/",

    // 👇 Key Details
    platform: "React",
    client: "Self Learning",
    duration: "1 Day",
    techStack: ["React.js", "CSS"],
    role: "Learning",
    teamSize: "Self",
  },
  {
    id: 5,
    slug: "react-project-two",
    title: "React Project Two",
    image: RectProjectTwo,
    alt: "React Project Two",
    category: "Project",
    description: "This is a React.js learning project",
    liveLink: "https://uttamkumar-gh.github.io/web-developer-portfolio/",

    // 👇 Key Details
    platform: "React",
    client: "Self Learning",
    duration: "1 Day",
    techStack: ["React.js", "CSS"],
    role: "Learning",
    teamSize: "Self",
  },
  {
    id: 6,
    slug: "react-project-three",
    title: "React Project Three",
    image: RectProjectThree,
    alt: "React Project Three",
    category: "Project",
    description: "This is a React.js learning project",
    liveLink: "https://uttamkumar-gh.github.io/business-landingpage/",

    // 👇 Key Details
    platform: "React",
    client: "Self Learning",
    duration: "1 Day",
    techStack: ["React.js", "CSS"],
    role: "Learning",
    teamSize: "Self",
  },
  {
    id: 7,
    slug: "react-project-four",
    title: "React Project Four",
    image: RectProjectFour,
    alt: "React Project Four",
    category: "Project",
    description: "This is a React.js learning project",
    liveLink: "https://uttamkumar-gh.github.io/business-landingpage/",

    // 👇 Key Details
    platform: "React",
    client: "Self Learning",
    duration: "1 Day",
    techStack: ["React.js", "CSS"],
    role: "Learning",
    teamSize: "Self",
  },
  {
    id: 8,
    slug: "react-project-five",
    title: "React Project Five",
    image: RectProjectFive,
    alt: "React Project Five",
    category: "Project",
    description: "This is a React.js learning project",
    liveLink: "https://uttamkumar-gh.github.io/uttam-kumar-portfolio",

    // 👇 Key Details
    platform: "React",
    client: "Self Learning",
    duration: "1 Day",
    techStack: ["React.js", "CSS"],
    role: "Learning",
    teamSize: "Self",
  },
  
];

export default projects;
