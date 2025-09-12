// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";
import bgImage1 from "../assets/images/carousel1.jpg"
import bgImage2 from "../assets/images/carousel2.jpg"
import bgImage3 from "../assets/images/carousel3.jpg"

const Carousal = () => {
  return (
    <div className="container px-6 mx-auto my-10">
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide image={bgImage1} text="Get Your Web Development Projects Done in minutes"></Slide></SwiperSlide>
        <SwiperSlide><Slide image={bgImage2} text="Get Your Graphics Design Projects Done in minutes"></Slide></SwiperSlide>
        <SwiperSlide><Slide image={bgImage3} text="Start Your Digital Marketing Campaigns up in running"></Slide></SwiperSlide>
      </Swiper>
      
    </div>
  );
};

export default Carousal;
