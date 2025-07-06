import React from "react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.png";
import project7 from "../assets/images/project-7.png";
import project8 from "../assets/images/project-8.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/jeraldlabalan/finding-needmo-project"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project8} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/jeraldlabalan/finding-needmo-project"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Educational Resource System</h2>
          </a>
          <p>
            Managed database operations and served as QA Tester in creating this
            web-based app using React.js, Node.js, and MySQL for a tech resource
            repository for CvSU-Bacoor's Department of Computer Studies.
          </p>
        </div>
        <div className="project">
          <a
            href="https://group4-enrollment-system-client.vercel.app/MainPage?fbclid=IwZXh0bgNhZW0CMTEAAR6s4hZhbVMsxef-Oo8cmEFlGUzCXghRVkf50793WnCCvppVxwHtyepyEQ0foA_aem_mb0kD7Mw8-IWogix3fQeRw"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project7} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/gerlyntan07/Group4_Enrollment-System"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Enrollment System</h2>
          </a>
          <p>
            Managed the database and performed QA to the system using React.js,
            Node.js, and MySQL for the Software Engineering 2 project.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/donnavirtudez/SCHOOL-RECORDS-SYSTEM"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project6} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/donnavirtudez/SCHOOL-RECORDS-SYSTEM"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Student Records System</h2>
          </a>
          <p>
            Collaborated on the backend functionality and managed the database
            for a project in Advanced Database Management Systems, using HTML,
            CSS, JavaScript, PHP, and MySQL.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/donnavirtudez/ORDER-MANAGEMENT-SYSTEM"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project5} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/donnavirtudez/ORDER-MANAGEMENT-SYSTEM"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Order Management System</h2>
          </a>
          <p>
            Managed and maintained the database for efficient system performance
            using Java and MySQL as a project in OOP, Information Systems, and
            Database Management.
          </p>
        </div>
        <div className="project">
          <a
            href="https://donnavirtudez.github.io/QUINTECH-COMPANY/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project4} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/donnavirtudez/QUINTECH-COMPANY"
            target="_blank"
            rel="noreferrer"
          >
            <h2>IT Company</h2>
          </a>
          <p>
            Managed the content, decided what to include, and reviewed the
            website for any errors as part of the project for Web Systems and
            Technologies using Bootstrap to ensure a responsive and visually
            appealing interface.
          </p>
        </div>
        <div className="project">
          <a
            href="https://cvsu-bacoor-alumni-tracking-system.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project3} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/donnavirtudez/CVSU-ALUMNI-TRACKING-SYSTEM"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Alumni Tracking System</h2>
          </a>
          <p>
            Developed the frontend and backend using HTML, CSS, JavaScript, PHP,
            and MySQL for the Web Systems and Technologies project.
          </p>
        </div>
        <div className="project">
          <a
            href="https://cvsu-bacoor-website.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project2} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/donnavirtudez/CVSU-WEBSITE"
            target="_blank"
            rel="noreferrer"
          >
            <h2>School Website</h2>
          </a>
          <p>
            Led the development of the website and handled all frontend tasks
            for a Web Systems and Technologies project using CSS, HTML, and
            JavaScript to optimize the website for user experience.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/gerlyntan07/F5_HotelReservationSystem"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project1} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/gerlyntan07/F5_HotelReservationSystem"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Hotel Reservation System</h2>
          </a>
          <p>
            Led the database design and supported the development of backend
            functionalities in Computer Programming 1 project using Visual Basic
            .NET and MSSQL for database integration.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
