import React from "react";

import Sidebar from "../components/Sidebar";
import Text3d from "../components/Text3d/";

import styles from "./styles/Contacts.module.css";

import codewars from "../assets/codewars.webp";
import instagram from "../assets/instagram.svg";
import codesignal from "../assets/codesignal.webp";

export default function Contacts() {
  return (
    <main className={styles.contacts}>
      <Sidebar>
        <span className={styles.file}>contacts.pdf</span>
      </Sidebar>

      <div className={styles.info}>
        <div className={styles.wrapper}>
          <Text3d>
            <h1>Contacts</h1>
          </Text3d>
        </div>

        <ul>
          <li>
            <a title='Facebook' rel='noreferrer' target='_blank' href='https://www.facebook.com/valerii.from.earth'>
              <svg className={styles.icon}>
                <use xlinkHref='#facebook' />
              </svg>
            </a>
          </li>
          <li>
            <a title='LinkedIn' rel='noreferrer' target='_blank' href='http://www.linkedin.com/in/valerii-lozghachov'>
              <svg className={styles.icon}>
                <use xlinkHref='#linkedin' />
              </svg>
            </a>
          </li>
          <li>
            <a title='Telegram' rel='noreferrer' target='_blank' href='https://t.me/the_earth_citizen'>
              <svg className={styles.icon}>
                <use xlinkHref='#telegram' />
              </svg>
            </a>
          </li>
          <li>
            <a title='Google Mail' rel='noreferrer' target='_blank' href='mailto:v.lozghachov@gmail.com'>
              <svg className={styles.icon}>
                <use xlinkHref='#gmail' />
              </svg>
            </a>
          </li>
        </ul>
        <div className={styles.wrapper}>
          <Text3d>
            <h2>My links</h2>
          </Text3d>
        </div>
        <ul>
          <li>
            <a title='GitHub' rel='noreferrer' target='_blank' href='https://github.com/valerii-frontend'>
              <svg className={styles.icon}>
                <use xlinkHref='#github' />
              </svg>
            </a>
          </li>
          <li>
            <a title='CodeSignal' rel='noreferrer' target='_blank' href='https://app.codesignal.com/profile/_valerii__'>
              <img src={codesignal} alt='codesignal' />
            </a>
          </li>
          <li>
            <a title='Instagram' rel='noreferrer' target='_blank' href='https://www.instagram.com/v.lozghachov/'>
              <img src={instagram} alt='instagram' />
            </a>
          </li>
          <li>
            <a title='Codewars' rel='noreferrer' target='_blank' href='https://www.codewars.com/users/valerii-frontend'>
              <img src={codewars} alt='codewars' />
            </a>
          </li>
        </ul>
      </div>
      <svg xmlns='http://www.w3.org/2000/svg' className={styles.svgWrapper}>
        <symbol id='facebook'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            viewBox='0 0 455.73 455.73'
            style={{ enableBackground: "new 0 0 455.73 455.73" }}>
            <path
              fill='#3A559F'
              d='M0,0v455.73h242.704V279.691h-59.33v-71.864h59.33v-60.353c0-43.893,35.582-79.475,79.475-79.475
h62.025v64.622h-44.382c-13.947,0-25.254,11.307-25.254,25.254v49.953h68.521l-9.47,71.864h-59.051V455.73H455.73V0H0z'
            />
          </svg>
        </symbol>
        <symbol id='linkedin'>
          <svg x='0px' y='0px' viewBox='0 0 455.731 455.731' style={{ enableBackground: "new 0 0 455.731 455.731" }}>
            <g>
              <rect x='0' y='0' fill='#0084B1' width='455.731' height='455.731' />
              <g>
                <path
                  fill='#FFFFFF'
                  d='M107.255,69.215c20.873,0.017,38.088,17.257,38.043,38.234c-0.05,21.965-18.278,38.52-38.3,38.043
			c-20.308,0.411-38.155-16.551-38.151-38.188C68.847,86.319,86.129,69.199,107.255,69.215z'
                />
                <path
                  fill='#FFFFFF'
                  d='M129.431,386.471H84.71c-5.804,0-10.509-4.705-10.509-10.509V185.18
			c0-5.804,4.705-10.509,10.509-10.509h44.721c5.804,0,10.509,4.705,10.509,10.509v190.783
			C139.939,381.766,135.235,386.471,129.431,386.471z'
                />
                <path
                  fill='#FFFFFF'
                  d='M386.884,241.682c0-39.996-32.423-72.42-72.42-72.42h-11.47c-21.882,0-41.214,10.918-52.842,27.606
			c-1.268,1.819-2.442,3.708-3.52,5.658c-0.373-0.056-0.594-0.085-0.599-0.075v-23.418c0-2.409-1.953-4.363-4.363-4.363h-55.795
			c-2.409,0-4.363,1.953-4.363,4.363V382.11c0,2.409,1.952,4.362,4.361,4.363l57.011,0.014c2.41,0.001,4.364-1.953,4.364-4.363
			V264.801c0-20.28,16.175-37.119,36.454-37.348c10.352-0.117,19.737,4.031,26.501,10.799c6.675,6.671,10.802,15.895,10.802,26.079
			v117.808c0,2.409,1.953,4.362,4.361,4.363l57.152,0.014c2.41,0.001,4.364-1.953,4.364-4.363V241.682z'
                />
              </g>
            </g>
          </svg>
        </symbol>
        <symbol id='telegram'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            x='0px'
            y='0px'
            viewBox='0 0 455.731 455.731'
            style={{ enableBackground: "new 0 0 455.731 455.731" }}
            xmlSpace='preserve'>
            <g>
              <rect x='0' y='0' fill='#61A8DE' width='455.731' height='455.731' />
              <path
                fill='#FFFFFF'
                d='M358.844,100.6L54.091,219.359c-9.871,3.847-9.273,18.012,0.888,21.012l77.441,22.868l28.901,91.706
		c3.019,9.579,15.158,12.483,22.185,5.308l40.039-40.882l78.56,57.665c9.614,7.057,23.306,1.814,25.747-9.859l52.031-248.76
		C382.431,106.232,370.443,96.08,358.844,100.6z M320.636,155.806L179.08,280.984c-1.411,1.248-2.309,2.975-2.519,4.847
		l-5.45,48.448c-0.178,1.58-2.389,1.789-2.861,0.271l-22.423-72.253c-1.027-3.308,0.312-6.892,3.255-8.717l167.163-103.676
		C320.089,147.518,324.025,152.81,320.636,155.806z'
              />
            </g>
          </svg>
        </symbol>
        <symbol id='gmail'>
          <svg xmlns='http://www.w3.org/2000/svg' aria-label='Gmail' role='img' viewBox='0 0 512 512'>
            <rect width='512' height='512' rx='15%' fill='#fff' />
            <path d='M158 391v-142l-82-63V361q0 30 30 30' fill='#4285f4' />
            <path d='M 154 248l102 77l102-77v-98l-102 77l-102-77' fill='#ea4335' />
            <path d='M354 391v-142l82-63V361q0 30-30 30' fill='#34a853' />
            <path d='M76 188l82 63v-98l-30-23c-27-21-52 0-52 26' fill='#c5221f' />
            <path d='M436 188l-82 63v-98l30-23c27-21 52 0 52 26' fill='#fbbc04' />
          </svg>
        </symbol>
        <symbol id='github'>
          <svg xmlns='http://www.w3.org/2000/svg' aria-label='GitHub' role='img' viewBox='0 0 512 512'>
            <rect width='512' height='512' rx='15%' fill='#1B1817' />
            <path
              fill='#fff'
              d='M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z'
            />
          </svg>
        </symbol>
      </svg>
    </main>
  );
}
