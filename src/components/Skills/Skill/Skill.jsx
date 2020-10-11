import React from 'react';
import styles from './Skill.module.css';


class Skill extends React.Component {
    render = () => {
        return (
            <div className = {styles.skill}>
                <div className={styles.icon}>
                    <img src={this.props.icon} alt=""/>
                </div>
                <h3 className = {styles.skillTitle}>{this.props.title}</h3>
                <div className = {styles.descriptionSkill}>
                    {this.props.description}
                </div>
            </div>
        );
    }
}




export default Skill;