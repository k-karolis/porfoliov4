import styles from "./Main.module.scss";
import LandingPage from "./LandingPage/LandingPage";
import ProjectsPage from "./ProjectsPage/ProjectsPage";

export default function Main() {
  return (
    <div className={styles.Main}>
      <LandingPage />
      <ProjectsPage />
    </div>
  );
}
