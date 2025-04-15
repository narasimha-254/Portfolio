import React from 'react'
import aboutImage from '/Users/NEW/Documents/Projects/myportfolio/assets/about/aboutImage.png'
import cursorIcon from '/Users/NEW/Documents/Projects/myportfolio/assets/about/cursorIcon.png'
import serverIcon from '/Users/NEW/Documents/Projects/myportfolio/assets/about/serverIcon.png'
import uiIcon from '/Users/NEW/Documents/Projects/myportfolio/assets/about/uiIcon.png'

import styles from './About.module.css'


const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={aboutImage} alt="Me sitting with a laptop" className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={cursorIcon} alt="CursorIcon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={serverIcon} alt="ServerIcon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I have experience developing fast and optimised back-end systems and APIs</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={uiIcon} alt="UIIcon" />
                        <div className={styles.aboutItemText}>
                            <h3>UI Desginer</h3>
                            <p>I have designed multiple landing pages and have created design systems as well</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About