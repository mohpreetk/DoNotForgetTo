import { FaLongArrowAltRight } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import "../stylesheets/Header.css";
import { useState, useEffect } from "react";
import landingImage from "../images/landingImage.jpeg";

function Header() {
  const [responsive, setResponsive] = useState(() => {
    if (window.matchMedia("(max-width: 600px)").matches) {
      return "nav responsiveNav";
    } else {
      return "nav";
    }
  });

  const handler = () => {
    if (window.matchMedia("(max-width: 600px)").matches) {
      setResponsive("nav responsiveNav");
    } else {
      setResponsive("nav");
    }
  };

  useEffect(() => {
    return () => {};
  }, [responsive]);

  window.matchMedia("(max-width: 600px)").addEventListener("change", handler);

  return (
    <>
      <nav className={responsive}>
        <h1>Do Not Forget To ...</h1>
        <div className="navbox">
          <button className="menu" title="Menu">
            <CgMenu />
          </button>
          <div className="navLinks">
            <a href="#top" className="navitem" title="Home">
              Home
            </a>
            <a href="#about" className="navitem" title="About">
              About
            </a>
            <a href="#reminders" className="navitem" title="Reminders">
              Reminders
            </a>
          </div>
        </div>
      </nav>
      <section className="header-section">
        <p>Working from Home?</p>
        <p>Always prioritizing work over Yourself?</p>
        <p>Say No More!</p>
        <p>
          We will remind you to Drink Water, Take a
          Break and Go for a Refreshing Walk.
        </p>
        <button className="getStarted">
          Let's Get Started <FaLongArrowAltRight className="icon" />
        </button>
      </section>
    </>
  );
}

export default Header;
