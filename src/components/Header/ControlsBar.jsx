import React from "react";
import styles from "./ControlBar.module.css";

export default function ControlBar() {
	return (
		<div className={styles.filesControl}>
			<strong>explorer: portfolio: </strong>
			<div>
				<span className={styles.newFile} alt='new-file' />
				<span className={styles.newFolder} alt='new folder' />
				<span className={styles.refresh} alt='refresh' />
				<span className={styles.collapse} alt='collapse' />
				<span className={styles.more} alt='more' />
			</div>
		</div>
	);
}
