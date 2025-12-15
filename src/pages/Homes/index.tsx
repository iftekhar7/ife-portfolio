import React from "react";
import { socialIconData } from "./data";
import Projects from "./Projects";

function Home() {
  const handleDownload = () => {
    const pdfUrl = "/Mohammad_Iftekhar_Frontend_Developer.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Mohammad_Iftekhar_Frontend_Developer";
    link.click();
  };

  const  handleLinkNavigate = (url: string) => {
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

              <p className="text-sub-heading">
                I am a Frontend Software Engineer with 3.5 years of experience
                building modern, responsive, and user-friendly web applications
                using React.js, JavaScript, TypeScript, Redux Toolkit, HTML, and
                CSS. I enjoy turning UI/UX ideas into clean, scalable, and
                high-performance interfaces.
              </p>
              <p className="text-sub-heading mb-6">
                Over the years, I have worked on dashboards, data visualization
                platforms, IoT applications, and component-driven frontend
                architectures. I have hands-on experience with amCharts,
                HighCharts, WebSocket/MQTT data, and building reusable
                design-system-based components. I regularly collaborate with
                product, design, and backend teams to deliver features
                end-to-end.
              </p>
              <div className="skill-tags">
                <span className="skill-tag react">React Expert</span>
                <span className="skill-tag typescript">TypeScript</span>
                <span className="skill-tag uiux">UI/UX Design</span>
              </div>

              <div className="cta-buttons">
                <button className="btn btn-primary mr-3 ">
                  View Projects
                  {/* <ArrowRight className="btn-icon" size={18} /> */}
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
                {socialIconData.map((item) => (
                  <button  key={item.id} onClick={() => handleLinkNavigate(item.sourceLink)} className={`btn btn-${item.className}`}>
                    <i className={item.icon}></i>
                  </button> 
                ))} 
              </div>
            </div>

            <div className="hero-visual">
              <div className="profile-image-wrapper">
                <img
                  src="/profile.png"
                  alt="Mohammad Iftekhar"
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section section">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
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
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">
            Building exceptional web experiences
          </p>
        </div>
      </section>
      <section className="about-section section">
        <div className="section-header">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Showcasing technical excellence and innovation
            </p>
          </div>
        </div>
        <Projects />
      </section>
    </>
  );
}
export default Home;
