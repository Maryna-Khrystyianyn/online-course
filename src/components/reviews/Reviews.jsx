import { reviews } from "../../data/reviews";
import Carousel from "../carousel/Carousel";
import ReviewsItem from "./ReviewsItem";
import styles from "./reviews.module.scss";

const Reviews = () => {
  const items = Array.from({ length: 9 }, (_, i) => (
    <ReviewsItem key={i} review={reviews[i]} />
  ));

  return (
    <div className={styles.reviews}>
      <h2>What student’s say</h2>
      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
      <Carousel items={items} visibleCount={3} />
    </div>
  );
};

export default Reviews;
