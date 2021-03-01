
import { AnimatePresence, motion } from "framer-motion";
import styles from "./LoadingLogo.module.scss";


const box = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1 },
  },
};

const OrangeLine = {
  hidden: {
    pathLength: 0,
    pathOffset: 1,
  },
  visible: {
    pathLength: 1,
    pathOffset: 0,
    transition: {
      delay: 1,
      duration: 1.5,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

const FirstBlue = {
  hidden: {
    pathLength: 0,
    pathOffset: 1,
  },
  visible: {
    pathLength: 1,
    pathOffset: 2,
    transition: {
      delay: 2,
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

const SecondBlue = {
  hidden: {
    pathLength: 0,
    pathOffset: 1,
  },
  visible: {
    pathLength: 1,
    pathOffset: 0,
    transition: {
      delay: 1,
      duration: 1.5,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

const ThirdBlue = {
  hidden: {
    pathLength: 0,
    pathOffset: 1,
  },
  visible: {
    pathLength: 1,
    pathOffset: 2,
    transition: {
      delay: 2,
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

export default function LoadingPage() {
  return (
    <div className={styles.Logo}>
      <AnimatePresence>
        <motion.svg
          className={styles.Box}
          layout
          key="1"
          width="150"
          height="80"
          viewBox="-3 -0.5 130 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={box}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.rect
            width="120"
            height="80"
            x="1"
            rx="5"
            ry="5"
            fill="#C4C4C4"
            variants={box}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
        </motion.svg>

        <motion.svg
          className={styles.OrangeLine}
          key="2"
          width="100"
          height="80"
          viewBox="0 -3.5 100 86"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="transparent" strokeWidth="7">
            <motion.path
              d="M1 0V80"
              stroke="#C24D2C"
              variants={OrangeLine}
              initial="hidden"
              animate="visible"
            />
          </g>
        </motion.svg>

        <motion.svg
          className={styles.FirstBlue}
          key="2"
          width="100"
          height="80"
          viewBox="0 0 100 80"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="transparent" strokeWidth="10">
            <motion.path
              d="M1 0V80"
              stroke="#1A2639"
              variants={FirstBlue}
              initial="hidden"
              animate="visible"
            />
          </g>
        </motion.svg>

        <motion.svg
          className={styles.SecondBlue}
          key="3"
          width="6"
          height="150"
          viewBox="0 0 2 150"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="transparent" strokeWidth="10">
            <motion.path
              d="M1 150L1 4.29153e-06"
              stroke="#1A2639"
              variants={SecondBlue}
              initial="hidden"
              animate="visible"
            />
          </g>
        </motion.svg>

        <motion.svg
          className={styles.ThirdBlue}
          key="3"
          width="6"
          height="150"
          viewBox="0 0 2 150"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="transparent" strokeWidth="10">
            <motion.path
              d="M1 150L1 4.29153e-06"
              stroke="#1A2639"
              // stroke="red"
              variants={ThirdBlue}
              initial="hidden"
              animate="visible"
            />
          </g>
        </motion.svg>
      </AnimatePresence>
    </div>
  );
}
