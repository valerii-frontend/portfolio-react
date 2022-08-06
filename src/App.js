import "./App.css";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Container from "./components/Container/Container";
import Main from "./components/Main/Main";
import Button from "./components/Button/Button";
import { useState } from "react";
import { CardImg, BlurImg, CubesImg } from "./assets/Images";
import Model from "./components/Model/Model";

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
						<div className='modelText'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempora magnam quis quaerat illo nostrum
							ipsa? Aliquid ratione fuga soluta earum sapiente tempore maiores dolorum architecto, consequuntur quasi
							perspiciatis cum repudiandae eaque nemo quo labore facilis ad. Quibusdam dolores cumque saepe perferendis?
							Quibusdam aliquam veritatis nisi, cupiditate modi fugit ratione eum aspernatur consectetur ipsa corporis
							perferendis, soluta, nesciunt assumenda. Corporis maiores necessitatibus, suscipit sit reiciendis
							asperiores cumque non sed veniam similique velit dicta autem rerum maxime cum, eius dolorem sunt inventore
							consequatur error. Laboriosam beatae mollitia rem nemo sint corporis velit. Minima tempora sint placeat
							non doloribus? Quaerat, nemo? Tempore provident molestiae nesciunt excepturi ad odit voluptatibus aut
							quisquam? Magnam aliquam sint sed tempora cumque nobis quo vel eum autem, nostrum, voluptas deserunt ipsa
							suscipit, explicabo soluta! Voluptates, molestias! Architecto tempore deleniti magni voluptates aperiam
							officiis. Doloribus corrupti aut eligendi fugit perferendis reprehenderit voluptas blanditiis consectetur
							iusto officia? Voluptate ad perferendis consequuntur iste earum iure omnis asperiores similique
							exercitationem cupiditate provident dolor veniam rerum libero, voluptatum qui aliquam ipsa, sapiente
							voluptatem, corporis sequi. Voluptas, debitis nam. Minima vitae et ea maxime possimus at libero officiis
							ipsum voluptate voluptates. Modi fugiat rerum perferendis. Provident animi ex cum unde quibusdam similique
							consectetur.
						</div>
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
