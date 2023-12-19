import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Nav.css";
import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";

function Navbar() {
  const links = [
    {
      id: 0,
      span: "00",
      title: "HOME",
      to: "/",
    },
    {
      id: 1,
      span: "01",
      title: "DESTINATION",
      to: "/destination",
    },
    {
      id: 2,
      span: "02",
      title: "CREW",
      to: "/crew",
    },
    {
      id: 3,
      span: "03",
      title: "TECHNOLOGY",
      to: "/technology",
    },
  ];

  const [toggle, setToggle] = useState(false);
  const mobileRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      // Check if the toggle button or its children were clicked
      if (
        mobileRef.current &&
        !mobileRef.current.contains(event.target) &&
        event.target.className !== "menu_img"
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [toggle]);

  return (
    <div className="nav-ctn">
      <nav className="nav">
        <Link to="/">
          <img src={logo} alt="logo" className="logo-ctn" />
        </Link>

        <div className="border"></div>

        <div className="primary-nav">
          <div className="primary-nav-ctn desktop">
            {links.map((link) => (
              <NavLink key={link.id} to={link.to}>
                <span>{link.span}</span>&nbsp;{link.title}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="menu">
          <img
            src={toggle ? close : menu}
            className="menu_img"
            alt="menu"
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>

        <div ref={mobileRef} className={`mobile ${toggle ? "mobileOpen" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.id}
              to={link.to}
              onClick={() => setToggle((prev) => !prev)}
            >
              <span>{link.span}</span>&nbsp;
              {link.title}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
