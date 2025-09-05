
import FeatureBox from "../featureBox/FeatureBox"
import styles from "./premium.module.scss"

const Premium = () => {
  return (
    <div className={styles.premium_bg}>
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
          src={`${import.meta.env.BASE_URL}img/bg-icons/Erde.png`}
          alt=""
          className={`${styles.icon} ${styles.icon4}`}
        />
        <img
          src={`${import.meta.env.BASE_URL}img/bg-icons/kolba.png`}
          alt=""
          className={`${styles.icon} ${styles.icon5}`}
        />
       
      </div>

        <div className={styles.container}>
            <div className={styles.img_container}>
                <img className={styles.img} src={`${import.meta.env.BASE_URL}img/premium.png`} alt="premium" />
            </div>
            <div className={styles.text}>
                <h2>Premium <span>Learning</span> Experience</h2>
               
                <FeatureBox img="hearts.png" title="Easily Accessible" context="Learning Will fell Very Comfortable With Courslab." />
                <FeatureBox img="pazl.png" title="Fun learning expe" context="Learning Will fell Very Comfortable With Courslab." />
            </div>
        </div>


    </div>
  )
}

export default Premium