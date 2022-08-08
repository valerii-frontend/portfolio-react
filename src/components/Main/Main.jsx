import React, { useState } from "react";
import main from "./Main.module.css";
import Model from "./Model";

import styles from "./Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

export default function Main(props) {
	const slideTo = (index) => {
		swiperEl.slideTo(index, 500);
	};

	const [swiperEl, setSwiperEl] = useState(1);

	return (
		<main className={main.main}>
			<div className={main.sidebar}>sidebar</div>
			<Model slideTo={slideTo} />
			<div className={styles.slider}>
				<Swiper
					onSwiper={setSwiperEl}
					className={styles.swiper}
					spaceBetween={0}
					slidesPerView={1}
					modules={[Autoplay]}
					autoplay
					speed={500}
					loop>
					<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
						<p>HTML</p>
					</SwiperSlide>
					<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
						<p>VSCODE</p>
					</SwiperSlide>
					<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
						<p>TS</p>
					</SwiperSlide>
					<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
						<p>BS</p>
					</SwiperSlide>
					<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
						<p>CSS</p>
					</SwiperSlide>
					<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
						<p>PHP STORM</p>
					</SwiperSlide>
					<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
						<p>JS</p>
					</SwiperSlide>
					<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
						<p>SASS</p>
					</SwiperSlide>
					<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
						<p>Gulp</p>
					</SwiperSlide>
					<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
						<p>React</p>
					</SwiperSlide>
					<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
						<p>Figma</p>
					</SwiperSlide>
					<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
						<p>PS</p>
					</SwiperSlide>
					<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
						<p>BEM</p>
					</SwiperSlide>
					<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
						<p>GitHub</p>
					</SwiperSlide>
					<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
						<p>GitLab</p>
					</SwiperSlide>
					<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
						<p>npm</p>
					</SwiperSlide>
					<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
						<p>bash</p>
					</SwiperSlide>
					<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
						<p>chrome</p>
					</SwiperSlide>
				</Swiper>
			</div>
		</main>
	);
}
