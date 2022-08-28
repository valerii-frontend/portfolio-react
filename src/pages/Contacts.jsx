import React from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./Works.module.css";
export default function Contacts() {
	return (
		<div className={styles.works}>
			<Sidebar></Sidebar>
			<div>Contacts</div>
		</div>
	);
}
