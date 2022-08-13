import "./App.css";

import Header from "./components/Header/Header";
import Taskbar from "./components/Taskbar/Taskbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Works from "./pages/Works";
import About from "./pages/About";
import Home from "./pages/Home";

function App(props) {
	return (
		<BrowserRouter>
			<div
				className='App'
				onContextMenu={(e) => {
					e.preventDefault();
					console.log("menu");
				}}>
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
	);
}

export default App;
