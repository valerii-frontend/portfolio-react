import React from "react";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<div className={styles.icons}>
				<div className={styles.top}>
					<span className={`${styles.filesIcon} ${styles.icon}`}></span>
					<span className={`${styles.searchIcon} ${styles.icon}`}></span>
					<span className={`${styles.gitIcon} ${styles.icon}`}></span>
					<span className={`${styles.bugIcon} ${styles.icon}`}></span>
					<span className={`${styles.blocksIcon} ${styles.icon}`}></span>
				</div>
				<div className={styles.bottom}>
					<Link to='/about' className={`${styles.userIcon} ${styles.icon}`}></Link>
					<span className={`${styles.settingsIcon} ${styles.icon}`}></span>
				</div>
			</div>
			<div className={styles.files}></div>
		</div>
	);
}
