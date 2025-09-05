import styles from "./baner.module.scss"

const BanerItem = ({item}) => {
  const { title, text, img } = item;
  return (
    <div className={styles.item_container}>
    <div className={styles.img_container}><img src={`${import.meta.env.BASE_URL}img/baner/${img}`} alt={title} /></div>
        
        <div className={styles.title}>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    
    </div>
  );
};

export default BanerItem;
