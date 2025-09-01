import styles from "./courses.module.scss";
import InfoItem from "./InfoItem";
import { mitueToHoursMinutes } from "../../utils";
import { Link } from "react-router-dom";

const CourseItem = ({ course, id }) => {
  const {
    title,
    category,
    lesons,
    durarionMinutes,
    priceEUR,
    reducirePriceEUR,
    purchasesCount,
    img,
  } = course;

  const price = reducirePriceEUR ? reducirePriceEUR : priceEUR;
  const showOld = reducirePriceEUR ? styles.oldPrice : styles.none;
  const time = mitueToHoursMinutes(durarionMinutes);

  return (
    <div className={styles.course_item_container}>
      <img
        className={styles.item_img}
        src={`../../../public/img/courses/${img}`}
        alt={title}
      />
      <div className={styles.item_text}>
        <p >{category}</p>
        <h3>{title}</h3>
        <p className={styles.price}>
          <span>{`${price} €`}</span>{" "}
          <span className={showOld}> {`${priceEUR} €`} </span>
        </p>
      </div>

      <div className={styles.cours_info}>
        <InfoItem text={time} img="time.png" />
        <InfoItem text={`${lesons.length} Lesons`} img="lesons.png" />
        <InfoItem text={`${purchasesCount} Sales`} img="download.png" />
      </div>
      <Link to={`/courses/${id}`} state={{ course }}>
        <button className={styles.join_btn} >Join Course</button>
      </Link>
    </div>
  );
};

export default CourseItem;
