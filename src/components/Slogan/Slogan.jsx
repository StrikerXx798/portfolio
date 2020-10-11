import React from 'react';
import styles from './Slogan.module.scss';
import Button from "../../common/components/Button/Button";
import Title from "../../common/components/Title/Title";
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
                        <Title title={this.state.title}/>
                        <Button style={{position: 'static', transform: 'translate(0)'}} state={this.state} />
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Slogan;