import React from 'react';
import styles from './Main.module.css';

class Main extends React.Component {
    render = () => {
        return (
            <div className = {styles.main}>
                <div className={styles.container}>
                    <div className={styles.greeting}>
                        <span>Привет!</span>
                        <span>Я <span>Евгений Турецков</span></span>
                        <h1>Я front-end разработчик</h1>
                    </div>
                    <div className={styles.photo}>
                        <div className={styles.image}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;