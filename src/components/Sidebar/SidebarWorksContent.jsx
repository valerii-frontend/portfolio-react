import React, { useContext } from "react";
import Folder from "../Folder/Folder";
import { Context } from "../../helpers/context";
import { worksCategory as cat } from "../../helpers/data";

export default function WorksSidebar({ slideTo, modal, setModal, children }) {
  const { setSidebarToggle } = useContext(Context);

  const modalHandler = (e) => {
    setSidebarToggle(false);
    setModal(() => {
      return { toggle: true, [e]: true };
    });
  };

  return (
    <>
      <Folder items={cat.react} modalToggle={modalHandler} title='react' />
      <Folder items={cat.library} title='library' modalToggle={modalHandler} />
      <Folder items={cat.games} title='games' modalToggle={modalHandler} />
      <Folder items={cat.api} title='api' modalToggle={modalHandler} />
      <Folder items={cat.sites} title='web-sites' modalToggle={modalHandler} />
      {children}
    </>
  );
}
