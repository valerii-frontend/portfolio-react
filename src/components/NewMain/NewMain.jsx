import React, { useState, useEffect } from "react";
import styles from "./NewMain.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

import gbl from "./portfolio.glb";
import poster from "./poster.png";
import light from "./light.hdr";

export default function NewMain(props) {
	const [swiper, setSwiper] = useState(null);
	const slideTo = (i) => swiper.slideTo(i, 0);

	return (
		<main className={styles.main}>
			<div className={styles.row}>
				<div className={`${styles.col} ${styles.model}`}>
					<model-viewer
						src={gbl}
						camera-controls
						poster={poster}
						shadow-intensity='0.55'
						environment-image={light}
						shadow-softness='0.8'
						camera-orbit='91deg 90deg 12.50m'
						exposure='0.6'
						auto-rotate
						camera-target='-6.201m 6.17m 1.8m'
						min-camera-orbit='auto 60deg 12.50m'
						max-camera-orbit='auto 120deg 18.50m'>
						<button
							onClick={() => slideTo(1)}
							className={styles.hotspot}
							slot='hotspot-1'
							data-position='-6.442291496363936m 6.130024938459096m 5.835058698930921m'
							data-normal='1.1102230246251565e-16m -1.3435883843274954e-7m 0.9999999999999911m'
							data-visibility-attribute='visible'>
							<div className={styles.hotspotText}>HTML</div>
						</button>
						<button
							onClick={() => slideTo(3)}
							className={styles.hotspot}
							slot='hotspot-2'
							data-position='-6.268496775019314m 2.6591980296954123m 2.014950969295592m'
							data-normal='-0.8032747823835309m -0.027213505158857485m 0.5949865957512488m'
							data-visibility-attribute='visible'>
							{/* <div className={styles.hotspotText}>BEM</div> */}
						</button>
						<div className={`${styles["progress-bar"]} ${styles.hide}`} slot='progress-bar'>
							<div className={styles["update-bar"]}></div>
						</div>
					</model-viewer>
				</div>
				<div className={styles.col}>
					<Swiper
						onSwiper={setSwiper}
						freeMode={true}
						className={styles.slider}
						spaceBetween={0}
						slidesPerView={1}
						modules={[Autoplay]}
						autoplay
						speed={1000}
						loop>
						<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
							<p>HTML</p>
						</SwiperSlide>
						<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
							<p>CSS</p>
						</SwiperSlide>
						<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
							<p>BEM</p>
						</SwiperSlide>
						<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
							<p>JS</p>
						</SwiperSlide>
						<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
							<p>TS</p>
						</SwiperSlide>
						<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
							<p>REACT</p>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
			{props.children}
		</main>
	);
}
