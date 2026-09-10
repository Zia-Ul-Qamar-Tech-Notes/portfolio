import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.pdf";
import { useTheme } from "../../context/ThemeContext";
import { FaMoon } from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";
import { AnalyticsEvents } from "../../analytics/events";
// import Fade from "react-reveal/Fade";

function Home() {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <header id="home">
      <div
        className="theme-btn"
        onClick={handleTheme}
        role="button"
        tabIndex={0}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? <FaMoon size={30} /> : <WiDaySunny size={30} />}
      </div>
      <div className="home-container container-fluid">
        <div className="container home-content">
          {/* <Fade right> */}
          <h1>Hi, I am Mirza Zia ul Qamar</h1>
          <h2>
            {/* Static copy so crawlers and screen readers get the real roles -
                the typewriter renders empty in the prerendered HTML. */}
            <span className="visually-hidden">
              Software Engineer, MERN Stack Web Developer and Python Developer
            </span>
            <span aria-hidden="true">
              <Typewriter
                options={{
                  strings: [
                    "Software Engineer",
                    "MERN Stack Web Developer",
                    "Python Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h2>
          {/* </Fade> */}
          {/* <Fade bottom> */}
          <div className="home-buttons">
            <a
              onClick={AnalyticsEvents.hireMe}
              className="btn hire-me"
              href="https://api.whatsapp.com/send?phone=923365083042"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Hire Mirza Zia ul Qamar on WhatsApp"
            >
              Hire me
            </a>
            <a onClick={AnalyticsEvents.downloadResume} className="btn resume" href={Resume} download="zia_resume.pdf">
              Resume
            </a>
          </div>
          {/* </Fade> */}
        </div>
      </div>
    </header>
  );
}

export default Home;
