import React, { useState, lazy, Suspense } from "react";
import styles from "./styles/Home.module.css";

import Sidebar from "../components/Sidebar";
import HomeSidebar from "../components/Sidebar/SidebarHomeContent";

const Readme = lazy(() => import("../components/Readme"));
const Model = lazy(() => import("../components/Model"));

export default function Main() {
  const [isReadme, setIsReadme] = useState(false);

  return (
    <main className={styles.main}>
      <Sidebar>
        <HomeSidebar setIsReadme={setIsReadme} isReadme={isReadme} />
      </Sidebar>
      <div className={styles.wrapper}>
        <Suspense fallback={<div>Loading...</div>}>
          <Model />
          {isReadme && <Readme setIsReadme={setIsReadme} />}
        </Suspense>
      </div>
    </main>
  );
}
