import "./Contact.css";
import React, { useState } from "react";

function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  console.log(contactData);

  return (
    <div className="contact" id="contact">
      <h3>Lets Have a Chat</h3>
      <form>
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
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
