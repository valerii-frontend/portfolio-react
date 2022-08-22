import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import WorksSidebar from "../components/Sidebar/WorksSidebar";
import styles from "./Works.module.css";

export default function Works() {
	const [full, setFull] = useState(false);
	const [mobile, setMobile] = useState(false);

	const fullScreenToggle = () => setFull((p) => !p);
	const mobileToggle = () => setMobile((p) => !p);

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
		{ name: "cubes", link: "https://valerii-frontend.github.io/library/dist/cubes.html" },
		{ name: "scroll", link: "https://valerii-frontend.github.io/library/dist/scroll.html" },
		{ name: "blur", link: "https://valerii-frontend.github.io/library/dist/blur.html" },
		{ name: "cards", link: "https://valerii-frontend.github.io/library/dist/cards.html" },
		{ name: "search", link: "https://valerii-frontend.github.io/library/dist/hidden-search.html" },
	];
	const [modal, setModal] = useState({});
	return (
		<div className={styles.works}>
			<Sidebar>
				<WorksSidebar setModal={setModal} modal={modal} />
			</Sidebar>
			<div className={styles.worksWindow}>
				<h2>⬅ Choose project to view</h2>
				{iframeLinks.map(
					(item) =>
						modal[item.name] && (
							<div
								className={`${styles.modal} ${full ? styles.fullScreen : ""} ${mobile ? styles.mobile : ""}`}
								key={item.name}>
								<div onClick={() => setModal({})} className={styles.modalClose}>
									✖
								</div>
								<div className={styles.modalControls}>
									<div className={styles.modalControl}>
										<input type='checkbox' id='fullscreen' value={full} onChange={fullScreenToggle} />
										<label htmlFor='fullscreen'>fullscreen</label>
									</div>
									<div className={styles.modalControl}>
										<input type='checkbox' id='mobile' value={mobile} onChange={mobileToggle} />
										<label htmlFor='mobile'>mobile view</label>
									</div>
								</div>
								<iframe src={item.link} title={item.name}></iframe>
							</div>
						)
				)}
			</div>
		</div>
	);
}
