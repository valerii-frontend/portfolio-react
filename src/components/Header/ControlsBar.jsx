import React from "react";
import styles from "./ControlBar.module.css";
import newFile from "../../assets/icons-header/new-file.svg";
import newFolder from "../../assets/icons-header/new-folder.svg";
import refresh from "../../assets/icons-header/refresh.svg";
import collapse from "../../assets/icons-header/collapse-all.svg";
import moreIcon from "../../assets/icons-header/more.svg";

export default function ControlBar() {
	return (
		<div className={styles.filesControl}>
			<span>explorer: portfolio: </span>
			<div>
				<img src={newFile} alt='new-file' />
				<img src={newFolder} alt='new folder' />
				<img src={refresh} alt='refresh' />
				<img src={collapse} alt='collapse' />
				<img src={moreIcon} alt='collapse' />
			</div>
		</div>
	);
}
