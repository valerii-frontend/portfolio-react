import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Transition } from "react-transition-group";

import { Context } from "./helpers/context";
import "./App.css";

import Header from "./components/Header/";
import Taskbar from "./components/Taskbar";
import LoadAnim from "./components/LoadAnim";
import Home from "./pages/Home";

const Contacts = lazy(() => import("./pages/Contacts"));
const Works = lazy(() => import("./pages/Works"));
const About = lazy(() => import("./pages/About"));

function App() {
  const [themeSwitch, setThemeSwitch] = useState(true);
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [loading, setLoading] = useState(true);
  const [appLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Context.Provider
      value={{
        setThemeSwitch,
        themeSwitch,
        sidebarToggle,
        setSidebarToggle,
      }}>
      <Transition in={loading} timeout={1000} mountOnEnter unmountOnExit>
        {(state) => <LoadAnim state={state} />}
      </Transition>
      <BrowserRouter>
        <Transition in={appLoad} timeout={500}>
          {(state) => (
            <div className={`App ${themeSwitch ? "" : "light"} ${state}`} onContextMenu={(e) => e.preventDefault()}>
              <Header />
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path='/portfolio-react' element={<Home />} exact />
                  <Route path='/portfolio-react/contacts' element={<Contacts />} exact />
                  <Route path='/portfolio-react/works' element={<Works />} exact />
                  <Route path='/portfolio-react/about' element={<About />} exact />
                  <Route path='*' element={<Navigate to='/portfolio-react' replace />} />
                </Routes>
              </Suspense>
              <Taskbar />
            </div>
          )}
        </Transition>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
