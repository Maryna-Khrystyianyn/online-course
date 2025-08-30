import styles from "./wawes.module.scss"

const Wawes = () => {
  return (
    <div className={styles.wawes_container}>
      <img className={`${styles.wawe} ${styles.wawe1}`} src="../../../public/img/wawe1.png" alt="" />
      <img className={`${styles.wawe} ${styles.wawe2}`} src="../../../public/img/wawe1.png" alt="" />
      <img className={`${styles.wawe} ${styles.wawe3}`} src="../../../public/img/wawe1.png" alt="" />
      <img className={`${styles.wawe} ${styles.wawe4}`} src="../../../public/img/wawe1.png" alt="" />
    </div>
  );
};

export default Wawes;
