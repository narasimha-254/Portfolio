import React from 'react'
import styles from '../Hero/Hero.module.css'
import { getImageUrl } from '../../utils'
const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi, I'm Narasimhudu</h1>
      <p className={styles.description}>I'm a front-end developer. Reach out if you'd like learn more!</p>
      <a href="mailto:pnarasimhudu24@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl('hero/my-photo.jpg')} alt="Hero image of me" className={styles.heroImg} />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />

  </section>
}

export default Hero