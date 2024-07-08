import React, { useContext } from "react";
import gbl from "./portfolio.glb";
import poster from "./poster.png";
import posterLight from "./poster-light.jpg";
import light from "./light.hdr";
import styles from "./Model.module.css";

import { Context } from "../../helpers/context";

function Model() {
  const { themeSwitch } = useContext(Context);

  return (
    <div className={styles.model}>
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
        <div className={`${styles["progress-bar"]} ${styles.hide}`} slot='progress-bar'>
          <div className={styles["update-bar"]}></div>
        </div>
      </model-viewer>
    </div>
  );
}
const memoModel = React.memo(Model);
export default memoModel;
