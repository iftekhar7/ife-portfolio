import React, { useEffect, useState } from "react";
import { cardData, socialIconData } from "./data";
import Projects from "./Projects";
import SearchInput from "../../components/SearchInput";
import { cloudinary } from "../../utils/commonutils";
import Contact from "./Contact";
import Table from "../../components/Table";

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
      <section className="hero section">
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
                Frontend Developer with 3.5 years of experience building
                responsive and scalable web applications using HTML5, CSS3,
                JavaScript, TypeScript, and React.js. Familiar with UI and
                styling libraries such as Material UI, Tailwind CSS, and SASS.
                Proficient in Redux and RTK Query for efficient state and API
                management. Experienced in using modern development tools like
                Vite and Vitest to streamline coding, testing, and performance
                tuning. Strong collaborator with a passion for clean code,
                accessibility, and delivering intuitive user experiences.
              </p>
              {/* <p className="text-sub-heading mb-6">
                Over the years, I have worked on dashboards, data visualization
                platforms, IoT applications, and component-driven frontend
                architectures. I have hands-on experience with amCharts,
                HighCharts, WebSocket/MQTT data, and building reusable
                design-system-based components. I regularly collaborate with
                product, design, and backend teams to deliver features
                end-to-end.
              </p> */}
              <div className="flex-start mb-6">
                {["React Expert", "TypeScript", "UI/UX Design"].map((skill) => (
                  <span className="pill pill-primary mr-3 " key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

              <div className="cta-buttons">
                <button className="btn btn-primary mr-3 ">
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
      <section className="about-section section">
        <div className="section-header">
          <h2 className="text-heading4">About Me</h2>
          <p className="text-sub-heading mb-4">
            Building exceptional web experiences
          </p>
          <p className="text-sub-heading">
            I'm{" "}
            <b className="gradient-text">Mohammad Iftekhar - 24 years old</b>{" "}
            Front End Developer and Designer in Gurugram with experience in
            HTML, CSS, SCSS, React js, Redux Toolkit, and JavaScript, and
            expertise in frameworks like Bootstrap, and MUI. I'm a quick learner
            and collaborate closely with clients to create efficient, scalable,
            and user-friendly solutions that solve real-world problems. Let's
            work together to bring your ideas to life! Achievement.
          </p>
        </div>
      </section>
      <section className="about-section section">
        <div className="section-header">
          <h2 className="text-heading4">Professional Journey</h2>
          <p className="text-sub-heading mb-4">
            Building exceptional web experiences
          </p>
        </div>
      </section>
      <section className="about-section section">
        <div className="section-header flex-between mb-4">
          <div>
            <h2 className="text-heading4">Featured Projects</h2>
            <p className="text-sub-heading ">
              Showcasing technical excellence and innovation
            </p>
          </div>
          <div className="flex-start">
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
      <section className="about-section section">
        <div className="section-header mb-4">
          <h2 className="text-heading4">Contact</h2>
          <p className="text-sub-heading ">
            Showcasing technical excellence and innovation
          </p>
        </div>
        <Contact />
      </section>
    </>
  );
}
export default Home;
