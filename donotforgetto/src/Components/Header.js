import { CgMenu } from "react-icons/cg";
import "../stylesheets/Header.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        <h1>Do Not Forget To...</h1>
        <div className="navbox">
          <button className="menu" title="Menu">
            <CgMenu />
          </button>
          <div className="navLinks">
          <Link to="/" className="navitem">Home</Link>
          <Link to="/about" className="navitem">About</Link>
          <Link to="/reminders" className="navitem">Reminders</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
