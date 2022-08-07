import "./App.css";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Taskbar from "./components/Taskbar/Taskbar";

function App(props) {
	return (
		<div className='App'>
			<Header />
			<Main />
			<Taskbar />
		</div>
	);
}

export default App;
