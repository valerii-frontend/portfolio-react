import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Text3d from "./components/Text3d/Text3d.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<div className='titlesWrap'>
			<div className='titles'>
				<Text3d>
					<h1>Valerii Lozghachov</h1>
				</Text3d>
				<br />
				<Text3d reverse>
					<h2>Frontend Developer</h2>
				</Text3d>
			</div>
		</div>
		<App />
	</React.StrictMode>
);
