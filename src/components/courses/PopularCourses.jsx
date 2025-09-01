import { courses } from "../../data/courses";
import CoursItem from "./CourseItem";
import styles from "./courses.module.scss";

const showCourses = courses.slice(0, 3);

const PopularCourses = () => {
  return (
    <div className={styles.popular_courses_container}>
      <h2>Our Best Courses</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <div className={styles.popular_courses_item_container}>
        {showCourses.map((course) => (
          <CoursItem key={course.id} course={course} id={course.id} />
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
