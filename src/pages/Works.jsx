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
