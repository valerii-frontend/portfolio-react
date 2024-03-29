import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { certificates } from "../../helpers/data";
import { BioDescription } from "./biography";

import engCert from "../../assets/certs/EF-SET-Certificate.webp";
import book from "../../assets/book.jpg";
import upwork from "../../assets/certs/upwork.png";

import freelanceLogo from "../../assets/logos/freelance.jpg";
import upworkLogo from "../../assets/logos/upwork.jpg";
import rolladenLogo from "../../assets/logos/rolladen_group.jpg";
import visaLogo from "../../assets/logos/visa.jpg";

import styles from "./AboutContent.module.css";

export function Bio() {
  const { title, paragraphs } = BioDescription;
  return (
    <div className={styles.about}>
      <h2>{title}</h2>
      {paragraphs.map((aboutText) => {
        return (
          <p key={aboutText.slice(0, 10)} className={styles.about__text}>
            {aboutText}
          </p>
        );
      })}
    </div>
  );
}

export function Edu() {
  const images = certificates.map((i) => ({
    original: i,
    thumbnail: i,
  }));
  return (
    <div className={styles.about}>
      <h2>Education</h2>
      <ol>
        <li>
          <strong>University</strong>: Donetsk National Technical University (2006-2012)
        </li>
        <li>
          <strong>Academic degree</strong>: Specialist (engineer)
        </li>
        <li>
          <strong>Major</strong>: Telecommunication systems and networks.
        </li>
        <li>
          <strong>Department</strong>: Computer Information Technology and Automation
        </li>
      </ol>
      <h2>Courses & certificates</h2>
      <ol>
        <li>
          <strong>SoloLearn</strong> — HTML course (<span>January 2020</span>)
        </li>
        <li>
          <strong>SoloLearn</strong> — CSS course (<span>April 2020</span>)
        </li>
        <li>
          <strong>GeekBrains</strong> — Completed the course «HTML & CSS» (<span>April 2020</span>)
        </li>
        <li>
          <strong>edu.fls.guru</strong> — advanced course of HTML coding (<span>Sept 2020 – Dec 2020</span>)
        </li>
        <li>
          <strong>SoloLearn</strong> — React + Redux (<span>Aug 2021 – Sept 2021</span>)
        </li>
        <li>
          <strong>SoloLearn</strong> — JavaScript (<span>Aug 2021 – Sept 2021</span>)
        </li>
        <li>
          <strong>Udemy</strong> —
          <a
            target='_blank'
            href='https://www.udemy.com/certificate/UC-2005ecb8-15a3-42f2-b626-346c81546fa6/'
            rel='noreferrer'>
            The Complete JavaScript Course: From Zero to Expert!
          </a>{" "}
          (<span>Oct 2021 – Nov 2021</span>)
        </li>
        <li>
          <strong>Udemy</strong> —
          <a href='https://www.udemy.com/certificate/UC-c7dd13ed-5a1e-4787-8f21-41813e55eda9/' rel='noreferrer'>
            React: The Complete guide!
          </a>{" "}
          (<span>June 2022 – July 2022</span>)
        </li>
        <li>
          <strong>SkillUP</strong> —
          <a
            href='https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfMzc0NjgzMl8xNjYyMzI4MzExLnBuZyIsInVzZXJuYW1lIjoiVmFsZXJpaSBMb3pnaGFjaG92In0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F2817%2FAgile-Scrum-Foundation%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1156274280829782599&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVzyjxdjMtDo10KUkCAKr72PMlAAAA'
            rel='noreferrer'>
            Agile Scrum Foundations for Basic Learning
          </a>{" "}
          (<span>Sept 2022</span>)
        </li>
        <li>
          <strong>Coursera</strong> —
          <a href='https://www.coursera.org/account/accomplishments/verify/AWT2X8X25DS7' rel='noreferrer'>
            Crash Course on Python by Google
          </a>{" "}
          (<span>Oct 2022 - Nov 2022</span>)
        </li>
        <li>
          <strong>Coursera</strong> —
          <a href='https://www.coursera.org/account/accomplishments/verify/C9TP6ZER8MEY' rel='noreferrer'>
            Agile with Atlassian Jira
          </a>{" "}
          (<span>Dec 2022 - Dec 2022</span>)
        </li>
        <li>
          <strong>Coursera</strong> —
          <a
            href='https://www.coursera.org/account/accomplishments/specialization/certificate/G6KXQ26PELK5'
            rel='noreferrer'>
            Meta Front-End Developer Professional Certificate
          </a>{" "}
          (<span>Sept 2022 - Feb 2023</span> )
        </li>
      </ol>
      <div className={styles.slides}>
        <ImageGallery autoPlay items={images} slideInterval={5000} />
      </div>
    </div>
  );
}

