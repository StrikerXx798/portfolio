import React from 'react';
import styles from './Skill.module.css';

class Skill extends React.Component {
    render = () => {
        return (
            <div className = {styles.skill}>
                <img className = {styles.icon} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt=""/>
                <span className = {styles.nameSkill}>React</span>
                <div className = {styles.descriptionSkill}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa debitis excepturi harum, libero modi nihil omnis quos sed sit soluta temporibus tenetur unde vitae.
                </div>
            </div>
        );
    }
}




export default Skill;