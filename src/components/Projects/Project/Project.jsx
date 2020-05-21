import React from 'react';
import styles from './Project.module.css';
import Button from "../../Button";
import htmlIcon from "../../../assets/untitled(7).svg";
import cssIcon from "../../../assets/untitled(8).svg";
import jsIcon from "../../../assets/untitled(9).svg";
import reactIcon from "../../../assets/untitled(5).svg";
import reduxIcon from "../../../assets/untitled(10).svg";
import tsIcon from "../../../assets/untitled(3).svg";

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