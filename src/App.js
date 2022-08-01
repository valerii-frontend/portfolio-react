import "./App.css";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Container from "./components/Container/Container";
import Main from "./components/Main/Main";
import Button from "./components/Button/Button";
import { useState } from "react";

function App(props) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='App'>
			<Header />
			<Main>
				<Container>
					<Button onClick={() => setIsOpen(true)}>Open cards</Button>
				</Container>
			</Main>
			{isOpen && <Modal show={setIsOpen}>cards modal</Modal>}
		</div>
	);
}

export default App;
