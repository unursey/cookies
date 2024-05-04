import { Link } from "react-router-dom";
import siteLogo from "/images/logo.png";
import styles from "./Logo.module.scss";

function Logo(props) {
  return (
    <Link className={styles["logo"]} to="/">
      <img className={styles["logo__img"]} src={siteLogo} alt="Logo image" />
      <span className={styles["logo__text"]}>Печенька</span>
    </Link>
  );
}

export default Logo;
