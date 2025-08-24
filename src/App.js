import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/css/main.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home_Component from "./components/Home-component";
import AboutComponent from "./components/About-component";
import DefaultLayout from "./layouts/defaultLayout";
import Footer from "./shared/Footer";
import ExperienceComponent from "./components/Experience-component";
import SkillsComponent from "./components/Skills-component";
import ProjectExperience from "./components/Project-component";
import EducationComponent from "./components/Education-component";
import ContactComponent from "./components/Contact-component";
import ProjectDetails from "./components/Project-component/details";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // animation duration in ms
  }, []);
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <DefaultLayout>
          <Routes>
            {/* <Home_Component /> */}
            <Route
              path="/"
              element={
                <>
                  <AboutComponent />
                  <ExperienceComponent />
                  <SkillsComponent />
                  <ProjectExperience />
                  <EducationComponent />
                  <ContactComponent />
                </>
              }
            />
            <Route path="/project-details/:id" element={<ProjectDetails />} />
          </Routes>
        </DefaultLayout>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
