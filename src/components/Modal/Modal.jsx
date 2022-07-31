import React from "react";
import styles from "./Modal.module.css";

export default function Modal(props) {
	return (
		<div className={styles.modal} datamodal={props.datamodal}>
			Modal
		</div>
	);
}
