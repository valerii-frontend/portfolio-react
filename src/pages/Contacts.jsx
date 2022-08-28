import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./styles/Contacts.module.css";

export default function Contacts() {
	return (
		<div className={styles.contacts}>
			<Sidebar>
				<span className={styles.file}>contacts.pdf</span>
			</Sidebar>

			<div className={styles.info}>Contacts</div>
		</div>
	);
}
