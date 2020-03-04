import React from 'react';
import styles from './Skills.module.css';


const Skills = (props) => {
    return (
        <div className = {styles.skills}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <span>My Skills</span>
                    <hr/>
                </div>
                <div className={styles.skillSet}>
                    <div className={styles.skill}>

                    </div>
                    <div className={styles.skill}>

                    </div>
                    <div className={styles.skill}>

                    </div>
                </div>
            </div>
        </div>
    );
}


export default Skills;