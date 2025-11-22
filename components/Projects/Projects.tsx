import React, { useState } from "react";
import styles from "./Projects.module.css";

const Projects = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

  const toggleFlip = (i: number) => setFlipped(prev => (prev === i ? null : i));

  return (
    <div id="projects" className={styles.projectsWrapper}>
      <h4>Projects</h4>

      <div className={styles.projectCards}>
       
        <div className={styles.project}>
          <div className={styles.overlay}>
            <button onClick={() => toggleFlip(0)} className={styles.overlayBtn}>Info</button>

            <div className={styles.dropdown}>
              <button className={styles.overlayBtn}>GitHub</button>
              <div className={styles.menu}>
                <a href="https://github.com/RobertVai/orokelione" target="_blank" rel="noopener noreferrer">Frontend</a>
                <a href="https://github.com/RobertVai/orokelione-backend" target="_blank" rel="noopener noreferrer">Backend</a>
              </div>
            </div>

            <a className={styles.overlayBtn} href="https://orokelione.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a>
          </div>

          <div className={`${styles.flipWrap} ${flipped === 0 ? styles.isFlipped : ""}`}>
            <div className={styles.face} aria-hidden="true" />
            <div className={styles.back}>
              <h3>Travel Explorer</h3>
              <p>
                Web app for browsing flights and destinations. Built with React and REST APIs.
                Visually complete — further functionality coming soon.
              </p>
              <button onClick={() => toggleFlip(0)} className={styles.closeBtn}>Back</button>
            </div>
          </div>
        </div>

      
        <div className={styles.project}>
          <div className={styles.overlay}>
            <button onClick={() => toggleFlip(1)} className={styles.overlayBtn}>Info</button>

            <div className={styles.dropdown}>
              <button className={styles.overlayBtn}>GitHub</button>
              <div className={styles.menu}>
                <a href="https://github.com/RobertVai/AmnesiaQA" target="_blank" rel="noopener noreferrer">Frontend</a>
                <a href="https://github.com/RobertVai/AmnesiaQA-backend" target="_blank" rel="noopener noreferrer">Backend</a>
              </div>
            </div>

            <a className={styles.overlayBtn} href="https://amnesia-qa.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a>
          </div>

          <div className={`${styles.flipWrap} ${flipped === 1 ? styles.isFlipped : ""}`}>
            <div className={`${styles.face} ${styles.face2}`} aria-hidden="true" />
            <div className={styles.back}>
              <h3>AmnesiaQA Forum</h3>
              <p>
                Q&A forum with authentication, comments, likes/dislikes and MongoDB backend. Built with Next.js and Node.js.
              </p>
              <button onClick={() => toggleFlip(1)} className={styles.closeBtn}>Back</button>
            </div>
          </div>
        </div>


                <div className={styles.project}>
          <div className={styles.overlay}>
            <button onClick={() => toggleFlip(2)} className={styles.overlayBtn}>Info</button>

            <div className={styles.dropdown}>
              <button className={styles.overlayBtn}>GitHub</button>
              <div className={styles.menu}>
                <a href="https://github.com/RobertVai/modern-todo" target="_blank" rel="noopener noreferrer">Frontend</a>
                
              </div>
            </div>

            <a className={styles.overlayBtn} href="https://modern-todo-wheat.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a>
          </div>

          <div className={`${styles.flipWrap} ${flipped === 2 ? styles.isFlipped : ""}`}>
            <div className={`${styles.face} ${styles.face2}`} aria-hidden="true" />
            <div className={styles.back}>
              <h3>Modern ToDo List</h3>
              <p>
                A clean ToDo list app with light/dark mode, filters, and persistent tasks.
              </p>
              <button onClick={() => toggleFlip(2)} className={styles.closeBtn}>Back</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
