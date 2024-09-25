import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { Education } from "./pages/education/Education";
import Project from "./pages/projects/Project";
import Techstack from "./pages/techstack/Techstack";
import WorkExp from "./pages/work/WorkExp";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
        </div>
        <div className="container">
          <Education />
          <Techstack />
          <Project />
          <WorkExp />
          <Contact />
        </div>
        <footer>
          <h6 className="text-center">Made by Mirza Zia with ❤ &copy; 2024</h6>
        </footer>
        <ScrollToTop
          style={{ backgroundColor: "#138781", borderRadius: "80px" }}
          smooth
        />
      </div>
    </>
  );
}

export default App;
