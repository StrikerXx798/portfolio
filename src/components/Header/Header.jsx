import React from 'react';
import styles from './Header.module.css';
import NavMenu from './NavMenu/NavMenu.jsx'


const Header = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <NavMenu />
            </div>
        </div>
    );
}


export default Header;