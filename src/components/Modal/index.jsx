import React from "react";
import styles from "./Modal.module.css";

export default function Modal({ closeModalHandler, className, children }) {
	return (
		<div className={`${styles.modal} ${className}`}>
			<div onClick={closeModalHandler} className={styles.modalClose}>
				✖
			</div>
			{children}
		</div>
	);
}
