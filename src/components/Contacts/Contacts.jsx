import React from 'react';
import styles from './Contacts.module.css';


const Contacts = (props) => {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <div className={styles.contactForm}>
                    <div className={styles.heading}>
                        <span>
                            My contacts
                        </span>
                    </div>
                    <form className={styles.inputForm}>
                        <input placeholder="Your Name" type="text"/>
                        <input placeholder="Your E-Mail" type="text"/>
                        <textarea placeholder="Write your comment..."></textarea>
                    </form>
                    <div className={styles.submitButton}>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Contacts;