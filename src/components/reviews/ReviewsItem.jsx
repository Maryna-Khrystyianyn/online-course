import styles from "./reviews.module.scss";

const ReviewsItem = ({ review }) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>{review.text}</div>
      <div className={styles.user}>
        <img
          src={`${import.meta.env.BASE_URL}img/aurhors/${review.author.img}`}
          alt={review.author.name}
        />
        <div className={styles.user_info}>
          <h2>{review.author.name}</h2>
          <p>{review.author.profession}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsItem;
