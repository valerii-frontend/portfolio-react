import React from "react";
import styles from "./IconsBar.module.css";
import { Link } from "react-router-dom";

export default function IconsBar() {
	return (
		<div className={styles.icons}>
			<div className={styles.top}>
				<span className={`${styles.filesIcon} ${styles.icon}`}></span>
				<span className={`${styles.searchIcon} ${styles.icon}`}></span>
				<span className={`${styles.gitIcon} ${styles.icon}`}></span>
				<span className={`${styles.bugIcon} ${styles.icon}`}></span>
				<span className={`${styles.blocksIcon} ${styles.icon}`}></span>
			</div>
			<div className={styles.bottom}>
				<Link to='/portfolio-react/about' className={`${styles.userIcon} ${styles.icon}`}></Link>
				<span className={`${styles.settingsIcon} ${styles.icon}`}></span>
			</div>
		</div>
	);
}
