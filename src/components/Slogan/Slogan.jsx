import React from 'react';
import styles from './Slogan.module.css';
import Button from "../Button";

class Slogan extends React.Component {
    state = {
        buttonType: "button",
        buttonTitle: "Нанять меня"
    }

    render = () => {
        return (
            <div className={styles.slogan}>
                <div className={styles.container}>
                    <div className={styles.sloganText}>
                        <span>
                            Рассматриваю варианты для удаленной работы!
                        </span>
                    </div>
                    <Button state={this.state} />
                </div>
            </div>
        );
    }
}

export default Slogan;