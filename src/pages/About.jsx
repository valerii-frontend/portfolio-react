import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./Works.module.css";
export default function About() {
	return (
		<div className={styles.works}>
			<Sidebar />
			<div>About</div>
		</div>
	);
}
