import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import styles from "./Slider.module.css";

export default function Slider() {
	const [swiperRef, setSwiperRef] = useState(null);
	const slideTo = (index) => {
		swiperRef.slideTo(index, 0);
	};
	return (
		<Swiper
			onSwiper={setSwiperRef}
			freeMode={true}
			className={styles.slider}
			spaceBetween={0}
			slidesPerView={1}
			modules={[Autoplay]}
			autoplay
			speed={1000}
			loop>
			<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
				<p>
					slide1
					<button onClick={() => slideTo(5)}>goto3</button>
				</p>
			</SwiperSlide>
			<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
				<p>slide2</p>
			</SwiperSlide>
			<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
				<p>slide3</p>
			</SwiperSlide>
			<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
				<p>slide4</p>
			</SwiperSlide>
			<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
				<p>slide5</p>
			</SwiperSlide>
			<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
				<p>slide6</p>
			</SwiperSlide>
		</Swiper>
	);
}
