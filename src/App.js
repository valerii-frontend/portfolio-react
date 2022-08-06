import "./App.css";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Container from "./components/Container/Container";
import Main from "./components/Main/Main";
import Button from "./components/Button/Button";
import { useState } from "react";
import { CardImg, BlurImg, CubesImg } from "./assets/Images";
import Model from "./components/Model/Model";
import Slider from "./components/Slider/Slider";

function App(props) {
	const [isOpenCardsModal, setIsOpenCardsModal] = useState(false);
	const [isOpenCubesModal, setIsOpenCubesModal] = useState(false);
	const [isOpenBlurModal, setIsOpenBlurModal] = useState(false);

	return (
		<div className='App'>
			<Header />
			<Main>
				<div className='modelRow'>
					<div className='modelCol'>
						<Model />
					</div>
					<div className='modelCol'>
						<Slider />
					</div>
				</div>
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
			</Main>
			{isOpenCardsModal && <Modal show={setIsOpenCardsModal} title='cards'></Modal>}
			{isOpenCubesModal && <Modal show={setIsOpenCubesModal} title='cubes'></Modal>}
			{isOpenBlurModal && <Modal show={setIsOpenBlurModal} title='blur'></Modal>}
		</div>
	);
}

export default App;
