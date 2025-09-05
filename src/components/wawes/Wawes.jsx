import styles from "./wawes.module.scss"

const Wawes = () => {
  return (
    <div className={styles.wawes_container}>
      <img className={`${styles.wawe} ${styles.wawe1}`} src={`${import.meta.env.BASE_URL}img/wawe1.png`} alt="" />
      <img className={`${styles.wawe} ${styles.wawe2}`} src={`${import.meta.env.BASE_URL}img/wawe1.png`} alt="" />
      <img className={`${styles.wawe} ${styles.wawe3}`} src={`${import.meta.env.BASE_URL}img/wawe1.png`} alt="" />
      <img className={`${styles.wawe} ${styles.wawe4}`} src={`${import.meta.env.BASE_URL}img/wawe1.png`} alt="" />
    </div>
  );
};

export default Wawes;
