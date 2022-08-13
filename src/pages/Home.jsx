import React, { useState } from "react";
import styles from "./Home.module.css";
import Model from "../components/Model/Model";
import Slider from "../components/Slider/Slider";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Main() {
	const [swiperEl, setSwiperEl] = useState(1);
	const slideTo = (index) => swiperEl.slideTo(index, 500);

	return (
		<main className={styles.main}>
			<Sidebar />
			<Model slideTo={slideTo} />
			<Slider setSwiperEl={setSwiperEl} />
		</main>
	);
}
