import React from 'react';
import styles from './Slogan.module.css';
import Button from "../Button";
import BlockTitle from "../BlockTitle";

class Slogan extends React.Component {
    state = {
        title: "Рассматриваю варианты для удаленной работы",
        buttonType: "button",
        buttonTitle: "Нанять меня"
    }

    render = () => {
        return (
            <div className={styles.slogan}>
                <div className={styles.container}>
                    <BlockTitle title={this.state.title}/>
                    <Button state={this.state} />
                </div>
            </div>
        );
    }
}

export default Slogan;