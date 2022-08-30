import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<div className='titlesWrap'>
			<div className='titles'>
				<h1>Valerii Lozghachov</h1>
				<h2>Frontend Developer</h2>
			</div>
		</div>
		<App />
	</React.StrictMode>
);
