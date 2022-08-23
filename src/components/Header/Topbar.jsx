import React from "react";
import styles from "./Topbar.module.css";
import vscode from "../../assets/icons/vscode-icon.svg";
import Toggle from "../Toggle/Toggle";

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
			<Toggle id='theme' onClick={() => {}} className={styles.toggle}>
				☀ <span>☾</span>
			</Toggle>
		</div>
	);
}
