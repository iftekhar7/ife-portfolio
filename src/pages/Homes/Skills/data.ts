import type { ProfessionalSkills, Tools } from "../../../utils/types";

export const technicalSkills:ProfessionalSkills[] = [
  { name: "HTML/CSS", percentage: 95 },
  { name: "JavaScript", percentage: 90 },
  { name: "React", percentage: 95 },
  { name: "Redux", percentage: 85 },
];

export const professionalSkills:ProfessionalSkills[] = [
  { name: "Communication", percentage: 85 },
  { name: "Teamwork", percentage: 85 },
  { name: "Problem Solving", percentage: 75 },
  { name: "Creativity", percentage: 80 },
];

export const tools:Tools[] = [
  // Core Web
  { icon: "fa-brands fa-js", name: "JavaScript", color: "#f7df1e" },
  { icon: "fa-brands fa-js", name: "TypeScript", color: "#3178c6" },
  { icon: "fa-brands fa-html5", name: "HTML5", color: "#e34c26" },
  { icon: "fa-brands fa-css3-alt", name: "CSS3", color: "#264de4" },
  
  // Frameworks & Libraries
  { icon: "fa-brands fa-react", name: "React.js", color: "#61dafb" },
  { icon: "fa-brands fa-react", name: "Next.js", color: "#000000" },
  { icon: "fa-brands fa-react", name: "Vite", color: "#646cff" },
  { icon: "RTK", name: "Redux Toolkit", color: "#764abc" },

  // Tooling & Build
  { icon: "fa-solid fa-code-branch", name: "Babel", color: "#f9dc3e" },
  { icon: "fa-brands fa-npm", name: "NPM", color: "#cb3837" },
  { icon: "fa-brands fa-yarn", name: "Yarn", color: "#2c8ebb" },

  // Testing
  { icon: "fa-solid fa-vial", name: "Jest", color: "#c21325" },
  { icon: "fa-solid fa-flask", name: "React Testing Library", color: "#e33332" },

  // UI & Styling
  { icon: "fa-brands fa-bootstrap", name: "Bootstrap", color: "#7952b3" },
  { icon: "fa-solid fa-layer-group", name: "Material UI", color: "#007fff" },
  { icon: "fa-solid fa-wind", name: "Tailwind CSS", color: "#38bdf8" },
  { icon: "fa-brands fa-sass", name: "Sass / SCSS", color: "#cc6699" },

  // Data Visualization
  { icon: "fa-solid fa-chart-line", name: "amCharts", color: "#f7931e" },
  { icon: "fa-solid fa-chart-column", name: "Highcharts", color: "#808080" },
  { icon: "fa-solid fa-chart-pie", name: "Apache ECharts", color: "#d94e5d" },

  // Backend & Data
  { icon: "fa-brands fa-node-js", name: "Node.js", color: "#68a063" },
  { icon: "fa-solid fa-leaf", name: "MongoDB", color: "#4db33d" },

  // Realtime / IoT
  { icon: "fa-solid fa-wifi", name: "MQTT", color: "#ff9800" },

  // Version Control & Collaboration
  { icon: "fa-brands fa-git-alt", name: "Git", color: "#f34f29" },
  { icon: "fa-brands fa-github", name: "GitHub", color: "#000000" },
  { icon: "fa-brands fa-bitbucket", name: "Bitbucket", color: "#2684ff" },
  { icon: "fa-brands fa-jira", name: "Jira", color: "#0052cc" },

  // Process & Methodologies
  { icon: "fa-solid fa-people-arrows", name: "Agile / Scrum", color: "#4caf50" },

  // Code Quality & Security
  { icon: "fa-solid fa-shield-halved", name: "Mend (WhiteSource)", color: "#00b3a4" },
  { icon: "fa-solid fa-bug-slash", name: "SonarQube", color: "#4c9bd6" },
  { icon: "fa-solid fa-key", name: "Keycloak", color: "#1e88e5" },

  // Design & Editor
  { icon: "fa-brands fa-figma", name: "Figma", color: "#a259ff" },
  { icon: "fa-solid fa-code", name: "VS Code", color: "#007acc" },
];


