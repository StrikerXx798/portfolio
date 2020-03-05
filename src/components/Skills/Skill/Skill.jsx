import React from 'react';
import styles from './Skill.module.css';


const Skill = (props) => {
    return (
        <div className = {styles.skill}>
            <div className = {styles.icon}>
                <img src="" alt=""/>
            </div>
            <div className = {styles.nameSkill}>
                <span>React</span>
            </div>
            <div className = {styles.descriptionSkill}>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa debitis excepturi harum, libero modi nihil omnis quos sed sit soluta temporibus tenetur unde vitae.
                </div>
            </div>
        </div>
    );
}


export default Skill;