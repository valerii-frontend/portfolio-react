import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./About.module.css";
import AboutSidebar from "../components/Sidebar/AboutSidebar";

export default function About() {
	return (
		<div className={styles.about}>
			<Sidebar>
				<AboutSidebar />
			</Sidebar>
			<h1>About</h1>
		</div>
	);
}
