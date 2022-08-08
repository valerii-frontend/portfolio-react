import React from "react";
import styles from "./Tabs.module.css";

import reactIcon from "./icons/react-icon.svg";
import aboutIcon from "./icons/note-text.svg";
import libIcon from "./icons/folder.svg";
import contactIcon from "./icons/user.svg";

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
						contact.tel
					</a>
				</li>
			</ul>
		</nav>
	);
}
