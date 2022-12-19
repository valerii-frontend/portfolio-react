import React, { useState, useContext } from "react";
import gbl from "./portfolio.glb";
import poster from "./poster.png";
import posterLight from "./poster-light.jpg";
import light from "./light.hdr";
import styles from "./Model.module.css";
import Toggle from "../Toggle";
import { Context } from "../../helpers/context";

function Model({ slideTo }) {
  const [pointToggle, setPointToggle] = useState(false);
  const { themeSwitch } = useContext(Context);

  const hotSpotButtons = [
    {
      position: "-6.45m 6.46m 5.85m",
      normal: "0m -1.34m 1.00m",
      text: "HTML5",
      id: 1,
    },
    {
      position: "-9.60m 6.40m 5.00m",
      normal: "-0.70m 1.08m 0.70m",
      text: "Microsoft Visual Studio Code",
      id: 2,
    },
    {
      position: "-10.58m 6.55m 1.55m",
      normal: "-1m 0m 0m",
      text: "TypeScript",
      id: 3,
    },
    {
      position: "-9.20m 6.40m -1.08m",
      normal: "-0.70m 2.61m -0.70m",
      text: "Bootstrap",
      id: 4,
    },
    {
      position: "-6.25m 6.28m -2.82m",
      normal: "-4.37m 1.34m -1.00m",
      text: "CSS3",
      id: 5,
    },
    {
      position: "-3.20m 6.50m -1.71m",
      normal: "0.70m 4.90m -0.70m",
      text: "JetBrains PHP Storm",
      id: 6,
    },
    {
      position: "-2.00m 6.40m 1.61m",
      normal: "1m 0m 0m",
      text: "JavaScript",
      id: 7,
    },
    {
      position: "-3.25m 6.40m 4.94m",
      normal: "0.70m -1.91m 0.70m",
      text: "SASS",
      id: 8,
    },
    {
      position: "-4.93m 3.73m 4.82m",
      normal: "0.40m -0.47m 0.80m",
      text: "Gulp.js",
      id: 9,
    },
    {
      position: "-2.86m 4.13m 0.17m",
      normal: "0.78m -0.47m -0.40m",
      text: "React",
      id: 10,
    },
    {
      position: "-8.83m 3.62m 3.58m",
      normal: "-0.70m -0.60m 0.40m",
      text: " Adobe Photoshop",
      id: 11,
    },
    {
      position: "-7.77m 4.14m -1.96m",
      normal: "-0.38m -0.56m -0.73m",
      text: "Figma",
      id: 12,
    },
    {
      position: "-6.11m 2.50m 1.73m",
      normal: "0.80m 0.00m -0.60m",
      text: "BEM methodology",
      id: 13,
    },
    {
      position: "-7.50m 9.70m -1.65m",
      normal: "-0.27m 0.77m -0.57m",
      text: "GitHub",
      id: 14,
    },
    {
      position: "-3.60m 9.56m 0.30m",
      normal: "0.66m 0.70m -0.24m",
      text: "GitLAB",
      id: 15,
    },
    {
      position: "-5.58m 9.93m 4.02m",
      normal: "0.34m 0.61m 0.71m",
      text: "npm",
      id: 16,
    },
    {
      position: "-9.20m 9.65m 2.48m",
      normal: "-0.66m 0.70m 0.24m",
      text: "git bash console",
      id: 17,
    },
    {
      position: "-6.40m 10.33m 1.74m",
      normal: "0.75m 0.64m -0.15m",
      text: "Chrome dev.tools",
      id: 18,
    },
  ];

  return (
    <div className={styles.model}>
      <Toggle onClick={() => setPointToggle((p) => !p)} id='toggleHint' className={styles.toggle}>
        Show hints
      </Toggle>
      <model-viewer
        src={gbl}
        camera-controls
        disable-zoom
        disable-pan
        quick-look
        poster={themeSwitch ? poster : posterLight}
        shadow-intensity='0.55'
        environment-image={light}
        shadow-softness='0.8'
        camera-orbit='91deg 90deg 17.50m'
        exposure='0.6'
        auto-rotate
        camera-target='-6.201m 6.17m 1.8m'
        min-camera-orbit='auto 60deg 17.50m'
        max-camera-orbit='auto 120deg 18.50m'>
        {pointToggle &&
          hotSpotButtons.map((btn) => (
            <button
              onClick={() => slideTo(btn.id)}
              className={styles.hotspot}
              key={btn.id}
              slot={`hotspot-${btn.id}`}
              data-position={btn.position}
              data-normal={btn.normal}
              data-visibility-attribute='visible'>
              <div className={styles.hotspotText}>{btn.text}</div>
            </button>
          ))}

        <div className={`${styles["progress-bar"]} ${styles.hide}`} slot='progress-bar'>
          <div className={styles["update-bar"]}></div>
        </div>
      </model-viewer>
    </div>
  );
}
const memoModel = React.memo(Model);
export default memoModel;
