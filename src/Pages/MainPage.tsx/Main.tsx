import styles from "./Main.module.scss";
import LandingPage from "./LandingPage/LandingPage";
import ProjectsPage from "./ProjectsPage/ProjectsPage";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";

export default function Main() {
  return (
    <div className={styles.Main}>
      <div className={styles.Toggle}>
        <ThemeToggle />
      </div>
      <div className={styles.Landing}>
        <LandingPage />
      </div>
      <div className={styles.Projects}>
        <ProjectsPage />
      </div>
    </div>
  );
}
