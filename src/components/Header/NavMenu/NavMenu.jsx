import React from 'react';
import styles from './NavMenu.module.scss';
import {Link, animateScroll as scroll} from "react-scroll"

class NavMenu extends React.Component {
    render = () => {
        return (
            <div className={styles.navMenu}>
                <Link activeClass={styles.active} spy={true} smooth={true} offse={1} duraton={500} to="main" className={styles.link}>Главная</Link>
                <Link activeClass={styles.active} spy={true} smooth={true} offse={1} duraton={500} to="skills" className={styles.link}>Навыки</Link>
                <Link activeClass={styles.active} spy={true} smooth={true} offse={1} duraton={500} to="projects" className={styles.link}>Проекты</Link>
                <Link activeClass={styles.active} spy={true} smooth={true} offse={1} duraton={500} to="contacts" className={styles.link}>Контакты</Link>
            </div>
        );
    }
}


export default NavMenu;