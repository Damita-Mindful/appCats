import React from 'react';
import styles from '../styles/Cat.module.css'

export default function Cat({ name, image, temperament, origin, dogFriendly}) {
    return (
        <div className={styles.box}>
            <h3 className={styles.breed}>{ name }</h3>
            <img className={styles.image} src = { image } alt = "img not found" height='200px' width='180px' />
            <div>
            {/* <h5 className={styles.temps}>{ temperament }</h5>
            <p className={styles.origin}>Origin: { origin }</p>
            <p className={styles.friendly}>Dog Friendly: { dogFriendly }</p> */}
            </div> 
        </div>
    )
}