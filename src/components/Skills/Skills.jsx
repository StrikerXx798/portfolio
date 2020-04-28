import React from 'react';
import styles from './Skills.module.css';
import Skill from './Skill/Skill';

class Skills extends React.Component {
    state ={
        title: "Мои навыки"
    }

    render = () => {
        return (
            <div className = {styles.skills}>
                <div className={styles.container}>
                    <div className={styles.heading}>
                        <h2 className={styles.heading}>{this.state.title}</h2>
                        <div className={styles.line}/>
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
}



export default Skills;