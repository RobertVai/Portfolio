import React from "react";
import Title from "@/components/Title/Title";
import Stack from "@/components/Stack/Stack";
import Cards from "@/components/Cards/Cards";
import styles from "@/styles/Home.module.css"
import Projects from "@/components/Projects/Projects";



export default function Home() {
  return (
    <div className={styles.container}>
  < Title />
  <Cards />
  <Stack />
  <Projects />
      
    </div>
  );
}
