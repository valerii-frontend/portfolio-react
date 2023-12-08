import React from "react";
import styles from "./Tabs.module.css";
import { NavLink, useLocation } from "react-router-dom";
import reactIcon from "../../assets/icons/react-icon.svg";
import aboutIcon from "../../assets/icons/note-text.svg";
import libIcon from "../../assets/icons/folder.svg";
import contactIcon from "../../assets/icons/contacts.svg";
import ControlBar from "../Header/ControlsBar";

export default function Tabs() {
  const { pathname } = useLocation();

  return (
    <nav className={styles.tabs}>
      <ControlBar />
      <ul>
        <li className={pathname === "/portfolio-react" || pathname === "/portfolio-react/" ? styles.active : ""}>
          <NavLink to={"/portfolio-react"}>
            <img src={reactIcon} alt='react icon jsx' /> main.jsx
          </NavLink>
        </li>
        <li className={pathname === "/portfolio-react/works" ? styles.active : ""}>
          <NavLink to='/portfolio-react/works'>
            <img src={libIcon} alt='library icon' /> projects.lib
          </NavLink>
        </li>
        <li className={pathname === "/portfolio-react/about" ? styles.active : ""}>
          <NavLink to='/portfolio-react/about'>
            <img src={aboutIcon} alt='about icon' />
            about.txt
          </NavLink>
        </li>
        <li className={pathname === "/portfolio-react/contacts" ? styles.active : ""}>
          <NavLink to='/portfolio-react/contacts'>
            <img src={contactIcon} alt='user contact icon' />
            contacts.vcf
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
