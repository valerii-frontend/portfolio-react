import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Context } from "./context";

import { useState } from "react";

import Header from "./components/Header/Header";
import Taskbar from "./components/Taskbar/Taskbar";

import Contacts from "./pages/Contacts";
import Works from "./pages/Works";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
	const [themeSwitch, setThemeSwitch] = useState(true);
	const [sidebarToggle, setSidebarToggle] = useState(false);

	return (
		<Context.Provider
			value={{
				setThemeSwitch,
				themeSwitch,
				sidebarToggle,
				setSidebarToggle,
			}}>
			<BrowserRouter>
				<div className={`App ${themeSwitch ? "" : "light"}`} onContextMenu={(e) => e.preventDefault()}>
					<Header />
					<Routes>
						<Route path='/portfolio-react' element={<Home />} exact />
						<Route path='/portfolio-react/contacts' element={<Contacts />} exact />
						<Route path='/portfolio-react/works' element={<Works />} exact />
						<Route path='/portfolio-react/about' element={<About />} exact />
						<Route path='*' element={<Navigate to='/portfolio-react' replace />} />
					</Routes>

					<Taskbar />
				</div>
			</BrowserRouter>
		</Context.Provider>
	);
}

export default App;
