import React, { useEffect, useState } from "react";
import Navbar from "../../shared/TopNav";
import "./index.css";
import Footer from "../../shared/Footer";
import TopNav from "../../shared/TopNav";

function DefaultLayout(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <main class="main">
        <TopNav />
        <div>{props.children}</div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default DefaultLayout;
