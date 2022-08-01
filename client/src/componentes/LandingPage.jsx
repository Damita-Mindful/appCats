import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/LandingPage.module.css'


export default function LandingPage() {
    return (
        <div className={styles.landingpage}>    
        <div className={styles.bkg}> 
        <div className={styles.containerAll}>
            <div className={styles.container}>
            <h1><span>T</span><span>H</span><span>E</span><span> </span><span>C</span><span>A</span><span>T</span><span> </span><span>M</span><span>U</span><span>S</span><span>E</span><span>U</span><span>M</span></h1>
            <div className={styles.buttonPosition}>
            <Link to = '/home'>
                <button className={styles.button}></button>
            </Link>
            </div> 
            </div>
            </div>     
            </div> 
        </div>
    )
}