import React from "react";
import "./Skills.css";

// MAterial UI Icons
import TerminalOutlinedIcon from "@mui/icons-material/Terminal";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";

function Skills() {
  return (
    <div className="skills-container">
      <div>
        <TerminalOutlinedIcon
          style={{
            borderRadius: "50%",
            backgroundColor: "#648c94",
            color: "#fff",
            padding: "14px",
            width: "72px",
            height: "72px",
          }}
        />
        <h3>Frontend Development</h3>
        <p>
          I like to code my web applications from scratch, and enjoy bringing
          ideas to life on the web.
        </p>
        <p className="list-title">Languages I speak:</p>
        <p>HTML, CSS, JavaScript, TypeScript, ReactJS, NextJS, NodeJS, Git</p>
        <p className="list-title">Dev Tools:</p>
        <ul>
          <li>Visual Studio Code</li>
          <li>Vercel</li>
          <li>Bootstrap</li>
          <li>Material UI</li>
          <li>Framer Motion</li>
          <li>Google Fonts</li>
          <li>Unsplash</li>
          <li>GitHub</li>
        </ul>
      </div>
      <div className="middle-box">
        <ApiOutlinedIcon
          style={{
            borderRadius: "50%",
            backgroundColor: "#648c94",
            color: "#fff",
            padding: "14px",
            width: "72px",
            height: "72px",
          }}
        />
        <h3>Backend Development</h3>
        <p>
          I prioritize performance, focusing on databases, back-end logic, APIs,
          architecture, and servers.
        </p>
        <p className="list-title">Backend languages:</p>
        <p>NodeJS, JavaScript, Ruby on Rails, API's, BaaS</p>
        <p className="list-title">Backend Tools:</p>
        <ul>
          <li>Firebase</li>
          <li>Stripe</li>
          <li>Sanity</li>
          <li>Oracle</li>
        </ul>
      </div>
      <div>
        <DesignServicesOutlinedIcon
          style={{
            borderRadius: "50%",
            backgroundColor: "#648c94",
            color: "#fff",
            padding: "14px",
            width: "72px",
            height: "72px",
          }}
        />
        <h3>UI/UX</h3>
        <p>
          I value simple content structure, clean design patterns, and
          thoughtful interactions.
        </p>
        <p className="list-title">Things I enjoy designing:</p>
        <p>UX, UI, Websites, Logos</p>
        <p className="list-title">Design Tools:</p>
        <ul>
          <li>Figma</li>
          <li>Font Awesome</li>
          <li>Adobe XD</li>
          <li>Chakra UI</li>
          <li>Pen and Paper</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
