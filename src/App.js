import "./App.css";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Container from "./components/Container/Container";
import Main from "./components/Main/Main";
import Button from "./components/Button/Button";
import { useState } from "react";
import { CardImg, BlurImg, CubesImg } from "./assets/Images";

function App(props) {
	const [isOpenCardsModal, setIsOpenCardsModal] = useState(false);
	const [isOpenCubesModal, setIsOpenCubesModal] = useState(false);
	const [isOpenBlurModal, setIsOpenBlurModal] = useState(false);
	return (
		<div className='App'>
			<Header />
			<Main>
				<Container>
					<div className='kkk'>
						<div className='nnn'>
							<div className='mmm'>
								<CardImg />
								<Button onClick={() => setIsOpenCardsModal(true)}>Preview</Button>
							</div>
						</div>
						<div className='nnn'>
							<div className='mmm'>
								<BlurImg />
								<Button onClick={() => setIsOpenBlurModal(true)}>Preview</Button>
							</div>
						</div>
						<div className='nnn'>
							<div className='mmm'>
								<CubesImg />
								<Button onClick={() => setIsOpenCubesModal(true)}>Preview</Button>
							</div>
						</div>
					</div>
				</Container>
			</Main>
			{isOpenCardsModal && <Modal show={setIsOpenCardsModal} title='cards'></Modal>}
			{isOpenCubesModal && <Modal show={setIsOpenCubesModal} title='cubes'></Modal>}
			{isOpenBlurModal && <Modal show={setIsOpenBlurModal} title='blur'></Modal>}
		</div>
	);
}

export default App;
