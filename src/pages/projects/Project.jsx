import React from "react";
import "./project.css";

const Project = () => {
  return (
    <>
      <section className="container projects" id="projects" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="col-md-12 mt-3 mb-1 text-center">
          Top Recent Projects
        </h2>
        <hr />
        <p>Here are my top recent, industry-level projects with live links.</p>
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="/uniconnect.jpg"
                  alt="UniConnect - full stack university networking app built with Next.js, TypeScript and MongoDB"
                  width="1280"
                  height="720"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Typescript</span>
                <span className="card-detail-badge">Nextjs</span>
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
                  rel="noopener noreferrer"
                  aria-label="View the UniConnect live project"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Chrome Extension</span>
                <img
                  src="/icon-128.jpg"
                  alt="Links Auto Open - Chrome extension built with HTML, CSS and JavaScript"
                  width="128"
                  height="128"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">JavaScript</span>
              </div>
              <div className="card-body">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Links Auto Open</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/Zia-Ul-Qamar-Tech-Notes/Link-Saver-Auto-Open-Links-Extension"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View the Links Auto Open extension on GitHub"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Frontend</span>
                <img
                  src="https://www.totalsafety.com/wp-content/themes/totalsafety/images/totalsafety-logo.svg"
                  alt="Total Safety - React and Tailwind CSS frontend project"
                  width="300"
                  height="80"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Tailwind</span>
                <span className="card-detail-badge">JavaScript</span>
              </div>
              <div className="card-body">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Total Safety</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://totalsecurityfront.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View the Total Safety live project"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
