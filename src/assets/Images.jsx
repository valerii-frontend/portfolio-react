import Image from "../components/Image/Image";
import styles from "./Images.module.css";
import cardswebp from "./cards.webp";
import cardsavif from "./cards.avif";
import cardspng from "./cards.png";

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
