import React, { useContext } from "react";
import { ThemeMode } from "../../../components/ThemeProvider/ThemeProvider";
import Intro from "./Intro/Intro";
import selfie from "../../../assets/self.jpg";
import styles from "./LandingPage.module.scss";

export default function LandingPage() {
  const { theme } = useContext(ThemeMode);
  return (
    <ThemeMode.Consumer>
      {(context) => (
        <div className={theme ? styles.DarkMode : styles.LightMode}>
          <div className={styles.LandingPage}>
            <div className={styles.LandingIntro}>
              <h1 className={styles.FirstName}>Karolis</h1>
              <h2 className={styles.LastName}>Kimtys</h2>
              <h5 className={styles.Title}>Junior Front End Web Developer</h5>

              <div className={styles.Overlay} />
              <img className={styles.Selfie} src={selfie} alt="Selfie" />
            </div>
            <Intro />
          </div>
        </div>
      )}
    </ThemeMode.Consumer>
  );
}
