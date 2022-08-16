import React from "react";
import styles from "./Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

export default function Slider({ setSwiperEl }) {
	const sliderContent = [
		{
			name: "HTML",
			icon: "html",
			p1: `The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed
		in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting
		languages such as JavaScript.`,
			p2: `Web browsers receive HTML documents from a web server or from local storage and render the documents into
		multimedia web pages. HTML describes the structure of a web page semantically and originally included cues
		for the appearance of the document.`,
			p3: `I have good knowledge of working with HTML, popular attributes, and tags. As well as building clean and
		semantic code using modern practices`,
			p4: `Now it is less often necessary to use pure HTML, the layout is increasingly being taken over by libraries
		and frameworks`,
		},
	];

	return (
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
				{sliderContent.map((slide) => (
					<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
						<h2 className={styles[`${slide.icon}`]}>{slide.name}</h2>
						<p>{slide.p1}</p>
						<p>{slide.p2}</p>
						<p className={styles.me}>{slide.p3}</p>
						<p className={styles.me}>{slide.p4}</p>
					</SwiperSlide>
				))}
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
	);
}
