import React, { useState } from "react";
import styles from "./Folder.module.css";

export default function Folder({ children, title, items, slideTo, modalToggle, open }) {
	const [isOpen, setIsOpen] = useState(open ? true : false);
	const folderToggleHandler = () => setIsOpen((p) => !p);

	return (
		<div className={`${styles[title]} ${styles.folder}`}>
			<p className={isOpen ? styles.open : styles.close} onClick={folderToggleHandler}>
				{title}
			</p>
			{isOpen && (
				<ul className={styles.list}>
					{items.map((item) => (
						<li
							key={item.name}
							className={styles[`${item.icon}`]}
							onClick={item.slide ? () => slideTo(item.slide) : () => modalToggle(item.modal)}>
							{item.name}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
