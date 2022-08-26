import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeSwitch } from "./context";
import { useState } from "react";

import Header from "./components/Header/Header";
import Taskbar from "./components/Taskbar/Taskbar";

import Contacts from "./pages/Contacts";
import Works from "./pages/Works";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
	const [themeSwitch, setThemeSwitch] = useState(true);

	return (
		<ThemeSwitch.Provider
			value={{
				setThemeSwitch,
				themeSwitch,
			}}>
			<BrowserRouter>
				<div className={`App ${themeSwitch ? "" : "light"}`} onContextMenu={(e) => e.preventDefault()}>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} exact />
						<Route path='/contacts' element={<Contacts />} exact />
						<Route path='/works' element={<Works />} exact />
						<Route path='/about' element={<About />} exact />
					</Routes>

					<Taskbar />
				</div>
			</BrowserRouter>
		</ThemeSwitch.Provider>
	);
}

export default App;
