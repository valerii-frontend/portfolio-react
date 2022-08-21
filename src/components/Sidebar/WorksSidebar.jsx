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

	const library = [{ name: "library", icon: "js", modal: "library" }];

	const games = [{ name: "15PuzzleGame", icon: "js", modal: "15" }];

	const staticPages = [{ name: "15PuzzleGame", icon: "js", modal: "15" }];
	return (
		<>
			<Folder items={react} modalToggle={modalHandler} title='react' />
			<Folder items={library} title='library' modalToggle={modalHandler} />
			<Folder items={games} title='games' modalToggle={modalHandler} />
			<Folder items={staticPages} title='static' modalToggle={modalHandler} />
		</>
	);
}
