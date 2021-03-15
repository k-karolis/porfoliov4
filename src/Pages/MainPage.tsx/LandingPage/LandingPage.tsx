import React, { useContext } from "react";
import { ThemeMode } from "../../../components/ThemeProvider/ThemeProvider";
import Intro from "./Intro/Intro";
import Title from "../../../components/Title/Title";
import selfie from "../../../assets/self.jpg";
import styles from "./LandingPage.module.scss";
import { motion } from "framer-motion";
import Bounce from "../../../components/Bounce/Bounce";

export default function LandingPage() {
  const { theme } = useContext(ThemeMode);
  return (
    <ThemeMode.Consumer>
      {(context) => (
        <div className={theme ? styles.DarkMode : styles.LightMode}>
          <div className={styles.LandingPage}>
            <div className={styles.LandingIntro}>
              <div className={styles.Titles}>
                <Title first='Karolis' second='Kimtys' />
                <div className={styles.Title}>
                  <Bounce bounce={"Junior "} />
                  <Bounce bounce={"Front-End"} />
                  <Bounce bounce={"Web"} />
                  <Bounce bounce={"Developer"} />
                </div>
              </div>

              <motion.img
                className={styles.Selfie}
                src={selfie}
                alt='Selfie'
                layout
                key={1}
                initial={{
                  // opacity: 0,
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                  // opacity: 1,
                  transition: {
                    delay: 0.5,
                    duration: 0.5,
                  },
                }}
              />
            </div>
            <Intro />
          </div>
        </div>
      )}
    </ThemeMode.Consumer>
  );
}
