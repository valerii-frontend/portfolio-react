import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./About.module.css";
export default function About() {
	return (
		<div className={styles.about}>
			<Sidebar />
			<h1>About</h1>
		</div>
	);
}
