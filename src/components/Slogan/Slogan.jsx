import React from 'react';
import styles from './Slogan.module.css';
import Button from "../Button";
import BlockTitle from "../BlockTitle";
import Fade from 'react-reveal/Fade'

class Slogan extends React.Component {
    state = {
        title: "Рассматриваю варианты для удаленной работы",
        buttonType: "button",
        buttonTitle: "Нанять меня"
    }

    render = () => {
        return (
            <div className={styles.slogan}>
                <Fade bottom>
                    <div className={styles.container}>
                        <BlockTitle title={this.state.title}/>
                        <Button style={{position: 'static', transform: 'translate(0)'}} state={this.state} />
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Slogan;