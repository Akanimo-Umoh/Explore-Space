import React from "react";
import "../styles/Destination.css";
import Tabs from "./Tabs";
import AnimatedPage from "../AnimatedPage";

const Destination = () => {
  // const destinations = [
  //   {
  //     id: 1,
  //     image: moon,
  //     location: "MOON",
  //     title: "MOON",
  //     about:
  //       "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  //     avg_distance: "384,400 KM",
  //     travel_time: "3 DAYS",
  //   },

  //   {
  //     id: 2,
  //     image: mars,
  //     location: "MARS",
  //     title: "MARS",
  //     about:
  //       "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
  //     avg_distance: "225 MIL. KM",
  //     travel_time: "9 MONTHS",
  //   },

  //   {
  //     id: 3,
  //     image: europa,
  //     location: "EUROPA",
  //     title: "EUROPA",
  //     about:
  //       "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
  //     avg_distance: "628 MIL. KM",
  //     travel_time: "3 YEARS",
  //   },
  //   {
  //     id: 4,
  //     image: titan,
  //     location: "TITAN",
  //     title: "TITAN",
  //     about:
  //       "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
  //     avg_distance: "1.6 BIL. KM",
  //     travel_time: "7 YEARS",
  //   },
  // ];

  return (
    <div className="dest_ctn">
      <AnimatedPage>
        <div className="pick_ctn">
          <span>01</span> PICK YOUR DESTINATION
        </div>

        <div className="about_ctn">
          <Tabs />
        </div>
      </AnimatedPage>
    </div>
  );
};

export default Destination;
