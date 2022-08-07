import React from "react";
import styles from "./Header.module.css";
import Topbar from "./Topbar";
import Tabs from "./Tabs";

export default function Header() {
	return (
		<header className={`${styles.header} header`}>
			<Topbar />
			<Tabs />
		</header>
	);
}
