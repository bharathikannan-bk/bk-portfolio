import DefaultLayout from "../../layouts/defaultLayout";

function Home_Component() {
  return (
    <>
      {/* <DefaultLayout> */}
        {/* <section id="about" class="about section">
          <div class="container section-title text-start" data-aos="fade-up">
            <h2>About</h2>
            <div>
              <span>Learn More</span>{" "}
              <span class="description-title">About Us</span>
            </div>
          </div>

          <div class="container">
            <div class="row gx-5 align-items-center">
              <div class="col-lg-6" data-aos="fade-right" data-aos-delay="200">
                <div class="about-image position-relative">
                  <img
                    src={AboutImage}
                    class="img-fluid rounded-4 shadow-sm"
                    alt="About Image"
                    loading="lazy"
                  />
                  <div class="experience-badge">
                    <span class="years">20+</span>
                    <span class="text">Years of Expertise</span>
                  </div>
                </div>
              </div>

              <div
                class="col-lg-6 mt-4 mt-lg-0"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div class="about-content">
                  <h2>Elevating Business Performance Through Innovation</h2>
                  <p class="lead">
                    We focus on crafting bespoke strategies that navigate
                    complexity and deliver tangible results for our clients.
                  </p>
                  <p>
                    Through a blend of sophisticated analytics and creative
                    problem-solving, we empower organizations to thrive in
                    rapidly evolving markets.
                  </p>

                  <div class="row g-4 mt-3">
                    <div
                      class="col-md-6"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      <div class="feature-item">
                        <i class="bi bi-check-circle-fill"></i>
                        <h5>Dedicated Team Support</h5>
                        <p>
                          Our highly skilled professionals are committed to
                          providing personalized service and impactful solutions
                          on every engagement.
                        </p>
                      </div>
                    </div>
                    <div
                      class="col-md-6"
                      data-aos="zoom-in"
                      data-aos-delay="450"
                    >
                      <div class="feature-item">
                        <i class="bi bi-lightbulb-fill"></i>
                        <h5>Forward-Thinking Approach</h5>
                        <p>
                          We embrace innovative methodologies to develop unique
                          strategies that drive lasting success.
                        </p>
                      </div>
                    </div>
                  </div>

                  <a href="#" class="btn btn-primary mt-4">
                    Explore Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section id="services" class="services section">
          <div class="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <div>
              <span>Check Our</span>{" "}
              <span class="description-title">Services</span>
            </div>
          </div>

          <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="service-header">
              <div class="row align-items-center">
                <div class="col-lg-8 col-md-12">
                  <div class="service-intro">
                    <h2 class="service-heading">
                      <div>Innovative business</div>
                      <div>
                        <span>performance solutions</span>
                      </div>
                    </h2>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12">
                  <div class="service-summary">
                    <p>
                      We integrate forward-thinking strategies, creative
                      approaches, and state-of-the-art technologies to deliver
                      exceptional customer experiences that drive growth and
                      engage target markets.
                    </p>
                    <a href="services.html" class="service-btn">
                      View All Services
                      <i class="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="row justify-content-center">
              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="service-card position-relative z-1">
                  <div class="service-icon">
                    <i class="bi bi-palette"></i>
                  </div>
                  <a
                    href="service-details.html"
                    class="card-action d-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i class="bi bi-arrow-up-right"></i>
                  </a>
                  <h3>
                    <a href="service-details.html">
                      Creative <span>branding</span>
                    </a>
                  </h3>
                  <p>
                    Nulla facilisi. Maecenas eget magna neque. Suspendisse
                    potenti. Curabitur eleifend nisi non magna vulputate, vel
                    condimentum libero tempus. Proin consectetur feugiat diam.
                  </p>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="service-card position-relative z-1">
                  <div class="service-icon">
                    <i class="bi bi-gem"></i>
                  </div>
                  <a
                    href="service-details.html"
                    class="card-action d-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i class="bi bi-arrow-up-right"></i>
                  </a>
                  <h3>
                    <a href="service-details.html">
                      Design <span>systems</span>
                    </a>
                  </h3>
                  <p>
                    Praesent euismod varius tellus, vel bibendum nunc interdum
                    at. Donec vehicula diam vel metus venenatis convallis.
                    Aliquam erat volutpat. Etiam viverra magna sit amet.
                  </p>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="service-card position-relative z-1">
                  <div class="service-icon">
                    <i class="bi bi-megaphone"></i>
                  </div>
                  <a
                    href="service-details.html"
                    class="card-action d-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i class="bi bi-arrow-up-right"></i>
                  </a>
                  <h3>
                    <a href="service-details.html">
                      Marketing <span>strategies</span>
                    </a>
                  </h3>
                  <p>
                    Vivamus tempor velit id magna dictum, sed fermentum nisi
                    faucibus. Integer nec pretium sapien. Fusce tincidunt ligula
                    et purus consequat, ac pellentesque nulla eleifend.
                  </p>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="service-card position-relative z-1">
                  <div class="service-icon">
                    <i class="bi bi-code-slash"></i>
                  </div>
                  <a
                    href="service-details.html"
                    class="card-action d-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i class="bi bi-arrow-up-right"></i>
                  </a>
                  <h3>
                    <a href="service-details.html">
                      Digital <span>platforms</span>
                    </a>
                  </h3>
                  <p>
                    Cras fermentum odio eu feugiat malesuada. Vestibulum ante
                    ipsum primis in faucibus orci luctus et accumsan cursus.
                    Morbi placerat nulla vel nunc viverra accumsan.
                  </p>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="service-card position-relative z-1">
                  <div class="service-icon">
                    <i class="bi bi-graph-up"></i>
                  </div>
                  <a
                    href="service-details.html"
                    class="card-action d-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i class="bi bi-arrow-up-right"></i>
                  </a>
                  <h3>
                    <a href="service-details.html">
                      Growth <span>acceleration</span>
                    </a>
                  </h3>
                  <p>
                    Aenean vel augue vel nisi bibendum posuere. Phasellus in
                    lacus quis urna sodales dignissim. Duis aliquam libero eget
                    risus facilisis. Quisque eget libero vel nisl fringilla.
                  </p>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="service-card position-relative z-1">
                  <div class="service-icon">
                    <i class="bi bi-camera-video"></i>
                  </div>
                  <a
                    href="service-details.html"
                    class="card-action d-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i class="bi bi-arrow-up-right"></i>
                  </a>
                  <h3>
                    <a href="service-details.html">
                      Media <span>solutions</span>
                    </a>
                  </h3>
                  <p>
                    Etiam efficitur lacus in diam finibus, nec ultrices est
                    sagittis. Maecenas elementum magna sed risus faucibus, nec
                    commodo purus facilisis. Vestibulum accumsan magna.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="steps" class="steps section">
          <div class="container section-title text-start" data-aos="fade-up">
            <h2>Steps</h2>
            <div>
              <span>How we</span> <span class="description-title">Work</span>
            </div>
          </div>

          <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="steps-wrapper">
              <div class="step-item" data-aos="fade-right" data-aos-delay="200">
                <div class="step-content">
                  <div class="step-icon">
                    <i class="bi bi-lightbulb"></i>
                  </div>
                  <div class="step-info">
                    <span class="step-number">Step 01</span>
                    <h3>Initial Consultation</h3>
                    <p>
                      Conducting thorough discovery sessions to understand your
                      business requirements and objectives. Our expert team
                      analyzes your needs to create a customized approach.
                    </p>
                  </div>
                </div>
              </div>

              <div class="step-item" data-aos="fade-left" data-aos-delay="300">
                <div class="step-content">
                  <div class="step-icon">
                    <i class="bi bi-gear"></i>
                  </div>
                  <div class="step-info">
                    <span class="step-number">Step 02</span>
                    <h3>Planning &amp; Strategy</h3>
                    <p>
                      Developing comprehensive strategies and detailed project
                      plans based on the initial consultation. We create
                      actionable roadmaps with clear milestones and
                      deliverables.
                    </p>
                  </div>
                </div>
              </div>

              <div class="step-item" data-aos="fade-right" data-aos-delay="400">
                <div class="step-content">
                  <div class="step-icon">
                    <i class="bi bi-bar-chart"></i>
                  </div>
                  <div class="step-info">
                    <span class="step-number">Step 03</span>
                    <h3>Development Phase</h3>
                    <p>
                      Executing the planned strategies with precision and
                      agility. Our team implements solutions while maintaining
                      constant communication and progress updates.
                    </p>
                  </div>
                </div>
              </div>

              <div class="step-item" data-aos="fade-left" data-aos-delay="500">
                <div class="step-content">
                  <div class="step-icon">
                    <i class="bi bi-check2-circle"></i>
                  </div>
                  <div class="step-info">
                    <span class="step-number">Step 04</span>
                    <h3>Launch &amp; Support</h3>
                    <p>
                      Ensuring smooth deployment and providing ongoing support
                      for implemented solutions. We monitor performance and make
                      necessary adjustments for optimal results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" class="portfolio section">
          <div class="container section-title text-start" data-aos="fade-up">
            <h2>Portfolio</h2>
            <div>
              <span>Check Our</span>{" "}
              <span class="description-title">Portfolio</span>
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
                <li data-filter="*" class="filter-active">
                  <i class="bi bi-grid-3x3"></i> All Projects
                </li>
                <li data-filter=".filter-ui">
                  <i class="bi bi-phone"></i> UI/UX
                </li>
                <li data-filter=".filter-development">
                  <i class="bi bi-code-slash"></i> Development
                </li>
                <li data-filter=".filter-photography">
                  <i class="bi bi-camera"></i> Photography
                </li>
                <li data-filter=".filter-marketing">
                  <i class="bi bi-graph-up"></i> Marketing
                </li>
              </ul>

              <div
                class="row g-4 isotope-container"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-ui">
                  <article class="portfolio-entry">
                    <figure class="entry-image">
                      <img
                        src="assets/img/portfolio/portfolio-1.webp"
                        class="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                      <div class="entry-overlay">
                        <div class="overlay-content">
                          <div class="entry-meta">UI/UX Design</div>
                          <h3 class="entry-title">Mobile Banking App</h3>
                          <div class="entry-links">
                            <a
                              href="assets/img/portfolio/portfolio-1.webp"
                              class="glightbox"
                              data-gallery="portfolio-gallery-ui"
                              data-glightbox="title: Mobile Banking App; description: Praesent commodo cursus magna, vel scelerisque nisl consectetur."
                            >
                              <i class="bi bi-arrows-angle-expand"></i>
                            </a>
                            <a href="portfolio-details.html">
                              <i class="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-development">
                  <article class="portfolio-entry">
                    <figure class="entry-image">
                      <img
                        src="assets/img/portfolio/portfolio-10.webp"
                        class="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                      <div class="entry-overlay">
                        <div class="overlay-content">
                          <div class="entry-meta">Development</div>
                          <h3 class="entry-title">E-Learning Platform</h3>
                          <div class="entry-links">
                            <a
                              href="assets/img/portfolio/portfolio-10.webp"
                              class="glightbox"
                              data-gallery="portfolio-gallery-development"
                              data-glightbox="title: E-Learning Platform; description: Nulla vitae elit libero, a pharetra augue mollis interdum."
                            >
                              <i class="bi bi-arrows-angle-expand"></i>
                            </a>
                            <a href="portfolio-details.html">
                              <i class="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-photography">
                  <article class="portfolio-entry">
                    <figure class="entry-image">
                      <img
                        src="assets/img/portfolio/portfolio-7.webp"
                        class="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                      <div class="entry-overlay">
                        <div class="overlay-content">
                          <div class="entry-meta">Photography</div>
                          <h3 class="entry-title">Urban Architecture</h3>
                          <div class="entry-links">
                            <a
                              href="assets/img/portfolio/portfolio-7.webp"
                              class="glightbox"
                              data-gallery="portfolio-gallery-photography"
                              data-glightbox="title: Urban Architecture; description: Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
                            >
                              <i class="bi bi-arrows-angle-expand"></i>
                            </a>
                            <a href="portfolio-details.html">
                              <i class="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-marketing">
                  <article class="portfolio-entry">
                    <figure class="entry-image">
                      <img
                        src="assets/img/portfolio/portfolio-4.webp"
                        class="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                      <div class="entry-overlay">
                        <div class="overlay-content">
                          <div class="entry-meta">Marketing</div>
                          <h3 class="entry-title">Social Media Campaign</h3>
                          <div class="entry-links">
                            <a
                              href="assets/img/portfolio/portfolio-4.webp"
                              class="glightbox"
                              data-gallery="portfolio-gallery-marketing"
                              data-glightbox="title: Social Media Campaign; description: Quis autem vel eum iure reprehenderit qui in ea voluptate."
                            >
                              <i class="bi bi-arrows-angle-expand"></i>
                            </a>
                            <a href="portfolio-details.html">
                              <i class="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-ui">
                  <article class="portfolio-entry">
                    <figure class="entry-image">
                      <img
                        src="assets/img/portfolio/portfolio-2.webp"
                        class="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                      <div class="entry-overlay">
                        <div class="overlay-content">
                          <div class="entry-meta">UI/UX Design</div>
                          <h3 class="entry-title">Smart Home Interface</h3>
                          <div class="entry-links">
                            <a
                              href="assets/img/portfolio/portfolio-2.webp"
                              class="glightbox"
                              data-gallery="portfolio-gallery-ui"
                              data-glightbox="title: Smart Home Interface; description: At vero eos et accusamus et iusto odio dignissimos ducimus."
                            >
                              <i class="bi bi-arrows-angle-expand"></i>
                            </a>
                            <a href="portfolio-details.html">
                              <i class="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-development">
                  <article class="portfolio-entry">
                    <figure class="entry-image">
                      <img
                        src="assets/img/portfolio/portfolio-11.webp"
                        class="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                      <div class="entry-overlay">
                        <div class="overlay-content">
                          <div class="entry-meta">Development</div>
                          <h3 class="entry-title">Cloud Management System</h3>
                          <div class="entry-links">
                            <a
                              href="assets/img/portfolio/portfolio-11.webp"
                              class="glightbox"
                              data-gallery="portfolio-gallery-development"
                              data-glightbox="title: Cloud Management System; description: Temporibus autem quibusdam et aut officiis debitis."
                            >
                              <i class="bi bi-arrows-angle-expand"></i>
                            </a>
                            <a href="portfolio-details.html">
                              <i class="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-photography">
                  <article class="portfolio-entry">
                    <figure class="entry-image">
                      <img
                        src="assets/img/portfolio/portfolio-8.webp"
                        class="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                      <div class="entry-overlay">
                        <div class="overlay-content">
                          <div class="entry-meta">Photography</div>
                          <h3 class="entry-title">Nature Collection</h3>
                          <div class="entry-links">
                            <a
                              href="assets/img/portfolio/portfolio-8.webp"
                              class="glightbox"
                              data-gallery="portfolio-gallery-photography"
                              data-glightbox="title: Nature Collection; description: Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
                            >
                              <i class="bi bi-arrows-angle-expand"></i>
                            </a>
                            <a href="portfolio-details.html">
                              <i class="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-marketing">
                  <article class="portfolio-entry">
                    <figure class="entry-image">
                      <img
                        src="assets/img/portfolio/portfolio-5.webp"
                        class="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                      <div class="entry-overlay">
                        <div class="overlay-content">
                          <div class="entry-meta">Marketing</div>
                          <h3 class="entry-title">Brand Strategy</h3>
                          <div class="entry-links">
                            <a
                              href="assets/img/portfolio/portfolio-5.webp"
                              class="glightbox"
                              data-gallery="portfolio-gallery-marketing"
                              data-glightbox="title: Brand Strategy; description: Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum."
                            >
                              <i class="bi bi-arrows-angle-expand"></i>
                            </a>
                            <a href="portfolio-details.html">
                              <i class="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="contact section">
          <div class="container section-title text-start" data-aos="fade-up">
            <h2>Contact</h2>
            <div>
              <span>Let's</span> <span class="description-title">Connect</span>
            </div>
          </div>

          <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="row gy-4 mb-5">
              <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div class="contact-info-box">
                  <div class="icon-box">
                    <i class="bi bi-geo-alt"></i>
                  </div>
                  <div class="info-content">
                    <h4>Our Address</h4>
                    <p>1842 Maple Avenue, Portland, Oregon 97204</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div class="contact-info-box">
                  <div class="icon-box">
                    <i class="bi bi-envelope"></i>
                  </div>
                  <div class="info-content">
                    <h4>Email Address</h4>
                    <p>info@example.com</p>
                    <p>contact@example.com</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                <div class="contact-info-box">
                  <div class="icon-box">
                    <i class="bi bi-headset"></i>
                  </div>
                  <div class="info-content">
                    <h4>Hours of Operation</h4>
                    <p>Sunday-Fri: 9 AM - 6 PM</p>
                    <p>Saturday: 9 AM - 4 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="map-section" data-aos="fade-up" data-aos-delay="200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
              width="100%"
              height="500"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div class="container form-container-overlap">
            <div
              class="row justify-content-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="col-lg-10">
                <div class="contact-form-wrapper">
                  <h2 class="text-center mb-4">Get in Touch</h2>

                  <form
                    action="forms/contact.php"
                    method="post"
                    class="php-email-form"
                  >
                    <div class="row g-3">
                      <div class="col-md-6">
                        <div class="form-group">
                          <div class="input-with-icon">
                            <i class="bi bi-person"></i>
                            <input
                              type="text"
                              class="form-control"
                              name="name"
                              placeholder="First Name"
                              required=""
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <div class="input-with-icon">
                            <i class="bi bi-envelope"></i>
                            <input
                              type="email"
                              class="form-control"
                              name="email"
                              placeholder="Email Address"
                              required=""
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <div class="form-group">
                          <div class="input-with-icon">
                            <i class="bi bi-text-left"></i>
                            <input
                              type="text"
                              class="form-control"
                              name="subject"
                              placeholder="Subject"
                              required=""
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="form-group">
                          <div class="input-with-icon">
                            <i class="bi bi-chat-dots message-icon"></i>
                            <textarea
                              class="form-control"
                              name="message"
                              placeholder="Write Message..."
                              // style="height: 180px"
                              required=""
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="loading">Loading</div>
                        <div class="error-message"></div>
                        <div class="sent-message">
                          Your message has been sent. Thank you!
                        </div>
                      </div>

                      <div class="col-12 text-center">
                        <button
                          type="submit"
                          class="btn btn-primary btn-submit"
                        >
                          SEND MESSAGE
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      {/* </DefaultLayout> */}
    </>
  );
}

export default Home_Component;
