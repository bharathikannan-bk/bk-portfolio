import React from "react";

function EducationComponent() {
  return (
    <>
      <section id="education" class="steps section">
        <div class="container section-title text-start" data-aos="fade-up">
          <h2>Steps</h2>
          <div>
            <span>My</span> <span class="description-title">Education</span>
          </div>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100"  style={{textAlign:"justify"}}>
          <div class="steps-wrapper">
            <div class="step-item" data-aos="fade-right" data-aos-delay="200">
              <div class="step-content">
                <div class="step-icon">
                  <i class="bi bi-lightbulb"></i>
                </div>
                <div class="step-info">
                  <span class="step-number">Step 04</span>
                  <h3>Madurai Kamaraj University College</h3>
                  <p>MCA - Master of Computer Application</p>
                  <h6 className="pt-2">2022 - 2024</h6>
                  <h6>Percentage: 82%</h6>
                  <p>
                    In my MCA, I gained advanced knowledge in software
                    development, modern tools, and frameworks. I enhanced my
                    skills in coding, teamwork, and project management through
                    practical applications. This program refined my
                    problem-solving abilities for industry-level challenges. It
                    prepared me to contribute effectively to the IT sector with
                    confidence.
                  </p>
                </div>
              </div>
            </div>

            <div class="step-item" data-aos="fade-left" data-aos-delay="300">
              <div class="step-content">
                <div class="step-icon">
                 <i class="bi bi-laptop"></i>
                </div>
                <div class="step-info">
                  <span class="step-number">Step 03</span>
                  <h3>Yadava College</h3>
                  <p>B.sc (Computer Science)</p>
                  <h6 className="pt-2">2019 - 2022</h6>
                  <h6>Percentage: 78%</h6>
                  <p>
                    During my B.Sc. in Computer Science, I acquired strong
                    knowledge in programming, databases, and computer
                    fundamentals. I explored multiple technologies through
                    academic projects that built my practical exposure. This
                    course strengthened my logical approach to solving real-time
                    problems. It shaped my career direction towards the IT
                    field.
                  </p>
                </div>
              </div>
            </div>

            <div class="step-item" data-aos="fade-right" data-aos-delay="400">
              <div class="step-content">
                <div class="step-icon">
                  <i class="bi bi-journal-text"></i>
                </div>
                <div class="step-info">
                  <span class="step-number">Step 02</span>
                  <h3>Sacred Heart Higher Secondary School</h3>
                  <p>HSC - 12th(std) [Computer-Maths]</p>
                  <h6 className="pt-2">2017 - 2019</h6>
                  <h6>Grade: 65%</h6>
                  <p>
                    In my 12th standard, I pursued the Science stream with
                    Mathematics as the core subject. This phase enhanced my
                    analytical and logical thinking skills. I gained confidence
                    in handling complex problems and sharpened my focus on
                    technology-driven learning. It prepared me to take up
                    Computer Science as my degree.
                  </p>
                </div>
              </div>
            </div>

            <div class="step-item" data-aos="fade-left" data-aos-delay="500">
              <div class="step-content">
                <div class="step-icon">
                  <i class="bi bi-book"></i>
                </div>
                <div class="step-info">
                  <span class="step-number">Step 01</span>
                  <h3>Government High School</h3>
                  <p>SSLC - 10th(std)</p>
                  <h6 className="pt-2">2015 - 2017</h6>
                  <h6>Grade: 83%</h6>
                  <p>
                    I successfully completed my 10th standard with good academic
                    performance, building a strong foundation in core subjects.
                    This stage helped me develop consistency in learning and
                    discipline. I cultivated problem-solving ability through
                    Mathematics and Science. Overall, it laid the base for my
                    higher education journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EducationComponent;
