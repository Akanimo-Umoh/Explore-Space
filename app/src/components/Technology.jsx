import React, { useState } from "react";
import "../styles/Technology.css";
import Vehicle from "../assets/technology/image-launch-vehicle-portrait.jpg";
import Capsule from "../assets/technology/image-space-capsule-portrait.jpg";
import Spaceport from "../assets/technology/image-spaceport-portrait.jpg";
import VehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import CapsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";
import SpaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import AnimatedPage from "../AnimatedPage";

const Technology = () => {
  const [toggleTech, setToggleTech] = useState(1);

  const handleClick = (index) => {
    setToggleTech(index);
  };

  return (
    <div className="technology_ctn">
      <AnimatedPage>
        <div className="space_launch">
          <span>03</span> SPACE LAUNCH 101
        </div>

        <div className="main_ctn">
          <div className="primaryTech_ctn">
            <div className="tech_index">
              <div
                onClick={() => handleClick(1)}
                className={toggleTech === 1 ? "num active_num" : "num"}
              >
                <p>
                  <span>1</span>
                </p>
              </div>
              <div
                onClick={() => handleClick(2)}
                className={toggleTech === 2 ? "num active_num" : "num"}
              >
                <p>
                  <span>2</span>
                </p>
              </div>
              <div
                onClick={() => handleClick(3)}
                className={toggleTech === 3 ? "num active_num" : "num"}
              >
                <p>
                  <span>3</span>
                </p>
              </div>
            </div>

            <div className="tech_ctn">
              <div
                className={
                  toggleTech === 1 ? "tech_abt active_tech_abt " : "tech_abt"
                }
              >
                <p className="terminology">THE TERMINOLOGY...</p>
                <p className="launch">LAUNCH VEHICLE</p>
                <p className="tech_details">
                  A launch vehicle or carrier rocket is a rocket-propelled
                  vehicle used to carry a payload from Earth's surface to space,
                  usually to Earth orbit or beyond. Our WEB-X carrier rocket is
                  the most powerful in operation. Standing 150 metres tall, it's
                  quite an awe-inspiring sight on the launch pad!
                </p>
              </div>

              <div
                className={
                  toggleTech === 2 ? "tech_abt active_tech_abt" : "tech_abt"
                }
              >
                <p className="terminology">THE TERMINOLOGY...</p>
                <p className="launch">SPACEPORT</p>
                <p className="tech_details">
                  A spaceport or cosmodrome is a site for launching (or
                  receiving) spacecraft, by analogy to the seaport for ships or
                  airport for aircraft. Based in the famous Cape Canaveral, our
                  spaceport is ideally situated to take advantage of the Earth’s
                  rotation for launch.
                </p>
              </div>

              <div
                className={
                  toggleTech === 3 ? "tech_abt active_tech_abt" : "tech_abt"
                }
              >
                <p className="terminology">THE TERMINOLOGY...</p>
                <p className="launch">SPACE CAPSULE</p>
                <p className="tech_details">
                  A space capsule is an often-crewed spacecraft that uses a
                  blunt-body reentry capsule to reenter the Earth's atmosphere
                  without wings. Our capsule is where you'll spend your time
                  during the flight. It includes a space gym, cinema, and plenty
                  of other activities to keep you entertained.
                </p>
              </div>
            </div>
          </div>

          <div className="techImgCtn">
            <picture>
              <source media="(max-width: 1023px)" srcSet={VehicleLandscape} />
              <img
                src={Vehicle}
                alt=""
                className={
                  toggleTech === 1 ? "techImg active_techImg" : "techImg"
                }
              />
            </picture>

            <picture>
              <source media="(max-width: 1023px)" srcSet={SpaceportLandscape} />
              <img
                src={Spaceport}
                alt=""
                className={
                  toggleTech === 2 ? "techImg active_techImg" : "techImg"
                }
              />
            </picture>

            <picture>
              <source media="(max-width: 1023px)" srcSet={CapsuleLandscape} />
              <img
                src={Capsule}
                alt=""
                className={
                  toggleTech === 3 ? "techImg active_techImg" : "techImg"
                }
              />
            </picture>
          </div>
        </div>
      </AnimatedPage>
    </div>
  );
};

export default Technology;
