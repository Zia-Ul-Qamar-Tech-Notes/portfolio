import React from "react";
import "./education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";

export const Education = () => {
  return (
    <>
      <div id="education" className="container education">
        <h2 className="col-md-12 mt-3 mb-1 text-center">Education</h2>
        <hr />
        <VerticalTimeline lineColor="gray">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#f1e3e3", color: "Black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2020 - 2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor's in CS
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Gujrat, PK</h4>
            <p>
              Software Engineering, Development, Life Cycle, Web Development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#f1e3e3", color: "Black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2023"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Coursera, Online
            </h4>
            <p>
              Front-end Development, API Development, Python Development, Web
              Development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#f1e3e3", color: "Black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2018 - 2020"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Engineering in Intermediate
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Kharian, PK</h4>
            <p>Physics, Engineering, Mathematics, Chemistry</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
