import { Link } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";

function Home() {
  return (
    <section className="home-contents">
      <AnimatedPage>
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
      </AnimatedPage>
      <AnimatedPage>
        {/* <div className='hover'> */}
        <div className="secondary-ctn">
          <Link to="/destination" className="explore">
            EXPLORE
          </Link>
        </div>
        {/* </div> */}
      </AnimatedPage>
    </section>
  );
}

export default Home;
