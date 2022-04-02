import styles from "../stylesheets/about.module.css";
import thinkPositive from "../images/thinkPositive.png";
import { useState, useEffect } from "react";

function About() {
  const [responsive, setResponsive] = useState(() => {
    if (window.matchMedia("(max-width: 600px)").matches) {
      return styles.responsive + " " + styles.section;
    } else {
      return styles.section;
    }
  });

  const handler = () => {
    if (window.matchMedia("(max-width: 600px)").matches) {
      setResponsive(styles.responsive + " " + styles.section);
    } else {
      setResponsive(styles.section);
    }
  };

  useEffect(() => {
    return () => {};
  }, [responsive]);

  window.matchMedia("(max-width: 600px)").addEventListener("change", handler);

  return (
    <>
      <section className={responsive}  id="about">
        <div className={styles.left}>
          <h2 className={styles.lefth2}>ABOUT</h2>
          <h2 className={styles.lefth2}>US</h2>
        </div>
        <div className={styles.right}>
          <h2 className={styles.righth2}>WE REMIND YOU TO</h2>
          <img src={thinkPositive} alt="Think Positive Illustration" className={styles.thinkPositive}/>
        </div>
      </section>
    </>
  );
}

export default About;
