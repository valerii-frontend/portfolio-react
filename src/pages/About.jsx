import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./styles/About.module.css";
import AboutSidebar from "../components/Sidebar/SidebarAboutContent";
import Modal from "../components/Modal/Modal";
import Text3d from "../components/Text3d/Text3d";

import { Bio, Lang, Edu, Exp, Hobby, Soft } from "../components/AboutContent/AboutContent";

export default function About() {
	const about = [
		{ name: "biography", component: <Bio /> },
		{ name: "education", component: <Edu /> },
		{ name: "experience", component: <Exp /> },
		{ name: "hobby", component: <Hobby /> },
		{ name: "languages", component: <Lang /> },
		{ name: "soft-skills", component: <Soft /> },
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
			<div className={styles.textArea}>
				<div className={styles.info}>
					<div>
						<Text3d deg='15deg' dept='15px'>
							<h1>General information about me</h1>
						</Text3d>
					</div>
					<Text3d deg='15deg' dept='15px'>
						<h2>Biography</h2>
					</Text3d>
					<p>Just a story about my life and my way to the programming and IT</p>
					<Text3d deg='15deg' dept='15px'>
						<h2>Education</h2>
					</Text3d>
					<p>Information about my university, self-study, courses, as well as my certificates</p>
					<Text3d deg='15deg' dept='15px'>
						<h2>Expirience</h2>
					</Text3d>
					<p>
						Here you can get acquainted with my experience in development, I have indicated only relevant places of
						work, and also briefly described useful skills
					</p>
					<Text3d deg='15deg' dept='15px'>
						<h2>Hobby</h2>
					</Text3d>
					<p>not a big description of things that I am fond of and do in my spare time</p>
					<Text3d deg='15deg' dept='15px'>
						<h2>Languages</h2>
					</Text3d>
					<p>Some info about my languages skills</p>
					<Text3d deg='15deg' dept='15px'>
						<h2>Soft skills</h2>
					</Text3d>
					<p>The additional not programming skills, which will be useful at the any jobtype and company</p>
				</div>
				{about.map(
					(e) =>
						modal[e.name] && (
							<Modal closeModalHandler={closeModalHandler} key={e.name}>
								{e.component}
							</Modal>
						)
				)}
			</div>
		</div>
	);
}
