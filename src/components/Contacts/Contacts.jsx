import React from 'react';
import styles from './Contacts.module.css';
import Button from "../Button";
import BlockTitle from "../BlockTitle";

class Contacts extends React.Component {
    state ={
        title: "Контакты",
        buttonType:"submit",
        buttonTitle: "Отправить"
    }

    render = () => {
        return (
            <div className={styles.contacts}>
                <div className={styles.container}>
                    <BlockTitle title={this.state.title}/>
                    <form className={styles.formWrapper}>
                        <input className={styles.formArea} placeholder="Имя" type=""/>
                        <input className={styles.formArea} placeholder="E-Mail" type="email"/>
                        <textarea className={styles.messageArea} placeholder="Сообщение"/>
                        <Button state={this.state} />
                    </form>
                </div>
            </div>
        );
    }
}



export default Contacts;