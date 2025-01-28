import React from "react";
import "./about.css";

function About() {
  return (
    <>
      <div className="about ">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 about-img">
            <img src="./profilePic.jpg" alt="Image" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 about-content">
            <h1>About Me</h1>
            <p>
              <i>
                I am Mirza Zia Ul Qamar, A passionate and dedicated Software
                Engineer with a Bachelor’s in Computer Science, with 1 year of
                freelance experience of designing scalable web applications,
                optimizing backend performance, and implementing user-centric
                designs. Profficient in
                <b> JavaScript, React.js, MongoDB, Express.js, and Python</b>.
              </i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
