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
              I am Mirza Zia Ul Qamar, A passionate and dedicated Software
              Engineer with a Bachelor’s in Computer Science, a Certified
              Developer from Meta through Coursera, I have developed a strong
              foundation in both front-end and back-end technologies.. A fast
              and eager learner, I am highly motivated, hard-working and detail
              oriented. and I would love to work with your Company.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
