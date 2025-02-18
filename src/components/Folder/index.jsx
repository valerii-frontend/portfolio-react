import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../helpers/context";

import styles from "./Folder.module.css";

export default function Folder({ title, items, open }) {
  const [isOpen, setIsOpen] = useState(open ? true : false);
  const folderToggleHandler = () => setIsOpen((p) => !p);
  const { setSidebarToggle } = useContext(Context);

  const navigate = useNavigate();

  return (
    <div className={`${styles[title]} ${styles.folder}`}>
      <p className={isOpen ? styles.open : styles.close} onClick={folderToggleHandler}>
        {title}
      </p>
      {isOpen && (
        <ul className={styles.list}>
          {items.map((item) => {
            if (item.slide) {
              <li key={item.name} className={styles[`${item.icon}`]}>
                {item.name}
              </li>;
            }
            return (
              <li
                key={item.name}
                className={styles[`${item.icon}`]}
                onClick={() => {
                  setSidebarToggle(false);
                  navigate(`/portfolio-react/about/${item.name}`);
                }}>
                {item.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
