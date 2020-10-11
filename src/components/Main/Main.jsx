import React from 'react';
import styles from './Main.module.scss';
import mainPhoto from '../../assets/photo_main.jpg'

class Main extends React.Component {
    state = {
        photo: mainPhoto
    }
    render = () => {
        return (
            <div className = {styles.main}>
                <div className={styles.container}>
                    <div className={styles.greeting}>
                        <span>Здравствуйте!</span>
                        <span>Меня зовут <span>Евгений Турецков</span></span>
                        <h1>Я front-end разработчик</h1>
                    </div>
                    <div className={styles.photo}>
                        <div className={styles.image}>
                            <img className={styles.mainPhoto} src={this.state.photo} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;