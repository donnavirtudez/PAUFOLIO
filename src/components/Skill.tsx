import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faServer,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Skill.scss";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SCSS",
  "Bootstrap",
  "Git",
  "GitHub",
  "Flet",
  "Canva",
  "Inkscape",
];

const labelsSecond = ["Java", "PHP", "Node", "Express", "Python", "VB.NET"];
const labelsThird = ["MySQL", "MSSQL", "MongoDB", "PostgreSQL"];

function Skill() {
  return (
    <div className="container" id="skills">
      <div className="skills-container">
        <h1>Skills</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faLaptopCode} size="3x" />
            <h3>Frontend Development</h3>
            <p>
              Contributed to building web applications from the ground up,
              covering all Software Development Life Cycle phases. Proficient in
              frontend development, creating responsive, high-performance
              interfaces focused on usability.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faServer} size="3x" />
            <h3>Backend Development</h3>
            <p>
              Proficient in developing scalable backend systems, specializing in
              API and database management. Focused on performance optimization,
              secure authentication, and integrating third-party services to
              build efficient, high-performance applications.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size="3x" />
            <h3>Database</h3>
            <p>
              I have extensive experience in database design and management,
              with a focus on creating optimized schemas, enhancing query
              performance, and maintaining data integrity. Proficient in SQL and
              NoSQL systems to ensure robust and reliable database solutions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
