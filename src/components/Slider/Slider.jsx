import React from "react";
import styles from "./Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

function Slider({ setSwiperEl }) {
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
			p4: `I use HTML to build understandable structures and reusable blocks`,
		},
		{
			name: "Visual Studio Code",
			icon: "vs",
			p1: `Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. `,
			p2: `It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET).`,
			p3: `Great editor, I use it for most of my projects. Has a built-in terminal and a very big extensions library for different tasks and languages`,
			p4: `Otherwise I have a set of my own snippets for the convenience of writing code. Also, the settings are always synchronized and saved in the profile linked to the github`,
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
		{
			name: "PHP Storm",
			icon: "php",
			p1: `Make the most of the cutting edge front-end technologies, such as HTML 5, CSS, Sass, Less, Stylus, CoffeeScript, TypeScript, Emmet, and JavaScript, with refactorings, debugging, and unit testing available.`,
			p2: `See the changes instantly in the browser thanks to Live Edit.`,
			p3: `At my job we use this IDE for our e-commerce project. We have set up auto-deploy to a personal server for each developer. There is also built-in access to the FTP server, which makes the process of data exchange easier.`,
			p4: `PHPstorm has a built-in system for quick indexing and advanced project search, which helps development`,
		},
		{
			name: "JavaScript(ES6+)",
			icon: "js",
			p1: `Often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior,often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.`,
			p2: `JavaScript engines were originally used only in web browsers, but are now core components of some servers and a variety of applications. The most popular runtime system for this usage is Node.js.`,
			p3: `This is my primary programming language. I use native JavaScript and sometimes jQuery library at my job to create new functionality and refactor old one.`,
			p4: `For the algorithm and problem solves practice in JavaScript I use popular services like the CodeWars, LeetCode, CodeSignal`,
		},
		{
			name: "SASS(SCSS)",
			icon: "sass",
			p1: `Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.`,
			p2: `SassScript provides the following mechanisms: variables, nesting, mixins, and selector inheritance.`,
			p3: `I use it in almost every project. Which helps me keep the styles in order and structure the components.`,
			p4: `Improves the readability of the style sheet especially when combined with the BEM methodology. I often use imports, variables, in my template I have several mixins for more creation better responsive view`,
		},
		{
			name: "Gulp.js",
			icon: "gulp",
			p1: `Gulp is an open-source JavaScript toolkit used as a streaming build system (similar to a more package-focused Make) in front-end web development.`,
			p2: `It is a task runner built on Node.js and npm, used for automation of time-consuming and repetitive tasks involved in web development like minification, concatenation, cache busting, unit testing, linting, optimization, etc.`,
			p3: `I use it for build my HTML/SCSS/JS projects. It helps me to reduce the weight of the project, clean up the styles, convert SCSS to CSS`,
			p4: `I also use media query grouping, file merging, which helps to separate and structure the project during development`,
		},
		{
			name: "React",
			icon: "react",
			p1: `React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.`,
			p2: `React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js.`,
			p3: `I use the latest versions of react with functional components, hooks, CSS modules`,
			p4: `As well in my projects I practice various popular tools such as router, transition group. Also, I'm experimenting with MongoDB, Firebase, Next.Js and TypeScript using along with React`,
		},
		{
			name: "Photoshop/Gimp",
			icon: "ps",
			p1: `Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS.`,
			p2: `GIMP is a free and open-source raster graphics editor used for image manipulation (retouching) and image editing, free-form drawing, transcoding between different image file formats, and more specialized tasks.`,
			p3: `Sometimes I use graphics editors to optimize images, correct color or crop the size.`,
			p4: `I know the basic tools, such as a stamp, various brushes, filling,adjusting color, saturation and hue. Simple basic things that every developer should own`,
		},
		{
			name: "Figma",
			icon: "figma",
			p1: `Figma is a collaborative browser-based interface design tool, with additional offline features enabled by desktop applications for macOS and Windows. The Figma mobile app for Android and iOS allows viewing and interacting with Figma prototypes in real-time on mobile and tablet devices.`,
			p2: `The feature set of Figma focuses on user interface and user experience design, with an emphasis on real-time collaboration,[1] utilising a variety of vector graphics editor and prototyping tools.`,
			p3: `I'm using Figma at developer level to open UI mockups for later development. Sometimes I use Figma to create simple vector graphics for use in my projects.`,
			p4: `Figma greatly simplifies development by providing extensive information about colors, fonts, and other interface styles.`,
		},
		{
			name: "BEM",
			icon: "bem",
			p1: `BEM (Block, Element, Modifier) is a component-based approach to web development. The idea behind it is to divide the user interface into independent blocks.`,
			p2: `methodology BEM was invented at Yandex to develop sites which should be launched fast and supported for a long time. It helps to create extendable and reusable interface components.`,
			p3: `This makes interface development easy and fast even with a complex UI, and it allows reuse of existing code without copying and pasting.`,
			p4: `I combine the BEM methodology with the SASS preprocessor to write reusable components and create a clear project structure`,
		},
		{
			name: "GitHub",
			icon: "gh",
			p1: `GitHub, Inc., is an Internet hosting service for software development and version control using Git.`,
			p2: `It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.`,
			p3: `It is commonly used to host open source software development projects`,
			p4: `I use GitHub to store my personal pet projects and to host them on GitHub pages service`,
		},
		{
			name: "GitLab",
			icon: "gl",
			p1: `GitLab Inc. is an open-core company that provides GitLab, a DevOps software package that combines the ability to develop, secure, and operate software in a single application.`,
			p2: `Since its founding, GitLab has been centered around remote work`,
			p3: `In my work, we use GitLab to store the repository of our main e-commerce project. As well we have some pages of documentation and additional project info`,
			p4: `To work with the project, we use the ticket system and Trunk Based Development approach with separate developers servers for each team member`,
		},
		{
			name: "NPM",
			icon: "npm",
			p1: `npm, Inc., is a company founded in 2014. It was acquired by GitHub, a subsidiary of Microsoft, in 2020. The company maintains the npm package manager for Node.js and the npm Registry, which hosts software packages and version control based on Git.`,
			p2: `Relied upon by more than 11 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe.`,
			p3: `The free npm Registry has become the center of JavaScript code sharing, and with more than one million packages, the largest software registry in the world.`,
			p4: `I use npm to install dependencies in my project that enhance features, improve development, and make the project better`,
		},
		{
			name: "git",
			icon: "git",
			p1: `Git is free and open source software for distributed version control: tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows (thousands of parallel branches running on different systems).`,
			p2: `Git was originally authored by Linus Torvalds in 2005 for development of the Linux kernel, with other kernel developers contributing to its initial development.`,
			p3: `I use git along with the git bash console in my day job and when creating my pet projects in my spare time.`,
			p4: `I know and use the basic commands for working with the repository, but if necessary, I can always find the information I need in the official documentation on git-scm.com`,
		},
		{
			name: "Chrome DevTools",
			icon: "chrome",
			p1: `Google Chrome is a cross-platform web browser developed by Google. Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser.`,
			p2: `DevTools can help you edit pages on-the-fly and diagnose problems quickly, which ultimately helps you build better websites, faster.`,
			p3: `I use it to simulate mobile devices, testing responsive viewport mode. I also use various tools to check and improve performance, as well as find and fix bugs in my code.`,
			p4: `As well I use React Developer Tools. This is a Chrome DevTools extension for the open-source React JavaScript library. It allows you to inspect the React component hierarchies in the Chrome Developer Tools.`,
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
				speed={1000}
				loop>
				{sliderContent.map((slide) => (
					<SwiperSlide className={styles.slide} data-swiper-autoplay='5000' key={slide.name}>
						<h2 className={styles[`${slide.icon}`]}>{slide.name}</h2>
						<p>{slide.p1}</p>
						<p>{slide.p2}</p>
						<p className={styles.me}>{slide.p3}</p>
						<p className={styles.me}>{slide.p4}</p>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
export default Slider;
