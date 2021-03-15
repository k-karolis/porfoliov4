import React, { useContext } from "react";
import { ThemeMode } from "../../../../components/ThemeProvider/ThemeProvider";
import styles from "./SiteLink.module.scss";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const link = {
  hidden: {
    opacity: 0,
    y: -35,
  },
};

// color: theme ? "rgb(242, 163, 101)" : "rgb(236, 236, 236)",

export default function SiteLink() {
  const { theme } = useContext(ThemeMode);
  return (
    <ThemeMode.Consumer>
      {(context) => (
        <div className={theme ? styles.DarkMode : styles.LightMode}>
          <motion.small
            className={styles.Link}
            key={uuidv4()}
            variants={link}
            initial='hidden'
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                duration: 0.25,
                ease: [0.42, 0, 0.58, 1],
              },
            }}
            exit='hidden'
          >
            www.karoliskimtys.com
          </motion.small>
        </div>
      )}
    </ThemeMode.Consumer>
  );
}
