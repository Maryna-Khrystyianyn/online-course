import { useLocation, useParams, useNavigate } from "react-router-dom";
import { courses } from "../../data/courses";

const CourseDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate(); // für knopfen zurük
  let course = location.state?.course;
  if (!course) {
    console.log(id);
    course = courses.filter((item) => item.id == id)[0];
    console.log(course);
  }
  return <div>{`titlt = ${course.title} id=${id}`}</div>;
};

export default CourseDetail;
