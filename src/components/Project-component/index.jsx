import SkandaFincorp from "../../assets/images/projects/skanda.jpg";
import AraciyalWeb from "../../assets/images/projects/araciyal-web.jpg";
import AraciyalAdmin from "../../assets/images/projects/araciyal-admin.jpg";
import PinkWeb from "../../assets/images/projects/pink-web.jpg";
import PinkAdmin from "../../assets/images/projects/pink-admin.jpg";
import Rcjewelry from "../../assets/images/projects/rcjewelry.jpg";
import Ecommerce from "../../assets/images/projects/e-com.png";
import Kavalkaran from "../../assets/images/projects/kavalkaran.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export const portfolioData = [
  {
    id: 1,
    img: SkandaFincorp,
    category: "Web Design",
    filter: "filter-ui",
    title: "Skanda Fincorp - Finance website",
    description: "lorem100",
  },
  {
    id: 2,
    img: AraciyalWeb,
    category: "Web Design",
    filter: "filter-ui",
    title: "Araciyal.com - Website",
    description: "lorem100",
    livelink: "araciyal.com",
    date:"August 2025",
    company:"Hermon Solutions",
    platform: [
      { id: 1, language: "Html" },
      { id: 2, language: "Css" },
      { id: 3, language: "Boostrap" },
      { id: 4, language: "Javascript" },
      { id: 5, language: "React.js" },
    ],
    overview:"lorem50",
    challege:"lorem60",
    solution:"lorem30",
    galleryimages:[
      {id:1,path:AraciyalWeb},
      {id:2,path:AraciyalWeb},
      {id:3,path:AraciyalWeb},
      {id:4,path:AraciyalWeb},
    ]
  },
  {
    id: 3,
    img: AraciyalAdmin,
    category: "Web Application",
    filter: "filter-development",
    title: "Araciyal.com - Admin Panel",
    description: "lorem100",
  },
  {
    id: 4,
    img: PinkWeb,
    category: "Web Design",
    filter: "filter-ui",
    title: "Pink-celebrity - Website",
    description: "lorem100",
  },
  {
    id: 5,
    img: PinkAdmin,
    category: "Web Application",
    filter: "filter-development",
    title: "Pink Celebrity - Admin Panel",
    description: "lorem100",
  },
  {
    id: 6,
    img: Rcjewelry,
    category: "Landing Page",
    filter: "filter-photography",
    title: "RcJewelry - Website",
    description: "lorem100",
  },
];

function ProjectExperience() {
  const [activeFilter, setActiveFilter] = useState("*");
  const [loading, setLoading] = useState(false);

  return (
    <>
      <section id="project" class="container portfolio section">
        <div class="container section-title text-start" data-aos="fade-up">
          <h2>Projects</h2>
          <div>
            <span>Check My</span>{" "}
            <span class="description-title">Projects</span>
          </div>
        </div>

        <div class="container-fluid" data-aos="fade-up" data-aos-delay="100">
          <div
            class="isotope-layout"
            data-default-filter="*"
            data-layout="masonry"
            data-sort="original-order"
          >
            <ul
              class="portfolio-filters isotope-filters"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <li
                className={activeFilter === "*" ? "filter-active" : ""}
                // onClick={() => setActiveFilter("*")}
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setActiveFilter("*");
                    setLoading(false);
                  }, 1000);
                }}
              >
                <i class="bi bi-grid-3x3"></i> All Projects
              </li>
              <li
                className={activeFilter === "filter-ui" ? "filter-active" : ""}
                // onClick={() => setActiveFilter("filter-ui")}
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setActiveFilter("filter-ui");
                    setLoading(false);
                  }, 1000);
                }}
              >
                <i class="bi bi-laptop"></i> Web Design
              </li>
              <li
                className={
                  activeFilter === "filter-development" ? "filter-active" : ""
                }
                // onClick={() => setActiveFilter("filter-development")}
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setActiveFilter("filter-development");
                    setLoading(false);
                  }, 1000);
                }}
              >
                <i class="bi bi-code-slash"></i> Web Apllications
              </li>
              <li
                className={
                  activeFilter === "filter-photography" ? "filter-active" : ""
                }
                // onClick={() => setActiveFilter("filter-photography")}
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setActiveFilter("filter-photography");
                    setLoading(false);
                  }, 1000);
                }}
              >
                <i class="bi bi-camera"></i> Landing Pages
              </li>
            </ul>

            <div
              class="row g-4 isotope-container"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {loading ? (
                <>
                  <div className="text-center">
                    <span class="loader"></span>
                    <p>Just a sec...</p>
                  </div>
                </>
              ) : (
                portfolioData
                  .filter(
                    (item) =>
                      activeFilter === "*" || item.filter === activeFilter
                  )
                  .map((value, index) => (
                    <div
                      class={`col-xl-4 col-lg-4 col-md-6 portfolio-item isotope-item filter-ui ${value.filter}`}
                      key={index}
                      data-aos="fade-up"
                    >
                      <article class="portfolio-entry">
                        <figure class="entry-image">
                          <img
                            src={value.img}
                            class="img-fluid"
                            alt=""
                            loading="lazy"
                          />
                          <div class="entry-overlay">
                            <div class="overlay-content text-start">
                              <div class="entry-meta">{value.category}</div>
                              <h3 class="entry-title">{value.title}</h3>
                              <div class="entry-links">
                                <a
                                  href={value.img}
                                  target="_blank"
                                  class="glightbox"
                                  data-gallery="portfolio-gallery-ui"
                                  data-glightbox="title: Mobile Banking App; description: Praesent commodo cursus magna, vel scelerisque nisl consectetur."
                                >
                                  <i class="bi bi-arrows-angle-expand"></i>
                                </a>
                                <Link to={`/project-details/${value.id}`}>
                                  <i class="bi bi-arrow-right"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </figure>
                      </article>
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectExperience;
