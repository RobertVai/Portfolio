import React from "react";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section id="about" className={styles.about}>
      <h3 className={styles.title}>About Me</h3>

      <div className={styles.content}>
<div className={styles.text}>
  <p>
    A frontend-focused developer, passionate about crafting{" "}
    <span className={styles.accent}>clean</span>,{" "}
    <span className={styles.accent}>accessible</span>, and{" "}
    <span className={styles.accent}>modern web applications</span>.
  </p>
  <p>
    Websites are built <span className={styles.accent}>completely by hand</span> —
    without WordPress, Wix or other constructors — with every line of code written
    for <span className={styles.accent}>performance</span> and{" "}
    <span className={styles.accent}>flexibility</span>.
  </p>
  <p>
    Turning <span className={styles.accent}>ideas into code</span>, paying attention
    to the little details, and delivering solutions that feel effortless for users
    is what drives this work.
  </p>
  <p>
    Successfully completed the{" "}
    <span className={styles.accent}>CodeAcademy Front-End Development course</span>.
  </p>
  <p>
    Currently based in <span className={styles.accent}>Vilnius, Lithuania</span>.
  </p>
</div>

        <div className={styles.photoBox}>
          <img src="/Images/profile.jpg" alt="Robert Vaitechovskij" />
        </div>
      </div>
    </section>
  );
}

