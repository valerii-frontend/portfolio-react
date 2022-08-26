import React from "react";
import styles from "./Taskbar.module.css";

export default function Taskbar() {
	return (
		<div className={styles.taskbar}>
			<div>
				<span>vscode</span>
				<span>🗘</span>
				<span>⮾ 0</span>
				<span>⚠ 0</span>
			</div>
			<div>
				<span>Tab Size: 2</span>
				<span>UTF-8</span>
				<span>CLRF</span>
				<span>{`{ } JavaScript React`}</span>
				<span>√ Prettier</span>
			</div>
		</div>
	);
}
