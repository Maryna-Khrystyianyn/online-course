import styles from "./featureBox.module.scss"

const FeatureBox = ({img, title, context}) => {
  return (
    <div className={styles.container}>
        <div className={styles.img}> <img src={`../../../public/img/premiumIcon/${img}`} alt={title} /> </div>
        <div className={styles.context}>
            <h3>{title}</h3>
            <p>{context}</p>
        </div>
    </div>
  )
}

export default FeatureBox



