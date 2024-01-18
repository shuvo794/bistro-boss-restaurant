import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Yeami from "../Yeami/Yeami";
import Call_Us from "../Call_Us/Call_Us";
import Chef_Say from "../Chef_Say/Chef_Say";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Yeami></Yeami>
      <PopularMenu></PopularMenu>
      <Call_Us></Call_Us>
      <Chef_Say></Chef_Say>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
