import { Link } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";

function Home() {
  return (
    <AnimatedPage>
      <section className="home-contents">
        <div className="primary-ctn">
          <p className="p1">So, you want to travel to</p>
          <p className="p2">Space</p>
          <p className="p3">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        {/* <div className='hover'> */}
        <div className="secondary-ctn">
          <Link to="/destination" className="explore">
            EXPLORE
          </Link>
        </div>
        {/* </div> */}
      </section>
    </AnimatedPage>
  );
}

export default Home;
