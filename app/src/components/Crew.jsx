import React, { useState } from "react";
import "../styles/Crew.css";
import douglas from "../assets/crew/image-douglas-hurley.webp";
import anousheh from "../assets/crew/image-anousheh-ansari.webp";
import mark from "../assets/crew/image-mark-shuttleworth.webp";
import victor from "../assets/crew/image-victor-glover.webp";
import AnimatedPage from "../AnimatedPage";

function Crew() {
  // const teams = [
  //   {
  //     id: 1,
  //     title: "COMMANDER",
  //     name: "DOUGLAS HURLEY",
  //     about:
  //       "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  //     image: douglas,
  //   },
  //   {
  //     id: 2,
  //     title: "MISSION SPECIALIST",
  //     name: "MARK SHUTTLEWORTH",
  //     about:
  //       "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  //     image: mark,
  //   },

  //   {
  //     id: 3,
  //     title: "PILOT",
  //     name: "VICTOR GLOVER",
  //     about:
  //       "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  //     image: victor,
  //   },

  //   {
  //     id: 4,
  //     title: "FLIGHT ENGINEER",
  //     name: "ANOUSHEH ANSARI",
  //     about:
  //       "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  //     image: anousheh,
  //   },
  // ];

  const [toggleCrew, setToggleCrew] = useState(1);

  const handleToggle = (index) => {
    setToggleCrew(index);
  };

  return (
    <AnimatedPage>
      <div className="crew_ctn">
        <div className="crew_main">
          <div className="meet">
            <span>02</span> MEET YOUR CREW
          </div>

          <div className="crew_info">
            <div className={toggleCrew === 1 ? "activeCrew" : "crewContent"}>
              <p className="crew_title">COMMANDER</p>

              <p className="crew_name">DOUGLAS HURLEY</p>

              <p className="crew_abt douglas">
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
              </p>
            </div>

            <div className={toggleCrew === 2 ? "activeCrew" : "crewContent"}>
              <p className="crew_title">MISSION SPECIALIST</p>

              <p className="crew_name">MARK SHUTTLEWORTH</p>

              <p className="crew_abt mark">
                Mark Richard Shuttleworth is the founder and CEO of Canonical,
                the company behind the Linux-based Ubuntu operating system.
                Shuttleworth became the first South African to travel to space
                as a space tourist.
              </p>
            </div>

            <div className={toggleCrew === 3 ? "activeCrew" : "crewContent"}>
              <p className="crew_title">PILOT</p>

              <p className="crew_name">VICTOR GLOVER</p>

              <p className="crew_abt victor">
                Pilot on the first operational flight of the SpaceX Crew Dragon
                to the International Space Station. Glover is a commander in the
                U.S. Navy where he pilots an F/A-18. He was a crew member of
                Expedition 64, and served as a station systems flight engineer.
              </p>
            </div>

            <div className={toggleCrew === 4 ? "activeCrew" : "crewContent"}>
              <p className="crew_title">FLIGHT ENGINEER</p>

              <p className="crew_name">ANOUSHEH ANSARI</p>

              <p className="crew_abt anousheh">
                Anousheh Ansari is an Iranian American engineer and &nbsp;
                co-founder of Prodea Systems. Ansari was the fourth self-funded
                space tourist, the first&nbsp;
                <br />
                self-funded woman to fly to the ISS, and the first Iranian in
                space.
              </p>
            </div>
          </div>

          <div className="circle_ctn">
            <div
              className={toggleCrew === 1 ? "circle active_circle" : "circle"}
              onClick={() => handleToggle(1)}
            ></div>
            <div
              className={toggleCrew === 2 ? "circle active_circle" : "circle"}
              onClick={() => handleToggle(2)}
            ></div>
            <div
              className={toggleCrew === 3 ? "circle active_circle" : "circle"}
              onClick={() => handleToggle(3)}
            ></div>
            <div
              className={toggleCrew === 4 ? "circle active_circle" : "circle"}
              onClick={() => handleToggle(4)}
            ></div>
          </div>
        </div>

        <div className="crew_img_ctn">
          <img
            className={
              toggleCrew === 1 ? "crew_img douglas_img" : "activeCrewImage"
            }
            src={douglas}
            alt="douglas"
          />
          <img
            className={
              toggleCrew === 2 ? "crew_img mark_img" : "activeCrewImage"
            }
            src={mark}
            alt="mark"
          />
          <img
            className={
              toggleCrew === 3 ? "crew_img victor_img" : "activeCrewImage"
            }
            src={victor}
            alt="victor"
          />
          <img
            className={
              toggleCrew === 4 ? "crew_img anousheh_img" : "activeCrewImage"
            }
            src={anousheh}
            alt="anousheh"
          />
        </div>
        <div className="meet mobile_meet">
          <span>02</span> MEET YOUR CREW
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Crew;
