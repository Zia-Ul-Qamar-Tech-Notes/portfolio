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
import PageTracker from "./analytics/PageTracker";

function App() {
  
  const [theme] = useTheme();
  return (
    <>
    <PageTracker pageTitle={"Home"} />
      <div id={theme}>
        <MobileNav />
        <Layout />
        <main>
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
        </main>
        <footer>
          {/* Year is baked in at prerender time; suppress the warning for
              the one page load that straddles a New Year boundary. */}
          <p className="text-center" suppressHydrationWarning>
            Made by Mirza Zia ul Qamar with &hearts; &copy;{" "}
            {new Date().getFullYear()}
          </p>
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
