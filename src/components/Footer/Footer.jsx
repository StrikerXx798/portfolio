import React from 'react';
import styles from './Footer.module.css';

class Footer extends React.Component {
    render = () => {
        return (
            <div className={styles.footer}>
                <div className={styles.container}>
                <span className={styles.heading}>
                    Evgeny Turetskov
                </span>
                    <div className={styles.messengers}>
                        <div className={styles.messenger}></div>
                        <div className={styles.messenger}></div>
                        <div className={styles.messenger}></div>
                        <div className={styles.messenger}></div>
                    </div>
                    <span className={styles.rights}>
                    © 2020 All rights reserved
                </span>
                </div>
            </div>
        );
    }
}



export default Footer;