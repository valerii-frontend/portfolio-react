import React from "react";
import Folder from "./Folder";

export default function Works({ slideTo, modal, setModal, initObj }) {
	const modalHandler = (e) => {
		setModal((p) => {
			p = { ...initObj };
			return (p = { ...p, [e]: true });
		});
	};

	const react = [
		{ name: "chess-game", icon: "jsx", modal: "chess" },
		{ name: "healthy-food", icon: "jsx", modal: "food" },
		{ name: "blog-page", icon: "jsx", modal: "post" },
		{ name: "poland-cities", icon: "jsx", modal: "city" },
	];
	const apps = [
		{ name: "Figma", icon: "figma", slide: 12 },
		{ name: "Photoshop", icon: "psd", slide: 11 },
	];
	const staticPages = [{ name: "GitHub", icon: "gh", slide: 14 }];
	return (
		<>
			<Folder items={react} modalToggle={modalHandler} title='react' />
			<Folder items={apps} title='apps' />
			<Folder items={staticPages} title='static' />
		</>
	);
}
