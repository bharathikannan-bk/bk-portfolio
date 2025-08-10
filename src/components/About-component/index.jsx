import FirstImage from "../../assets/images/abstract-1.webp";

function AboutComponent() {
  return (
    <>
      {/* <DefaultLayout> */}

      <section id="about" class="hero section">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 content-col text-start" data-aos="fade-up">
              <div class="content">
                <div class="agency-name">
                  <h5>FROND-END DEVELOPER</h5>
                </div>

                <div class="main-heading">
                  <h1>
                    BHARATHI <br />
                    KANNAN
                  </h1>
                </div>

                <div class="divider"></div>

                <div class="description">
                  <p style={{ textAlign: "justify" }}>
                    As a passionate <strong>Front-End Developer</strong>, I
                    specialize in building visually striking, high-performing,
                    and responsive websites that bring ideas to life. With a
                    strong command of modern web technologies, I blend
                    creativity and precision to deliver designs that not only
                    look beautiful but also function seamlessly across all
                    devices.
                  </p>
                </div>

                <div class="cta-button">
                  <a href="#services" class="btn">
                    <span>VIEW RESUME</span>
                    <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-5" data-aos="zoom-out">
              <div class="visual-content">
                <div class="fluid-shape">
                  <img
                    src={FirstImage}
                    alt="Abstract Fluid Shape"
                    class="fluid-img"
                  />
                </div>

                <div class="stats-card">
                  <div class="stats-number">
                    <h2>5K</h2>
                  </div>
                  <div class="stats-label">
                    <p>Successful Campaigns</p>
                  </div>
                  <div class="stats-arrow">
                    <a href="#portfolio">
                      <i class="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </DefaultLayout> */}
    </>
  );
}

export default AboutComponent;
