import React, { useContext } from "react";
import { ThemeMode } from "../../../../components/ThemeProvider/ThemeProvider";
import styles from "./Intro.module.scss";
import SocialIcons from "../SocialIcons/SocialIcons";
import SiteLink from "../SiteLink/SiteLink";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro() {
  const { theme } = useContext(ThemeMode);

  return (
    <ThemeMode.Consumer>
      {(context) => (
        <AnimatePresence>
          <div className={theme ? styles.DarkMode : styles.LightMode}>
            <motion.div
              className={styles.BackGround}
              layout
              key={1}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
            >
              <article className={styles.Intro}>
                Using React, JavaScript, Next.js, and Cypress daily, currently
                at SkyBet. I love building React applications, front end
                architecture, component libraries, and design systems.
              </article>
              <div className={styles.Social}>
                <SocialIcons />
              </div>
            </motion.div>
            <div className={styles.Link}>
              <SiteLink />
            </div>
          </div>
        </AnimatePresence>
      )}
    </ThemeMode.Consumer>
  );
}
