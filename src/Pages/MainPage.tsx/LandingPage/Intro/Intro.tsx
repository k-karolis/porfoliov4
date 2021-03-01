import React, { useContext } from "react";
import { ThemeMode } from "../../../../components/ThemeProvider/ThemeProvider";
import styles from "./Intro.module.scss";
import SocialIcons from "../SocialIcons/SocialIcons";
import SiteLink from "../SiteLink/SiteLink";
import ThemeToggle from "../../../../components/ThemeToggle/ThemeToggle";
import useSound from "use-sound";

// import mp3 from "../Intro/light.mp3";

export default function Intro(props: any) {
  const { theme } = useContext(ThemeMode);

  const sound = require("../../../../assets/lighton.mp3");

  const audio = new Audio("../../../../assets/lighton.mp3");
  //   audio.type = "audio/wav";

  const [play] = useSound(sound, { volume: 0.5 });

  const playSound = () => {
    console.log(sound);

    play();
  };

  return (
    <ThemeMode.Consumer>
      {(context) => (
        <div className={theme ? styles.DarkMode : styles.LightMode}>
          <article className={styles.Intro}>
            Using React, JavaScript, Next.js, and Cypress daily, currently at
            SkyBet. I love building React applications, front end architecture,
            component libraries, and design systems.
          </article>

          <div className={styles.BackGround}>
            <div className={styles.Social}>
              <SocialIcons />
            </div>
            <div className={styles.Toggler}>
              <button onClick={props.onClick} onMouseEnter={() => playSound()}>
                <audio controls src={"../../../../assets/lighton.mp3"}>
                  AUdio
                </audio>
                Play
              </button>
              <ThemeToggle />
            </div>
            <div className={styles.Link}>
              <SiteLink />
            </div>
          </div>
        </div>
      )}
    </ThemeMode.Consumer>
  );
}
