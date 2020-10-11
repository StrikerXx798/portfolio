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
                    <img src={this.props.projectImg} alt=""/>
                </div>
                <Button state={this.state} ghPages={this.props.ghPages}/>
            </div>
            <span className={styles.projectTitle}>{this.props.title}</span>
            <div className={styles.description}>
                {this.props.description}
            </div>
        </div>
    );
}}


export default Project;