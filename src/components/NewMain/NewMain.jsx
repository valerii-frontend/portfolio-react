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
	const [pointToggle, setPointToggle] = useState(false);

	return (
		<main className={styles.main}>
			<div className={styles.row}>
				<div className={`${styles.col} ${styles.model}`}>
					<div className={styles.toggle}>
						<input id='toggle' type='checkbox' onClick={() => setPointToggle((p) => !p)} />
						<label htmlFor='toggle'>Show hints</label>
					</div>
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
						{pointToggle && (
							<>
								<button
									className={styles.hotspot}
									slot='hotspot-1'
									data-position='-6.456378094479195m 6.460728852769666m 5.853468113555223m'
									data-normal='0m -1.3435883843274957e-7m 0.9999999999999911m'
									data-visibility-attribute='visible'>
									<div className={styles.hotspotText}>HTML</div>
								</button>
								<button
									className={styles.hotspot}
									slot='hotspot-4'
									data-position='-9.094204530873458m 6.0490378236066205m 5.0031171996522374m'
									data-normal='-0.7071069153901313m 1.0863043273792318e-8m 0.7071066469829383m'
									data-visibility-attribute='visible'>
									<div className={styles.hotspotText}>VS CODE</div>
								</button>
								<button
									className={styles.hotspot}
									slot='hotspot-6'
									data-position='-10.57140951365883m 6.555060508476485m 1.5490992634805703m'
									data-normal='-1m 0m 0m'
									data-visibility-attribute='visible'>
									<div className={styles.hotspotText}>TS</div>
								</button>
								<button
									className={styles.hotspot}
									slot='hotspot-7'
									data-position='-9.72967611814629m 6.376062809097933m -1.0844898627597388m'
									data-normal='-0.7071067099096491m 2.611880115536631e-8m -0.7071068524634383m'
									data-visibility-attribute='visible'>
									<div className={styles.hotspotText}>BS</div>
								</button>
								<button
									className={styles.hotspot}
									slot='hotspot-8'
									data-position='-6.249872887988534m 6.276105095397011m -2.8268477951027347m'
									data-normal='-4.3711379464411157e-8m 1.343588403434346e-7m -0.9999999999999901m'
									data-visibility-attribute='visible'>
									<div className={styles.hotspotText}>CSS</div>
								</button>
								<button
									className={styles.hotspot}
									slot='hotspot-9'
									data-position='-3.429648559189682m 6.204089592856987m -1.7154260541313482m'
									data-normal='0.7071067488482622m 4.8928506415576263e-8m -0.7071068135248298m'
									data-visibility-attribute='visible'>
									<div className={styles.hotspotText}>PHP STORM</div>
								</button>
								<button
									className={styles.hotspot}
									slot='hotspot-10'
									data-position='-1.9850190972776598m 6.394825575806805m 1.617031455950885m'
									data-normal='1m 0m 0m'
									data-visibility-attribute='visible'>
									<div className={styles.hotspotText}>JS</div>
								</button>
								<button
									className={styles.hotspot}
									slot='hotspot-11'
									data-position='-3.5739109158925144m 6.258620159118977m 4.943618029485899m'
									data-normal='0.70710682996375m -1.9122307652332046e-7m 0.707106732409316m'
									data-visibility-attribute='visible'>
									<div className={styles.hotspotText}>SASS</div>
								</button>
								<button
									className={styles.hotspot}
									slot='hotspot-12'
									data-position='-4.930854009432878m 3.733995194512402m 4.825069174671869m'
									data-normal='0.39515996292407224m -0.4714911069126503m 0.7883810879290103m'
									data-visibility-attribute='visible'>
									<div className={styles.hotspotText}>GULP</div>
								</button>
								<button
									className={styles.hotspot}
									slot='hotspot-13'
									data-position='-2.864247243576006m 4.130991889871701m 0.17029101439021233m'
									data-normal='0.7827594702824817m -0.47234876390817043m -0.40518422589917324m'
									data-visibility-attribute='visible'>
									<div className={styles.hotspotText}>REACT</div>
								</button>
								<button
									className={styles.hotspot}
									slot='hotspot-14'
									data-position='-7.775064923953256m 4.146387262864307m -1.962199551762549m'
									data-normal='-0.38495768503649863m -0.5600893756671043m -0.7335580904033254m'
									data-visibility-attribute='visible'>
									<div className={styles.hotspotText}>FIGMA</div>
								</button>
								<button
									className={styles.hotspot}
									slot='hotspot-15'
									data-position='-8.837843151569247m 3.62481482589343m 3.581266036540382m'
									data-normal='-0.6935233716629905m -0.6039571798857607m 0.3927608150282264m'
									data-visibility-attribute='visible'>
									<div className={styles.hotspotText}>PS</div>
								</button>
								<button
									className={styles.hotspot}
									slot='hotspot-16'
									data-position='-6.112816467597492m 2.507488729372424m 1.7363332894551258m'
									data-normal='0.803274782383531m 0.02721350515885749m -0.5949865957512488m'
									data-visibility-attribute='visible'>
									<div className={styles.hotspotText}>BEM</div>
								</button>
								<button
									className={styles.hotspot}
									slot='hotspot-17'
									data-position='-7.060444636506955m 9.370274083204318m -1.6497285271489546m'
									data-normal='-0.2734135164368653m 0.7705132578031332m -0.5758075794735864m'
									data-visibility-attribute='visible'>
									<div className={styles.hotspotText}>GITHUB</div>
								</button>
								<button
									className={styles.hotspot}
									slot='hotspot-18'
									data-position='-3.6031230881629357m 9.55902018734668m 0.2998984917764398m'
									data-normal='0.6644629425245406m 0.7071068119305545m -0.24184489767831888m'
									data-visibility-attribute='visible'>
									<div className={styles.hotspotText}>GITLAB</div>
								</button>
								<button
									className={styles.hotspot}
									slot='hotspot-19'
									data-position='-5.580244139212175m 9.929140838344857m 4.02432544809987m'
									data-normal='0.34006039625248147m 0.613285518120883m 0.7129093912719943m'
									data-visibility-attribute='visible'>
									<div className={styles.hotspotText}>NPM</div>
								</button>
								<button
									className={styles.hotspot}
									slot='hotspot-20'
									data-position='-9.193440041868625m 9.650771228524405m 2.4847603987864657m'
									data-normal='-0.6631876706659201m 0.7071067503302917m 0.2453205191459652m'
									data-visibility-attribute='visible'>
									<div className={styles.hotspotText}>GIT BASH</div>
								</button>
								<button
									className={styles.hotspot}
									slot='hotspot-21'
									data-position='-6.3979687322970715m 10.327405400592864m 1.7461564027156484m'
									data-normal='0.753963819409892m 0.6396462412042229m -0.14963704465859184m'
									data-visibility-attribute='visible'>
									<div className={styles.hotspotText}>DEV TOOLS</div>
								</button>
							</>
						)}

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
