import React from "react";
import "./Work.css";

import Glam from "../../../assets/Glam.png";
import Hoopup from "../../../assets/Hoopup.png";
import Realtor from "../../../assets/Realtor.png";
import Travel from "../../../assets/Travel.png";
import Weatherapp from "../../../assets/Weatherapp.png";
import Creations from "../../../assets/Creations.png";

import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import { Link } from "react-router-dom";

function Work() {
  return (
    <div className="work-container">
      <div className="work-header">
        <h1>My Recent Work</h1>
        <p>
          Here are a few projects I've worked on. Want to see more?
          <a href="mailto:ramtinnorozzy@gmail.com"> Email me.</a>
        </p>
      </div>
      <div className="work-grid">
        <div className="columns">
          <div className="column">
            <figure>
              <img src={Glam} alt="Freelance Makeup Artist App" />
              <figcaption>
                <h1>
                  <em>GlamBySam</em> - Independent makeup artist, servicing all
                  types of events with top quality no matter the venue size.
                </h1>
                <a
                  className="button"
                  href="https://www.glambysamx.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Visit Website</span>
                  <span>
                    <NavigateNextOutlinedIcon />
                  </span>
                </a>
              </figcaption>
              <div className="overlay"></div>
            </figure>
          </div>
          <div className="column">
            <figure>
              <img src={Travel} alt="Travel Advisor App" />
              <figcaption>
                <h1>
                  <em>TravelUp</em> - Travel advisory application to locate
                  popular restaurants, hotels, and attractions.
                </h1>
                <a
                  className="button"
                  href="https://cheery-pothos-c045ce.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Visit Website</span>
                  <span>
                    <NavigateNextOutlinedIcon />
                  </span>
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="column">
            <figure>
              <img src={Hoopup} alt="Pickup Basketball App" />
              <figcaption>
                <h1>
                  <em>HoopUp</em> - Users can create an account, create posts,
                  submit messages, and locate basketball courts to play pickup
                  basketball.
                </h1>
                <a
                  className="button"
                  href="https://hoopup-85085.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Visit Website</span>
                  <span>
                    <NavigateNextOutlinedIcon />
                  </span>
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="column">
            <figure>
              <img src={Realtor} alt="Realtor App" />
              <figcaption>
                <h1>
                  <em>Realtor</em> - Real estate property application to pull
                  and filter property details in the UAE.
                </h1>
                <a
                  className="button"
                  href="https://realestate-ramskers.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Visit Website</span>
                  <span>
                    <NavigateNextOutlinedIcon />
                  </span>
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="column">
            <figure>
              <img src={Weatherapp} alt="Weather App" />
              <figcaption>
                <h1>
                  <em>WeatherApp</em> - Weather application allows users to pull
                  weather data from any international location.
                </h1>
                <a
                  className="button"
                  href="https://ramskers.github.io/weather-web/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Visit Website</span>
                  <span>
                    <NavigateNextOutlinedIcon />
                  </span>
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="column">
            <figure>
              <img src={Creations} alt="Creations By Sam App" />
              <figcaption>
                <h1>
                  <em>CreationsBySam</em> - Ecommerce application selling
                  personalized tumblers, pens, and shirts.
                </h1>
                <a
                  className="button"
                  href="https://ramskers.github.io/weather-web/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Visit Website</span>
                  <span>
                    <NavigateNextOutlinedIcon />
                  </span>
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="column is-centered">
            <Link className="button big" to="/project">
              <span>See more</span>
              <span>
                <NavigateNextOutlinedIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
