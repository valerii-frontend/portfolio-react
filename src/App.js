import "./App.css";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";

function App(props) {
	return (
		<div className='App'>
			<Header />
			<Main></Main>
		</div>
	);
}

export default App;
