import React from "react";
import Folder from "./Folder";
import styles from "./HomeSidebar.module.css";

export default function HomeSidebar({ slideTo, setIsReadme, isReadme }) {
	const skills = [
		{ name: "HTML", icon: "html", slide: 1 },
		{ name: "CSS", icon: "css", slide: 5 },
		{ name: "SASS", icon: "scss", slide: 8 },
		{ name: "BEM", icon: "bem", slide: 13 },
		{ name: "JavaScript", icon: "js", slide: 7 },
		{ name: "TypeScript", icon: "ts", slide: 3 },
		{ name: "React", icon: "jsx", slide: 10 },
		{ name: "Bootstrap", icon: "bs", slide: 4 },
	];
	const apps = [
		{ name: "Figma", icon: "figma", slide: 12 },
		{ name: "Photoshop", icon: "psd", slide: 11 },
		{ name: "Gimp", icon: "gimp", slide: 11 },
		{ name: "VisualStudioCode", icon: "vscode", slide: 2 },
		{ name: "PHPStorm", icon: "php", slide: 6 },
		{ name: "WebStorm", icon: "web", slide: 6 },
	];
	const tools = [
		{ name: "GitHub", icon: "gh", slide: 14 },
		{ name: "GitLab", icon: "gl", slide: 15 },
		{ name: "git", icon: "git", slide: 17 },
		{ name: "npm", icon: "npm", slide: 16 },
		{ name: "gulp", icon: "gulp", slide: 9 },
		{ name: "GoogleChrome", icon: "chrome", slide: 18 },
	];
	return (
		<>
			<Folder items={skills} slideTo={slideTo} title='skills' />
			<Folder items={apps} slideTo={slideTo} title='apps' />
			<Folder items={tools} slideTo={slideTo} title='tools' />
			<p className={`${styles.readme} ${isReadme ? styles.active : ""}`} onClick={() => setIsReadme(true)}>
				README.md
			</p>
		</>
	);
}
