import React from "react";
import Link from "../Link/Link";
import styles from "./HeaderNav.module.css";

export default function HeaderNav() {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link>Main</Link>
				</li>
				<li>
					<Link>Works</Link>
				</li>
				<li>
					<Link>About</Link>
				</li>
			</ul>
		</nav>
	);
}
