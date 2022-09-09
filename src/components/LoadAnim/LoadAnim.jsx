import React from "react";
import "./LoadAnim.css";

export default function LoadAnim({ state }) {
	return (
		<div className={`loading ${state}`}>
			<h1>Valerii Lozghachov</h1>
			<h2>Frontend Developer</h2>
		</div>
	);
}
