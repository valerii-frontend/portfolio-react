import React from "react";
import styles from "./Sidebar.module.css";
import IconsBar from "./IconsBar";
import Folder from "./Folder";

export default function Sidebar() {
	const skills = [
		{ name: "HTML", icon: "html" },
		{ name: "CSS", icon: "css" },
		{ name: "Bootstrap", icon: "bs" },
		{ name: "BEM", icon: "bem" },
		{ name: "SASS", icon: "scss" },
		{ name: "JavaScript", icon: "js" },
		{ name: "TypeScript", icon: "ts" },
		{ name: "React", icon: "jsx" },
	];
	return (
		<div className={styles.sidebar}>
			<IconsBar />
			<div style={{ flex: 1 }}>
				<Folder items={skills} title='skills' />
			</div>
		</div>
	);
}
