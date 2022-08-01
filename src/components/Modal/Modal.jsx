import React from "react";
import styles from "./Modal.module.css";

export default function Modal(props) {
	return (
		<div className={`${styles.modal} ${styles.active}`}>
			<div className={styles.close}>✖</div>
			<div className={styles.body}>{props.children}</div>
		</div>
	);
}
