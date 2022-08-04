import Image from "../components/Image/Image";
import styles from "./Images.module.css";
import cardswebp from "./cards.webp";
import cardsavif from "./cards.avif";
import cardspng from "./cards.png";
import blurwebp from "./blur.webp";
import bluravif from "./blur.avif";
import blurpng from "./blur.png";
import cubeswebp from "./cubes.webp";
import cubesavif from "./cubes.avif";
import cubespng from "./cubes.png";

export const CardImg = () => {
	return (
		<Image
			title='Image cards JS/SCSS/HTML'
			alt='task preview - cards world of warcraft'
			webp={cardswebp}
			png={cardspng}
			avif={cardsavif}
			className={styles.image}
		/>
	);
};

export const BlurImg = () => {
	return (
		<Image
			title='Preloader with Blur effect'
			alt='task preview - preloader with blur effect'
			webp={blurwebp}
			png={blurpng}
			avif={bluravif}
			className={styles.image}
		/>
	);
};
export const CubesImg = () => {
	return (
		<Image
			title='CSS animations with 3d cubes'
			alt='task preview - pure CSS animation'
			webp={cubeswebp}
			png={cubespng}
			avif={cubesavif}
			className={styles.image}
		/>
	);
};
