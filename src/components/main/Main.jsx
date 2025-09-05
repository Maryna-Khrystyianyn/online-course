import Search from "../search/Search";
import styles from "./main.module.scss";

const Main = () => {
  const handelSearch = (searchValue) => {
    console.log("get from search", searchValue);
    // sorten data....
  };

  return (
    <div className={styles.main}>
      <div className={styles.bg_container}>
        <img
          src={`${import.meta.env.BASE_URL}img/bg-icons/comp.png`}
          alt=""
          className={`${styles.icon} ${styles.icon1}`}
        />
        <img
          src={`${import.meta.env.BASE_URL}img/bg-icons/cosmos.png`}
          alt=""
          className={`${styles.icon} ${styles.icon2}`}
        />
        <img
          src={`${import.meta.env.BASE_URL}img/bg-icons/light.png`}
          alt=""
          className={`${styles.icon} ${styles.icon3}`}
        />
        <img
          src={`${import.meta.env.BASE_URL}img/bg-icons/erde.png`}
          alt=""
          className={`${styles.icon} ${styles.icon4}`}
        />
        <img
          src={`${import.meta.env.BASE_URL}img/bg-icons/kolba.png`}
          alt=""
          className={`${styles.icon} ${styles.icon5}`}
        />
        <img
          src={`${import.meta.env.BASE_URL}img/bg-icons/pen.png`}
          alt=""
          className={`${styles.icon} ${styles.icon6}`}
        />
        <img
          src={`${import.meta.env.BASE_URL}img/bg-icons/plinear.png`}
          alt=""
          className={`${styles.icon} ${styles.icon7}`}
        />
      </div>

      <div className={styles.main_container}>
        <div className={styles.info}>
          <h1>
            The{" "}
            <span>
              Smart <br />{" "}
            </span>{" "}
            Choice For <span>Future</span>
          </h1>
          <p>
            Elearn is a global training provider based across the UK that
            specialises in accredited and bespoke training courses. We crush
            the...
          </p>
          <Search title="Search" onSubmit={handelSearch} />
        </div>
        <div className={styles.img}>
          <img src={`${import.meta.env.BASE_URL}img/main.png`} alt="smart people learn" />
        </div>
      </div>
    </div>
  );
};

export default Main;
