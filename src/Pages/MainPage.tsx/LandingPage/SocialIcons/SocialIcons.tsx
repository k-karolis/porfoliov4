import { useContext } from "react";
import { ThemeMode } from "../../../../components/ThemeProvider/ThemeProvider";
import styles from "./Social.module.scss";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const icons = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {},
};

export default function SocialIcons() {
  const { theme } = useContext(ThemeMode);
  return (
    <ThemeMode.Consumer>
      {(context) => (
        <div className={theme ? styles.DarkMode : styles.LightMode}>
          <div className={styles.Social}>
            <a
              href="https://www.linkedin.com/in/karoliskimtys/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className={styles.linkedin}
                key={uuidv4()}
                variants={icons}
                initial="hidden"
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.6,
                    duration: 0.5,

                    type: "spring",
                    stiffness: 100,
                  },
                }}
                exit="hidden"
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 62 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M47 4H15C12.24 4 10 6.24 10 9V41C10 43.76 12.24 46 15 46H47C49.76 46 52 43.76 52 41V9C52 6.24 49.76 4 47 4ZM23 20V39H17V20H23ZM17 14.47C17 13.07 18.2 12 20 12C21.8 12 22.93 13.07 23 14.47C23 15.87 21.88 17 20 17C18.2 17 17 15.87 17 14.47ZM45 39H39C39 39 39 29.74 39 29C39 27 38 25 35.5 24.96H35.42C33 24.96 32 27.02 32 29C32 29.91 32 39 32 39H26V20H32V22.56C32 22.56 33.93 20 37.81 20C41.78 20 45 22.73 45 28.26V39Z"
                    fill="#222831"
                  />
                </svg>
              </motion.div>
            </a>

            <a
              href="mailto:karolis.kimtys@gmaill.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className={styles.mail}
                key={uuidv4()}
                variants={icons}
                initial="hidden"
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.7,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                  },
                }}
                exit="hidden"
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 62 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 4C14.4887 4 10 8.48867 10 14V36C10 41.5113 14.4887 46 20 46H42C47.5113 46 52 41.5113 52 36V14C52 8.48867 47.5113 4 42 4H20ZM19 16H43C43.18 16 43.3498 16.0203 43.5098 16.0703L33.6797 25.8906C32.1997 27.3706 29.7905 27.3706 28.3105 25.8906L18.4902 16.0703C18.6502 16.0203 18.82 16 19 16ZM17.0703 17.4902L24.5898 25L17.0703 32.5098C17.0203 32.3498 17 32.18 17 32V18C17 17.82 17.0203 17.6502 17.0703 17.4902ZM44.9297 17.4902C44.9797 17.6502 45 17.82 45 18V32C45 32.18 44.9797 32.3498 44.9297 32.5098L37.4004 25L44.9297 17.4902ZM26 26.4102L26.8906 27.3105C28.0206 28.4405 29.5102 29 30.9902 29C32.4802 29 33.9598 28.4405 35.0898 27.3105L35.9902 26.4102L43.5098 33.9297C43.3498 33.9797 43.18 34 43 34H19C18.82 34 18.6502 33.9797 18.4902 33.9297L26 26.4102Z"
                    fill="#222831"
                  />
                </svg>
              </motion.div>
            </a>

            <a
              href="https://github.com/k-karolis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className={styles.github}
                key={uuidv4()}
                variants={icons}
                initial="hidden"
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.8,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                  },
                }}
                exit="hidden"
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 66 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.791 46.836C26.502 46.53 27 45.823 27 45V39.6C27 39.403 27.016 39.198 27.041 38.99C27.027 38.994 27.014 38.997 27 39C27 39 24 39 23.4 39C21.9 39 20.6 38.4 20 37.2C19.3 35.9 19 33.7 17.2 32.5C16.9 32.3 17.1 32 17.7 32C18.3 32.1 19.6 32.9 20.4 34C21.3 35.1 22.2 36 23.8 36C26.287 36 27.62 35.875 28.422 35.445C29.356 34.056 30.649 33 32 33V32.975C26.332 32.793 22.711 30.909 21.025 28C17.36 28.042 14.169 28.405 12.348 28.707C12.29 28.38 12.24 28.051 12.197 27.72C13.994 27.424 17.04 27.073 20.542 27.006C20.43 26.73 20.333 26.447 20.251 26.157C16.74 25.979 13.71 26.118 12.064 26.254C12.044 25.922 12.017 25.591 12.013 25.255C13.662 25.12 16.61 24.985 20.031 25.144C19.952 24.644 19.901 24.133 19.901 23.601C19.901 21.901 20.501 20.101 21.601 18.601C21.101 16.901 20.401 13.301 21.801 12.001C24.501 12.001 26.401 13.301 27.301 14.101C29 13.4 30.9 13 33 13C35.1 13 37 13.4 38.6 14.1C39.5 13.3 41.4 12 44.1 12C45.6 13.4 44.8 17 44.3 18.6C45.4 20.1 46 21.8 45.9 23.6C45.9 24.084 45.855 24.551 45.79 25.009C49.289 24.837 52.317 24.975 53.994 25.111C53.992 25.448 53.961 25.777 53.943 26.11C52.272 25.972 49.168 25.83 45.584 26.021C45.495 26.357 45.387 26.684 45.259 27.001C48.805 27.047 51.924 27.39 53.807 27.69C53.764 28.022 53.714 28.351 53.656 28.677C51.744 28.371 48.485 28.013 44.777 27.995C43.112 30.873 39.557 32.75 34 32.969V33C36.6 33 39 36.9 39 39.6V45C39 45.823 39.498 46.53 40.209 46.836C49.37 43.804 56 35.164 56 25C56 12.318 45.683 2 33 2C20.317 2 10 12.318 10 25C10 35.164 16.63 43.804 25.791 46.836Z"
                    fill="#222831"
                  />
                </svg>
              </motion.div>
            </a>

            <a
              href="https://twitter.com/KarolisK_dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className={styles.twitter}
                key={uuidv4()}
                variants={icons}
                initial="hidden"
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.9,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                  },
                }}
                exit="hidden"
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 70 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M60 9.80938C58.1406 10.625 56.1594 11.1656 54.0938 11.4281C56.2188 10.1594 57.8406 8.16562 58.6031 5.7625C56.6219 6.94375 54.4344 7.77813 52.1031 8.24375C50.2219 6.24063 47.5406 5 44.6156 5C38.9406 5 34.3719 9.60625 34.3719 15.2531C34.3719 16.0656 34.4406 16.8469 34.6094 17.5906C26.0875 17.175 18.5469 13.0906 13.4812 6.86875C12.5969 8.40313 12.0781 10.1594 12.0781 12.05C12.0781 15.6 13.9062 18.7469 16.6312 20.5687C14.9844 20.5375 13.3687 20.0594 12 19.3063C12 19.3375 12 19.3781 12 19.4187C12 24.4 15.5531 28.5375 20.2125 29.4906C19.3781 29.7188 18.4688 29.8281 17.525 29.8281C16.8688 29.8281 16.2062 29.7906 15.5844 29.6531C16.9125 33.7125 20.6813 36.6969 25.1625 36.7937C21.675 39.5219 17.2469 41.1656 12.4531 41.1656C11.6125 41.1656 10.8062 41.1281 10 41.025C14.5406 43.9531 19.9219 45.625 25.725 45.625C44.5875 45.625 54.9 30 54.9 16.4562C54.9 16.0031 54.8844 15.5656 54.8625 15.1313C56.8969 13.6875 58.6063 11.8844 60 9.80938Z"
                    fill="#222831"
                  />
                </svg>
              </motion.div>
            </a>
          </div>
        </div>
      )}
    </ThemeMode.Consumer>
  );
}
