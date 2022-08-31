import React, { useContext } from "react";
import Folder from "../Folder/Folder";
import { Context } from "../../context";

export default function AboutSidebar({ modal, setModal }) {
	const notepad = [
		{ name: "biography", icon: "text", modal: "biography" },
		{ name: "education", icon: "text", modal: "education" },
		{ name: "experience", icon: "text", modal: "experience" },
		{ name: "hobby", icon: "text", modal: "hobby" },
		{ name: "languages", icon: "text", modal: "languages" },
		{ name: "soft-skills", icon: "text", modal: "soft-skills" },
	];

	const { setSidebarToggle } = useContext(Context);

	const modalHandler = (e) => {
		setSidebarToggle(false);
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
