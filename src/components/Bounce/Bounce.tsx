import { useContext } from "react";
import styles from "./Bounce.module.scss";
import { ThemeMode } from "../ThemeProvider/ThemeProvider";
import { motion } from "framer-motion";

const box = {
  hidden: {
    opacity: 0,
    // x: -5,
    scale: -0.25,
  },
};

export default function Bounce(props: any) {
  const { theme } = useContext(ThemeMode);
  return (
    <ThemeMode.Consumer>
      {(context) => (
        <div className={styles.Bounce}>
          {props.bounce.split("").map(function (char: any, index: number) {
            return (
              <div
                key={index}
                className={theme ? styles.DarkMode : styles.LightMode}
              >
                <motion.div
                  layout
                  key={index}
                  variants={box}
                  initial="hidden"
                  animate={{
                    color: theme ? "rgb(34, 40, 49)" : "rgb(242, 163, 101)",
                    scale: 1,
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: index * 0.05,
                      duration: 1.5,
                      ease: [0.42, 0, 0.58, 1],
                    },
                  }}
                  exit="hidden"
                >
                  <div key={index}>{char}</div>
                </motion.div>
              </div>
            );
          })}
        </div>
      )}
    </ThemeMode.Consumer>
  );
}
