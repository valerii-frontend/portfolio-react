import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import AboutSidebar from "../components/Sidebar/SidebarAboutContent";
import Text3d from "../components/Text3d";

import { Bio, Lang, Edu, Exp, Hobby, Soft } from "../components/AboutContent";

import styles from "./styles/About.module.css";

export default function About() {
  return (
    <main className={styles.about}>
      <Sidebar>
        <AboutSidebar />
      </Sidebar>
      <div className={styles.textArea}>
        <Routes>
          <Route
            path='/'
            element={
              <div className={styles.info}>
                <div>
                  <Text3d deg='15deg' dept='15px'>
                    <h1>General information about me</h1>
                  </Text3d>
                </div>
                <Link to='biography'>
                  <Text3d deg='15deg' dept='15px'>
                    <h2>Biography</h2>
                  </Text3d>
                </Link>
                <p>Just a story about my life and my way to the programming and IT</p>
                <Link to='education'>
                  <Text3d deg='15deg' dept='15px'>
                    <h2>Education</h2>
                  </Text3d>
                </Link>
                <p>Information about my university, self-study, courses, as well as my certificates</p>
                <Link to='experience'>
                  <Text3d deg='15deg' dept='15px'>
                    <h2>Experience</h2>
                  </Text3d>
                </Link>
                <p>
                  Here you can get acquainted with my experience in development, I have indicated only relevant places
                  of work, and also briefly described useful skills
                </p>
                <Link to='hobby'>
                  <Text3d deg='15deg' dept='15px'>
                    <h2>Hobby</h2>
                  </Text3d>
                </Link>
                <p>not a big description of things that I am fond of and do in my spare time</p>
                <Link to='languages'>
                  <Text3d deg='15deg' dept='15px'>
                    <h2>Languages</h2>
                  </Text3d>
                </Link>
                <p>Some info about my languages skills</p>
                <Link to='soft-skills'>
                  <Text3d deg='15deg' dept='15px'>
                    <h2>Soft skills</h2>
                  </Text3d>
                </Link>
                <p>The additional not programming skills, which will be useful at the any jobtype and company</p>
              </div>
            }
          />
          <Route path='biography' element={<Bio />} />
          <Route path='education' element={<Edu />} />
          <Route path='experience' element={<Exp />} />
          <Route path='hobby' element={<Hobby />} />
          <Route path='languages' element={<Lang />} />
          <Route path='soft-skills' element={<Soft />} />
        </Routes>
      </div>
    </main>
  );
}
