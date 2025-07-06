import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Education.scss";

function Education() {
  return (
    <div>
      <div className="items-container">
        <h1>Educational Journey</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022 - Present"
            iconStyle={{ background: "#585858", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Cavite State University - Bacoor Campus
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Molino VI, Bacoor Cavite
            </h4>
            <p>Bachelor of Science in Computer Science (BSCS)</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: "#585858", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Golden Acres National High School - Senior High School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Talon Uno, Las Piñas{" "}
            </h4>
            <p>Science, Technology, Engineering and Mathematics (STEM) </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2020"
            iconStyle={{ background: "#585858", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Eastern Bacoor National High School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Queen's Row, Bacoor Cavite
            </h4>
            <p>Technology and Livelihood Education (TLE) - Cookery</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;
