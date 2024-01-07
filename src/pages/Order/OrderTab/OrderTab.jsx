// import React from 'react'
import FoodCard from "../../../Components/FoodCard/FoodCard";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

function OrderTab({ items }) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item) => (
            <FoodCard key={item._id} item={item}></FoodCard>
          ))}
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default OrderTab;
