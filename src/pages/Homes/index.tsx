import React, { useEffect, useState } from "react";
import { cardData, socialIconData } from "./data";
import Projects from "./Projects";
import SearchInput from "../../components/SearchInput";
import { cloudinary, scrollToSection } from "../../utils/commonutils";
import Contact from "./Contact";
import Table from "../../components/Table";
import Work from "./Work";
import Skills from "./Skills";

function Home() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [viewTab, setViewTab] = useState("card");

  function useDebounce(value: any, delay = 400) {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
      const timer = setTimeout(() => setDebounced(value), delay);
      return () => clearTimeout(timer);
    }, [value, delay]);

    return debounced;
  }
  const debouncedSearch = useDebounce(searchTerm, 400);

  const filteredData = cardData.filter((item) =>
    item.projectName.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const handleDownload = () => {
    const pdfUrl = "/Mohammad_Iftekhar_Frontend_Developer.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Mohammad_Iftekhar_Frontend_Developer";
    link.click();
  };

  const handleLinkNavigate = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <section id="home" className="hero section">
        <div className="hero-content">
          <div className="hero-grid">
            <div>
              <div className="availability-badge  ">
                <div className="status-dot" />
                <span className="status-text">Available for opportunities</span>
              </div>

              <h1 className="hero-title">
                <span className="gradient-text">Frontend Software</span>
                <br />
                <span>Engineer</span>
              </h1>

              <p className="text-sub-heading mb-6">
                Frontend Developer with 3.6 years of experience building
                responsive and scalable web applications using HTML5, CSS3,
                JavaScript, TypeScript, and React.js. Familiar with UI and
                styling libraries such as Material UI, Tailwind CSS, and SASS.
                Proficient in Redux and RTK Query for efficient state and API
                management. Experienced in using modern development tools like
                Vite and Vitest to streamline coding, testing, and performance
                tuning. Strong collaborator with a passion for clean code,
                accessibility, and delivering intuitive user experiences.
              </p>
               
              <div className="flex-start mb-6">
                {["React Expert", "TypeScript", "UI/UX Design"].map((skill) => (
                  <span className="pill pill-primary mr-3 " key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

              <div className="cta-buttons">
                <button onClick={()=>scrollToSection('projects')} className="btn btn-primary mr-3 ">
                  View Projects <i className="far fa-arrow-right ml-2" />
                </button>
                <button
                  className="btn btn-ghost-outlined"
                  onClick={handleDownload}
                >
                  {" "}
                  <i className="fas fa-download mr-2" /> Download CV
                </button>
              </div>

              <div className="social-links">
                {socialIconData
                  .filter(
                    (item) =>
                      item.name !== "Facebook" && item.name !== "Twitter"
                  )
                  .map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleLinkNavigate(item.sourceLink)}
                      className={`btn btn-sm btn-${item.className}`}
                    >
                      <i className={item.icon}></i>
                    </button>
                  ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="profile-image-wrapper">
                <img
                  src={cloudinary("profile_camsez")}
                  alt="Mohammad Iftekhar – Frontend Developer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about-section section">
        <div className="section-header">
          <h2 className="text-heading4">About Me</h2>
          <p className="text-sm mb-4">
            Building exceptional web experiences
          </p>
          <p className="text-sub-heading">
            I’m <b className="gradient-text">Mohammad Iftekhar</b>, a Frontend
            Software Engineer with 3.6 years of experience building modern,
            responsive, and user-friendly web applications using React.js,
            TypeScript, Redux Toolkit, HTML, and CSS. I enjoy transforming UI/UX
            ideas into clean, scalable, and high-performance interfaces.
          </p>
          <p className="text-sub-heading">
            Over the years, I’ve worked on dashboards, data-visualization
            platforms, IoT applications, and component-driven frontend
            architectures. I have hands-on experience with amCharts, HighCharts, apacheEcharts,
            WebSocket/MQTT data, and building reusable, design-system-based
            components. I regularly collaborate with product, design, and
            backend teams to deliver features end-to-end.
          </p>
          {/* <p>Technically, I enjoy:</p>
          <ul className="pl-12">
            <li>Building responsive UIs with React.js, TypeScript, and modern CSS frameworks</li>
            <li>Converting Figma designs into pixel-perfect, reusable components</li>
            <li>Creating interactive dashboards using data-visualization libraries</li>
            <li>Optimizing frontend performance and improving load times</li>
            <li>Writing clean, maintainable code with Jest and React Testing Library</li>
            <li>Working in Agile environments using Git, Jira, and code-review workflows</li>
          </ul> */}
        </div>
      </section>
       <section id="skills" className="about-section section">
        <div className="section-header">
          <h2 className="text-heading4">My Skills</h2>
          <p className="text-sm mb-4">
            Building exceptional web experiences
          </p> 
        </div>
        <Skills />
      </section>
      <section id="work" className="about-section section">
        <div className="section-header mb-6">
          <h2 className="text-heading4 mb-2">Professional Journey</h2>
          <p className="text-sm">
            A snapshot of my professional growth, highlighting the roles and
            experiences that shaped my journey as a frontend developer.
          </p>
        </div>
        <Work />
      </section>
      <section id="projects" className="about-section section">
        <div className="section-header grid-responsive mb-6" style={{gap:'0px'}}>
          <div>
            <h2 className="text-heading4 mb-2">Featured Projects</h2>
            <p className="text-sm">
              A selection of projects that reflect my experience, technical
              skills, and passion for building scalable, user-focused web
              applications.
            </p>
          </div>
          <div className="flex-end mt-6">
            <SearchInput
              placeholder="Search Projects..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
            />
            <div className="button-groups ml-3">
              <button
                onClick={() => setViewTab("table")}
                className={`btn btn-${
                  viewTab === "table" ? "primary" : "secondary"
                }`}
              >
                <i className="fa-sharp fa-regular fa-bars"></i>
              </button>

              <button
                onClick={() => setViewTab("card")}
                className={`btn btn-${
                  viewTab === "card" ? "primary" : "secondary"
                }`}
              >
                <i className="fa-jelly-fill fa-regular fa-grid"></i>
              </button>
            </div>
          </div>
        </div>
        {viewTab === "card" ? (
          <Projects data={filteredData} />
        ) : (
          <Table data={filteredData} />
        )}
      </section>
      <section id="contact" className="about-section section">
        <div className="section-header mb-6">
          <h2 className="text-heading4 mb-2">Contact</h2>
          <p className="text-sm ">
            I’m always open to new opportunities, collaborations, and
            interesting projects. If you have an idea, need a frontend
            developer, or simply want to connect, feel free to reach out—I’d
            love to hear from you.
          </p>
        </div>
        <Contact />
      </section>
    </>
  );
}
export default Home;
