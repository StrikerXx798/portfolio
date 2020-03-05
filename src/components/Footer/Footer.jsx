import React from 'react';
import styles from './Footer.module.css';


const Footer = (props) => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.heading}>
                      <span>
                          Evgeny Turetskov
                      </span>
                </div>
                <div className={styles.messengers}>
                      <div className={styles.messenger}></div>
                      <div className={styles.messenger}></div>
                      <div className={styles.messenger}></div>
                      <div className={styles.messenger}></div>
                </div>
                <div className={styles.rights}>
                    <span>
                        © 2020 All rights reserved
                    </span>
                </div>
            </div>
        </div>
    );
}


export default Footer;