import { Link } from "react-router-dom";
import styles from "./Page404.module.scss";
import { Container } from "../../views/Container/Container";

function Page404() {
  return (
    <div className={styles["page404"]}>
      <Container className={styles.container}>
        <h3 className={styles["title"]}>
          <span>Ой! Ошибка 404...</span>
        </h3>
        <div className={styles["text"]}>
          <p>Страница, которую вы ищите — не найдена!</p>
          <p>
            Пожалуйста, вернитесь на <Link className={styles["link"]} to="/">главную страницу</Link>.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Page404;
