import React, { useEffect, useState } from "react";
import Navbar from "../../shared/TopNav";
import "./index.css";
import Footer from "../../shared/Footer";
import TopNav from "../../shared/TopNav";

function DefaultLayout(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <main class="main">
        <TopNav />
        <div>{props.children}</div>
      </main>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="btn back-to-top-btn position-fixed"
          title="Go to top"
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      )}
    </div>
  );
}

export default DefaultLayout;
