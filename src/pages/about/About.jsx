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
              I am Mirza Zia Ul Qamar, a software developer with a Bachelor's in
              Computer Science from the University of Gujrat and a Full Stack
              Developer certification from Meta. I specialize in Python,
              JavaScript, and web development frameworks. My experience includes
              building event organizing and e-ticketing systems, sentiment
              analysis applications, and AI-based projects. I excel in CSS,
              MERN, DBMS, Git, ReactJS, and more, and possess strong
              communication and leadership skills. Eager to contribute to
              innovative projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
