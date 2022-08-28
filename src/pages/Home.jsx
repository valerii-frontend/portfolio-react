import React, { useState } from "react";
import styles from "./styles/Home.module.css";
import Model from "../components/Model/Model";
import Slider from "../components/Slider/Slider";
import Sidebar from "../components/Sidebar/Sidebar";
import HomeSidebar from "../components/Sidebar/SidebarHomeContent";
import Readme from "../components/Readme/Readme";

export default function Main() {
	const [swiperEl, setSwiperEl] = useState(1);
	const [isReadme, setIsReadme] = useState(false);
	const slideTo = (index) => swiperEl.slideTo(index, 500);

	return (
		<main className={styles.main}>
			<Sidebar>
				<HomeSidebar slideTo={slideTo} setIsReadme={setIsReadme} isReadme={isReadme} />
			</Sidebar>
			{!isReadme && <Model slideTo={slideTo} />}
			{isReadme && <Readme setIsReadme={setIsReadme} />}
			<Slider setSwiperEl={setSwiperEl} />
		</main>
	);
}
