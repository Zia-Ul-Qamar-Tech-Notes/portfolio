import React from "react";
import "./menu.css";
import { FaHome } from "react-icons/fa";
// import Zoom from "react-reveal/Zoom";
// import Fade from "react-reveal/Fade";
import {
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
  FcVoicePresentation,
  FcHome,
} from "react-icons/fc";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

function Menu({ toggle }) {
  return (
    <>
      {toggle ? (
        <>
          {/* <Zoom> */}
          <div className="profile-Pic">
            <img src="./profilePic.jpg" alt="Profile Pic" />
          </div>
          {/* </Zoom> */}
          {/* <Fade left> */}
          <div className="nav-items">
            <div className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <div className="nav-link">
                  <FaHome size={20} />
                  Home
                </div>
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <div className="nav-link">
                  <FcAbout size={20} />
                  About
                </div>
              </Link>
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <div className="nav-link">
                  <FcReadingEbook size={20} />
                  Education
                </div>
              </Link>
              <Link
                to="technology"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <div className="nav-link">
                  <FcBiotech size={20} />
                  Tech Stack
                </div>
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <div className="nav-link">
                  <FcVideoProjector size={20} />
                  Projects
                </div>
              </Link>
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <div className="nav-link">
                  <FcPortraitMode size={20} />
                  Work Experience
                </div>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <div className="nav-link">
                  <FcVoicePresentation size={20} />
                  Contact Details
                </div>
              </Link>
            </div>
          </div>
          {/* </Fade> */}
        </>
      ) : (
        <>
          <div className="nav-item-only">
            <div className="nav-link">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcHome size={30} title="Home" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcAbout size={30} title="About" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcReadingEbook size={30} title="Education" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="technology"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBiotech size={30} title="Tech Stack" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcVideoProjector size={30} title="Projects" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcPortraitMode size={30} title="Work Experience" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcVoicePresentation size={30} title="Contact Details" />
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Menu;
