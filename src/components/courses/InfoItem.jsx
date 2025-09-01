import styles from "./courses.module.scss";

const InfoItem = ({img,text}) => {
  return (
    <div className={styles.infoItem_container}><img src={`../../../public/img/info-icons/${img}`} alt={img} />
    <p>{text}</p>
    </div>
  )
}

export default InfoItem