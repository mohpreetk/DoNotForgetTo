import "../stylesheets/Home.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="home-section">
        <p>Working from Home?</p>
        <p>Always prioritizing work over Yourself?</p>
        <p>Say No More!</p>
        <p>
          We will remind you to Drink Water, Take a Break and Go for a
          Refreshing Walk.
        </p>
        <button className="getStarted">
        <Link to="/reminders" className="getStartedLink">Let's Get Started <FaLongArrowAltRight className="icon" /></Link>
        </button>
      </section>
    </>
  );
}

export default Home;
