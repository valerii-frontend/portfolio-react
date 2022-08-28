import React from "react";
import Folder from "./Folder";

export default function AboutSidebar({ modal, setModal }) {
	const notepad = [
		{ name: "experience", icon: "text", modal: 1 },
		{ name: "education", icon: "text", modal: 2 },
		{ name: "hobby", icon: "text", modal: 3 },
		{ name: "languages", icon: "text", modal: 4 },
		{ name: "cover-letter", icon: "text", modal: 5 },
	];
	const modalHandler = (e) => {
		setModal(() => {
			return { [e]: true };
		});
	};
	return (
		<>
			<Folder items={notepad} title='general-info' modalToggle={modalHandler} />
		</>
	);
}
