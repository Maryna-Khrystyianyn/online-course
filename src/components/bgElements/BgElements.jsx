import styles from "./bgElements.module.scss";

const BgElements = () => {
  return (
    <div>
      <img
        className={styles.elips_left}
        src={`${import.meta.env.BASE_URL}img/bg-img/Ellipse-left.png`}
        alt=""
      />
      <img
        className={styles.elips_right}
        src={`${import.meta.env.BASE_URL}img/bg-img/Ellipse-reight.png`}
        alt=""
      />
       <img
        className={styles.arrow}
        src={`${import.meta.env.BASE_URL}img/bg-img/vector.png`}
        alt=""
      />
       <img
        className={styles.arrow_rotate}
        src={`${import.meta.env.BASE_URL}img/bg-img/vector.png`}
        alt=""
      />
    </div>
  );
};

export default BgElements;
