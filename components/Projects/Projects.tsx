import React from 'react'
import styles from "./Projects.module.css"


const Projects = () => {
  return (
    <div className={styles.projectsWrapper}>
        <h4>Projects</h4>
        <div className={styles.projectCards}>
            <div className={styles.project}> </div>
            <div className={styles.project}></div>
            <div className={styles.project}></div>
            <div className={styles.project}></div>
        </div>
    </div>
  )
}

export default Projects