import React, { useContext } from "react";
import styles from "./ProjectCard.module.scss";
import { ThemeMode } from "../../../../components/ThemeProvider/ThemeProvider";
import { motion } from "framer-motion";
import toggle from "../../../../assets/themevideo.m4v";
import playButton from "../../../../assets/play.svg";

export default function ProjectCard() {
  const { theme } = useContext(ThemeMode);

  const stopMovie = (e: any) => {
    e.target.pause();
  };

  const playMovie = (e: any) => {
    e.target.play();
  };

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
            >
              <div className={styles.VideoPart}>
                <video
                  id="video"
                  className={styles.VideoCard2}
                  src={toggle}
                  // autoPlay
                  onMouseOver={playMovie}
                  onMouseOut={stopMovie}
                  // poster={playButton}
                  muted
                  loop
                  preload="auto"
                />
                <img
                  alt="play"
                  src={playButton}
                  className={styles.PlayButton}
                />
              </div>

              <div className={styles.TextContainer}>
                <h1 className={styles.ProjectTitle}>Project</h1>
                <h4 className={styles.Description}>
                  Very short description about this project
                </h4>
              </div>
            </motion.div>

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
            >
              <div className={styles.VideoPart}>
                <video
                  id="video"
                  className={styles.VideoCard2}
                  src={toggle}
                  // autoPlay
                  onMouseOver={playMovie}
                  onMouseOut={stopMovie}
                  // poster={playButton}
                  muted
                  loop
                  preload="auto"
                />
                <img
                  alt="play"
                  src={playButton}
                  className={styles.PlayButton}
                />
              </div>

              <div className={styles.TextContainer}>
                <h1 className={styles.ProjectTitle}>Project</h1>
                <h4 className={styles.Description}>
                  Very short description about this project
                </h4>
              </div>
            </motion.div>

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
            >
              <div className={styles.VideoPart}>
                <video
                  id="video"
                  className={styles.VideoCard2}
                  src={toggle}
                  // autoPlay
                  onMouseOver={playMovie}
                  onMouseOut={stopMovie}
                  // poster={playButton}
                  muted
                  loop
                  preload="auto"
                />
                <img
                  alt="play"
                  src={playButton}
                  className={styles.PlayButton}
                />
              </div>

              <div className={styles.TextContainer}>
                <h1 className={styles.ProjectTitle}>Project</h1>
                <h4 className={styles.Description}>
                  Very short description about this project
                </h4>
              </div>
            </motion.div>

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
            >
              <div className={styles.VideoPart}>
                <video
                  id="video"
                  className={styles.VideoCard2}
                  src={toggle}
                  // autoPlay
                  onMouseOver={playMovie}
                  onMouseOut={stopMovie}
                  // poster={playButton}
                  muted
                  loop
                  preload="auto"
                />
                <img
                  alt="play"
                  src={playButton}
                  className={styles.PlayButton}
                />
              </div>

              <div className={styles.TextContainer}>
                <h1 className={styles.ProjectTitle}>Project</h1>
                <h4 className={styles.Description}>
                  Very short description about this project
                </h4>
              </div>
            </motion.div>

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
            >
              <div className={styles.VideoPart}>
                <video
                  id="video"
                  className={styles.VideoCard2}
                  src={toggle}
                  // autoPlay
                  onMouseOver={playMovie}
                  onMouseOut={stopMovie}
                  // poster={playButton}
                  muted
                  loop
                  preload="auto"
                />
                <img
                  alt="play"
                  src={playButton}
                  className={styles.PlayButton}
                />
              </div>

              <div className={styles.TextContainer}>
                <h1 className={styles.ProjectTitle}>Project</h1>
                <h4 className={styles.Description}>
                  Very short description about this project
                </h4>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </ThemeMode.Consumer>
  );
}
