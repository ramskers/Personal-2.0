import React from "react";
import "./Contact.css";

export default function Contact() {
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }
  return (
    <div className="contact-container">
      <main className="contact-main">
        <h1 className="contact-title">Contact Me</h1>

        <p className="contact-description">Please be human!</p>

        <div className="contact-grid">
          <style jsx>{`
            form {
              font-size: 1.2em;
              width: 800px;
            }

            label {
              display: block;
              margin-bottom: 0.2em;
            }

            input,
            textarea {
              width: 100%;
              padding: 0.8em;
              background-color: #eff6ff;
              border-radius: 6px;
            }

            .contactBtn {
              color: #143aa2;
              font-size: 1em;

              padding: 0.8em 1em;
              border: 2px #143aa2 solid;
              margin-top: 2rem;
              border-radius: 9999px;
              cursor: pointer;
              width: 50%;
            }

            .contactBtn:hover {
              background-color: #143aa2;
              color: #ffffff;
            }
          `}</style>
          <form onSubmit={handleOnSubmit}>
            <p>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input id="email" type="text" name="email" />
            </p>
            <p>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" />
            </p>
            <p className="contact-btn">
              <button className="contactBtn">Submit</button>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
