import React from "react";
import styles from "./Toggle.module.css";

export default function Toggle(props) {
	return (
		<div className={`${props.className} ${styles.toggle}`}>
			<input id={props.id} type='checkbox' onClick={props.onClick} />
			<label htmlFor={props.id}>{props.children}</label>
		</div>
	);
}
