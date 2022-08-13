import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./Works.module.css";
export default function Works() {
	return (
		<div className={styles.works}>
			<Sidebar />
			<div>Works</div>
		</div>
	);
}
