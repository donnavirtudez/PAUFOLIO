import React, { useState, useEffect } from "react";
import avatar from "../assets/images/avatar.png";
import GmailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

function Main() {
  const [currentText, setCurrentText] = useState<string>("");
  const [wordIndex, setWordIndex] = useState<number>(0);
  const words = [
    "Coding Enthusiast",
    "Web Developer",
    "Database Developer",
    "Passionate Learner",
    "Growth-Oriented",
  ];
  const typingDelay = 100;
  const pauseDelay = 1000;

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;

    const typeWord = (word: string, letterIndex: number = 0) => {
      if (letterIndex < word.length) {
        setCurrentText((prevText) => prevText + word[letterIndex]);
        typingTimeout = setTimeout(
          () => typeWord(word, letterIndex + 1),
          typingDelay
        );
      } else {
        setTimeout(() => {
          setCurrentText("");
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, pauseDelay);
      }
    };

    const currentWord = words[wordIndex];
    setCurrentText("");
    typeWord(currentWord);

    return () => clearTimeout(typingTimeout);
  }, [wordIndex]);

  return (
    <div className="container" id="home">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
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

          <h1>
            Donna Virtudez{" "}
            <img
              src="https://em-content.zobj.net/source/apple/354/waving-hand_1f44b.png"
              alt="Waving Hand"
              className="wave"
            />
          </h1>

          <p>{currentText}</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
