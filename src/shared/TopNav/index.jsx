import React, { useEffect, useState } from "react";
import "./index.css";

function TopNav() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // adjust for header height
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        id="header"
        className={`header d-flex align-items-center fixed-top ${
          menuOpen ? "mobile-nav-active" : ""
        }`}
      >
        <div class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a
            href="" id="#about"
            class="logo d-flex align-items-center me-auto me-xl-0"
          >
            {/* <!-- <img src="assets/img/logo.webp" alt=""> --> */}
            <h1 class="sitename">Bk</h1>
          </a>

          <nav id="navmenu" class="navmenu">
            <ul>
              <li>
                <a
                  href="#about"
                  className={activeSection === "about" ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className={activeSection === "experience" ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={activeSection === "skills" ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className={activeSection === "project" ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className={activeSection === "education" ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  Education
                </a>
              </li>
              {/* <li class="dropdown"><a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li> */}
              {/* <li><a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a></li> */}
            </ul>
            <i
              className={`mobile-nav-toggle d-xl-none bi ${
                menuOpen ? "bi-x" : "bi-list"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            ></i>
          </nav>

          <a class="btn-getstarted" href="#contact">
            Get In Touch
          </a>
        </div>
      </header>
    </>
  );
}

export default TopNav;
