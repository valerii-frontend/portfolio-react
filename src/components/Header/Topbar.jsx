import React from "react";
import styles from "./Topbar.module.css";
import vscode from "./icons/vscode-icon.svg";

export default function Topbar() {
	return (
		<div className={styles.topbar}>
			<img src={vscode} alt='vs code logo icon' />
			<div className={styles.controls}>
				<span className={styles.control}>—</span>
				<span className={styles.control}>&#10064;</span>
				<span className={styles.control}>✖</span>
			</div>
		</div>
	);
}
