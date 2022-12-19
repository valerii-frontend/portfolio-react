import React, { useState, lazy, Suspense } from "react";
import styles from "./styles/Home.module.css";

import Sidebar from "../components/Sidebar";
import HomeSidebar from "../components/Sidebar/SidebarHomeContent";

const Readme = lazy(() => import("../components/Readme"));
const Model = lazy(() => import("../components/Model"));
const Slider = lazy(() => import("../components/Slider"));

export default function Main() {
  const [swiperEl, setSwiperEl] = useState(1);
  const [isReadme, setIsReadme] = useState(false);
  const slideTo = (index) => swiperEl.slideTo(index, 500);

  return (
    <main className={styles.main}>
      <Sidebar>
        <HomeSidebar slideTo={slideTo} setIsReadme={setIsReadme} isReadme={isReadme} />
      </Sidebar>
      <div className={styles.wrapper}>
        <Suspense fallback={<div>Loading...</div>}>
          <Model slideTo={slideTo} />
          {isReadme && <Readme setIsReadme={setIsReadme} />}
          <Slider setSwiperEl={setSwiperEl} />
        </Suspense>
      </div>
    </main>
  );
}
