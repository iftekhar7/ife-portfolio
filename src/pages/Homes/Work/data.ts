import type { WorkExperience } from "../../../utils/types";

export const data:WorkExperience[] = [
  {
    id: "3",
    year: "July 2022 – Present",
    role: "Software Engineer",
    company: "83INCS PRIVATE LIMITED",
    description: [
      {
        paragraph: `Worked as a UX/UI Designer and Front-End Developer at Iot83, responsible for designing and developing web
templates, creating reusable UI components with React, integrating APIs, and building data visualizations using
amCharts.`,
      },
      { paragraph: `Improved application performance by 30% through code-splitting and lazy loading.` },
      { paragraph: `Developed scalable React.js applications utilizing Redux and Context API for efficient state management.` },
      { paragraph: `Converted Figma wireframes into production-ready React components using JavaScript best practices.` },
      { paragraph: `Identified user interaction patterns and built highly responsive UI components using core React concepts.` },
      { paragraph: `Actively participated in Agile processes, code reviews, and task tracking using JIRA and Git-based workflows.` },
      { paragraph: `Integrated SonarQube for code quality analysis and maintained 95%+ test coverage with Jest/RTL.` },
    ],
    gradientClass: "blue-gradient",
  },
  {
    id: "2",
    year: "2021 - 2022",
    role: "Internship and Certifications | Full Stack Web Development Bootcamp",
    company: "Newton School",
    description: [
      {
        paragraph:
          "Technical Stack learned: Java, HTML, CSS, JavaScript, React Js, Redux, Router, MongoDB and Bootstrap.",
      },
      {
        paragraph:
          "Participated in various Coding contest organized by the platform.",
      },
      {
        paragraph:
          "Worked on various projects: Food Order-site, Tic-Tac-Toe-game, Facebook Log In Page and Calculator.",
      },
    ],
    gradientClass: "blue-gradient",
  }, 
];
