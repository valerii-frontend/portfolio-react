import React from "react";
import styles from "./Tabs.module.css";

export default function Tabs() {
	return (
		<nav className={styles.tabs}>
			<ul>
				<li>
					<a href='/main'>main.jsx</a>
				</li>
				<li>
					<a href='/works'>works.lib</a>
				</li>
				<li>
					<a href='/about'>about.txt</a>
				</li>
				<li>
					<a href='/contact'>Contact.tel</a>
				</li>
			</ul>
		</nav>
	);
}
