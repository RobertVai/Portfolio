import React from "react";
import styles from "./Stack.module.css";

const skills = [
  { label: "JavaScript", src: "./Images/js.png" },
  { label: "TypeScript", src: "./Images/typescript.png" },
  { label: "React", src: "./Images/physics.png" },
  { label: "Node.js", src: "./Images/nodejs.png" },
  { label: "MongoDB", src: "./Images/mongodb.png" },
  { label: "GitHub", src: "./Images/github.png" },
  { label: "CSS3", src: "./Images/css.png" },
  { label: "HTML5", src: "./Images/html.png" },
];

const Stack = () => {
  return (
    <section id="skills" className={styles.stack}>
      <h3 className={styles.title}>Tech Stack</h3>

      <div className={styles.board}>
        <div className={styles.skills}>
          {skills.map((s) => (
            <div key={s.label} className={styles.skill}>
              <img src={s.src} alt={s.label} />
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
