import React from 'react';
import styles from './Contacts.module.scss';
import Button from "../../common/components/Button/Button";
import Title from "../../common/components/Title/Title";
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
                        <Title title={this.state.title}/>
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