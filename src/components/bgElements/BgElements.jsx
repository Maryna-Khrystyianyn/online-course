import styles from "./bgElements.module.scss";

const BgElements = () => {
  return (
    <div>
      <img
        className={styles.elips_left}
        src="../../../public/img/bg-img/Ellipse-left.png"
        alt=""
      />
      <img
        className={styles.elips_right}
        src="../../../public/img/bg-img/Ellipse-reight.png"
        alt=""
      />
       <img
        className={styles.arrow}
        src="../../../public/img/bg-img/vector.png"
        alt=""
      />
       <img
        className={styles.arrow_rotate}
        src="../../../public/img/bg-img/vector.png"
        alt=""
      />
    </div>
  );
};

export default BgElements;
