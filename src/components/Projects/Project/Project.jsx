import React from 'react';
import styles from './Project.module.css';
import Button from "../../Button";

class Project extends React.Component {
    state ={
        buttonType:"button",
        buttonTitle: "Смотреть",
    }

    render = () => {
    return (
        <div className = {styles.project}>
            <div className={styles.imgBlock}>
                <div className={styles.projectImg}>

                </div>
                <Button state={this.state}/>
            </div>
            <span className={styles.projectTitle}>{this.props.title}</span>
            <div className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, omnis.
            </div>
        </div>
    );
}}


export default Project;