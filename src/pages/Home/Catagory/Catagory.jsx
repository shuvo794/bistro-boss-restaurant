import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import catagory1 from '../../../assets/home/slide1.jpg'
import catagory2 from '../../../assets/home/slide2.jpg'
import catagory3 from '../../../assets/home/slide3.jpg'
import catagory4 from '../../../assets/home/slide4.jpg'
import catagory5 from '../../../assets/home/slide5.jpg'
import SectionTittle from '../../../Components/SectionTittle/SectionTittle';



function Catagory() {
  return (
    <section className='mb-24'>
      
    <SectionTittle
    subHeading={"From 11:00am to 10:00pm"}
    heading={"ORDER ONLINE"}
    >
      </SectionTittle>
     
      <Swiper
       
    slidesPerView={4}
    spaceBetween={30}
    centeredSlides={true}
    pagination={{
      clickable: true,
      
    }}
    modules={[Pagination]}
        className="mySwiper"
        
  >
    <SwiperSlide>
    <img src={catagory2} alt="" />
    <h2 className='text-4xl uppercase text-center -mt-14 text-white'>Pizza</h2>
    </SwiperSlide>
    <SwiperSlide>
        <img src={catagory1} alt="" />
        <h2 className='text-4xl uppercase text-center -mt-14 text-white'>Salad</h2>
    </SwiperSlide>
    
    <SwiperSlide>
    <img src={catagory3} alt="" />
    <h2 className='text-4xl uppercase text-center -mt-14 text-white'>Soups</h2>
    </SwiperSlide>
    <SwiperSlide>
    <img src={catagory4} alt="" />
    <h2 className='text-4xl uppercase text-center -mt-14 text-white'>Cake</h2>
    </SwiperSlide>
    <SwiperSlide>
    <img src={catagory5} alt="" />
    <h2 className='text-4xl uppercase text-center -mt-14 text-white'>Salad</h2>
    </SwiperSlide> 
    
  </Swiper>
   </section>
  )
}

export default Catagory