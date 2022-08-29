import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./styles/About.module.css";
import AboutSidebar from "../components/Sidebar/SidebarAboutContent";
import Modal from "../components/Modal/Modal";
import Text3d from "../components/Text3d/Text3d";

export default function About() {
	const aboutMeText = (
		<>
			<h2>aboutMeText</h2>
			<p>
				I am studying with documentation, free Internet materials, and YouTube, and sometimes take paid courses. I spend
				my free time learning new things, also I like running and reading and walking with my family. My goal is to find
				a company where I can unleash my potential, learn and develop together with a team of experienced and motivated
				people. I am ready to create and improve myself. As well, human qualities are very important to me. I like to
				solve logic problems and puzzles, sometimes I use CodeSignal, LeetCode, or CodeWars for this.
			</p>
		</>
	);
	const educationText = (
		<>
			<h2>educationText</h2>
			<ol>
				<li> University: Donetsk National Technical University (2006-2012)</li>
				<li> Academic degree: Specialist (engineer) </li>
				<li> Major: Telecommunication systems and networks. </li>
				<li> Faculty: Computer Information Technology and Automation</li>
			</ol>
			<h2>courses</h2>
			<ul>
				<li> edu.fls.guru - advanced course of HTML coding (Sept 2020 – Dec 2020) </li>
				<li> GeekBrains - Completed the course «HTML & CSS» </li>
				<li> Udemy —The Complete JavaScript Course: From Zero to Expert! (Oct 2021 – Nov 2021) </li>
				<li> Udemy — React: The Complete guide! (June 2022 – July 2022) </li>
			</ul>
		</>
	);
	const experienceText = (
		<>
			<h2>experienceText</h2>
			<ul>
				<li>
					Freelancer (January 2021 – February 2022) Responsibilities: creating pages from PSD and Figma layouts, with
					HTML & CSS;
				</li>
				<li>
					Frontend Developer in “Rolladen Group” (December 2021 – present time) Responsibilities: e-commerce store
					optimization. Improved performance, implementation of modern technologies, improved styles, and scripts.
					Correction of errors and bugs in the code. Editing with PHP Smart templates, creating a mobile version for
					pages. Technology: JavaScript, Jquery, HTML, CSS, PHP, Smarty
				</li>
				<li>
					Freelancer on UpWork (April 2022 – present time) Responsibilities: slice layouts, writing scripts, fixing
					errors in the code, creating animations
				</li>
			</ul>
		</>
	);
	const hobbyText = (
		<>
			<h2>hobbyText</h2>
			<p></p>
		</>
	);
	const languagesText = (
		<>
			<h2>languagesText</h2>
			<ul>
				<li> Russian—Native C1</li>
				<li> Ukrainian—Native C1</li>
				<li> Polish—Intermediate B2</li>
				<li> English—Intermediate B1 </li>
			</ul>
		</>
	);
	const softText = (
		<>
			<h2>softText</h2>
			<ul>
				<li> Experienced PC user;</li>
				<li> Professional approach, good organization of work;</li>
				<li> Initiative;</li>
				<li> Sociable and ready to help; </li>
				<li> Attention to detail, open to everything new;</li>
				<li> Involvement in work; </li>
				<li> Desire to develop & improve.</li>
			</ul>
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
					<div>
						<Text3d deg='15deg' dept='15px'>
							<h1>Some information about me</h1>
						</Text3d>
					</div>
					<Text3d deg='15deg' dept='15px'>
						<h2>About me</h2>
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
								{e.text}
							</Modal>
						)
				)}
			</div>
		</div>
	);
}
