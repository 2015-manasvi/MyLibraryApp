import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="About books" />
          </div>
          <div className="about-text">
            <p className="fs-17">
              <b>
                {" "}
                A simple app for quickly searching the books.It is great Source
                for finding and viewing books for free.
              </b>
            </p>
            <p className="fs-17"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
