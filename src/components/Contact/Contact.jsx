import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'
const Contact = () => {
    return (
        <footer id='contact' className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/emailIcon.png')} alt="Email icon" />
                    <a href="mailto:pnarasimhudu24@gmail.com">pnarasimhudu24@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/linkedinIcon.png')} alt="LinkedIn icon" />
                    <a href="https://www.linkedin.com/in/nara-simha-1038a7194/">Linkedin.com/Parampogu Narasimhudu</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/githubIcon.png')} alt="Github icon" />
                    <a href="https://www.github.com/narasimha-254">github.com/narasimha-254</a>
                </li>
            </ul>
        </footer>
    )
}

export default Contact;