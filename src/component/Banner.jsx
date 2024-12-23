// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Img1 from "../../src/assets/img/img1.jpg"
import Img2 from "../../src/assets/img/img2.jpg"
import Img3 from "../../src/assets/img/img4.jpg"



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';


const Banner = () => {
 
    return (
        <div className='container  py-10 mx-auto'>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
            <Slide image={Img1} text="historical artifacts"></Slide>
        </SwiperSlide>
        <SwiperSlide>
            <Slide image={Img2} text="historical artifacts"></Slide>
        </SwiperSlide>
        <SwiperSlide>
            <Slide image={Img3} text="historical artifacts"></Slide>
        </SwiperSlide>
 
        
        {/* <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div> */}
      </Swiper> 
        </div>
    );
};

export default Banner;