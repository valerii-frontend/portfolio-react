import React from "react";
import Folder from "./Folder";

export default function Works({ slideTo, modal, setModal }) {
	const modalHandler = (e) => {
		setModal(() => {
			return { [e]: true };
		});
	};

	const react = [
		{ name: "blog-page", icon: "jsx", modal: "post" },
		{ name: "chess-game", icon: "jsx", modal: "chess" },
		{ name: "healthy-food", icon: "jsx", modal: "food" },
		{ name: "poland-cities", icon: "jsx", modal: "city" },
	];

	const library = [
		{ name: "app-for-drawing", icon: "js", modal: "paint" },
		{ name: "css-animation-loop", icon: "css", modal: "css-night" },
		{ name: "dashboard-theme-swicher", icon: "js", modal: "dashboard" },
		{ name: "full-page-slider", icon: "js", modal: "f-slider" },
		{ name: "vertical-slider", icon: "js", modal: "v-slider" },
	];

	const games = [
		{ name: "15-puzzle-game", icon: "js", modal: "15" },
		{ name: "guess-the-word", icon: "js", modal: "guess" },
		{ name: "pig-game", icon: "js", modal: "pig" },
	];

	const sites = [
		{ name: "apartments-viewer", icon: "html", modal: "melody" },
		{ name: "auto-posting-service", icon: "html", modal: "posting" },
		{ name: "casino-promo", icon: "html", modal: "casino" },
		{ name: "constraction-company", icon: "html", modal: "arteo" },
		{ name: "design-studio", icon: "html", modal: "design" },
		{ name: "fuel-company", icon: "html", modal: "gaz" },
		{ name: "gate-sellers-parts", icon: "html", modal: "came" },
		{ name: "meat-products", icon: "html", modal: "lesniczowka" },
		{ name: "protective-barriers", icon: "html", modal: "anter" },
	];

	const api = [
		{ name: "rest-countries", icon: "js", modal: "countries" },
		{ name: "film-data-base", icon: "js", modal: "films" },
	];
	return (
		<>
			<Folder items={react} modalToggle={modalHandler} title='react' />
			<Folder items={library} title='library' modalToggle={modalHandler} />
			<Folder items={games} title='games' modalToggle={modalHandler} />
			<Folder items={api} title='api' modalToggle={modalHandler} />
			<Folder items={sites} title='web-sites' modalToggle={modalHandler} />
		</>
	);
}
