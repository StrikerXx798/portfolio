import React from 'react';
import styles from './Project.module.css';
import Button from "../../Button";

class Project extends React.Component {
    state ={
        title: "To-Do-List",
        buttonType:"button",
        buttonTitle: "Смотреть"
    }

    render = () => {
    return (
        <div className = {styles.project}>
            <div className = {styles.projectImg}>
                <Button state={this.state} />
            </div>
            <div className = {styles.descriptionProject}>
                <span>
                    {this.state.title}
                </span>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, fugit illo laborum repellat sit ut.
                </div>
            </div>
        </div>
    );
}}



export default Project;