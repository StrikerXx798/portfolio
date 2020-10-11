import React from 'react';
import styles from './Contacts.module.scss';
import Title from "../../common/components/Title/Title";
import Fade from 'react-reveal/Fade'

class Contacts extends React.Component {
    state = {
        title: "Контакты",
    }

    render = () => {
        return (
            <div id='contacts' className={styles.contacts}>
                <Fade left>
                    <div className={styles.container}>
                        <Title title={this.state.title}/>
                        <form className={styles.formWrapper}>
                            <input className={styles.formArea} placeholder="Имя" type="text"/>
                            <input className={styles.formArea} placeholder="E-Mail" type="text"/>
                            <textarea className={styles.messageArea} placeholder="Сообщение"/>
                            <button className={styles.submitButton} type="submit">Отправить</button>
                        </form>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Contacts;