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
						<Route path='/' element={<Home />} exact />
						<Route path='/contacts' element={<Contacts />} exact />
						<Route path='/works' element={<Works />} exact />
						<Route path='/about' element={<About />} exact />
						<Route path='*' element={<Navigate to='/' replace />} />
					</Routes>

					<Taskbar />
				</div>
			</BrowserRouter>
		</Context.Provider>
	);
}

export default App;
