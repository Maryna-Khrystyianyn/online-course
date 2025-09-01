import Baner from "../components/baner/Baner";
import PopularCourses from "../components/courses/PopularCourses";
import Main from "../components/main/Main";
import Wawes from "../components/wawes/Wawes";


const Home = () => {
 
  return (
    <div>
     <Main/>
     <Wawes/>
     <Baner/>
     <PopularCourses/>
    </div>
  );
};

export default Home;
