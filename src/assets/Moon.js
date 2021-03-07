import { motion, AnimatePresence } from "framer-motion";
import styles from "./svg.module.scss";
import { v4 as uuidv4 } from "uuid";

export default function Moon() {
  return (
    <AnimatePresence>
      <svg
        className={styles.Moon}
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="25"
        height="25"
        viewBox="0 0 512 512"
      >
        <motion.path
          whileHover={{
            rotate: [0, 36, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
            },
          }}
          layout
          key={uuidv4()}
          initial={{
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            opacity: 1,
            rotate: [0, 15, 0],
            transition: {
              duration: 2,
            },
          }}
          exit={{
            scale: 0,
            rotate: 45,
            opacity: 0,
          }}
          fill="#F2A365"
          d="M391.37,292.817c-48.362,48.362-126.774,48.362-175.136,0s-48.362-126.774,0-175.136
        c10.084-10.084,21.476-18.057,33.627-23.935c-39.798,1.061-79.279,16.774-109.653,47.147c-62.946,62.946-62.946,165.003,0,227.949
        s165.003,62.946,227.949,0c30.374-30.374,46.086-69.854,47.147-109.653C409.427,271.341,401.454,282.733,391.37,292.817z"
        />
        <g>
          <motion.polygon
            layout
            key={uuidv4()}
            initial={{
              scale: 0,
              rotate: 45,
              opacity: 0,
            }}
            animate={{
              scale: [1, 1.5, 0, 3, 0, 0.5, 0],
              rotate: -55,
              opacity: 1,
              transition: {
                duration: 5,
                repeat: Infinity,
                repeatDelay: 2,
              },
            }}
            exit={{
              scale: 0,
              rotate: 45,
              opacity: 0,
            }}
            fill="#ECECEC"
            points="355.804,153.568 361.513,205.217 367.224,153.568 418.873,147.859 367.224,142.148 
            361.513,90.499 355.804,142.148 304.154,147.859 	"
          />
          <motion.polygon
            key={uuidv4()}
            initial={{
              scale: 0,
              rotate: -190,
              opacity: 0,
            }}
            animate={{
              scale: [1, 0, 3, 0, 0.5, 0],
              rotate: 25,
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 5,
                repeat: Infinity,
                repeatDelay: 3,
              },
            }}
            fill="#ECECEC"
            points="112.365,410.626 116.455,447.623 120.545,410.626 157.542,406.536 120.545,402.446 
            116.455,365.449 112.365,402.446 75.368,406.536 	"
          />

          <rect
            x="243.188"
            y="248.208"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -106.4278 249.8396)"
            fill="#ECECEC"
            width="10.362"
            height="10.362"
          />

          <rect
            x="418.93"
            y="193.377"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -16.1825 358.0481)"
            fill="#ECECEC"
            width="10.362"
            height="10.362"
          />

          <rect
            x="450.017"
            y="284.419"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -71.4537 406.696)"
            fill="#ECECEC"
            width="10.362"
            height="10.362"
          />

          <rect
            x="76.067"
            y="124.535"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -67.9259 95.4443)"
            fill="#ECECEC"
            width="10.362"
            height="10.362"
          />

          <rect
            x="346.322"
            y="421.433"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -198.7088 373.5025)"
            fill="#ECECEC"
            width="10.362"
            height="10.362"
          />

          <rect
            x="117.587"
            y="97.883"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -36.9191 116.9972)"
            fill="#ECECEC"
            width="10.362"
            height="10.362"
          />
        </g>
      </svg>
    </AnimatePresence>
  );
}
