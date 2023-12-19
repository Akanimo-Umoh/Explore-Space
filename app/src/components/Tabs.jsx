import React, { useState } from "react";
import moon from "../assets/destination/image-moon.webp";
import mars from "../assets/destination/image-mars.webp";
import titan from "../assets/destination/image-titan.webp";
import europa from "../assets/destination/image-europa.webp";
import AnimatedPage from "../AnimatedPage";

function Tabs() {
  const [toggle, setToggle] = useState(1);

  const handleToggle = (index) => {
    setToggle(index);
  };

  return (
    <AnimatedPage>
      <div className="info_ctn">
        <div className="planet_ctn">
          <img
            src={moon}
            alt=""
            className={toggle === 1 ? "image active_image" : "image"}
          />
          <img
            src={mars}
            alt=""
            className={toggle === 2 ? "image active_image" : "image"}
          />
          <img
            src={europa}
            alt=""
            className={toggle === 3 ? "image active_image" : "image"}
          />
          <img
            src={titan}
            alt=""
            className={toggle === 4 ? "image active_image" : "image"}
          />
        </div>
        <div className="container">
          <div className="bloc_tabs">
            <div
              className={toggle === 1 ? "tabs active_tabs" : "tabs"}
              onClick={() => handleToggle(1)}
            >
              MOON
            </div>

            <div
              className={toggle === 2 ? "tabs active_tabs" : "tabs"}
              onClick={() => handleToggle(2)}
            >
              MARS
            </div>
            <div
              className={toggle === 3 ? "tabs active_tabs" : "tabs"}
              onClick={() => handleToggle(3)}
            >
              EUROPA
            </div>
            <div
              className={toggle === 4 ? "tabs active_tabs" : "tabs"}
              onClick={() => handleToggle(4)}
            >
              TITAN
            </div>
          </div>

          <div className="content_tabs">
            <div
              className={toggle === 1 ? "content active_content" : "content"}
            >
              <p className="planet_name">MOON</p>
              <p className="about_planet">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>

              <hr className="hr" />

              <div className="planet_est">
                <div className="avg_ctn">
                  <p className="title">AVG. DISTANCE</p>
                  <p className="dist">384,400KM</p>
                </div>

                <div className="est_time">
                  <p className="title">EST. TRAVEL TIME</p>
                  <p className="dist">3 DAYS</p>
                </div>
              </div>
            </div>

            <div
              className={toggle === 2 ? "content active_content" : "content"}
            >
              <p className="planet_name">MARS</p>
              <p className="about_planet">
                Don’t forget to pack your hiking boots. You’ll need them to
                tackle Olympus Mons, the tallest planetary mountain in our solar
                system. It’s two and a half times the size of Everest!
              </p>

              <hr className="hr" />

              <div className="planet_est">
                <div className="avg_ctn">
                  <p className="title">AVG. DISTANCE</p>
                  <p className="dist">225 MIL. KM</p>
                </div>

                <div className="est_time">
                  <p className="title">EST. TRAVEL TIME</p>
                  <p className="dist">9 MONTHS</p>
                </div>
              </div>
            </div>

            <div
              className={toggle === 3 ? "content active_content" : "content"}
            >
              <p className="planet_name">EUROPA</p>
              <p className="about_planet">
                The smallest of the four Galilean moons orbiting Jupiter, Europa
                is a winter lover’s dream. With an icy surface, it’s perfect for
                a bit of ice skating, curling, hockey, or simple relaxation in
                your snug wintery cabin.
              </p>

              <hr className="hr" />

              <div className="planet_est">
                <div className="avg_ctn">
                  <p className="title">AVG. DISTANCE</p>
                  <p className="dist">628 MIL. KM</p>
                </div>

                <div className="est_time">
                  <p className="title">EST. TRAVEL TIME</p>
                  <p className="dist">3 YEARS</p>
                </div>
              </div>
            </div>

            <div
              className={toggle === 4 ? "content active_content" : "content"}
            >
              <p className="planet_name">TITAN</p>
              <p className="about_planet">
                The only moon known to have a dense atmosphere other than Earth,
                Titan is a home away from home (just a few hundred degrees
                colder!). As a bonus, you get striking views of the Rings of
                Saturn.
              </p>

              <hr className="hr" />

              <div className="planet_est">
                <div className="avg_ctn">
                  <p className="title">AVG. DISTANCE</p>
                  <p className="dist">1.6 BIL. KM</p>
                </div>

                <div className="est_time">
                  <p className="title">EST. TRAVEL TIME</p>
                  <p className="dist">7 YEARS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Tabs;
