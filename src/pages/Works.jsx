import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import WorksSidebar from "../components/Sidebar/WorksSidebar";
import styles from "./Works.module.css";

export default function Works() {
	const initObj = { chess: false, food: false, post: false, city: false, library: false, "15": false };
	const iframeLinks = [
		{ name: "chess", link: "https://valerii-frontend.github.io/chess-react/" },
		{ name: "food", link: "https://valerii-frontend.github.io/healthy-food/" },
		{ name: "post", link: "https://valerii-frontend.github.io/react-practice/" },
		{ name: "city", link: "https://nextjs-cities.vercel.app/" },
		{ name: "library", link: "https://valerii-frontend.github.io/library/dist/" },
		{ name: "15", link: "https://valerii-frontend.github.io/15game/" },
		{ name: "posting", link: "https://valerii-frontend.github.io/Landing_page--Aspgroup/" },
		{ name: "lesniczowka", link: "https://valerii-frontend.github.io/lesniczowka/" },
		{ name: "gaz", link: "https://valerii-frontend.github.io/gazPetrol/" },
		{ name: "arteo", link: "https://valerii-frontend.github.io/arteo-dev/" },
		{ name: "anter", link: "https://valerii-frontend.github.io/AnterSystem/" },
		{ name: "design", link: "https://valerii-frontend.github.io/Corporate_website--ilyin_studio/" },
		{ name: "guess", link: "https://guess-a-word.netlify.app/" },
		{ name: "countries", link: "https://vl-countries.netlify.app/" },
		{ name: "came", link: "https://valerii-frontend.github.io/Landing_page--Came-gates/" },
		{ name: "dashboard", link: "https://valerii-frontend.github.io/dashboardToogle/" },
		{ name: "melody", link: "https://valerii-frontend.github.io/melody/" },
		{ name: "v-slider", link: "https://valerii-frontend.github.io/verticalSlider/" },
		{ name: "f-slider", link: "https://valerii-frontend.github.io/pureJsSlider/" },
		{ name: "paint", link: "https://valerii-frontend.github.io/DrawingApp/" },
		{ name: "films", link: "https://valerii-frontend.github.io/filmDataBaseApi/" },
		{ name: "css-night", link: "https://valerii-frontend.github.io/City-animation/" },
		{ name: "pig", link: "https://valerii-frontend.github.io/a_pig_game/" },
		{ name: "casino", link: "https://valerii-frontend.github.io/OutComeBet-casino/" },
	];

	const [modal, setModal] = useState(initObj);
	return (
		<div className={styles.works}>
			<Sidebar>
				<WorksSidebar setModal={setModal} modal={modal} initObj={initObj} />
			</Sidebar>
			<div className={styles.worksWindow}>
				<h2>⬅ Choose project to view</h2>
				{iframeLinks.map(
					(item) =>
						modal[item.name] && (
							<div className={styles.modal} key={item.name}>
								<div onClick={() => setModal(initObj)} className={styles.modalClose}>
									✖
								</div>
								<iframe src={item.link} title={item.name}></iframe>
							</div>
						)
				)}
			</div>
		</div>
	);
}
