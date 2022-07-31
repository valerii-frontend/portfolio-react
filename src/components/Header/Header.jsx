import React from "react";
import Button from "../Button/Button";
import Container from "../Container/Container";
import HeaderNav from "./HeaderNav";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.row}>
					<Logo />
					<HeaderNav />
					<Button className={styles.contact}>Contact</Button>
				</div>
			</Container>
		</header>
	);
}
