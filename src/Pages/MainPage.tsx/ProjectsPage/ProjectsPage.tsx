import React, { useContext } from "react";
import styles from "./Projects.module.scss";
import { ThemeMode } from "../../../components/ThemeProvider/ThemeProvider";
import Title from "../../../components/Title/Title";

export default function ProjectsPage() {
  const { theme } = useContext(ThemeMode);

  return (
    <ThemeMode.Consumer>
      {(context) => (
        <div className={theme ? styles.DarkMode : styles.LightMode}>
          <div className={styles.ProjectsPage}>
            <Title first="Personal" second="Projects" />
          </div>
        </div>
      )}
    </ThemeMode.Consumer>
  );
}
