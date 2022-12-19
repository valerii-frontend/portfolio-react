import React from "react";
import Topbar from "./Topbar";
import Tabs from "../Tabs";

export default function Header() {
  return (
    <header className='header'>
      <Topbar />
      <Tabs />
    </header>
  );
}
