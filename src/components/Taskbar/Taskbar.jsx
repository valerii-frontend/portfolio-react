import React from "react";
import styles from "./Taskbar.module.css";

export default function Taskbar({ children }) {
	return <div className={styles.taskbar}>{children}</div>;
}
