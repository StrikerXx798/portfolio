import React from 'react';
import styles from './Contacts.module.css';
import Button from "../Button";
import BlockTitle from "../BlockTitle";
import Fade from 'react-reveal/Fade'

class Contacts extends React.Component {
    state = {
        title: "Контакты",
        buttonType: "submit",
        buttonTitle: "Отправить"
    }

    render = () => {
        return (
            <div className={styles.contacts}>
                <Fade bottom>
                    <div className={styles.container}>
                        <BlockTitle title={this.state.title}/>
                        <form className={styles.formWrapper}>
                            <input className={styles.formArea} placeholder="Имя" type=""/>
                            <input className={styles.formArea} placeholder="E-Mail" type="email"/>
                            <textarea className={styles.messageArea} placeholder="Сообщение"/>
                            <Button style={{position: 'static', transform: 'translate(0)'}} state={this.state} />
                        </form>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Contacts;