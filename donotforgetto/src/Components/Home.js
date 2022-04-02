import "../stylesheets/Home.css";
import { FaLongArrowAltRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

function Home() {
  return (
    <>
      <section className="home-section" id="home">
        <p>Working from Home?</p>
        <p>Always prioritizing work over Yourself?</p>
        <p>Say No More!</p>
        <p>
          We will remind you to Drink Water, Take a Break and Go for a
          Refreshing Walk.
        </p>
        <button className="getStarted">
          <Link
            to="reminders"
            className="getStartedLink"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={50}
          >
            Let's Get Started <FaLongArrowAltRight className="icon" />
          </Link>
        </button>
      </section>
    </>
  );
}

export default Home;
