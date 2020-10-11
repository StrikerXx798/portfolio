import React from 'react';
import styles from './Project.module.scss';
import Button from "../../../common/components/Button/Button";
import Fade from 'react-reveal/Fade'

class Project extends React.Component {
    state ={
        buttonTitle: "Смотреть",
    }

    render = () => {
    return (
        <div className = {styles.project}>
            <Fade right>
                <div className={styles.imgBlock}>
                    <div className={styles.projectImg}>
                        <img src={this.props.projectImg} alt=""/>
                    </div>
                    <Button style={{position: 'static', transform: 'translate(75%, -500%)'}} state={this.state} ghPages={this.props.ghPages}/>
                </div>
                <span className={styles.projectTitle}>{this.props.title}</span>
                <div className={styles.description}>
                    {this.props.description}
                </div>
            </Fade>
        </div>
    );
}}


export default Project;