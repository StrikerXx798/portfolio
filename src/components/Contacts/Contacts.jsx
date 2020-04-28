import React from 'react';
import styles from './Contacts.module.css';
import Button from "../Button";

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
                    <span className={styles.heading}>{this.state.title}</span>
                    <form className={styles.formWrapper}>
                        <input placeholder="Your Name" type=""/>
                        <input placeholder="Your E-Mail" type="email"/>
                        <textarea placeholder="Write your comment..."/>
                        <Button state={this.state} />
                    </form>
                </div>
            </div>
        );
    }
}



export default Contacts;