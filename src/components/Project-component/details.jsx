import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";

import SkandaFincorp from "../../assets/images/projects/skanda.jpg";
import AraciyalWeb from "../../assets/images/projects/araciyal-web.jpg";
import AraciyalAdmin from "../../assets/images/projects/araciyal-admin.jpg";
import { Link, useParams } from "react-router-dom";
import { portfolioData } from "./index";

function ProjectDetails() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      closeButton: true,
      arrows: true,
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      lightbox.destroy();
      clearTimeout(timer);
    };
  }, []);

  const { id } = useParams();
  const project = portfolioData.find((item) => item.id === parseInt(id));

  return (
    <>
      <div className="page-title dark-background" data-aos="fade">
        <div className="container position-relative">
          <h1>Project Details</h1>
          <p>
            Esse dolorum voluptatum ullam est sint nemo et est ipsa porro
            placeat quibusdam quia assumenda numquam molestias.
          </p>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to={"/bk-portfolio"}>Home</Link>
              </li>
              <li className="current">Portfolio Details</li>
            </ol>
          </nav>
        </div>
      </div>

      {loading ? (
        <>
          <div className="text-center p-5 m-5">
            <span class="loader"></span>
            <p>Just a sec...</p>
          </div>
        </>
      ) : (
        <section id="portfolio-details" className="portfolio-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="portfolio-details-media">
                  <div className="main-image">
                    <Swiper
                      modules={[Navigation, Autoplay, EffectCreative]}
                      loop={true}
                      speed={1000}
                      autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                      }}
                      effect="creative"
                      creativeEffect={{
                        prev: {
                          shadow: true,
                          translate: [0, 0, -400],
                        },
                        next: {
                          translate: ["100%", 0, 0],
                        },
                      }}
                      slidesPerView={1}
                      navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }}
                      className="portfolio-details-slider"
                    >
                      {project && project.galleryimages && (
                        <>
                          {project.galleryimages.map((img, index) => (
                            <SwiperSlide>
                              <img
                                src={img.path}
                                alt="Portfolio Image"
                                className="img-fluid"
                              />
                            </SwiperSlide>
                          ))}
                        </>
                      )}

                      {/* Navigation Arrows */}
                      <div className="swiper-button-prev"></div>
                      <div className="swiper-button-next"></div>
                    </Swiper>
                  </div>

                  <div
                    className="thumbnail-grid"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {project && project.galleryimages && (
                      <div className="row g-2 mt-3">
                        {project.galleryimages.map((img, index) => (
                          <div className="col-3" key={index}>
                            <a
                              href={img.path}
                              className="glightbox"
                              target="_blank"
                            >
                              <img
                                src={img.path}
                                alt="Gallery Image"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div
                    className="tech-stack-badges"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    {project && project.platform && (
                      <>
                        {project.platform.map((item) => (
                          <span key={item.id}>{item.language}</span>
                        ))}
                      </>
                    )}
                  </div>

                  <div className="portfolio-details mt-5">
                    <div className="portfolio-details-content">
                      <div
                        className="cta-buttons"
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        {project.livelink === "Not Yet" ? (
                          <Link
                            // to={`${project.livelink}`}
                            // target="_blank"
                           style={{
                            padding:"12px 28px",
                            backgroundColor:"gray",
                            color:"white",
                            borderRadius:"30px",
                            fontWeight:"500",
                            transition: "all 0.3s ease"
                           }}
                          >
                             <i class="bi bi-ban"></i> Not Live Project
                          </Link>
                        ) : (
                          <Link
                            to={`${project.livelink}`}
                            target="_blank"
                            className="btn-view-project"
                          >
                            View Live Project
                          </Link>
                        )}

                        <a href="#" className="btn-next-project">
                          View Source <i className="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 text-start" data-aos="fade-left">
                <div className="portfolio-details-content">
                  <div className="project-meta">
                    <div className="badge-wrapper">
                      <span className="project-badge">{project.category}</span>
                    </div>
                    <div className="date-client">
                      <div className="meta-item">
                        <i className="bi bi-calendar-check"></i>
                        <span>{project.date}</span>
                      </div>
                      <div className="meta-item">
                        <i className="bi bi-buildings"></i>
                        <span>{project.company}</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="project-title">{project.title}</h2>

                  <div className="project-website">
                    <i className="bi bi-link-45deg"></i>
                    <Link to={`${project.livelink}`} target="_blank">
                      {project.livelink}
                    </Link>
                  </div>

                  <div className="project-overview">
                    <p className="lead" style={{ textAlign: "justify" }}>
                      {project.description1}
                    </p>
                    <p className="lead" style={{ textAlign: "justify" }}>
                      {project.description2}
                    </p>

                    <div
                      className="accordion project-accordion"
                      id="portfolio-details-projectAccordion"
                    >
                      {/* Project Overview (Default Open) */}
                      <div className="accordion-item" data-aos="fade-up">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <i className="bi bi-clipboard-data me-2"></i>{" "}
                            Project Overview
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#portfolio-details-projectAccordion"
                        >
                          <div
                            className="accordion-body"
                            style={{ textAlign: "justify" }}
                          >
                            <p>{project.overview}</p>
                          </div>
                        </div>
                      </div>

                      {/* The Challenge */}
                      <div
                        className="accordion-item"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <i className="bi bi-exclamation-diamond me-2"></i>{" "}
                            The Challenge
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#portfolio-details-projectAccordion"
                        >
                          <div
                            className="accordion-body"
                            style={{ textAlign: "justify" }}
                          >
                            <p>{project.challege}</p>
                          </div>
                        </div>
                      </div>

                      {/* The Solution */}
                      <div
                        className="accordion-item"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <i className="bi bi-award me-2"></i> The Solution
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#portfolio-details-projectAccordion"
                        >
                          <div
                            className="accordion-body"
                            style={{ textAlign: "justify" }}
                          >
                            <p>{project.solution}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div
                  className="project-features"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h3>
                    <i className="bi bi-stars"></i> Key Features
                  </h3>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <ul className="feature-list">
                        <li>
                          <i className="bi bi-check2-circle"></i> Real-time Data
                          Visualization
                        </li>
                        <li>
                          <i className="bi bi-check2-circle"></i> User Role
                          Management
                        </li>
                        <li>
                          <i className="bi bi-check2-circle"></i> Secure
                          Authentication
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="feature-list">
                        <li>
                          <i className="bi bi-check2-circle"></i> Customizable
                          Dashboards
                        </li>
                        <li>
                          <i className="bi bi-check2-circle"></i> Data Export
                          Options
                        </li>
                        <li>
                          <i className="bi bi-check2-circle"></i> Multi-device
                          Support
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ProjectDetails;
