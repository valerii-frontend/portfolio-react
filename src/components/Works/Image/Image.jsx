import React from "react";

export default function Image(props) {
	return (
		<picture>
			<source srcSet={props.avif} type='image/avif' />
			<source srcSet={props.webp} type='image/webp' />
			<source srcSet={props.jpeg} type='image/jpeg' />
			<img
				className={props.className}
				decoding='async'
				loading='lazy'
				src={props.png}
				alt={props.alt}
				title={props.title}
			/>
		</picture>
	);
}
