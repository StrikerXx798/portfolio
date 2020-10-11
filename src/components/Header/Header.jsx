import React from 'react';
import styles from './Header.module.scss';
import NavMenu from './NavMenu/NavMenu.jsx'

class Header extends React.Component {
    render = () => {
        return (
            <div className={styles.header}>
                <div className={styles.container}>
                    <NavMenu />
                </div>
            </div>
        );
    }
}



export default Header;