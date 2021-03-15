import { useContext } from "react";
import styles from "./Bounce.module.scss";
import { ThemeMode } from "../ThemeProvider/ThemeProvider";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const box = {
  hidden: {
    opacity: 0,
  },
};

export default function Bounce(props: any) {
  const { theme } = useContext(ThemeMode);

  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.45,
    triggerOnce: true,
  });

  const title = {
    visible: { opacity: 1, scale: 1, x: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      x: 50,
    },
  };

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
                  animate={inView ? "visible" : "hidden"}
                  variants={title}
                  transition={{
                    delay: index * 0.05,
                    duration: 1.5,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                  ref={ref}
                >
                  <motion.div
                    layout
                    key={index}
                    variants={box}
                    initial='hidden'
                    animate={{
                      color: theme
                        ? "rgb(242, 163, 101)"
                        : "rgb(236, 236, 236)",
                      scale: 1,
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: index * 0.05,
                        duration: 1.5,
                        ease: [0.42, 0, 0.58, 1],
                      },
                    }}
                    exit='hidden'
                  >
                    <div key={index}>{char}</div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      )}
    </ThemeMode.Consumer>
  );
}
