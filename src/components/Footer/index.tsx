import { type FC } from "react";
import styles from "./styles.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Elizabeth Hazel Ainslie, all rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
