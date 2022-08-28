import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./styles/About.module.css";
import AboutSidebar from "../components/Sidebar/SidebarAboutContent";
import Modal from "../components/Modal/Modal";

export default function About() {
	const aboutMeText = (
		<>
			<h2>aboutMeText</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, optio.</p>
		</>
	);
	const educationText = (
		<>
			<h2>educationText</h2>
		</>
	);
	const experienceText = (
		<>
			<h2>experienceText</h2>
		</>
	);
	const hobbyText = (
		<>
			<h2>hobbyText</h2>
		</>
	);
	const languagesText = (
		<>
			<h2>languagesText</h2>
		</>
	);
	const softText = (
		<>
			<h2>softText</h2>
		</>
	);

	const about = [
		{ name: "about-me", text: aboutMeText },
		{ name: "education", text: educationText },
		{ name: "experience", text: experienceText },
		{ name: "hobby", text: hobbyText },
		{ name: "languages", text: languagesText },
		{ name: "soft-skills", text: softText },
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
					<h1>Some information about me</h1>
					<h2>About me</h2>
					<p>Just a story about my life and my way to the programming and IT</p>
					<h2>Education</h2>
					<p>Information about my university, self-study, courses, as well as my certificates</p>
					<h2>Expirience</h2>
					<p>
						Here you can get acquainted with my experience in development, I have indicated only relevant places of
						work, and also briefly described useful skills
					</p>
					<h2>Hobby</h2>
					<p>not a big description of things that I am fond of and do in my spare time</p>
					<h2>Languages</h2>
					<p>Some info about my languages skills</p>
					<h2>Soft skills</h2>
					<p>The additional not programming skills, which will be useful at the any jobtype and company</p>
				</div>
				{about.map(
					(e) =>
						modal[e.name] && (
							<Modal closeModalHandler={closeModalHandler} key={e.name}>
								{e.text}
							</Modal>
						)
				)}
			</div>
		</div>
	);
}
