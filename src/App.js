import "./App.css";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Container from "./components/Container/Container";
import Main from "./components/Main/Main";
import Button from "./components/Button/Button";
import { useState } from "react";

function App(props) {
	const [isOpenCardsModal, setIsOpenCardsModal] = useState(false);
	const [isOpenCubesModal, setIsOpenCubesModal] = useState(false);
	const [isOpenBlurModal, setIsOpenBlurModal] = useState(false);
	return (
		<div className='App'>
			<Header />
			<Main>
				<Container>
					<Button onClick={() => setIsOpenCardsModal(true)}>Cards accordion</Button>
					<Button onClick={() => setIsOpenCubesModal(true)}>Cubes animation</Button>
					<Button onClick={() => setIsOpenBlurModal(true)}>Blur loading</Button>
				</Container>
			</Main>
			{isOpenCardsModal && <Modal show={setIsOpenCardsModal} title='cards'></Modal>}
			{isOpenCubesModal && <Modal show={setIsOpenCubesModal} title='cubes'></Modal>}
			{isOpenBlurModal && <Modal show={setIsOpenBlurModal} title='blur'></Modal>}
		</div>
	);
}

export default App;
