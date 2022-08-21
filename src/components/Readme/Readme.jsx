import React from "react";
import styles from "./Readme.module.css";

export default function Readme({ setIsReadme }) {
	return (
		<div className={styles.readmeInfo}>
			README
			<div onClick={() => setIsReadme(false)} className={styles.readmeInfoClose}>
				✖
			</div>
		</div>
	);
}
