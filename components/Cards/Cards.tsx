import React from 'react'
import styles from './Cards.module.css'

const Cards = () => {
  return (
    <>
    <div className={styles.cardsWrapper}>
        <div className={styles.card}>
            <h4>FRONT-END DEVELOPMENT</h4>
            <p>Clean, responsive interfaces with React/Next.js and JavaScript/TypeScript. 
                Accessible components, reliable forms, modern CSS.</p>
        </div>
        <div className={styles.card}>
            <h4>BACK-END INTEGRATIONS</h4>
            <p>Node.js, Express and MongoDB: secure REST APIs, auth, validation, 
                rate limits and clear error handling your UI can trust.</p>
        </div>
        <div className={styles.card}> <h4>PERFORMANCE & DEPLOYMENT</h4>
        <p>Image optimization, code-splitting, caching and SEO basics. CI/CD with GitHub Actions
             — deploy anywhere or on your own server.</p></div>
              
    </div>
    <p className={styles.scrollHint}>Swipe right to see more ➜</p>
   </>
    
  )
 }

export default Cards