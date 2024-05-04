import styles from "./NavDesktop.module.scss";
import { useDispatch } from "react-redux";
import { reset } from "../../store/cookie/cookieSlice";

function NavDesktop() {
  const dispatch = useDispatch();

  const handleResetHero = (e) => {
    e.preventDefault();
    dispatch(reset());
  };

  return (
    <button className={styles["catalog__btn"]} onClick={handleResetHero}>
      Открыть еще одну
    </button>
  );
}

export default NavDesktop;
