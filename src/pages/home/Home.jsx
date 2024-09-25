import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.pdf";
import { useTheme } from "../../context/ThemeContext";
import { FaMoon } from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

function Home() {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div id="home">
      <div className="theme-btn" onClick={handleTheme}>
        {theme === "dark" ? <FaMoon size={30} /> : <WiDaySunny size={30} />}
      </div>
      <div className="home-container container-fluid">
        <div className="container home-content">
          <Fade right>
            <h1>Hi, I'm a </h1>
            <h2>
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "Python Developer",
                    "Software Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn hire-me"
                href="https://api.whatsapp.com/send?phone=03365083042"
                rel="noreferrer"
                target="_blank"
              >
                Hire me
              </a>
              <a className="btn resume" href={Resume} download="zia_resume.pdf">
                Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Home;
