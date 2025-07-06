import React, { useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Telegram";
import TextField from "@mui/material/TextField";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [subjectError, setSubjectError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const subjectEmpty = subject === "";
    const emailEmptyOrInvalid = email === "" || !isValidEmail(email);
    const nameEmpty = name === "";
    const messageEmpty = message === "";

    setSubjectError(subjectEmpty);
    setEmailError(emailEmptyOrInvalid);
    setNameError(nameEmpty);
    setMessageError(messageEmpty);

    if (subjectEmpty || emailEmptyOrInvalid || nameEmpty || messageEmpty) {
      return;
    }

    const serviceID = "service_r93wo3u";
    const templateID = "template_usx001g";
    const publicKey = "nG3hySnt5t0YAQ1Ef";

    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (response) => {
        console.log("Email sent successfully:", response.status, response.text);
        toast.success("Message sent successfully!");
      },
      (error) => {
        console.error("Failed to send email:", error);
        toast.error("Failed to send a message!");
      }
    );

    setSubject("");
    setEmail("");
    setName("");
    setMessage("");

    setSubjectError(false);
    setEmailError(false);
    setNameError(false);
    setMessageError(false);
  };

  return (
    <div id="contact">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>
          Feel free to reach out if you would like to discuss potential
          opportunities!
        </p>

        <Box
          component="form"
          noValidate
          onSubmit={sendEmail}
          className="contact-form"
        >
          <div className="form-flex">
            <TextField
              required
              variant="filled"
              label="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              error={subjectError}
              helperText={subjectError ? "Please enter your subject" : ""}
              fullWidth
            />
          </div>
          <div className="form-flex">
            <TextField
              required
              variant="filled"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              helperText={
                emailError ? "Please enter a valid email address" : ""
              }
              fullWidth
            />
          </div>
          <div className="form-flex">
            <TextField
              required
              variant="filled"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={nameError}
              helperText={nameError ? "Please enter your name" : ""}
              fullWidth
            />
          </div>
          <div className="form-flex">
            <TextField
              required
              variant="filled"
              label="Message"
              multiline
              rows={4}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter your message" : ""}
              fullWidth
            />
          </div>
          <div className="button-wrapper">
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send Message
            </Button>
          </div>
        </Box>

        <ToastContainer
          position="bottom-center"
          autoClose={1500}
          hideProgressBar={false}
        />
      </div>
    </div>
  );
}

export default Contact;
