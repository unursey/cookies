// import { getCatalogIcon } from "../../helpers/getCatalogIcon";
import styles from "./NavDesktop.module.scss";
import { Link } from "react-router-dom";

function NavDesktop() {
  return (
    <Link className={styles["catalog__link"]} to={"#"} onClick={() => window.location.reload()}>
      Открыть еще одну
    </Link>
  );
}

export default NavDesktop;
