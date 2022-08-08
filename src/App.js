import "./App.css";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Taskbar from "./components/Taskbar/Taskbar";

function App(props) {
	return (
		<div className='App'>
			<Header />
			<Main />
			<Taskbar>
				<div>
					<span>vscode</span>
					<span>&nbsp;&nbsp;&nbsp;🗘&nbsp;&nbsp;&nbsp;</span>
					<span>⮾&nbsp;&nbsp;&nbsp;</span>
					<span>△&nbsp;&nbsp;&nbsp;</span>
				</div>
				<div>
					<span>Tab Size: 2&nbsp;&nbsp;UTF-8&nbsp;&nbsp;LF</span>
					<span>&nbsp;&nbsp;&nbsp;{`{ } JavaScript React`}&nbsp;&nbsp;&nbsp;&nbsp;</span>
					<span>⫚ Go Live&nbsp;&nbsp;&nbsp;&nbsp;</span>
					<span>√ Prettier</span>
				</div>
			</Taskbar>
		</div>
	);
}

export default App;