export function Exp() {
  return (
    <div className={styles.about}>
      <h2>Expirience</h2>
      <ul>
        <li className={styles.jobItem}>
          <img className={styles.logo} src={visaLogo} alt='visa company' />
          <div>
            <strong>Senior Software Engineer at “Visa”</strong> (November 2023 – present time)
            <div>
              <span>Responsibilities</span>: Development of complex web applications using React, TypeScript, and
              Next.js, ensuring high-quality, scalable, and maintainable code. Conduct thorough code reviews to maintain
              code quality and consistency. Take ownership of feature implementation, from requirements analysis to
              deployment, ensuring alignment with project goals and timelines.
            </div>
            <div>
              <span>Technology & Tools</span>: JavaScript, TypeScript, HTML, CSS, React, NextJs, GitHu, BitBucket, git,
              Scrum, Jira, Playwright.
            </div>
          </div>
        </li>
        <li className={styles.jobItem}>
          <img className={styles.logo} src={rolladenLogo} alt='rolladen group' />
          <div>
            <strong>Frontend Developer in “Rolladen Group”</strong> (December 2021 – November 2023)
            <div>
              <span>Responsibilities</span>: e-commerce store optimization. Improved performance, implementation of
              modern technologies, improved styles, and scripts. Correction of errors and bugs in the code. Editing with
              PHP Smart templates, creating a mobile version for pages.
            </div>
            <div>
              <span>Technology & Tools</span>: JavaScript, Jquery, HTML, CSS, PHP, Smarty, GitLab, git, PHPStorm,
              ShopWare.
            </div>
          </div>
        </li>
        <li className={styles.jobItem}>
          <img className={styles.logo} src={upworkLogo} alt='upwork logo' />
          <div>
            <strong>Freelancer on UpWork</strong> (April 2022 – November 2023)
            <div>
              <span>Contracts</span>: Slice layouts from Figma/Adobe Photoshop/XD with Bootstrap 5+ or SCSS + BEM.
              Writing own scripts, fixing errors in styles, scripts and markup, optimizing page loading speed, creating
              keyframes CSS animations.
            </div>
          </div>
        </li>
        <li className={styles.jobItem}>
          <img className={styles.logo} src={freelanceLogo} alt='freelance logo' />
          <div>
            <strong>Freelancer on UA local market</strong> (January 2021 – February 2022)
            <div>
              <span>Tasks and types of work</span>: slice the PSD/Figma/AdobeXD layouts to static HTML\CSS\JS pages.
              Fixing issues with styles and scripts. Create CSS animations and JS scripts.
            </div>
          </div>
        </li>
      </ul>
      <div className={styles.certUpwork}>
        <img src={upwork} alt='upwork licence screenshot' />
      </div>
    </div>
  );
}

export function Hobby() {
  return (
    <div className={styles.about}>
      <h2>Hobby</h2>
      <ul className={styles.marker}>
        <li>Running, cycling</li>
        <li>Outdoor sports and activities</li>
        <li>
          Solve puzzles and logical tasks{" - "}
          <img
            src='https://www.codewars.com/users/valerii-frontend/badges/micro'
            alt='codewars badge'
            style={{ filter: "drop-shadow(0 0 2px var(--text))" }}
          />
        </li>
        <li>Science and high technology</li>
        <li>RPG/Fantasy videogames and series</li>
        <li>Spending time with family outdoors and in an urban environment</li>
        <li>Education and self improvement</li>
        <li>Reading</li>
      </ul>

      <div className={styles.js}>
        <img src={book} alt='The definitly guide JS' />
      </div>
    </div>
  );
}

export function Lang() {
  return (
    <div className={styles.about}>
      <h2>Languages</h2>
      <ul>
        <li>
          <strong>Russian</strong>—Native <span className={styles}>C1</span>
        </li>
        <li>
          <strong>Ukrainian</strong>—Native <span className={styles}>C1</span>
        </li>
        <li>
          <strong>Polish</strong>—Intermediate <span className={styles}>B2</span>
        </li>
        <li>
          <strong>English</strong>—Intermediate <span className={styles}>B2</span>
        </li>
      </ul>
      <a href='https://www.efset.org/cert/Gsuc3X' target='_blank' rel='noreferrer' className={styles.langImg}>
        <img src={engCert} alt='english certificate' />
      </a>
    </div>
  );
}

export function Soft() {
  return (
    <div className={styles.about}>
      <h2>Soft skills</h2>
      <ul className={`${styles.marker} ${styles.marker_2}`}>
        <li>Professional approach</li>
        <li>Good organization of work</li>
        <li>Initiative</li>
        <li>Responsibility</li>
        <li>Sociable and ready to help</li>
        <li>Attention to detail</li>
        <li>Open to everything new</li>
        <li>Involvement in work</li>
        <li>Desire to develop & improve</li>
      </ul>
    </div>
  );
}
