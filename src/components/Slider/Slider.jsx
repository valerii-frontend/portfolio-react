import React from "react";
import styles from "./Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

export default function Slider({ setSwiperEl }) {
	const sliderContent = [
		{
			name: "HTML5",
			icon: "html",
			p1: `The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed
		in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting
		languages such as JavaScript.`,
			p2: `Web browsers receive HTML documents from a web server or from local storage and render the documents into
		multimedia web pages. HTML describes the structure of a web page semantically and originally included cues
		for the appearance of the document.`,
			p3: `I have good knowledge of working with HTML, popular attributes, and tags. As well as building clean and
		semantic code using modern practices`,
			p4: `Now it is less often necessary to use pure HTML, the layout is increasingly being taken over by libraries
		and frameworks`,
		},
		{
			name: "Visual Studio Code",
			icon: "vs",
			p1: `Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. `,
			p2: `It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET).`,
			p3: `Great editor, I use it for most of my projects. Has a built-in terminal and a very big extensions library for different tasks and languages`,
			p4: `I use a set of my own snippets for the convenience of writing code. Also, the settings are always synchronized and saved in the profile linked to the github`,
		},
		{
			name: "Type Script",
			icon: "ts",
			p1: `TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.`,
			p2: `TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.`,
			p3: `I sometimes practice Type Script in my pet projects, I have an understanding of the basics and principles`,
			p4: `I have no experience in writing commercial code using Type Script, but I improve my skills in my free time`,
		},
		{
			name: "Bootstrap",
			icon: "bs",
			p1: `Powerful, extensible, and feature-packed frontend toolkit. `,
			p2: `Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.`,
			p3: `For the qualitative use of the bootstrap, you must understand how the CSS works and its properties, then mastering it will not be difficult`,
			p4: `I am using the latest version of bootstrap at my main job. I use it to build layouts of varying complexity and using a library of components`,
		},
		{
			name: "CSS3",
			icon: "css",
			p1: `Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.`,
			p2: `CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.`,
			p3: `Not one project can do without the use of styles, I have excellent experience in using CSS, knowledge of various types of selectors, pseudo-classes, pseudo-elements, transition, animation and transformations`,
			p4: `I mostly write in pure CSS in small projects or React using modules. Sometimes I use variables and the CSS reset kit for removing default browsers styles`,
		},
	];

	return (
		<div className={styles.slider}>
			<Swiper
				onSwiper={setSwiperEl}
				className={styles.swiper}
				spaceBetween={0}
				slidesPerView={1}
				modules={[Autoplay]}
				autoplay
				speed={500}
				loop>
				{sliderContent.map((slide) => (
					<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
						<h2 className={styles[`${slide.icon}`]}>{slide.name}</h2>
						<p>{slide.p1}</p>
						<p>{slide.p2}</p>
						<p className={styles.me}>{slide.p3}</p>
						<p className={styles.me}>{slide.p4}</p>
					</SwiperSlide>
				))}
				<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
					<p>PHP STORM</p>
				</SwiperSlide>
				<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
					<p>JS</p>
				</SwiperSlide>
				<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
					<p>SASS</p>
				</SwiperSlide>
				<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
					<p>Gulp</p>
				</SwiperSlide>
				<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
					<p>React</p>
				</SwiperSlide>
				<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
					<p>Figma</p>
				</SwiperSlide>
				<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
					<p>PS</p>
				</SwiperSlide>
				<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
					<p>BEM</p>
				</SwiperSlide>
				<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
					<p>GitHub</p>
				</SwiperSlide>
				<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
					<p>GitLab</p>
				</SwiperSlide>
				<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
					<p>npm</p>
				</SwiperSlide>
				<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
					<p>bash</p>
				</SwiperSlide>
				<SwiperSlide className={styles.slide} data-swiper-autoplay='5000'>
					<p>chrome</p>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
