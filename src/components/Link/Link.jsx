import React from "react";
import styles from "./Link.module.css";

export default function Link(props) {
	return (
		<a href={props.href} className={styles.link}>
			{props.children}
		</a>
	);
}
