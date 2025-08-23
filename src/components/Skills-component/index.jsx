import "./index.css";
import htmlImage from "../../assets/images/skills/html.png";
import cssImage from "../../assets/images/skills/css.png";
import bootImage from "../../assets/images/skills/boot.png";
import jsImage from "../../assets/images/skills/js.png";
import reactImage from "../../assets/images/skills/react.png";
import angularImage from "../../assets/images/skills/angular.jpeg";
import gitImage from "../../assets/images/skills/git.png";
import gitupImage from "../../assets/images/skills/gitup.png";

function SkillsComponent() {
  return (
    <>
      <section id="skills">
        <div class="container mt-2 section-title text-start" data-aos="fade-up">
          <h2>Skills</h2>
          <div>
            <span>Check My</span> <span class="description-title">Skills</span>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-2" data-aos="fade-right">
              <div className="skills-main-border p-4">
                <div className="row">
                  <div className="col-md-4">
                    <p className="skills-logo-text">
                      <img
                        src={htmlImage}
                        alt="html"
                        className="skills-logo-img"
                      />{" "}
                      HTML
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="skills-logo-text">
                      <img
                        src={cssImage}
                        alt="css"
                        className="skills-logo-img"
                      />{" "}
                      Css
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="skills-logo-text">
                      <img
                        src={bootImage}
                        alt="bootstrap"
                        className="skills-logo-img"
                      />{" "}
                      Bootstrap
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="skills-logo-text">
                      <img
                        src={jsImage}
                        alt="javascript"
                        className="skills-logo-img"
                      />{" "}
                      Javascript
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="skills-logo-text">
                      <img
                        src={reactImage}
                        alt="react"
                        className="skills-logo-img"
                      />{" "}
                      React.js
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="skills-logo-text">
                      <img
                        src={angularImage}
                        alt="angular"
                        className="skills-logo-img"
                      />{" "}
                      Angular
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-2"  data-aos="fade-left">
              <div className="skills-main-border p-4">
                <div className="row">
                  <div className="col-md-4">
                    <p className="skills-logo-text">
                      <img
                        src={gitImage}
                        alt="html"
                        className="skills-logo-img"
                      />{" "}
                     Git
                    </p>
                  </div>
                   <div className="col-md-4">
                    <p className="skills-logo-text">
                      <img
                        src={gitupImage}
                        alt="html"
                        className="skills-logo-img"
                      />{" "}
                     Git up
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillsComponent;
