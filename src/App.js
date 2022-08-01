import "./App.css";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Container from "./components/Container/Container";
import Main from "./components/Main/Main";
import Button from "./components/Button/Button";

function App(props) {
	return (
		<div className='App'>
			<Header />
			<Main>
				<Container>
					<Button>Open cards</Button>
				</Container>
			</Main>
			<Modal>cards modal</Modal>
		</div>
	);
}

export default App;
