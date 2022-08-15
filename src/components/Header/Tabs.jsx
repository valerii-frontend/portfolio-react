import React from "react";
import styles from "./Tabs.module.css";
import { NavLink, useLocation } from "react-router-dom";
import reactIcon from "./icons/react-icon.svg";
import aboutIcon from "./icons/note-text.svg";
import libIcon from "./icons/folder.svg";
import contactIcon from "./icons/user.svg";
import ControlBar from "./ControlsBar";

export default function Tabs() {
	const { pathname } = useLocation();

	return (
		<nav className={styles.tabs}>
			<ControlBar />
			<ul>
				<li className={pathname === "/" ? styles.active : null}>
					<NavLink to={"/"}>
						<img src={reactIcon} alt='react icon jsx' /> main.jsx
					</NavLink>
				</li>
				<li className={pathname === "/works" ? styles.active : null}>
					<NavLink to='/works'>
						<img src={libIcon} alt='library icon' /> works.lib
					</NavLink>
				</li>
				<li className={pathname === "/about" ? styles.active : null}>
					<NavLink to='/about'>
						<img src={aboutIcon} alt='about icon' />
						about.txt
					</NavLink>
				</li>
				<li className={pathname === "/contacts" ? styles.active : null}>
					<NavLink to='/contacts'>
						<img src={contactIcon} alt='user contact icon' />
						contacts.tel
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
