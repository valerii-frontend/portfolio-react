import React, { useState } from "react";
import gbl from "./portfolio.glb";
import poster from "./poster.png";
import light from "./light.hdr";
import styles from "./Model.module.css";

export default function Model({ slideTo }) {
	const [pointToggle, setPointToggle] = useState(false);

	return (
		<div className={styles.model}>
			<div className={styles.toggle}>
				<input id='toggle' type='checkbox' onClick={() => setPointToggle((p) => !p)} />
				<label htmlFor='toggle'>Show hints</label>
			</div>
			<model-viewer
				src={gbl}
				camera-controls
				disable-zoom
				quick-look
				poster={poster}
				shadow-intensity='0.55'
				environment-image={light}
				shadow-softness='0.8'
				camera-orbit='91deg 90deg 12.50m'
				exposure='0.6'
				auto-rotate
				camera-target='-6.201m 6.17m 1.8m'
				min-camera-orbit='auto 60deg 12.50m'
				max-camera-orbit='auto 120deg 18.50m'>
				{pointToggle && (
					<>
						<button
							onClick={() => slideTo(1)}
							className={styles.hotspot}
							slot='hotspot-1'
							data-position='-6.45m 6.46m 5.85m'
							data-normal='0m -1.34m 1.00m'
							data-visibility-attribute='visible'>
							<div className={styles.hotspotText}>HTML5</div>
						</button>
						<button
							onClick={() => slideTo(2)}
							className={styles.hotspot}
							slot='hotspot-2'
							data-position='-9.60m 6.40m 5.00m'
							data-normal='-0.70m 1.08m 0.70m'
							data-visibility-attribute='visible'>
							<div className={styles.hotspotText}>Microsoft Visual Studio Code</div>
						</button>
						<button
							onClick={() => slideTo(3)}
							className={styles.hotspot}
							slot='hotspot-3'
							data-position='-10.58m 6.55m 1.55m'
							data-normal='-1m 0m 0m'
							data-visibility-attribute='visible'>
							<div className={styles.hotspotText}>TypeScript</div>
						</button>
						<button
							onClick={() => slideTo(4)}
							className={styles.hotspot}
							slot='hotspot-4'
							data-position='-9.20m 6.40m -1.08m'
							data-normal='-0.70m 2.61m -0.70m'
							data-visibility-attribute='visible'>
							<div className={styles.hotspotText}>Bootstrap</div>
						</button>
						<button
							onClick={() => slideTo(5)}
							className={styles.hotspot}
							slot='hotspot-5'
							data-position='-6.25m 6.28m -2.82m'
							data-normal='-4.37m 1.34m -1.00m'
							data-visibility-attribute='visible'>
							<div className={styles.hotspotText}>CSS3</div>
						</button>
						<button
							onClick={() => slideTo(6)}
							className={styles.hotspot}
							slot='hotspot-6'
							data-position='-3.20m 6.50m -1.71m'
							data-normal='0.70m 4.90m -0.70m'
							data-visibility-attribute='visible'>
							<div className={styles.hotspotText}>JetBrains PHP Storm</div>
						</button>
						<button
							onClick={() => slideTo(7)}
							className={styles.hotspot}
							slot='hotspot-7'
							data-position='-2.00m 6.40m 1.61m'
							data-normal='1m 0m 0m'
							data-visibility-attribute='visible'>
							<div className={styles.hotspotText}>JavaScript</div>
						</button>
						<button
							onClick={() => slideTo(8)}
							className={styles.hotspot}
							slot='hotspot-8'
							data-position='-3.25m 6.40m 4.94m'
							data-normal='0.70m -1.91m 0.70m'
							data-visibility-attribute='visible'>
							<div className={styles.hotspotText}>SASS</div>
						</button>
						<button
							onClick={() => slideTo(9)}
							className={styles.hotspot}
							slot='hotspot-9'
							data-position='-4.93m 3.73m 4.82m'
							data-normal='0.40m -0.47m 0.80m'
							data-visibility-attribute='visible'>
							<div className={styles.hotspotText}>Gulp.js</div>
						</button>
						<button
							onClick={() => slideTo(10)}
							className={styles.hotspot}
							slot='hotspot-10'
							data-position='-2.86m 4.13m 0.17m'
							data-normal='0.78m -0.47m -0.40m'
							data-visibility-attribute='visible'>
							<div className={styles.hotspotText}>React</div>
						</button>
						<button
							onClick={() => slideTo(11)}
							className={styles.hotspot}
							slot='hotspot-11'
							data-position='-7.77m 4.14m -1.96m'
							data-normal='-0.38m -0.56m -0.73m'
							data-visibility-attribute='visible'>
							<div className={styles.hotspotText}>Figma</div>
						</button>
						<button
							onClick={() => slideTo(12)}
							className={styles.hotspot}
							slot='hotspot-12'
							data-position='-8.83m 3.62m 3.58m'
							data-normal='-0.70m -0.60m 0.40m'
							data-visibility-attribute='visible'>
							<div className={styles.hotspotText}>Adobe Photoshop</div>
						</button>
						<button
							onClick={() => slideTo(13)}
							className={styles.hotspot}
							slot='hotspot-13'
							data-position='-6.11m 2.50m 1.73m'
							data-normal='0.80m 0.00m -0.60m'
							data-visibility-attribute='visible'>
							<div className={styles.hotspotText}>BEM methodology</div>
						</button>
						<button
							onClick={() => slideTo(14)}
							className={styles.hotspot}
							slot='hotspot-14'
							data-position='-7.50m 9.70m -1.65m'
							data-normal='-0.27m 0.77m -0.57m'
							data-visibility-attribute='visible'>
							<div className={styles.hotspotText}>GitHub</div>
						</button>
						<button
							onClick={() => slideTo(15)}
							className={styles.hotspot}
							slot='hotspot-15'
							data-position='-3.60m 9.56m 0.30m'
							data-normal='0.66m 0.70m -0.24m'
							data-visibility-attribute='visible'>
							<div className={styles.hotspotText}>GitLab</div>
						</button>
						<button
							onClick={() => slideTo(16)}
							className={styles.hotspot}
							slot='hotspot-16'
							data-position='-5.58m 9.93m 4.02m'
							data-normal='0.34m 0.61m 0.71m'
							data-visibility-attribute='visible'>
							<div className={styles.hotspotText}>Node pack manager</div>
						</button>
						<button
							onClick={() => slideTo(17)}
							className={styles.hotspot}
							slot='hotspot-17'
							data-position='-9.20m 9.65m 2.48m'
							data-normal='-0.66m 0.70m 0.24m'
							data-visibility-attribute='visible'>
							<div className={styles.hotspotText}>Git bash</div>
						</button>
						<button
							onClick={() => slideTo(18)}
							className={styles.hotspot}
							slot='hotspot-18'
							data-position='-6.40m 10.33m 1.74m'
							data-normal='0.75m 0.64m -0.15m'
							data-visibility-attribute='visible'>
							<div className={styles.hotspotText}>Chrome dev.tools</div>
						</button>
					</>
				)}

				<div className={`${styles["progress-bar"]} ${styles.hide}`} slot='progress-bar'>
					<div className={styles["update-bar"]}></div>
				</div>
			</model-viewer>
		</div>
	);
}
