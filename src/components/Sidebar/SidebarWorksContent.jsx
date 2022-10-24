import React, { useContext } from "react";
import Folder from "../Folder/Folder";
import { Context } from "../../context";

export default function WorksSidebar({ slideTo, modal, setModal, children }) {
  const { setSidebarToggle } = useContext(Context);

  const modalHandler = (e) => {
    setSidebarToggle(false);
    setModal(() => {
      return { toggle: true, [e]: true };
    });
  };

  const react = [
    { name: "blog-page", icon: "jsx", modal: "post" },
    { name: "chess-game", icon: "jsx", modal: "chess" },
    { name: "healthy-food", icon: "jsx", modal: "food" },
    { name: "poland-cities", icon: "jsx", modal: "city" },
    { name: "currency-converter", icon: "jsx", modal: "currency" },
    { name: "loaders animation", icon: "jsx", modal: "loaders" },
  ];

  const library = [
    { name: "app-for-drawing", icon: "js", modal: "paint" },
    { name: "blur-preloader", icon: "js", modal: "blur" },
    { name: "css-animation-loop", icon: "css", modal: "css-night" },
    { name: "cubes-css-animation", icon: "css", modal: "cubes" },
    { name: "custom-accordion-cards", icon: "js", modal: "cards" },
    { name: "dashboard-theme-swicher", icon: "js", modal: "dashboard" },
    { name: "full-page-slider", icon: "js", modal: "f-slider" },
    { name: "loader", icon: "css", modal: "loader" },
    { name: "progresive-steps", icon: "js", modal: "steps" },
    { name: "scroll-block-animation", icon: "js", modal: "scroll" },
    { name: "search-input-toggle", icon: "js", modal: "search" },
    { name: "vertical-slider", icon: "js", modal: "v-slider" },
  ];

  const games = [
    { name: "15-puzzle-game", icon: "js", modal: "15" },
    { name: "guess-the-word", icon: "js", modal: "guess" },
    { name: "pig-game", icon: "js", modal: "pig" },
  ];

  const sites = [
    { name: "auto-posting-service", icon: "html", modal: "posting" },
    { name: "casino-promo", icon: "html", modal: "casino" },
    { name: "constraction-company", icon: "html", modal: "arteo" },
    { name: "design-studio", icon: "html", modal: "design" },
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
      {children}
    </>
  );
}
