import Baner from "../components/baner/Baner";
import BgElements from "../components/bgElements/BgElements";
import PopularCourses from "../components/courses/PopularCourses";
import Main from "../components/main/Main";
import Premium from "../components/premium/Premium";
import Reveal from "../components/reveal/Reveal";
import Reviews from "../components/reviews/Reviews";
import Wawes from "../components/wawes/Wawes";


const Home = () => {
  return (
    <div style={{width:"100%", position:"relative"}}>
<BgElements/>
      <Main />
      <Reveal>
        <Wawes />
      </Reveal>
      <Reveal>
        <Baner />
      </Reveal>
      <Reveal>
        <PopularCourses />
      </Reveal>
      <Reveal>
        <Premium />
      </Reveal>
      <Reveal>
        <Reviews />
      </Reveal>
    </div>
  );
};

export default Home;
