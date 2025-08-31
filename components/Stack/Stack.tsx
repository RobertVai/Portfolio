import React from 'react'
import styles from "./Stack.module.css"

const Stack = () => {
  return (
    <div className={styles.stack}>
        <hr className={styles.line} />
        <h3> My Skills </h3>
        <div className={styles.skills}>
        <img src="./Images/js.png" alt="JavaScript" />
        <img src="./Images/typescript.png" alt="TypeScript" />
        <img src="./Images/physics.png" alt="React" />
        <img src="./Images/nodejs.png" alt="NodeJs" />
        <img src="./Images/mongodb.png" alt="MongoDB" />
         <img src="./Images/github.png" alt="GitHub" />
        <img src="./Images/css.png" alt="CSS" />
        <img src="./Images/html.png" alt="HTML" />
        </div>
        <hr className={styles.line} />
       

    </div>
  )
}

export default Stack