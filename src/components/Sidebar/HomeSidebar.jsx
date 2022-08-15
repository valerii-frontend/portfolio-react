import React from "react";
import Folder from "./Folder";

export default function HomeSidebar() {
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
	const apps = [
		{ name: "Figma", icon: "figma" },
		{ name: "Photoshop", icon: "psd" },
		{ name: "Gimp", icon: "gimp" },
		{ name: "VisualStudioCode", icon: "vscode" },
		{ name: "JetBrainsPHPStorm", icon: "php" },
		{ name: "JetBrainsWebStorm", icon: "web" },
	];
	const tools = [
		{ name: "GitHub", icon: "gh" },
		{ name: "GitLab", icon: "gl" },
		{ name: "npm", icon: "npm" },
		{ name: "gulp", icon: "gulp" },
		{ name: "GoogleChrome", icon: "chrome" },
	];
	return (
		<>
			<Folder items={skills} title='skills' />
			<Folder items={apps} title='apps' />
			<Folder items={tools} title='tools' />
		</>
	);
}
