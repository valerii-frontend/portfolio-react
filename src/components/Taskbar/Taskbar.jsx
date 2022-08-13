import React from "react";
import styles from "./Taskbar.module.css";

export default function Taskbar({ children }) {
	return (
		<div className={styles.taskbar}>
			<div>
				<span>vscode</span>
				<span>&nbsp;&nbsp;&nbsp;🗘&nbsp;&nbsp;&nbsp;</span>
				<span>⮾&nbsp;&nbsp;&nbsp;</span>
				<span>△&nbsp;&nbsp;&nbsp;</span>
			</div>
			<div>
				<span>Tab Size: 2&nbsp;&nbsp;UTF-8&nbsp;&nbsp;LF</span>
				<span>&nbsp;&nbsp;&nbsp;{`{ } JavaScript React`}&nbsp;&nbsp;&nbsp;&nbsp;</span>
				<span>⫚ Go Live&nbsp;&nbsp;&nbsp;&nbsp;</span>
				<span>√ Prettier</span>
			</div>
		</div>
	);
}
