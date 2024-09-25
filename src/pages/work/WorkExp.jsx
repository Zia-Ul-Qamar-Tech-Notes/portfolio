import React from "react";
import "./workexp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiReact } from "react-icons/si";

const WorkExp = () => {
  return (
    <>
      <div id="experience" className="container work">
        <h2 className="col-md-12 mt-3 mb-1 text-center">Work Experience</h2>
        <hr />
        <VerticalTimeline lineColor="gray">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#f1e3e3", color: "Black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2022 - 2024"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Freelance, Remote
            </h4>
            <p>Debugging, Development & Testing</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#f1e3e3", color: "Black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2023 - 2024"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Developer - FYP
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Gujrat, PK</h4>
            <p>
              Web Development, API Development, Backend Development & Deployment
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default WorkExp;
