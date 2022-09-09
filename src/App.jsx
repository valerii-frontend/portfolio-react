import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Context } from "./context";

import React, { useState, useEffect } from "react";
import { Transition } from "react-transition-group";
import Header from "./components/Header/Header";
import Taskbar from "./components/Taskbar/Taskbar";

import Contacts from "./pages/Contacts";
import Works from "./pages/Works";
import About from "./pages/About";
import Home from "./pages/Home";
import LoadAnim from "./components/LoadAnim/LoadAnim";

function App() {
	const [themeSwitch, setThemeSwitch] = useState(true);
	const [sidebarToggle, setSidebarToggle] = useState(false);
	const [loading, setLoading] = useState(true);
	const [appLoad] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<Context.Provider
			value={{
				setThemeSwitch,
				themeSwitch,
				sidebarToggle,
				setSidebarToggle,
			}}>
			<Transition in={loading} timeout={1000} mountOnEnter unmountOnExit>
				{(state) => <LoadAnim state={state} />}
			</Transition>
			<BrowserRouter>
				<Transition in={appLoad} timeout={500}>
					{(state) => (
						<div className={`App ${themeSwitch ? "" : "light"} ${state}`} onContextMenu={(e) => e.preventDefault()}>
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
					)}
				</Transition>
			</BrowserRouter>
		</Context.Provider>
	);
}

export default App;
