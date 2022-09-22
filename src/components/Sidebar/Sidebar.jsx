import React, { useContext } from "react";
import styles from "./Sidebar.module.css";
import IconsBar from "../IconBar/IconsBar";
import filesImg from "../../assets/icons/files.svg";
import { Context } from "../../context";

export default function Sidebar({ children }) {
	const { sidebarToggle, setSidebarToggle } = useContext(Context);

	const sideBarHandler = () => setSidebarToggle((p) => !p);
	return (
		<arside className={`${styles.sidebar} ${sidebarToggle ? styles.active : ""}`}>
			<div className={`${styles.toggle} ${sidebarToggle ? styles.active : ""}`} onClick={sideBarHandler}>
				{!sidebarToggle && <img src={filesImg} alt='files icon' />}
				{sidebarToggle && "✖"}
			</div>
			<IconsBar />
			<div className={styles.files}>{children}</div>
		</arside>
	);
}
