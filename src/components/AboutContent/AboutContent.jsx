import React from "react";
import styles from "./AboutContent.module.css";

export function Bio() {
	return (
		<div className={styles.about}>
			<h2>Biography</h2>
			<p>
				Since childhood I was interested in computers and liked solving puzzles and logic problems. I chose web
				development because I liked seeing the results of my work right away, and I could start with simple things like
				HTML and CSS. I am studying with documentation, free Internet materials, YouTube videos, and paid courses. As
				well I still spend a lot of my free time learning new things.
			</p>
			<p>
				I try to improve myself every day, in different directions. I don't drink alcohol or smoke cigarettes for years.
				I try to lead a healthy lifestyle and be an example to the people around me.
			</p>
			<p>
				The most important qualities in people for me are kindness and honesty. An honest and kind person will be a
				great colleague and a good friend, I think this is much more important than any dishonest professional of the
				highest level.
			</p>
			<p>
				My goal is to help people with their tasks, to be helpful, and to be a great father and husband to my family
			</p>
		</div>
	);
}

export function Edu() {
	return (
		<div className={styles.about}>
			<h2>Education</h2>
			<ol>
				<li> University: Donetsk National Technical University (2006-2012)</li>
				<li> Academic degree: Specialist (engineer) </li>
				<li> Major: Telecommunication systems and networks. </li>
				<li> Faculty: Computer Information Technology and Automation</li>
			</ol>
			<h2>Courses</h2>
			<ul>
				<li> edu.fls.guru - advanced course of HTML coding (Sept 2020 – Dec 2020) </li>
				<li> GeekBrains - Completed the course «HTML & CSS» </li>
				<li> Udemy —The Complete JavaScript Course: From Zero to Expert! (Oct 2021 – Nov 2021) </li>
				<li> Udemy — React: The Complete guide! (June 2022 – July 2022) </li>
			</ul>
		</div>
	);
}

export function Exp() {
	return (
		<div className={styles.about}>
			<h2>Expirience</h2>
			<ul>
				<li>
					Freelancer (January 2021 – February 2022) Responsibilities: creating pages from PSD and Figma layouts, with
					HTML & CSS;
				</li>
				<li>
					Frontend Developer in “Rolladen Group” (December 2021 – present time) Responsibilities: e-commerce store
					optimization. Improved performance, implementation of modern technologies, improved styles, and scripts.
					Correction of errors and bugs in the code. Editing with PHP Smart templates, creating a mobile version for
					pages. Technology: JavaScript, Jquery, HTML, CSS, PHP, Smarty
				</li>
				<li>
					Freelancer on UpWork (April 2022 – present time) Responsibilities: slice layouts, writing scripts, fixing
					errors in the code, creating animations
				</li>
			</ul>
		</div>
	);
}

export function Hobby() {
	return (
		<div className={styles.about}>
			<h2>Hobby</h2>
			also I like running and reading and walking with my family.
		</div>
	);
}

export function Lang() {
	return (
		<div className={styles.about}>
			<h2>Languages</h2>
			<ul>
				<li> Russian—Native C1</li>
				<li> Ukrainian—Native C1</li>
				<li> Polish—Intermediate B2</li>
				<li> English—Intermediate B1 </li>
			</ul>
			<iframe src='https://www.efset.org/cert/Gsuc3X' frameborder='0' title='cert'></iframe>
		</div>
	);
}

export function Soft() {
	return (
		<div className={styles.about}>
			<h2>softText</h2>
			<ul>
				<li> Experienced PC user;</li>
				<li> Professional approach, good organization of work;</li>
				<li> Initiative;</li>
				<li> Sociable and ready to help; </li>
				<li> Attention to detail, open to everything new;</li>
				<li> Involvement in work; </li>
				<li> Desire to develop & improve.</li>
			</ul>
		</div>
	);
}
