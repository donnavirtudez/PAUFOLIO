import React from "react";
import GmailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <a
          href="mailto:donnavirtudez18@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <GmailIcon />
        </a>
        <a
          href="https://www.instagram.com/dddoughna/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://github.com/donnavirtudez"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/donnavirtudez"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p>© 2025 Donna Virtudez. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
