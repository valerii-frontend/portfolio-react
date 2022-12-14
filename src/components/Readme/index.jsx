import React from "react";
import styles from "./Readme.module.css";
import performance from "../../assets/performance.jpg";

export default function Readme({ setIsReadme }) {
	return (
		<div className={styles.readmeInfo}>
			<div className={styles.wrap}>
				<h1>Portfolio page</h1>
				<h2>Task and idea</h2>
				<ul>
					<li>
						The main idea is to create a interesting and beautiful UI with Visual Studio Code like interface with React.
					</li>
					<li> Using CSS variables create a color theme swicher, based on the VS code IDE colors.</li>
					<li> The page must be responsive to any display resolutions.</li>
					<li> VS code tabs play role as a navigations bar</li>
					<li> Create 3D model of skills using Blender software</li>
					<li> Create reuseble components</li>
				</ul>
				<h2>Tools & dependencies</h2>
				<ul>
					<li>Blender </li>
					<li>Create React App </li>
					<li>React 18.2+ </li>
					<li>React-dom 18.2+ </li>
					<li>React-router-dom 6.3+ </li>
					<li>React-ztext library </li>
					<li>Swiper slider </li>
					<li>Three JS </li>
					<li>Google model-viewer </li>
					<li>CSS modules </li>
					<li>React Transition Group </li>
				</ul>
				<h2>Lighthouse report & code</h2>
				<div className={styles.image}>
					<img src={performance} alt='google lighthouse this app +report' />
				</div>
				<a
					className={styles.link}
					href='https://github.com/valerii-frontend/portfolio-react/'
					target='_blank'
					rel='noreferrer'>
					Link to source code on github
				</a>
			</div>
			<div onClick={() => setIsReadme(false)} className={styles.readmeInfoClose}>
				✖
			</div>
		</div>
	);
}
