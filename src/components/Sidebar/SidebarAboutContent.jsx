import React from "react";
import Folder from "../Folder/Folder";

export default function AboutSidebar({ modal, setModal }) {
	const notepad = [
		{ name: "about-me", icon: "text", modal: "about-me" },
		{ name: "education", icon: "text", modal: "education" },
		{ name: "experience", icon: "text", modal: "experience" },
		{ name: "hobby", icon: "text", modal: "hobby" },
		{ name: "languages", icon: "text", modal: "languages" },
		{ name: "soft-skills", icon: "text", modal: "soft-skills" },
	];

	const modalHandler = (e) => {
		setModal(() => {
			return { [e]: true };
		});
	};
	return (
		<>
			<Folder items={notepad} title='general-info' modalToggle={modalHandler} open />
		</>
	);
}
