import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-80px 0px -60% 0px", // 🔥 navbar-aware
        threshold: 0.1, // 🔥 very important
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav id="navbar" className="navbar">
      <ul>
        <li>
          <p
            className={activeSection === "home" ? "active" : ""}
            onClick={() => scrollToSection("home")}
          >
            Home
          </p>
        </li>

        <li>
          <p
            className={activeSection === "about" ? "active" : ""}
            onClick={() => scrollToSection("about")}
          >
            About
          </p>
        </li>

        <li>
          <p
            className={activeSection === "work" ? "active" : ""}
            onClick={() => scrollToSection("work")}
          >
            Professional Journey
          </p>
        </li>

        <li>
          <p
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => scrollToSection("projects")}
          >
            Featured Projects
          </p>
        </li>

        <li>
          <p
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </p>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
