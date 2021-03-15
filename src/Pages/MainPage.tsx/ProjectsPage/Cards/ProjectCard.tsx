import { useContext } from "react";
import styles from "./ProjectCard.module.scss";
import { ThemeMode } from "../../../../components/ThemeProvider/ThemeProvider";
import { motion } from "framer-motion";

export default function ProjectCard() {
  const { theme } = useContext(ThemeMode);

  return (
    <ThemeMode.Consumer>
      {(context) => (
        <div className={theme ? styles.DarkMode : styles.LightMode}>
          <div className={styles.ProjectCards}>
            <motion.div
              className={styles.SmallLeft}
              layout
              key={1}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 0.5,
                },
              }}
            />

            <motion.div
              className={styles.ProjectCard1}
              layout
              key={2}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.25,
                  duration: 0.5,
                },
              }}
            />

            <motion.div
              className={styles.ProjectCard2}
              layout
              key={3}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0,
                  duration: 0.5,
                },
              }}
            />

            <motion.div
              className={styles.ProjectCard3}
              layout
              key={4}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.25,
                  duration: 0.5,
                },
              }}
            />

            <motion.div
              className={styles.SmallRight}
              layout
              key={5}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 0.5,
                },
              }}
            />
          </div>
        </div>
      )}
    </ThemeMode.Consumer>
  );
}
