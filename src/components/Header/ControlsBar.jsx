import React from "react";
import styles from "./ControlBar.module.css";
import newFile from "../../assets/icons/new-file.svg";
import newFolder from "../../assets/icons/new-folder.svg";
import refresh from "../../assets/icons/refresh.svg";
import collapse from "../../assets/icons/collapse-all.svg";
import moreIcon from "../../assets/icons/more.svg";

export default function ControlBar() {
	return (
		<div className={styles.filesControl}>
			<span>explorer: portfolio: </span>
			<div>
				<img src={newFile} alt='new-file' />
				<img src={newFolder} alt='new folder' />
				<img src={refresh} alt='refresh' />
				<img src={collapse} alt='collapse' />
				<img src={moreIcon} alt='more' />
			</div>
		</div>
	);
}
