import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

import sliderContent from "./sliderContent";

import styles from "./Slider.module.css";

function Slider({ setSwiperEl }) {
  return (
    <div className={styles.slider}>
      <Swiper
        onSwiper={setSwiperEl}
        className={styles.swiper}
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay
        speed={1000}
        loop>
        {sliderContent.map((slide) => (
          <SwiperSlide className={styles.slide} data-swiper-autoplay='5000' key={slide.name}>
            <h2 className={styles[`${slide.icon}`]}>{slide.name}</h2>

            <p>{slide.p1}</p>
            <p>{slide.p2}</p>
            <p className={styles.me}>{slide.p3}</p>
            <p className={styles.me}>{slide.p4}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Slider;
