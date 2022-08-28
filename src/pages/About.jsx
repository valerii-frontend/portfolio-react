import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./About.module.css";
import AboutSidebar from "../components/Sidebar/AboutSidebar";
import Modal from "../components/Modal/Modal";

export default function About() {
	const about = [
		{ name: 1, text: 1 },
		{ name: 2, text: 2 },
		{ name: 3, text: 3 },
		{ name: 4, text: 4 },
		{ name: 5, text: 5 },
	];
	const [modal, setModal] = useState({});

	const closeModalHandler = () => {
		setModal({});
	};
	return (
		<div className={styles.about}>
			<Sidebar>
				<AboutSidebar modal={modal} setModal={setModal} />
			</Sidebar>
			<h1>About me</h1>
			{about.map(
				(e) =>
					modal[e.name] && (
						<Modal closeModalHandler={closeModalHandler} key={e.name}>
							<div>
								{e.name} <b>{e.text}</b>
							</div>
						</Modal>
					)
			)}
		</div>
	);
}
