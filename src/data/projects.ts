import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "e-commerce website",
    title: "E-commerce website",
    description:
      "An e-commerce web application developed using React.js, Material UI, Redux, and Stripe.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Devkaushal989/Sublimation-Website",
   
    tags: ["MongoDB", "Express", "React", "Nodejs"],
  },
  {
    id: "quiz-management",
    title: "Quiz-Management System",
    description:
      "I develop interactive quiz management systems for students and institutions  ",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Devkaushal989/Quiz-Management-System-QMS-",
    tags: ["React.js", "PHP", "Material UI", "Stripe"],
  },
  {
    id: "company website",
    title: "Web Development Project",
    description:
      "Developed a RESTful e-commerce backend using Node.js, Express.js, MongoDB, and Stripe for payment integration",
    icon: "/skills/javascript.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Devkaushal989/website_development_project",
   
    tags: ["Javascript", "HTML", "CSS", "Tailwid"],
  },
  {
    id: "social-media-api-nodejs",
    title: "Social Media API",
    description:
      "A RESTful API developed using Node.js, Express.js, and MongoDB to integrate backend and frontend with ease.",
    icon: "/skills/nestjs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Devkaushal989/social_media_api",
    tags: ["Node.js", "Express.js", "MongoDB", "WebSocket"],
  },
   {
    id: "movie-site",
    title: "Movie Site",
    description:
      "A video calling mobile application developed using Flutter and Agora SDK that allows users to call each other face to face.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Devkaushal989/Movie_site-react-",
    
    tags: ["React", "Javascript", "HTML", "Tailwind"],
  },
  {
    id: "e-commerce-api-nodejs",
    title: "E-commerce API",
    description:
      "A RESTful API developed using Node.js, Express.js, MongoDB, and Stripe to integrate e-commerce backend.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Devkaushal989/e-commerce-api",
    tags: ["Node.js", "Express.js", "MongoDB", "Stripe"],
  }, 
  {
    id: "bus-reservation-system-management",
    title: "Bus Reservation System Management",
    description:
      "This repository contains the Bus Reservation System Management project developed using Object Oriented Programming (OOP) and File Handling concepts in C++.",
    icon: "/skills/cpp.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Devkaushal989/bus-reservation-system",
    tags: ["C++", "OOP", "File Handling"],
  },
];
export default projects;
