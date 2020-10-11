import React from 'react';
import styles from './Main.module.scss';
import mainPhoto from '../../assets/photo_main.jpg'
import Particles from "react-particles-js";
import ReactTypingEffect from "react-typing-effect";

const particlesOpt = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 1000
            }
        }
    }
}

class Main extends React.Component {
    state = {
        photo: mainPhoto
    }
    render = () => {
        return (
            <div id='main' className={styles.main}>
                <Particles className={styles.particles} params={particlesOpt}/>
                <div className={styles.container}>
                    <div className={styles.greeting}>
                        <span>Здравствуйте!</span>
                        <span>Меня зовут <span>Евгений Турецков</span></span>
                        <ReactTypingEffect text='Я - Frontend разработчик'/>
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