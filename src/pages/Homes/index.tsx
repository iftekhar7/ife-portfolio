import React from "react";

function Home() {
    const handleDownload = () => {
       const pdfUrl = '/Mohammad_Iftekhar_Frontend_Developer.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Mohammad_Iftekhar_Frontend_Developer';
        link.click();
      };

  return (
    <section className="hero pt-0">
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
            <p className="text-sub-heading">
              Over the years, I have worked on dashboards, data visualization
              platforms, IoT applications, and component-driven frontend
              architectures. I have hands-on experience with amCharts,
              HighCharts, WebSocket/MQTT data, and building reusable
              design-system-based components. I regularly collaborate with
              product, design, and backend teams to deliver features end-to-end.
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
              <button className="btn btn-ghost-outlined" onClick={handleDownload}> <i className="fas fa-download mr-2"/> Download CV</button>
            </div>

            <div className="social-links">
              <a href="https://linkedin.com" className="social-link">
                {/* <Linkedin size={20} /> */}
              </a>
              <a href="https://github.com" className="social-link">
                {/* <Github size={20} /> */}
              </a>
              <a
                href="mailto:Iftekharmohammadd96@gmail.com"
                className="social-link"
              >
                {/* <Mail size={20} /> */}
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-container">
              <div className="visual-bg">
                {/* <Code size={120} className="bg-icon" /> */}
              </div>
              <div className="location-badge">
                <div className="badge-label">Location</div>
                <div className="badge-content">
                  {/* <MapPin size={14} /> */}
                  Gurugram, India
                </div>
              </div>
              <div className="experience-badge">
                <div className="badge-label">Experience</div>
                <div className="badge-content">3.5+ Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
