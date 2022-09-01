import React, { useState } from "react";
import styles from "./AboutContent.module.css";
import flsImg from "../../assets/certs/fls.png";
import soloHtml from "../../assets/certs/solo-html.jpg";
import soloCss from "../../assets/certs/solo-css.jpg";
import soloJs from "../../assets/certs/solo-js.png";
import soloReact from "../../assets/certs/solo-react.jpg";
import gbHtml from "../../assets/certs/gb-html.jpg";
import gbPro from "../../assets/certs/gb-pro.jpg";
import udemyJs from "../../assets/certs/udemy-js.jpg";
import udemyReact from "../../assets/certs/udemy-react.jpg";
import engCert from "../../assets/certs/english.jpg";

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
	const certificates = [flsImg, soloHtml, soloCss, soloJs, soloReact, gbHtml, gbPro, udemyJs, udemyReact];
	const [imgZoom, setImgZoom] = useState("");
	return (
		<div className={styles.about}>
			<h2>Education</h2>
			<ol>
				<li>
					<strong>University</strong>: Donetsk National Technical University (2006-2012)
				</li>
				<li>
					<strong>Academic degree</strong>: Specialist (engineer)
				</li>
				<li>
					<strong>Major</strong>: Telecommunication systems and networks.
				</li>
				<li>
					<strong>Department</strong>: Computer Information Technology and Automation
				</li>
			</ol>
			<h2>Courses & certificates</h2>
			<ol>
				<li>
					<strong>SoloLearn</strong> - HTML course (<span>January 2020</span>)
				</li>
				<li>
					<strong>SoloLearn</strong> - CSS course (<span>April 2020</span>)
				</li>
				<li>
					<strong>GeekBrains</strong> - Completed the course «HTML & CSS» (<span>April 2020</span>)
				</li>
				<li>
					<strong>edu.fls.guru</strong> - advanced course of HTML coding (<span>Sept 2020 – Dec 2020</span>)
				</li>
				<li>
					<strong>SoloLearn</strong> - React + Redux (<span>Aug 2021 – Sept 2021</span>)
				</li>
				<li>
					<strong>SoloLearn</strong> - JavaScript (<span>Aug 2021 – Sept 2021</span>)
				</li>
				<li>
					<strong>Udemy</strong> —The Complete JavaScript Course: From Zero to Expert! (<span>Oct 2021 – Nov 2021</span>
					)
				</li>
				<li>
					<strong>Udemy</strong> — React: The Complete guide! (<span>June 2022 – July 2022</span>)
				</li>
			</ol>
			<div className={styles.cards}>
				{certificates.map((cert) => (
					<div className={`${styles.col} ${imgZoom === cert && styles.zoom}`}>
						<img
							src={cert}
							alt={cert.split(".")[0] + " certificate"}
							onClick={() => (imgZoom === cert ? setImgZoom("") : setImgZoom(cert))}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export function Exp() {
	return (
		<div className={styles.about}>
			<h2>Expirience</h2>
			<ul>
				<li>
					<strong>Freelancer on fl.ru</strong> (January 2021 – February 2022)
					<div>
						<span>Tasks and types of work</span>: slice the PSD/Figma/AdobeXD layouts to static HTML\CSS\JS pages.
						Fixing issues with styles and scripts. Create CSS animations and JS scripts.
					</div>
				</li>
				<li>
					<strong>Frontend Developer in “Rolladen Group”</strong> (December 2021 – present time)
					<div>
						<span>Responsibilities</span>: e-commerce store optimization. Improved performance, implementation of modern
						technologies, improved styles, and scripts. Correction of errors and bugs in the code. Editing with PHP
						Smart templates, creating a mobile version for pages.
					</div>
					<div>
						<span>Technology & Tools</span>: JavaScript, Jquery, HTML, CSS, PHP, Smarty, GitLab, git, PHPStorm,
						ShopWare.
					</div>
				</li>
				<li>
					<strong>Freelancer on UpWork</strong> (April 2022 – present time)
					<div>
						<span>Contracts</span>: Slice layouts from Figma/Adobe Photoshop/XD with Bootstrap 5+ or SCSS + BEM. Writing
						own scripts, fixing errors in styles, scripts and markup, optimizing page loading speed, creating keyframes
						CSS animations.
					</div>
				</li>
			</ul>
		</div>
	);
}

export function Hobby() {
	return (
		<div className={styles.about}>
			<h2>Hobby</h2>
			<ul className={styles.marker}>
				<li>Running, cycling</li>
				<li>Outdoor sports and activities</li>
				<li>Solve puzzles and logical tasks</li>
				<li>Science and high technology</li>
				<li>RPG/Fantasy videogames and series</li>
				<li>Spending time with family outdoors and in an urban environment</li>
				<li>Education and self improvement</li>
			</ul>
		</div>
	);
}

export function Lang() {
	return (
		<div className={styles.about}>
			<h2>Languages</h2>
			<ul>
				<li>
					<strong>Russian</strong>—Native <span className={styles}>C1</span>
				</li>
				<li>
					<strong>Ukrainian</strong>—Native <span className={styles}>C1</span>
				</li>
				<li>
					<strong>Polish</strong>—Intermediate <span className={styles}>B2</span>
				</li>
				<li>
					<strong>English</strong>—Intermediate <span className={styles}>B1</span>
				</li>
			</ul>
			<a href='https://www.efset.org/cert/Gsuc3X' target='_blank' rel='noreferrer' className={styles.langImg}>
				<img src={engCert} alt='english certificate' />
			</a>
		</div>
	);
}

export function Soft() {
	return (
		<div className={styles.about}>
			<h2>Soft skills</h2>
			<ul className={`${styles.marker} ${styles.marker_2}`}>
				<li>Professional approach</li>
				<li>Good organization of work</li>
				<li>Initiative</li>
				<li>Responsibility</li>
				<li>Sociable and ready to help</li>
				<li>Attention to detail</li>
				<li>Open to everything new</li>
				<li>Involvement in work</li>
				<li>Desire to develop & improve</li>
			</ul>
		</div>
	);
}
