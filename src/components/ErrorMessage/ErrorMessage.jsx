import styles from "./ErrorMessage.module.scss";

function ErrorMessage({ error }) {
  console.log(`❗ ${error}`);

  const reloadPage = () => {
    location.reload(true);
  };

  return (
    <div className={styles.error}>
      <h2 className={styles.title}>Ой! Возникла ошибка</h2>
      <div className={styles.text}>
        <p>Не удалось получить данные!</p>
        <p>Попробуйте <span className={styles.btn} onClick={reloadPage}>перезагрузить</span> страницу через некоторое время.</p>
      </div>
    </div>
  );
}

export default ErrorMessage;
