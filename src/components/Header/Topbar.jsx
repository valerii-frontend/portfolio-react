import React from "react";
import styles from "./Topbar.module.css";
import vscode from "../../assets/icons/vscode-icon.svg";

export default function Topbar() {
	return (
		<div className={styles.topbar}>
			<img src={vscode} alt='vs code logo icon' />
			<code className={styles.name}>
				ValeriiLozghachov <span className={styles.props}>ref</span>
				<span className={styles.equals}>=</span>
				<span className={styles.portfolio}>portfolio</span>
				<span className={styles.props}> className</span>
				<span className={styles.equals}>=</span>
				<span className={styles.appClass}>"App"</span>
			</code>
			<div className={styles.controls}>
				<span className={styles.control}>—</span>
				<span className={styles.control}>&#10064;</span>
				<span className={styles.control}>✖</span>
			</div>
		</div>
	);
}
