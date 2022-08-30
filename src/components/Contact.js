import "./Contact.css";
import React, { useState, useRef } from "react";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";

function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setContactData({
      name: "",
      email: "",
      message: "",
    });
    emailjs
      .sendForm(
        "service_697szpe",
        "template_14axnup",
        form.current,
        "e6RQN-wYMa77xnrzp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div className="contact" id="contact">
      <h3>Lets Have a Chat</h3>
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={contactData.name}
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contactData.email}
          required
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={contactData.message}
          cols="30"
          rows="10"
          required
          onChange={handleChange}
        />
        <button type="submit">
          Send
          <SendIcon />
        </button>
      </form>
    </div>
  );
}

export default Contact;
