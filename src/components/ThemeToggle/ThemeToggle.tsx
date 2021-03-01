import React, { useContext } from "react";
import { ThemeMode } from "../ThemeProvider/ThemeProvider";
import styles from "./ThemeToggle.module.scss";
import Sun from "../../assets/Sun";
import Moon from "../../assets/Moon";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeMode);

  console.log(theme);

  const duration = 0.5;

  const moon = {
    hidden: { opacity: 0, x: 0, transition: { duration: duration } },
    visible: { opacity: 1, x: 15, transition: { duration: duration } },
  };
  const sun = {
    hidden: { opacity: 0, x: 15, transition: { duration: duration } },
    visible: { opacity: 1, x: 0, transition: { duration: duration } },
  };

  return (
    <ThemeMode.Consumer>
      {(context) => (
        <div className={theme ? styles.DarkMode : styles.LightMode}>
          <div onClick={toggleTheme} className={styles.Toggle}>
            {theme ? (
              <motion.div
                className={styles.Icon}
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={moon}
              >
                <Moon />
              </motion.div>
            ) : (
              <motion.div
                className={styles.Icon}
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={sun}
              >
                <Sun />
              </motion.div>
            )}
          </div>
        </div>
      )}
    </ThemeMode.Consumer>
  );
}
