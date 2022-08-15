import React, { useState } from "react";
import styles from "./Folder.module.css";

export default function Folder({ children, title, items }) {
	const [isOpen, setIsOpen] = useState(true);
	const folderToggleHandler = () => setIsOpen((p) => !p);

	return (
		<div className={`${styles[title]} ${styles.folder}`}>
			<p className={isOpen ? styles.open : styles.close} onClick={folderToggleHandler}>
				{title}
			</p>
			{isOpen && (
				<ul className={styles.list}>
					{items.map((item) => (
						<li key={item.name} className={styles[`${item.icon}`]}>
							{item.name}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
