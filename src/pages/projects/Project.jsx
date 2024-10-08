import React from "react";
import "./project.css";

const Project = () => {
  return (
    <>
      <div className="container projects" id="projects">
        <h2 className="col-md-12 mt-3 mb-1 text-center">Top Recent Projects</h2>
        <hr />
        <p>Here are my Top Recent Indurstry Level Projects with Live Link</p>
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src="./uniconnect.jpg" alt="UniConnect" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Typescript</span>
                <span className="card-detail-badge">Nextjs</span>
                <span className="card-detail-badge">Clerk</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">UniConnect</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://uni-connect-seven.vercel.app/"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
