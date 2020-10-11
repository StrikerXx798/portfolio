import React from 'react';
import styles from './NavMenu.module.scss';


class NavMenu extends React.Component {

    render = () => {
    return (
        <div className={styles.navMenu}>
            <a href="" className={styles.link}>Главная</a>
            <a href="" className={styles.link}>Навыки</a>
            <a href="" className={styles.link}>Проекты</a>
            <a href="" className={styles.link}>Контакты</a>
        </div>
    );
}}



export default NavMenu;