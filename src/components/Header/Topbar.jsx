import React, { useContext } from "react";
import styles from "./Topbar.module.css";
import vscode from "../../assets/icons/vscode-icon.svg";
import Toggle from "../Toggle/Toggle";
import { Context } from "../../context";

export default function Topbar() {
	const { setThemeSwitch } = useContext(Context);

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
			<Toggle id='toggle' onClick={() => setThemeSwitch((p) => !p)} className={styles.toggle}>
				☀ <span>☾</span>
			</Toggle>
		</div>
	);
}
