import { motion, AnimatePresence } from "framer-motion";
import styles from "./svg.module.scss";
import { v4 as uuidv4 } from "uuid";

const duration = 0.5;

export default function Sun() {
  return (
    <AnimatePresence>
      <svg
        className={styles.Sun}
        viewBox="0 0 128 128"
        width="25"
        height="25"
        x="0px"
        y="0px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g
          whileHover={{
            rotate: [0, 360, 0],
            transition: {
              duration: 10,
              repeat: Infinity,
            },
          }}
          layout
          key={uuidv4()}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
        >
          <motion.circle cx="64" cy="63.997" fill="#F2A365" r="39.247" />
          <g fill="#ECECEC">
            <g>
              <motion.path
                layout
                key={uuidv4()}
                initial={{
                  y: 25,
                  opacity: 0,
                }}
                animate={{
                  scale: 1.2,
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.25,
                    duration: duration,
                    repeat: Infinity,
                    repeatDelay: 5,
                  },
                }}
                fill="#F2A365"
                d="m64 16.75a47.252 47.252 0 0 1 8.5.781c.038-.545.063-1.1.063-1.658-.001-7.801-8.563-14.126-8.563-14.126s-8.563 6.325-8.563 14.126c0 .562.026 1.113.064 1.658a47.243 47.243 0 0 1 8.499-.781z"
              />
              <motion.path
                layout
                key={uuidv4()}
                initial={{
                  y: -50,
                  opacity: 0,
                  transition: { duration: duration },
                }}
                animate={{
                  scale: 1.2,
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.25,
                    duration: duration,
                    repeat: Infinity,
                    repeatDelay: 5,
                  },
                }}
                fill="#F2A365"
                d="m64 111.244a47.343 47.343 0 0 0 8.5-.78c.038.544.063 1.095.063 1.657 0 7.8-8.562 14.126-8.562 14.126s-8.563-6.324-8.563-14.126c0-.562.026-1.113.064-1.657a47.335 47.335 0 0 0 8.498.78z"
              />
              <motion.path
                layout
                key={uuidv4()}
                initial={{
                  x: -50,
                  y: 50,
                  opacity: 0,
                  transition: { duration: duration },
                }}
                animate={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                    duration: duration,
                    repeat: Infinity,
                    repeatDelay: 5,
                  },
                }}
                fill="#F2A365"
                d="m97.409 30.588a47.349 47.349 0 0 1 5.457 6.562c.413-.358.82-.73 1.217-1.127 5.517-5.517 3.934-16.043 3.934-16.043s-10.526-1.58-16.043 3.934c-.4.4-.769.8-1.127 1.217a47.349 47.349 0 0 1 6.562 5.457z"
              />
              <motion.path
                layout
                key={uuidv4()}
                initial={{
                  x: 50,
                  y: -50,
                  opacity: 0,
                  transition: { duration: duration },
                }}
                animate={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                    duration: duration,
                    repeat: Infinity,
                    repeatDelay: 5,
                  },
                }}
                fill="#F2A365"
                d="m30.591 97.406a47.232 47.232 0 0 0 6.562 5.457c-.358.413-.73.82-1.127 1.217-5.517 5.517-16.043 3.934-16.043 3.934s-1.583-10.526 3.934-16.043c.4-.4.8-.769 1.217-1.127a47.291 47.291 0 0 0 5.457 6.562z"
              />
              <motion.path
                layout
                key={uuidv4()}
                initial={{
                  x: -50,
                  opacity: 0,
                  transition: { duration: duration },
                }}
                animate={{
                  scale: 1.2,
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.75,
                    duration: duration,
                    repeat: Infinity,
                    repeatDelay: 5,
                  },
                }}
                fill="#F2A365"
                d="m111.247 64a47.335 47.335 0 0 1 -.78 8.5c.544.038 1.095.064 1.657.064 7.8 0 14.126-8.563 14.126-8.563s-6.325-8.562-14.126-8.562c-.562 0-1.113.025-1.657.063a47.343 47.343 0 0 1 .78 8.498z"
              />
              <motion.path
                layout
                key={uuidv4()}
                initial={{
                  scale: 1.2,
                  x: 50,
                  opacity: 0,
                  transition: { duration: duration },
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.75,
                    duration: duration,
                    repeat: Infinity,
                    repeatDelay: 5,
                  },
                }}
                fill="#F2A365"
                d="m16.753 64a47.335 47.335 0 0 0 .78 8.5c-.544.038-1.1.064-1.657.064-7.801-.004-14.126-8.564-14.126-8.564s6.325-8.562 14.126-8.562c.562 0 1.113.025 1.657.063a47.343 47.343 0 0 0 -.78 8.499z"
              />
              <motion.path
                layout
                key={uuidv4()}
                initial={{
                  x: -50,
                  y: -50,
                  opacity: 0,
                  transition: { duration: duration },
                }}
                animate={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1,
                    duration: duration,
                    repeat: Infinity,
                    repeatDelay: 5,
                  },
                }}
                fill="#F2A365"
                d="m97.409 97.406a47.349 47.349 0 0 1 -6.562 5.457c.358.413.73.82 1.127 1.217 5.517 5.517 16.043 3.934 16.043 3.934s1.583-10.526-3.934-16.043c-.4-.4-.8-.769-1.217-1.127a47.291 47.291 0 0 1 -5.457 6.562z"
              />
              <motion.path
                layout
                key={uuidv4()}
                initial={{
                  x: 50,
                  y: 50,
                  opacity: 0,
                  transition: { duration: duration },
                }}
                animate={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1,
                    duration: duration,
                    repeat: Infinity,
                    repeatDelay: 5,
                  },
                }}
                fill="#F2A365"
                d="m30.591 30.588a47.349 47.349 0 0 0 -5.457 6.562c-.413-.358-.82-.73-1.217-1.127-5.517-5.517-3.934-16.043-3.934-16.043s10.526-1.58 16.043 3.934c.4.4.769.8 1.127 1.217a47.291 47.291 0 0 0 -6.562 5.457z"
              />
            </g>
          </g>
        </motion.g>
      </svg>
    </AnimatePresence>
  );
}
