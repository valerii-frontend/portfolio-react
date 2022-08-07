import React from "react";
import styles from "./Header.module.css";
import Topbar from "./Topbar";

export default function Header() {
	return (
		<header className={styles.header}>
			<Topbar />
		</header>
	);
}
