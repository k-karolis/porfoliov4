import { useContext } from "react";
import { ThemeMode } from "./components/ThemeProvider/ThemeProvider";
import { motion } from "framer-motion";
import styles from "./App.module.scss";
import Main from "./Pages/MainPage.tsx/Main";

export default function App() {
  const { theme } = useContext(ThemeMode);
  return (
    <ThemeMode.Consumer>
      {(context) => (
        <div className={theme ? styles.DarkMode : styles.LightMode}>
          <motion.div className={styles.App}>
            <Main />
          </motion.div>
        </div>
      )}
    </ThemeMode.Consumer>
  );
}
