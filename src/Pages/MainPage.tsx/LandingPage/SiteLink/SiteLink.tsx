import React, { useContext } from "react";
import { ThemeMode } from "../../../../components/ThemeProvider/ThemeProvider";
import styles from "./SiteLink.module.scss";

export default function SiteLink() {
  const { theme } = useContext(ThemeMode);
  return (
    <ThemeMode.Consumer>
      {(context) => (
        <div className={theme ? styles.DarkMode : styles.LightMode}>
          <small className={styles.Link}>www.karoliskimtys.com</small>
        </div>
      )}
    </ThemeMode.Consumer>
  );
}
