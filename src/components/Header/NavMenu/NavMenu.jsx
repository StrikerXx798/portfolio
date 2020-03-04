import React from 'react';
import styles from './NavMenu.module.css';


const NavMenu = (props) => {
    return (
        <div className={styles.navMenu}>
            <a href="" className={styles.link}>Main</a>
            <a href="" className={styles.link}>Skills</a>
            <a href="" className={styles.link}>Projects</a>
            <a href="" className={styles.link}>Contacts</a>
        </div>
    );
}


export default NavMenu;