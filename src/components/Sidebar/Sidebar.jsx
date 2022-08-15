import React from "react";
import styles from "./Sidebar.module.css";
import IconsBar from "./IconsBar";

export default function Sidebar({ children }) {
	return (
		<div className={styles.sidebar}>
			<IconsBar />
			<div className={styles.files}>{children}</div>
		</div>
	);
}
