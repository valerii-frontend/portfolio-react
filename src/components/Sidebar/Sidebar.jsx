import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import IconsBar from "../IconBar/IconsBar";
import toggle from "../../assets/icons/files.svg";

export default function Sidebar({ children }) {
	const [sidebarToggle, setSidebarToggle] = useState(false);
	return (
		<div className={`${styles.sidebar} ${sidebarToggle ? styles.active : ""}`}>
			<div
				className={`${styles.toggle} ${sidebarToggle ? styles.active : ""}`}
				onClick={() => setSidebarToggle((p) => !p)}>
				{!sidebarToggle && <img src={toggle} alt='files icon' />}
				{sidebarToggle && "✖"}
			</div>
			<IconsBar />
			<div className={styles.files}>{children}</div>
		</div>
	);
}
