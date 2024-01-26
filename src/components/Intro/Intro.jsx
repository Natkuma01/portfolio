import React from 'react';
import Lottie from "lottie-react";
import styles from "./Intro.module.css";
import { getImageUrl } from "../../utils";

export const Intro = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Natalie</h1>
          <p className={styles.description}>I'm a full-stack developer based in New York</p>
          <button className={styles.button34}><a href="mailto:natkuma@outlook.com">Contact Me</a>
          </button>
          <a href="https://github.com/Natkuma01?tab=repositories">
            <imag src={getImageUrl("Intro/git.png")} className={styles.linked} />
          </a>
          <a href="https://www.linkedin.com/in/natalie-chan-shimin/">
          <img src={getImageUrl("Intro/linkedin.png")} className={styles.linkedin} />
          </a>
          <a href="https://github.com/Natkuma01?tab=repositories">
            <img src={getImageUrl("Intro/git.png")} className={styles.github} />
          </a>
        </div>
        <img src={getImageUrl("Intro/introPic.jpg")} alt="Me" className={styles.introPic}/>
        <div className={styles.topBlur} />
    </section>

  );
};
