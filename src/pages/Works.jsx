import React, { useState } from "react";
import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";
import WorksSidebar from "../components/Sidebar/SidebarWorksContent";
import Toggle from "../components/Toggle";
import styles from "./styles/Works.module.css";
import Text3d from "../components/Text3d/";
import { iframeLinks as links } from "../helpers/data";

export default function Works() {
  const [full, setFull] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [modal, setModal] = useState({ toggle: false });

  const fullScreenToggle = () => setFull((p) => !p);
  const mobileToggle = () => setMobile((p) => !p);
  const closeModalHandler = () => {
    setModal({ toggle: false });
    setMobile(false);
    setFull(false);
  };

  const textInfo = (
    <>
      <Text3d dept='10px' deg='10deg' fade>
        <h1>Choose a project in the sidebar to preview</h1>
      </Text3d>
      <div>
        <Text3d deg='15deg' layers={5} dept='5px'>
          <h2 className={styles.react}>react</h2>
        </Text3d>
      </div>

      <ul>
        <li>
          <span>blog-page</span> - this is a project with fetching data for js-placeholder api, using react route,
          hooks, fake authorization with pretty design and interesting logic.
        </li>
        <li>
          <span>chess-game</span> - the chess board game, using react, typescript
        </li>
        <li>
          <span>healthy-food</span> - simple food ordering service, with cart logic, form validation and simulation of
          order payment. React hooks, transition group, firebase database storage.
        </li>
        <li>
          <span>poland-cities</span> - simple project with opportunities to add a new post to external database and
          fetching data from it. React hooks, MongoDB.
        </li>
        <li>
          <span>currency converter</span> - Work with API to get actual data.
          React/typescript/axios/react-router,opportunities to save conversions history to browser local storage.
        </li>
        <li>
          <span>loaders animation</span> - Storybook and Styled components practicing project. Create the loaders
          animations library with different options
        </li>
        <li>
          <span>simple calculator</span> - Meta React Basic Coursera course final assignment. Unique design and unit
          testing has been added{" "}
          <a style={{ color: "var(--code-color-05)" }} href='https://github.com/valerii-frontend/calc-meta'>
            (more info)
          </a>
        </li>
        <li>
          <span>memorize game</span> - memory cards matching game, using React
        </li>
      </ul>
      <Text3d deg='20deg' layers={10} dept='10px'>
        <h2 className={styles.library}>library</h2>
      </Text3d>
      <p>
        A simple set of various small tasks and components written by me for practice using vanilla javascript, html,
        scss and css. In the future, for practice, I would like to rewrite the library in React
      </p>
      <Text3d deg='25deg' layers={7} dept='7px'>
        <h2 className={styles.games}>games</h2>
      </Text3d>
      <p>Games written in vanilla Javascript with a simple,unique design</p>
      <Text3d deg='30deg' layers={12} dept='12px'>
        <h2 className={styles.api}>api</h2>
      </Text3d>
      <p>
        Small apps with vanilla Javascript, simple design and an idea to practice working with api using open source
        free api.
      </p>
      <Text3d deg='35deg' layers={8} dept='8px'>
        <h2 className={styles.web}>web-sites</h2>
      </Text3d>
      <p>
        Static pages built with Gulp.js using SCSS,HTML and Javascript. All pages have support for popular browsers and
        responsive web design for devices of different screen sizes.
      </p>
      <h3>
        You can see the source code on my
        <a href='https://github.com/valerii-frontend' target='_blank' rel='noreferrer'>
          github
        </a>
      </h3>
    </>
  );
  const toggleClassNames = `${full ? styles.fullScreen : ""} ${mobile ? styles.mobile : ""}`;
  return (
    <main className={styles.works}>
      <Sidebar>
        <WorksSidebar setModal={setModal} modal={modal}>
          {modal.toggle && (
            <div className={styles.modalControls}>
              <Toggle id='fullscreen' onClick={fullScreenToggle}>
                full size
              </Toggle>
              <Toggle id='mobile' onClick={mobileToggle}>
                mobile view
              </Toggle>
            </div>
          )}
        </WorksSidebar>
      </Sidebar>
      <div className={styles.worksWindow}>
        <div className={styles.info}>{textInfo}</div>
        {links.map(
          (item) =>
            modal[item.name] && (
              <Modal key={item.name} closeModalHandler={closeModalHandler} item={item} className={toggleClassNames}>
                <iframe src={item.link} title={item.name}></iframe>
              </Modal>
            )
        )}
      </div>
    </main>
  );
}
