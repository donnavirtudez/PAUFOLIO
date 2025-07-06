import React from "react";
import resumePDF from "../assets/files/donna_virtudez_cv.pdf";
import DownloadIcon from "@mui/icons-material/Download";
import Button from "@mui/material/Button";
import "../assets/styles/Resume.scss";

function Resume() {
  return (
    <div className="container" id="resume">
      <div className="resume-container">
        <h1>Resume</h1>
        <p>
          Below is a visual representation of my current educational journey,
          showcasing the relevant experiences and skills I have developed during
          my time in college. It highlights the areas I am focusing on, along
          with the growth and knowledge I have gained through my studies and
          activities.
        </p>
        <div className="pdf-container">
          <embed src={resumePDF} type="application/pdf" />
        </div>
        <div className="download-button-container">
          <Button
            variant="contained"
            endIcon={<DownloadIcon />}
            href={resumePDF}
            download="donna_virtudez-cv.pdf"
            sx={{
              float: "center",
              backgroundColor: "white",
              color: "#050f0b",
              borderRadius: "4px",
              transition: "all 0.2s ease",

              "&:hover": {
                backgroundColor: "#585858",
                color: "white",
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
              },
            }}
            className="download-button"
          >
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
