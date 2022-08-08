import React, { useState } from "react";
import main from "./Main.module.css";
import Model from "../Model/Model";
import Slider from "../Slider/Slider";

export default function Main(props) {
	const [swiperEl, setSwiperEl] = useState(1);
	const slideTo = (index) => swiperEl.slideTo(index, 500);

	return (
		<main className={main.main}>
			<div className={main.sidebar}>sidebar</div>
			<Model slideTo={slideTo} />
			<Slider setSwiperEl={setSwiperEl} />
		</main>
	);
}
