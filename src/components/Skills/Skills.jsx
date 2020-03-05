import React from 'react';
import styles from './Skills.module.css';
import Skill from './Skill/Skill';

const Skills = (props) => {
    return (
        <div className = {styles.skills}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <span>My Skills</span>
                </div>
                <div className={styles.skillSet}>
                    <Skill />
                    <Skill />
                    <Skill />
                </div>
            </div>
        </div>
    );
}


export default Skills;