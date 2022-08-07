import React from "react";
import styles from "./Tabs.module.css";
import reactIcon from "./react-icon.svg";
import aboutIcon from "./note-text.svg";
import libIcon from "./folder.svg";
import contactIcon from "./user.svg";

export default function Tabs() {
	return (
		<nav className={styles.tabs}>
			<ul>
				<li className={styles.active}>
					<a href='/main'>
						<img src={reactIcon} alt='react icon jsx' /> main.jsx
					</a>
				</li>
				<li>
					<a href='/works'>
						<img src={libIcon} alt='library icon' /> works.lib
					</a>
				</li>
				<li>
					<a href='/about'>
						<img src={aboutIcon} alt='about icon' />
						about.txt
					</a>
				</li>
				<li>
					<a href='/contact'>
						<img src={contactIcon} alt='user contact icon' />
						Contact.tel
					</a>
				</li>
			</ul>
		</nav>
	);
}
