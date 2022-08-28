import React from "react";
import Folder from "./Folder";

export default function AboutSidebar() {
	const notepad = [
		{ name: "experience", icon: "text" },
		{ name: "education", icon: "text" },
		{ name: "hobby", icon: "text" },
		{ name: "languages", icon: "text" },
		{ name: "cover-letter", icon: "text" },
	];

	return (
		<>
			<Folder items={notepad} title='general-info' />
		</>
	);
}
