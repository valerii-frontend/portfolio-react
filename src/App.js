import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";

import { CardImg, BlurImg, CubesImg } from "./assets/Images";

import NewMain from "./components/NewMain/NewMain";

function App(props) {
	const [isOpenCardsModal, setIsOpenCardsModal] = useState(false);
	const [isOpenCubesModal, setIsOpenCubesModal] = useState(false);
	const [isOpenBlurModal, setIsOpenBlurModal] = useState(false);

	return (
		<div className='App'>
			<Header />
			<NewMain>
				<Container>
					<div className='row'>
						<div className='col'>
							<div className='item'>
								<CardImg />
								<Button onClick={() => setIsOpenCardsModal(true)}>Preview</Button>
							</div>
						</div>
						<div className='col'>
							<div className='item'>
								<BlurImg />
								<Button onClick={() => setIsOpenBlurModal(true)}>Preview</Button>
							</div>
						</div>
						<div className='col'>
							<div className='item'>
								<CubesImg />
								<Button onClick={() => setIsOpenCubesModal(true)}>Preview</Button>
							</div>
						</div>
					</div>
				</Container>
			</NewMain>

			{isOpenCardsModal && <Modal show={setIsOpenCardsModal} title='cards'></Modal>}
			{isOpenCubesModal && <Modal show={setIsOpenCubesModal} title='cubes'></Modal>}
			{isOpenBlurModal && <Modal show={setIsOpenBlurModal} title='blur'></Modal>}
		</div>
	);
}

export default App;
