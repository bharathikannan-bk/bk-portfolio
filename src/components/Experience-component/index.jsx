import React from "react";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function ExperienceComponent() {
  return (
    <>
      <section id="experience" class="about section">
        <div class="container mt-2 section-title text-start" data-aos="fade-up">
          <h2>Experience</h2>
          <div>
            <span>See my</span>{" "}
            <span class="description-title">Experience</span>
          </div>
        </div>

        <div class="container">
          <div
            className="testimonial-section"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="row">
              <div
                className="col-lg-4"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div
                  className="testimonial-intro"
                  style={{ textAlign: "justify" }}
                >
                  <h3>Overall Summary</h3>
                  <p>
                    " I have 1.5 years of hands-on experience in Frontend
                    Development, specializing in building responsive and
                    user-friendly web applications. My journey started with a
                    6-month internship, where I strengthened my fundamentals,
                    followed by a 1-year professional role as a React.js
                    developer, delivering real-time, scalable, and maintainable
                    solutions. "
                  </p>
                  <div className="swiper-nav-buttons mt-4">
                    <button className="slider-prev">
                      <i className="bi bi-arrow-left"></i>
                    </button>
                    <button className="slider-next">
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-8"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation={{
                    nextEl: ".slider-next",
                    prevEl: ".slider-prev",
                  }}
                  autoplay={{ delay: 5000 }}
                  speed={800}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  breakpoints={{
                    768: {
                      slidesPerView: 1,
                    },
                  }}
                  className="testimonial-slider"
                >
                  <SwiperSlide>
                    <div
                      className="testimonial-item"
                      style={{ textAlign: "justify" }}
                    >
                      <div className="d-flex justify-content-between">
                        <h5>🔹React Developer</h5>
                        <span className="dot-icon-ex">
                          <i className="bi bi-calendar-check"></i> Jan 06,2025 -
                          Present
                        </span>
                      </div>
                      <h6>
                        <span className="hermon-color">Hermon Solutions</span> |
                        Perungathur,chennai
                      </h6>
                      <p>
                        <i className="bi bi-dot dot-icon-ex"></i>Worked as a
                        React.js Developer for 1 year, responsible for
                        developing and maintaining dynamic, component-based user
                        interfaces.
                      </p>
                      <p>
                        <i className="bi bi-dot dot-icon-ex"></i>Implemented API
                        integrations, pagination, filters, authentication flows,
                        dashboards, and reusable UI components.
                      </p>
                      <p>
                        <i className="bi bi-dot dot-icon-ex"></i>Enhanced
                        application performance using React hooks, lazy loading,
                        and optimization techniques.
                      </p>
                      <p>
                        <i className="bi bi-dot dot-icon-ex"></i>Collaborated
                        with backend teams to design REST API-driven solutions
                        and handled state management using Context API / Redux.
                      </p>
                      <p>
                        <i className="bi bi-dot dot-icon-ex"></i>Followed
                        responsive design principles using Bootstrap, Tailwind,
                        and custom CSS for cross-device compatibility.
                      </p>
                      <p>
                        <i className="bi bi-dot dot-icon-ex"></i>Actively
                        participated in code reviews, debugging, and deployment
                        processes, ensuring high-quality deliverables.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="testimonial-item"
                      style={{ textAlign: "justify" }}
                    >
                      <div className="d-flex justify-content-between">
                        <h5>🔹 Internship</h5>
                        <span className="dot-icon-ex">
                          <i className="bi bi-calendar-check"></i> July 03,2024
                          - Dec 30,2024
                        </span>
                      </div>
                      <h6>
                        <span className="hermon-color">Hermon Solutions</span> |
                        Perungathur,chennai
                      </h6>
                      <p>
                        <i className="bi bi-dot dot-icon-ex"></i>Completed a
                        6-month internship in frontend development, focusing on
                        HTML, CSS, JavaScript, and Bootstrap to create
                        responsive web pages.
                      </p>
                      <p>
                        <i className="bi bi-dot dot-icon-ex"></i>Gained exposure
                        to real-world projects and best practices in version
                        control (Git/GitHub).
                      </p>
                      <p>
                        <i className="bi bi-dot dot-icon-ex"></i>Worked closely
                        with senior developers to understand SDLC, agile
                        workflow, and client requirements.
                      </p>
                      <p>
                        <i className="bi bi-dot dot-icon-ex"></i>Built small
                        modules & contributed to UI improvements, gaining
                        confidence in React.js basics during internship.
                      </p>
                      <p>
                        <i className="bi bi-dot dot-icon-ex"></i>Completed
                        6-month internship in frontend development, building
                        responsive UIs with HTML, CSS, JavaScript, and Bootstrap
                        while gaining practical exposure to real-world projects.
                      </p>
                      <p>
                        <i className="bi bi-dot dot-icon-ex"></i>Collaborated
                        with senior developers, understood SDLC & Agile
                        workflow, and contributed to UI enhancements while
                        strengthening my React.js fundamentals.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ExperienceComponent;
