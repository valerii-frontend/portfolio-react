import React, { useState } from "react";
import Container from "../Container/Container";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { CardImg, BlurImg, CubesImg } from "../../assets/Images";
import "./Works.css";

export default function Works() {
	const [isOpenCardsModal, setIsOpenCardsModal] = useState(false);
	const [isOpenCubesModal, setIsOpenCubesModal] = useState(false);
	const [isOpenBlurModal, setIsOpenBlurModal] = useState(false);
	return (
		<>
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

			{isOpenCardsModal && <Modal show={setIsOpenCardsModal} title='cards'></Modal>}
			{isOpenCubesModal && <Modal show={setIsOpenCubesModal} title='cubes'></Modal>}
			{isOpenBlurModal && <Modal show={setIsOpenBlurModal} title='blur'></Modal>}
		</>
	);
}
