import React from "react";
import styles from "./Modal.module.css";

export default function Modal(props) {
	return (
		<div className={`${styles.modal} ${styles.active}`}>
			<div className={styles.close} onClick={() => props.show(false)}>
				✖
			</div>
			<div className={styles.body}>
				<iframe
					src={`https://valerii-frontend.github.io/portfolio/dist/${props.title}.html`}
					title={props.title}></iframe>
			</div>
		</div>
	);
}
