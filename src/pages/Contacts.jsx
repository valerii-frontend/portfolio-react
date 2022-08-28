import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./styles/Contacts.module.css";

export default function Contacts() {
	return (
		<div className={styles.contacts}>
			<Sidebar>
				<span className={styles.file}>contacts.pdf</span>
			</Sidebar>

			<div className={styles.info}>
				<h1>Contacts</h1>
				<ul>
					<li>
						<a href='https://www.facebook.com/valerii.from.earth'>FaceBook</a>
					</li>
					<li>
						<a href='http://www.linkedin.com/in/valerii-lozghachov'>LinkedIn</a>
					</li>
					<li>
						<a href='https://t.me/the_earth_citizen'>Telegram</a>
					</li>
					<li>
						<a href='mailto:v.lozghachov@gmail.com'>Email</a>
					</li>
				</ul>
				<h2>profiles</h2>
				<ul>
					<li>
						<a href='https://github.com/valerii-frontend'>GitHub</a>
					</li>
					<li>
						<a href='https://app.codesignal.com/profile/_valerii__'>codesignal</a>
					</li>
					<li>
						<a href='https://www.upwork.com/freelancers/~014ead3e287a0b68a3'>UpWork</a>
					</li>
					<li>
						<a href='https://www.codewars.com/users/valerii-frontend'>CodeWars</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
