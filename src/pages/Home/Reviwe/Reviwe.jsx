import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

function Reviwe() {
  const [reviwes, setReviwe] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviwe")
      .then((res) => res.json())
      .then((data) => setReviwe(data));
  }, []);
  

  return (
    <section className="my-24">
      <SectionTittle
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      ></SectionTittle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviwes.map((reviwe) => (
          <SwiperSlide key={reviwe._id}>
            <div className="flex flex-col items-center m-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={reviwe.rating}
                readOnly
              />
              <p className="py-8">{reviwe.details}</p>
              <p className="text-orange-500 text-2xl">{reviwe.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Reviwe;
