import React from "react";
import styles from "./Button.module.css";

export default function Button(props) {
	return (
		<button className={`${styles.button} ${props.className}`} dataopen={props.dataopen}>
			<span>{props.children}</span>
			<strong>{props.children}</strong>
		</button>
	);
}
