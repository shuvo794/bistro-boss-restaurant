import { Parallax } from "react-parallax";
import chefService from "../../../assets/home/chef-special.jpg";
const Yeami = () => {
  return (
    <div>
      <Parallax
        blur={{ min: -60, max: 70 }}
        bgImage={chefService}
        bgImageAlt="the Menu"
        strength={-100}
      >
        <div className="hero h-[700px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Yeami Resturent</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Yeami;
